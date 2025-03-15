"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserKeyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_key_service_1 = require("../services/users-key.service");
const user_key_entity_1 = require("../entities/user-key.entity");
const crud_utils_1 = require("../../auth/utils/crud.utils");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...users_key_service_1.serviceStructure,
    serviceType: users_key_service_1.UsersKeyService,
});
let UserKeyResolver = class UserKeyResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
};
exports.UserKeyResolver = UserKeyResolver;
exports.UserKeyResolver = UserKeyResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_key_entity_1.UserKey)
], UserKeyResolver);
//# sourceMappingURL=user-key.resolver.js.map