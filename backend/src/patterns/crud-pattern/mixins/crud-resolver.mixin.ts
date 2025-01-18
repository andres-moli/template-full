import { Inject, ParseUUIDPipe, PipeTransform, Type, mixin } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeepPartial } from 'typeorm';
import { IContext } from '../interfaces/context.interface';
import { Constructable } from '../types/constructable.type';
import { ICrudService } from '../interfaces/crud-service.interface';
import { CurrentContext } from '../decorators/current-context.decorator';
import {
  ICrudResolverClassStructure,
  ICrudResolverStructure,
} from '../interfaces/structures/crud-resolver-structure.inteface';
import {
  applyClassDecorators,
  applyMethodDecorators,
} from '../utils/decorators.utils';
import { IFindArgs } from '../interfaces/find-args.interface';
import { IDataEntity } from '../interfaces/data-entity.interface';
import { DefaultArgs } from '../classes/args/default.args';
import { MetadataPagination } from '../classes/args/metadata-pagination.args';

export function CrudResolverFrom<
  PrimaryKeyType,
  EntityType extends IDataEntity<PrimaryKeyType>,
  CreateInputType extends DeepPartial<EntityType>,
  UpdateInputType extends DeepPartial<EntityType>,
  ServiceType extends ICrudService<
    PrimaryKeyType,
    EntityType,
    CreateInputType,
    UpdateInputType,
    FindArgsType,
    ContextType
  >,
  FindArgsType extends IFindArgs = DefaultArgs,
  ContextType extends IContext = IContext,
>(
  structure: ICrudResolverStructure<
    PrimaryKeyType,
    EntityType,
    CreateInputType,
    UpdateInputType,
    ServiceType,
    FindArgsType,
    ContextType
  >,
) {
  const {
    entityType,
    createInputType,
    updateInputType,
    serviceType,
    contextType,
    findArgsType,
  } = structure;

  return CrudResolver(
    entityType,
    createInputType,
    updateInputType,
    serviceType,
    structure,
    findArgsType,
    contextType,
  );
}

export function CrudResolver<
  PrimaryKeyType,
  EntityType extends IDataEntity<PrimaryKeyType>,
  CreateInputType extends DeepPartial<EntityType>,
  UpdateInputType extends DeepPartial<EntityType>,
  ServiceType extends ICrudService<
    PrimaryKeyType,
    EntityType,
    CreateInputType,
    UpdateInputType,
    FindArgsType,
    ContextType
  >,
  FindArgsType extends IFindArgs = DefaultArgs,
  ContextType extends IContext = IContext,
>(
  entityType: Constructable<EntityType>,
  createInputType: Constructable<CreateInputType>,
  updateInputType: Constructable<UpdateInputType>,
  serviceType: Constructable<ServiceType>,
  resolverStructure: ICrudResolverClassStructure<PrimaryKeyType>,
  findArgsType: Constructable<FindArgsType>,
  contextType?: Constructable<ContextType>,
) {

  const ContextDecorator =
    resolverStructure.parameterDecorators?.currentContext ?? CurrentContext;

  const argsType = findArgsType ?? DefaultArgs;

  let countQueryName = resolverStructure.count?.name;
  let countDecorators = resolverStructure.count?.decorators;

  if (!resolverStructure.count && resolverStructure.findAll) {
    countQueryName = resolverStructure.findAll.name + 'Count';
    countDecorators = resolverStructure.findAll.decorators;
  }


  let primaryKeyType:any = ID;
  let pipeTransforms:Type<PipeTransform>[] = [ParseUUIDPipe];

  if(resolverStructure.primaryKey)
  {
    primaryKeyType = resolverStructure?.primaryKey?.type;
    pipeTransforms = resolverStructure?.primaryKey?.pipeTransforms ?? [];
  }

  @Resolver((of) => entityType)
  @applyClassDecorators(resolverStructure.classDecorators)
  class CrudResolver {
    constructor(@Inject(serviceType) readonly service: ServiceType) {}

    @Mutation(() => entityType, { name: resolverStructure.create?.name })
    @applyMethodDecorators(resolverStructure.create?.decorators)
    public async create(
      @Args({ type: () => createInputType, name: 'createInput' }) createInput: CreateInputType,
      @ContextDecorator() context: ContextType,
    ): Promise<EntityType> {
      return this.service.create(context, createInput);
    }

    @Mutation((returns) => entityType, { name: resolverStructure.update?.name })
    @applyMethodDecorators(resolverStructure.update?.decorators)
    update(
      @Args({ type: () => updateInputType, name: 'updateInput' }) updateInput: UpdateInputType,
      @ContextDecorator() context: ContextType,
    ) {
      return this.service.update(context, updateInput.id as PrimaryKeyType, updateInput);
    }

    @Mutation((returns) => entityType, { name: resolverStructure.remove?.name })
    @applyMethodDecorators(resolverStructure.remove?.decorators)
    remove(
      @Args('id', { type: () => primaryKeyType }, ...pipeTransforms) id: PrimaryKeyType,
      @ContextDecorator() context: ContextType,
    ) {
      return this.service.remove(context, id);
    }

    @Query((returns) => entityType, { name: resolverStructure.findOne?.name })
    @applyMethodDecorators(resolverStructure.findOne?.decorators)
    findOne(
      @Args('id', { type: () => primaryKeyType }, ...pipeTransforms) id: PrimaryKeyType,
      @ContextDecorator() context: ContextType,
    ) {
      return this.service.findOne(context, id);
    }

    @Query((returns) => [entityType], { name: resolverStructure.findAll?.name })
    @applyMethodDecorators(resolverStructure.findAll?.decorators)
    findAll(
      @ContextDecorator() context: ContextType,
      @Args(undefined, { type: () => argsType }) args,
    ) {
      return this.service.findAll(context, args);
    }

    @Query((returns) => entityType, { name: resolverStructure.findOneArg?.name, nullable:true })
    @applyMethodDecorators(resolverStructure.findAll?.decorators)
    findOneArg(
      @ContextDecorator() context: ContextType,
      @Args(undefined, { type: () => argsType }) args,
    ) {
      return this.service.findOneArg(context, args);
    }

    @Query(() =>  MetadataPagination, { name: countQueryName })
    @applyMethodDecorators(countDecorators)
    Count(
      @ContextDecorator() context: ContextType,
      @Args(undefined, { type: () => argsType }) args,
    ) {
      return this.service.Count(context, args);
    }
  }

  return mixin(CrudResolver);
}
