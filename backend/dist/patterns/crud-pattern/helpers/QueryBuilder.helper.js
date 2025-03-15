"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilderHelper = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const conditions = {
    _eq: (value) => value,
    _neq: (value) => (0, typeorm_1.Not)(value),
    _gt: (value) => (0, typeorm_1.MoreThan)(value),
    _gte: (value) => (0, typeorm_1.MoreThanOrEqual)(value),
    _lt: (value) => (0, typeorm_1.LessThan)(value),
    _lte: (value) => (0, typeorm_1.LessThanOrEqual)(value),
    _in: (value) => (0, typeorm_1.In)(value),
    _between: (value) => (0, typeorm_1.Between)(value[0], value[1]),
    _notbetween: (value) => (0, typeorm_1.Not)((0, typeorm_1.Between)(value[0], value[1])),
    _startswith: (value) => (0, typeorm_1.ILike)(value + '%'),
    _notstartswith: (value) => (0, typeorm_1.Not)((0, typeorm_1.ILike)(value + '%')),
    _endswith: (value) => (0, typeorm_1.ILike)('%' + value),
    _notendswith: (value) => (0, typeorm_1.Not)((0, typeorm_1.ILike)('%' + value)),
    _contains: (value) => (0, typeorm_1.ILike)('%' + value + '%'),
    _notcontains: (value) => (0, typeorm_1.Not)((0, typeorm_1.ILike)('%' + value + '%')),
    _like: (value) => (0, typeorm_1.ILike)(value),
    _notlike: (value) => (0, typeorm_1.Not)((0, typeorm_1.ILike)(value)),
};
const conditionsKeys = Object.keys(conditions);
function fixBracketQueryBuilder(bracketQueryBuilder, queryBuilder) {
    bracketQueryBuilder.expressionMap.joinAttributes = [...queryBuilder.expressionMap.joinAttributes];
}
function QueryBuilderHelper(entityType, argsType) {
    class QueryBuilderHelper {
        static getQueryBuilder(repository, args) {
            const queryBuilder = repository.createQueryBuilder('aa');
            if (args)
                QueryBuilderHelper.applyArgs(queryBuilder, args);
            return queryBuilder;
        }
        static applyArgs(queryBuilder, args) {
            if (args.where) {
                const whereContext = {
                    queryBuilder,
                    alias: queryBuilder.alias,
                    relations: [],
                    constructField: (fieldName, value) => { return { [fieldName]: value }; }
                };
                queryBuilder.where(QueryBuilderHelper.getWhereCondition(whereContext, args.where));
            }
            if (args.orderBy)
                QueryBuilderHelper.applyOrderBy(queryBuilder, args.orderBy);
            if (args.pagination) {
                queryBuilder.offset(args.pagination.skip);
                queryBuilder.limit(args.pagination.take);
            }
        }
        static applyOrderBy(queryBuilder, orderBy) {
            orderBy.forEach((order) => {
                const keys = Object.keys(order);
                keys.forEach((key) => {
                    const value = order[key];
                    if (value)
                        queryBuilder.addOrderBy(queryBuilder.alias + '.' + key, value);
                });
            });
        }
        static getWhereCondition(whereContext, where) {
            const andConditions = [];
            const orConditions = [];
            const keys = Object.keys(where);
            keys.forEach((key) => {
                const value = where[key];
                switch (key) {
                    case '_and':
                        andConditions.push(...QueryBuilderHelper.getComplexConditions(whereContext, value));
                        break;
                    case '_or':
                        orConditions.push(...QueryBuilderHelper.getComplexConditions(whereContext, value));
                        break;
                    default:
                        if (QueryBuilderHelper.hasFieldConditions(key, value))
                            andConditions.push(QueryBuilderHelper.getFieldConditions(whereContext, key, value));
                        else
                            andConditions.push(QueryBuilderHelper.relationCondition(whereContext, key, value));
                }
            });
            const andBracket = new typeorm_1.Brackets(queryBuilder => {
                fixBracketQueryBuilder(queryBuilder, whereContext.queryBuilder);
                andConditions.forEach((condition) => {
                    queryBuilder.andWhere(condition);
                });
            });
            if (orConditions.length === 0)
                return andBracket;
            const orBracket = new typeorm_1.Brackets(queryBuilder => {
                fixBracketQueryBuilder(queryBuilder, whereContext.queryBuilder);
                if (andConditions.length > 0)
                    queryBuilder.where(andBracket);
                orConditions.forEach((condition) => {
                    queryBuilder.orWhere(condition);
                });
            });
            return orBracket;
        }
        static relationCondition(whereContext, relationName, condition) {
            const alias = QueryBuilderHelper.addRelation(whereContext, relationName);
            const oldConstructField = whereContext.constructField;
            const constructField = (fieldName, value) => { return oldConstructField(relationName, { [fieldName]: value }); };
            return QueryBuilderHelper.getWhereCondition({ ...whereContext, alias, constructField }, condition);
        }
        static addRelation(whereContext, relationName) {
            const property = whereContext.alias + '.' + relationName;
            const foundRelation = whereContext.relations.find((item) => item.property === property);
            if (foundRelation)
                return foundRelation.alias;
            const alias = whereContext.queryBuilder.alias + (whereContext.relations.length + 1);
            whereContext.queryBuilder.leftJoin(property, alias);
            whereContext.relations.push({ property, alias });
            return alias;
        }
        static hasFieldConditions(fieldName, value) {
            if (value === undefined || value === null)
                throw new common_1.BadRequestException(`field cannot be empty`);
            if (typeof (value) === 'string'
                || typeof (value) === 'number'
                || typeof (value) === 'boolean'
                || value instanceof Date
                || value instanceof Array)
                return true;
            const objKeys = Object.keys(value);
            if (objKeys.length === 0)
                throw new common_1.BadRequestException(`field cannot be empty`);
            if (objKeys.some(item => conditionsKeys.includes(item)))
                return true;
            return false;
        }
        static getFieldConditions(whereContext, fieldName, fieldCondition) {
            if (typeof (fieldCondition) === 'string'
                || typeof (fieldCondition) === 'number'
                || typeof (fieldCondition) === 'boolean'
                || fieldCondition instanceof Date) {
                return whereContext.constructField(fieldName, fieldCondition);
            }
            if (fieldCondition instanceof Array) {
                return whereContext.constructField(fieldName, (0, typeorm_1.In)(fieldCondition));
            }
            const keys = Object.keys(fieldCondition);
            const opColection = [];
            keys.forEach((key) => {
                const value = fieldCondition[key];
                const cond = conditions[key];
                if (value !== undefined && value !== undefined)
                    opColection.push(cond(value));
            });
            if (opColection.length === 0)
                throw new common_1.BadRequestException(`key ${fieldName} must have a valid condition: ${JSON.stringify(fieldCondition)}`);
            let condition = undefined;
            if (opColection.length === 1)
                condition = opColection[0];
            else
                condition = (0, typeorm_1.And)(...opColection);
            return whereContext.constructField(fieldName, condition);
        }
        static getComplexConditions(whereContext, conditions) {
            return conditions.map((condition) => QueryBuilderHelper.getWhereCondition(whereContext, condition));
        }
    }
    return QueryBuilderHelper;
}
exports.QueryBuilderHelper = QueryBuilderHelper;
//# sourceMappingURL=QueryBuilder.helper.js.map