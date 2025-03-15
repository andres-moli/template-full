"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const crud_utils_1 = require("../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../security/auth/decorators/user-types.decorator");
const public_decorator_1 = require("../../../security/auth/decorators/public.decorator");
const parameter_entity_1 = require("../entities/parameter.entity");
const parameter_service_1 = require("../service/parameter.service");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...parameter_service_1.serviceStructure,
    serviceType: parameter_service_1.ParameterService,
    create: { name: 'createParameter', decorators: [user_types_decorator_1.AdminOnly] },
    update: { name: 'updateParameter', decorators: [user_types_decorator_1.AdminOnly] },
    remove: { name: 'removeParameter', decorators: [user_types_decorator_1.AdminOnly] },
    findOne: { name: 'parameter', decorators: [public_decorator_1.Public] },
    findAll: { name: 'parameters', decorators: [public_decorator_1.Public] },
});
let ParameterResolver = class ParameterResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
};
exports.ParameterResolver = ParameterResolver;
exports.ParameterResolver = ParameterResolver = __decorate([
    (0, graphql_1.Resolver)(() => parameter_entity_1.Parameter)
], ParameterResolver);
//# sourceMappingURL=parameter.resolver.js.map