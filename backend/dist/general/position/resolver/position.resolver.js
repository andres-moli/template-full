"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const crud_utils_1 = require("../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../security/auth/decorators/user-types.decorator");
const public_decorator_1 = require("../../../security/auth/decorators/public.decorator");
const position_entity_1 = require("../entities/position.entity");
const position_service_1 = require("../service/position.service");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...position_service_1.serviceStructure,
    serviceType: position_service_1.PositionService,
    create: { name: 'createPositionInput', decorators: [user_types_decorator_1.AdminOnly] },
    update: { name: 'updatePositionInput', decorators: [user_types_decorator_1.AdminOnly] },
    remove: { name: 'removePosition', decorators: [user_types_decorator_1.AdminOnly] },
    findOne: { name: 'position', decorators: [public_decorator_1.Public] },
    findAll: { name: 'positions', decorators: [public_decorator_1.Public] },
});
let PositionResolver = class PositionResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
};
exports.PositionResolver = PositionResolver;
exports.PositionResolver = PositionResolver = __decorate([
    (0, graphql_1.Resolver)(() => position_entity_1.Position)
], PositionResolver);
//# sourceMappingURL=position.resolver.js.map