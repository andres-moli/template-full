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
exports.ProfileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_entity_1 = require("../entities/profile.entity");
const profile_service_1 = require("../services/profile.service");
const crud_utils_1 = require("../../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../../security/auth/decorators/user-types.decorator");
const public_decorator_1 = require("../../../../security/auth/decorators/public.decorator");
const crud_resolver_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const current_context_decorator_1 = require("../../../../patterns/crud-pattern/decorators/current-context.decorator");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...profile_service_1.serviceStructure,
    serviceType: profile_service_1.ProfileService,
    create: { name: 'createProfile', decorators: [user_types_decorator_1.AdminOnly] },
    update: { name: 'updateProfile', decorators: [user_types_decorator_1.AdminOnly] },
    remove: { name: 'removeProfile', decorators: [user_types_decorator_1.AdminOnly] },
    findOne: { name: 'profile', decorators: [public_decorator_1.Public] },
    findAll: { name: 'profiles', decorators: [public_decorator_1.Public] },
});
let ProfileResolver = class ProfileResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
    async getUrl(profile, context) {
        return process.env.CERTIMAILS_URL + 'WebServices_API.Publicadores.Email.ARequestLogin.aspx?' + profile.externalId;
    }
};
exports.ProfileResolver = ProfileResolver;
__decorate([
    (0, graphql_1.ResolveField)(() => String, { name: "url" }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_entity_1.Profile, Object]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "getUrl", null);
exports.ProfileResolver = ProfileResolver = __decorate([
    (0, graphql_1.Resolver)(() => profile_entity_1.Profile)
], ProfileResolver);
//# sourceMappingURL=profile.resolver.js.map