"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitTypeResolver = exports.resolverStructure = void 0;
const graphql_1 = require("@nestjs/graphql");
const crud_utils_1 = require("../../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../../security/auth/decorators/user-types.decorator");
const crud_resolver_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const visit_type_service_1 = require("../service/visit-type.service");
const visit_type_entity_1 = require("../entities/visit-type.entity");
exports.resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...visit_type_service_1.serviceStructure,
    serviceType: visit_type_service_1.VisitTypeService,
    create: {
        name: "createVisitType",
        decorators: [user_types_decorator_1.AnyUser],
    },
    update: {
        name: "updateVisitType",
        decorators: [user_types_decorator_1.AnyUser],
    },
    remove: {
        name: "removeVisitType",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findOne: {
        name: "visitType",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findAll: {
        name: "visitTypes",
        decorators: [user_types_decorator_1.AnyUser],
    },
    classDecorators: []
});
let VisitTypeResolver = class VisitTypeResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(exports.resolverStructure) {
};
exports.VisitTypeResolver = VisitTypeResolver;
exports.VisitTypeResolver = VisitTypeResolver = __decorate([
    (0, graphql_1.Resolver)((of) => visit_type_entity_1.VisitType)
], VisitTypeResolver);
//# sourceMappingURL=visit-type.resolver.js.map