"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const groups_entity_1 = require("../entities/groups.entity");
const groups_service_1 = require("../services/groups.service");
const user_types_decorator_1 = require("../../auth/decorators/user-types.decorator");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const crud_utils_1 = require("../../auth/utils/crud.utils");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...groups_service_1.serviceStructure,
    serviceType: groups_service_1.GroupsService,
    create: { name: 'createGroup', decorators: [user_types_decorator_1.AdminOnly] },
    update: { name: 'updateGroup', decorators: [user_types_decorator_1.AdminOnly] },
    remove: { name: 'removeGroup', decorators: [user_types_decorator_1.AdminOnly] },
    findOne: { name: 'group', decorators: [public_decorator_1.Public] },
    findAll: { name: 'groups', decorators: [public_decorator_1.Public] },
});
let GroupsResolver = class GroupsResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
};
exports.GroupsResolver = GroupsResolver;
exports.GroupsResolver = GroupsResolver = __decorate([
    (0, graphql_1.Resolver)(() => groups_entity_1.Group)
], GroupsResolver);
//# sourceMappingURL=groups.resolver.js.map