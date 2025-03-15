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
exports.CrudResolver = exports.CrudResolverFrom = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const current_context_decorator_1 = require("../decorators/current-context.decorator");
const decorators_utils_1 = require("../utils/decorators.utils");
const default_args_1 = require("../classes/args/default.args");
const metadata_pagination_args_1 = require("../classes/args/metadata-pagination.args");
function CrudResolverFrom(structure) {
    const { entityType, createInputType, updateInputType, serviceType, contextType, findArgsType, } = structure;
    return CrudResolver(entityType, createInputType, updateInputType, serviceType, structure, findArgsType, contextType);
}
exports.CrudResolverFrom = CrudResolverFrom;
function CrudResolver(entityType, createInputType, updateInputType, serviceType, resolverStructure, findArgsType, contextType) {
    const ContextDecorator = resolverStructure.parameterDecorators?.currentContext ?? current_context_decorator_1.CurrentContext;
    const argsType = findArgsType ?? default_args_1.DefaultArgs;
    let countQueryName = resolverStructure.count?.name;
    let countDecorators = resolverStructure.count?.decorators;
    if (!resolverStructure.count && resolverStructure.findAll) {
        countQueryName = resolverStructure.findAll.name + 'Count';
        countDecorators = resolverStructure.findAll.decorators;
    }
    let primaryKeyType = graphql_1.ID;
    let pipeTransforms = [common_1.ParseUUIDPipe];
    if (resolverStructure.primaryKey) {
        primaryKeyType = resolverStructure?.primaryKey?.type;
        pipeTransforms = resolverStructure?.primaryKey?.pipeTransforms ?? [];
    }
    let CrudResolver = class CrudResolver {
        constructor(service) {
            this.service = service;
        }
        async create(createInput, context) {
            return this.service.create(context, createInput);
        }
        update(updateInput, context) {
            return this.service.update(context, updateInput.id, updateInput);
        }
        remove(id, context) {
            return this.service.remove(context, id);
        }
        findOne(id, context) {
            return this.service.findOne(context, id);
        }
        findAll(context, args) {
            return this.service.findAll(context, args);
        }
        findOneArg(context, args) {
            return this.service.findOneArg(context, args);
        }
        Count(context, args) {
            return this.service.Count(context, args);
        }
    };
    __decorate([
        (0, graphql_1.Mutation)(() => entityType, { name: resolverStructure.create?.name }),
        (0, decorators_utils_1.applyMethodDecorators)(resolverStructure.create?.decorators),
        __param(0, (0, graphql_1.Args)({ type: () => createInputType, name: 'createInput' })),
        __param(1, ContextDecorator()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], CrudResolver.prototype, "create", null);
    __decorate([
        (0, graphql_1.Mutation)((returns) => entityType, { name: resolverStructure.update?.name }),
        (0, decorators_utils_1.applyMethodDecorators)(resolverStructure.update?.decorators),
        __param(0, (0, graphql_1.Args)({ type: () => updateInputType, name: 'updateInput' })),
        __param(1, ContextDecorator()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrudResolver.prototype, "update", null);
    __decorate([
        (0, graphql_1.Mutation)((returns) => entityType, { name: resolverStructure.remove?.name }),
        (0, decorators_utils_1.applyMethodDecorators)(resolverStructure.remove?.decorators),
        __param(0, (0, graphql_1.Args)('id', { type: () => primaryKeyType }, ...pipeTransforms)),
        __param(1, ContextDecorator()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrudResolver.prototype, "remove", null);
    __decorate([
        (0, graphql_1.Query)((returns) => entityType, { name: resolverStructure.findOne?.name }),
        (0, decorators_utils_1.applyMethodDecorators)(resolverStructure.findOne?.decorators),
        __param(0, (0, graphql_1.Args)('id', { type: () => primaryKeyType }, ...pipeTransforms)),
        __param(1, ContextDecorator()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrudResolver.prototype, "findOne", null);
    __decorate([
        (0, graphql_1.Query)((returns) => [entityType], { name: resolverStructure.findAll?.name }),
        (0, decorators_utils_1.applyMethodDecorators)(resolverStructure.findAll?.decorators),
        __param(0, ContextDecorator()),
        __param(1, (0, graphql_1.Args)(undefined, { type: () => argsType })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrudResolver.prototype, "findAll", null);
    __decorate([
        (0, graphql_1.Query)((returns) => entityType, { name: resolverStructure.findOneArg?.name, nullable: true }),
        (0, decorators_utils_1.applyMethodDecorators)(resolverStructure.findAll?.decorators),
        __param(0, ContextDecorator()),
        __param(1, (0, graphql_1.Args)(undefined, { type: () => argsType })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrudResolver.prototype, "findOneArg", null);
    __decorate([
        (0, graphql_1.Query)(() => metadata_pagination_args_1.MetadataPagination, { name: countQueryName }),
        (0, decorators_utils_1.applyMethodDecorators)(countDecorators),
        __param(0, ContextDecorator()),
        __param(1, (0, graphql_1.Args)(undefined, { type: () => argsType })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrudResolver.prototype, "Count", null);
    CrudResolver = __decorate([
        (0, graphql_1.Resolver)((of) => entityType),
        (0, decorators_utils_1.applyClassDecorators)(resolverStructure.classDecorators),
        __param(0, (0, common_1.Inject)(serviceType)),
        __metadata("design:paramtypes", [Object])
    ], CrudResolver);
    return (0, common_1.mixin)(CrudResolver);
}
exports.CrudResolver = CrudResolver;
//# sourceMappingURL=crud-resolver.mixin.js.map