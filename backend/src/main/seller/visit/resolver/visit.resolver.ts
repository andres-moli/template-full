import { Args, Float, Mutation, Query, Resolver, ID, ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { CrudResolverStructure } from 'src/security/auth/utils/crud.utils';
import { AnyUser } from 'src/security/auth/decorators/user-types.decorator';
import { CrudResolverFrom } from 'src/patterns/crud-pattern/mixins/crud-resolver.mixin';
import { VisitService, serviceStructure } from '../services/visit.service';
import { Visit } from '../entities/visit.entity';
import { Public } from 'src/security/auth/decorators/public.decorator';
import { CurrentContext } from 'src/patterns/crud-pattern/decorators/current-context.decorator';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { VisitDashboardModel } from '../dto/models/visit.model';
import { UpdateStatusInput } from '../dto/inputs/update-status-visit.dto';
import { User } from 'src/security/users/entities/user.entity';
import { PubSub } from 'graphql-subscriptions';

export const resolverStructure = CrudResolverStructure({
      ...serviceStructure,
      serviceType:VisitService,
      //if you want to disable any crud method just comment one of the following lines
      create:{ 
            name:"createVisit",
            decorators:[AnyUser],
      },
      update:{ 
            name:"updateVisit",
            decorators:[AnyUser],
      },
      remove:{ 
            name:"removeVisit",
            decorators:[AnyUser],
      },
      findOne: { 
            name:"visit",
            decorators:[AnyUser], 
      },
      findAll: { 
            name: "visits" ,
            decorators:[AnyUser], 
      },
      findOneArg: {
            name: "visitFindOneArg",
            decorators:[AnyUser]
      },
      //Class Decorators
      classDecorators:[
          //not needed because its used by default  
          //  () => UseGuards(SecurityAuthGuard)
      ]
})


@Resolver((of) => Visit)
export class VisitResolver extends CrudResolverFrom(resolverStructure) {
      @AnyUser()
      @Query(() => VisitDashboardModel, {name: 'findAllVisitDashboard'})
      findAllVisitDashboard(
            @CurrentContext() context: IContext,
      ){
            return this.service.findAllVisitDashboard(context)
      }
      @AnyUser()
      @Mutation(() => Visit, {name: 'finishVisit'})
      finishVisit(
            @CurrentContext() context: IContext,
            @Args("UpdateStatusInput") updateStatusInput: UpdateStatusInput
      ){
            return this.service.finishVisit(context, updateStatusInput)

      }
      @AnyUser()
      @Query(() => Float)
      async getHoursByVisit(@Args('id', { type: () => ID }) id: string,): Promise<number> {
        return await this.service.getVisitWithTotalHours(id);
      }

}
