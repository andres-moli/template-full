"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const users_service_1 = require("../services/users.service");
const user_entity_1 = require("../entities/user.entity");
const code_confirmation_input_1 = require("../dto/inputs/code-confirmation.input");
const recover_password_input_1 = require("../dto/inputs/recover-password.input");
const update_password_input_1 = require("../dto/inputs/update-password.input");
const add_and_remove_role_input_1 = require("../dto/inputs/add-and-remove-role.input");
const users_functionalities_1 = require("../users.functionalities");
const update_user_information_input_1 = require("../dto/inputs/update-user-information.input");
const update_user_password_input_1 = require("../dto/inputs/update-user-password.input");
const double_verification_input_1 = require("../dto/inputs/double-verification.input");
const code_recover_password_input_1 = require("../dto/inputs/code-recover-password.input");
const crud_utils_1 = require("../../auth/utils/crud.utils");
const user_types_decorator_1 = require("../../auth/decorators/user-types.decorator");
const functionality_decorator_1 = require("../../auth/decorators/functionality.decorator");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
const role_fx_entity_1 = require("../../roles/entities/role-fx.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...users_service_1.serviceStructure,
    serviceType: users_service_1.UsersService,
    create: { name: 'createUser', decorators: [user_types_decorator_1.AnyUser] },
    update: { name: 'updateUser', decorators: [user_types_decorator_1.AnyUser] },
    remove: { name: 'removeUser', decorators: [user_types_decorator_1.AnyUser] },
    findOne: { name: 'user', decorators: [user_types_decorator_1.AnyUser] },
    findAll: { name: 'users', decorators: [user_types_decorator_1.AnyUser] },
});
let UsersResolver = class UsersResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
    resetSuperAdmin(context) {
        return this.service.resetSuperAdmin(context);
    }
    codeConfirmation(context, codeConfirmationInput) {
        return this.service.codeConfirmation(context, codeConfirmationInput);
    }
    recoverPassword(context, recoverPasswordInput) {
        return this.service.recoverPassword(context, recoverPasswordInput);
    }
    updatePassword(context, updatePasswordInput) {
        return this.service.updatePassword(context, updatePasswordInput);
    }
    addUserRole(context, addAndRemoveRoleInput) {
        return this.service.addUserRole(context, addAndRemoveRoleInput);
    }
    removeUserRole(context, addAndRemoveRoleInput) {
        return this.service.removeUserRole(context, addAndRemoveRoleInput);
    }
    updateUserInformation(context, updateUserInformationInput) {
        return this.service.updateUserInformation(context, updateUserInformationInput);
    }
    updateUserPassword(context, updateUserPasswordInput) {
        return this.service.updateUserPassword(context, updateUserPasswordInput);
    }
    async enableAndDisableDoubleVerification(context, doubleVerificationInput) {
        return this.service.enableAndDisableDoubleVerification(context, doubleVerificationInput);
    }
    codeRecoverPassword(context, codeRecoverPasswordInput) {
        return this.service.codeRecoverPassword(context, codeRecoverPasswordInput);
    }
    userRoles(user, context) {
        return this.service.userRoles(context, user);
    }
    userRolesFx(user, context) {
        return this.service.userRolesFx(context, user);
    }
    fullName(user, context) {
        return this.service.fullName(context, user);
    }
    isActivityNow(user, context) {
        return this.service.findActivityNowUser(context, user.id);
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    (0, public_decorator_1.Public)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "resetSuperAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User, { name: "codeConfirmation" }),
    (0, public_decorator_1.Public)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, code_confirmation_input_1.CodeConfirmationInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "codeConfirmation", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: "recoverPassword" }),
    (0, public_decorator_1.Public)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('recoverPasswordInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, recover_password_input_1.RecoverPasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "recoverPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User, { name: "updatePassword" }),
    (0, public_decorator_1.Public)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('updatePasswordInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_password_input_1.UpdatePasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updatePassword", null);
__decorate([
    (0, functionality_decorator_1.FunctionalityResolver)(users_functionalities_1.FunctionalityKeys.ADD),
    (0, graphql_1.Mutation)(() => user_entity_1.User, { name: "addUserRole" }),
    (0, user_types_decorator_1.AdminOnly)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('addAndRemoveRoleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_and_remove_role_input_1.AddAndRemoveRoleInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "addUserRole", null);
__decorate([
    (0, functionality_decorator_1.FunctionalityResolver)(users_functionalities_1.FunctionalityKeys.REMOVE),
    (0, graphql_1.Mutation)(() => user_entity_1.User, { name: "removeUserRole" }),
    (0, user_types_decorator_1.AdminOnly)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('addAndRemoveRoleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_and_remove_role_input_1.AddAndRemoveRoleInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "removeUserRole", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User, { name: 'updateUserInformation' }),
    (0, user_types_decorator_1.AnyUser)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('updateUserInformationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_information_input_1.UpdateUserInformationInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUserInformation", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User, { name: 'updateUserPassword' }),
    (0, user_types_decorator_1.AnyUser)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('updateUserPasswordInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_password_input_1.UpdateUserPasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUserPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: 'enableAndDisableDoubleVerification' }),
    (0, user_types_decorator_1.AnyUser)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('doubleVerificationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, double_verification_input_1.DoubleVerificationInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "enableAndDisableDoubleVerification", null);
__decorate([
    (0, graphql_1.Query)(() => String, { name: "codeRecoverPassword" }),
    (0, public_decorator_1.Public)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)('codeRecoverPasswordInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, code_recover_password_input_1.CodeRecoverPasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "codeRecoverPassword", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [role_entity_1.Role], { name: "userRoles" }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "userRoles", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [role_fx_entity_1.RoleFx], { name: "userRolesFx" }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "userRolesFx", null);
__decorate([
    (0, graphql_1.ResolveField)(() => String, { name: "fullName" }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "fullName", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Boolean, { name: "isActivityNow" }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "isActivityNow", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_entity_1.User)
], UsersResolver);
//# sourceMappingURL=users.resolver.js.map