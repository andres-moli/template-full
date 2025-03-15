import { Repository, SelectQueryBuilder } from "typeorm";
import { Constructable } from "../types/constructable.type";
import { IFindArgs } from "../interfaces/find-args.interface";
import { DefaultArgs } from "../classes/args/default.args";
import { IDataEntity } from "../interfaces/data-entity.interface";
export declare function QueryBuilderHelper<PrimaryKeyType, EntityType extends IDataEntity<PrimaryKeyType>, FindArgsType extends IFindArgs = DefaultArgs>(entityType: Constructable<EntityType>, argsType: Constructable<FindArgsType>): {
    new (): {};
    getQueryBuilder(repository: Repository<EntityType>, args?: FindArgsType): SelectQueryBuilder<EntityType>;
    applyArgs(queryBuilder: SelectQueryBuilder<EntityType>, args: FindArgsType): void;
    applyOrderBy(queryBuilder: SelectQueryBuilder<EntityType>, orderBy: any[]): void;
    getWhereCondition(whereContext: any, where: object): any;
    relationCondition(whereContext: any, relationName: string, condition: object): any;
    addRelation(whereContext: any, relationName: string): string;
    hasFieldConditions(fieldName: string, value: object): boolean;
    getFieldConditions(whereContext: any, fieldName: string, fieldCondition: object): any;
    getComplexConditions(whereContext: any, conditions: any): any;
};
