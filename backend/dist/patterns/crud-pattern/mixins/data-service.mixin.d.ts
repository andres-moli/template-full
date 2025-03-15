import { Type } from '@nestjs/common';
import { Constructable } from '../types/constructable.type';
import { IContext } from '../interfaces/context.interface';
import { IDataEntity } from '../interfaces/data-entity.interface';
import { IDataService } from '../interfaces/data-service.interface';
import { IFindArgs } from '../interfaces/find-args.interface';
import { DefaultArgs } from '../classes/args/default.args';
import { MetadataPagination } from '../classes/args/metadata-pagination.args';
export declare function DataService<PrimaryKeyType, EntityType extends IDataEntity<PrimaryKeyType>, FindArgsType extends IFindArgs = DefaultArgs, ContextType extends IContext = IContext, MetadataPaginationType extends MetadataPagination = MetadataPagination>(entityType: Constructable<EntityType>, findArgsType?: Constructable<FindArgsType>, contextType?: Constructable<ContextType>): Type<IDataService<PrimaryKeyType, EntityType, FindArgsType, ContextType>>;
