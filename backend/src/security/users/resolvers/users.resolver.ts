import { Resolver, Mutation, Args, ResolveField, Parent, Query } from '@nestjs/graphql';
import { Public } from '../../auth/decorators/public.decorator';
import { UsersService, serviceStructure } from '../services/users.service';
import { User } from '../entities/user.entity';
import { CodeConfirmationInput } from '../dto/inputs/code-confirmation.input';
import { RecoverPasswordInput } from '../dto/inputs/recover-password.input';
import { UpdatePasswordInput } from '../dto/inputs/update-password.input';
import { AddAndRemoveRoleInput } from '../dto/inputs/add-and-remove-role.input';
import { FunctionalityKeys } from "../users.functionalities";
import { UpdateUserInformationInput } from '../dto/inputs/update-user-information.input';
import { UpdateUserPasswordInput } from '../dto/inputs/update-user-password.input';
import { DoubleVerificationInput } from '../dto/inputs/double-verification.input';
import { CodeRecoverPasswordInput } from '../dto/inputs/code-recover-password.input';
import { CrudResolverStructure } from '../../auth/utils/crud.utils';
import { AdminOnly, AnyUser } from '../../auth/decorators/user-types.decorator';
import { Functionality, FunctionalityResolver } from '../../auth/decorators/functionality.decorator';
import { CrudResolverFrom } from '../../../patterns/crud-pattern/mixins/crud-resolver.mixin';
import { CurrentContext } from '../../../patterns/crud-pattern/decorators/current-context.decorator';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
import { RoleFx } from '../../roles/entities/role-fx.entity';
import { Role } from '../../roles/entities/role.entity';

const resolverStructure = CrudResolverStructure({
  ...serviceStructure,
  serviceType:UsersService,
  create:{ name:'createUser', decorators:[AnyUser] },
  update:{ name:'updateUser', decorators:[AnyUser] },
  remove:{ name:'removeUser', decorators:[AnyUser] },
  findOne:{ name:'user', decorators:[AnyUser] },
  findAll:{ name:'users', decorators:[AnyUser] },
})

@Resolver((of) => User)
export class UsersResolver extends CrudResolverFrom(resolverStructure) {

  @Mutation(() => User)
  @Public()
  resetSuperAdmin(
    @CurrentContext() context:IContext
  ) {
    return this.service.resetSuperAdmin(context);
  }

  @Mutation(() => User, {name: "codeConfirmation"})
  @Public()
  codeConfirmation(
    @CurrentContext() context:IContext,
    @Args('createInput') codeConfirmationInput: CodeConfirmationInput
  ): Promise<User> {
    return this.service.codeConfirmation(context, codeConfirmationInput);
  }

  @Mutation(() => String, {name: "recoverPassword"})
  @Public()
  recoverPassword(
    @CurrentContext() context:IContext,
    @Args('recoverPasswordInput') recoverPasswordInput: RecoverPasswordInput
  ): Promise<string> {
    return this.service.recoverPassword(context, recoverPasswordInput);
  }

  @Mutation(() => User, {name: "updatePassword"})
  @Public()
  updatePassword(
    @CurrentContext() context:IContext,
    @Args('updatePasswordInput') updatePasswordInput: UpdatePasswordInput
  ): Promise<User> {
    return this.service.updatePassword(context, updatePasswordInput);
  }

  @FunctionalityResolver(FunctionalityKeys.ADD)
  @Mutation(() => User, {name: "addUserRole"})
  @AdminOnly()
  addUserRole(
    @CurrentContext() context:IContext,
    @Args('addAndRemoveRoleInput') addAndRemoveRoleInput: AddAndRemoveRoleInput
  ): Promise<User> {
    return this.service.addUserRole(context, addAndRemoveRoleInput);
  }
  
  @FunctionalityResolver(FunctionalityKeys.REMOVE)
  @Mutation(() => User, {name: "removeUserRole"})
  @AdminOnly()
  removeUserRole(
    @CurrentContext() context:IContext,
    @Args('addAndRemoveRoleInput') addAndRemoveRoleInput: AddAndRemoveRoleInput
  ): Promise<User> {
    return this.service.removeUserRole(context, addAndRemoveRoleInput);
  }

  @Mutation( () => User, {name: 'updateUserInformation'})
  @AnyUser()
  updateUserInformation(
    @CurrentContext() context:IContext,
    @Args('updateUserInformationInput') updateUserInformationInput: UpdateUserInformationInput
  ): Promise<User> {
    return this.service.updateUserInformation(context, updateUserInformationInput);
  }

  @Mutation( () => User, {name: 'updateUserPassword'})
  @AnyUser()
  updateUserPassword(
    @CurrentContext() context:IContext,
    @Args('updateUserPasswordInput') updateUserPasswordInput: UpdateUserPasswordInput
  ): Promise<User> {
    return this.service.updateUserPassword(context, updateUserPasswordInput);
  }

  @Mutation( () => String ,{ name:'enableAndDisableDoubleVerification'})
  @AnyUser()
  async enableAndDisableDoubleVerification(
    @CurrentContext() context:IContext,
    @Args('doubleVerificationInput') doubleVerificationInput: DoubleVerificationInput
  ): Promise<string>
  {
    return this.service.enableAndDisableDoubleVerification(context, doubleVerificationInput);
  }

  @Query(() => String, {name: "codeRecoverPassword"})
  @Public()
  codeRecoverPassword(
    @CurrentContext() context:IContext,
    @Args('codeRecoverPasswordInput') codeRecoverPasswordInput: CodeRecoverPasswordInput
  ): Promise<string> {
    return this.service.codeRecoverPassword(context, codeRecoverPasswordInput);
  }

  @ResolveField(() => [Role], {name: "userRoles"})
  userRoles(
    @Parent() user: User,
    @CurrentContext() context:IContext,
    ): Promise<Role[]> {
    return this.service.userRoles(context, user);
  }

  @ResolveField(() => [RoleFx], {name: "userRolesFx"})
  userRolesFx(
    @Parent() user: User,
    @CurrentContext() context:IContext,
  ): Promise<RoleFx[]> {
    return this.service.userRolesFx(context, user);
  }

  @ResolveField(() => String, {name: "fullName"})
  fullName(
    @Parent() user: User,
    @CurrentContext() context:IContext,
    ): Promise<string> {
    return this.service.fullName(context, user);
  }
  @ResolveField(() => Boolean, {name: "isActivityNow"})
  isActivityNow(
  @Parent() user: User,
  @CurrentContext() context:IContext,
  ): Promise<boolean> {
  return this.service.findActivityNowUser(context, user.id);
  }
}
