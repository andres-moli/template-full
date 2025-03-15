"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLinkResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const page_link_entity_1 = require("../entities/page-link.entity");
const crud_utils_1 = require("../../../security/auth/utils/crud.utils");
const page_link_service_1 = require("../service/page-link.service");
const user_types_decorator_1 = require("../../../security/auth/decorators/user-types.decorator");
const public_decorator_1 = require("../../../security/auth/decorators/public.decorator");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...page_link_service_1.serviceStructure,
    serviceType: page_link_service_1.PageLinkService,
    create: { name: 'createPageLinkInput', decorators: [user_types_decorator_1.AdminOnly] },
    update: { name: 'updatePageLinkInput', decorators: [user_types_decorator_1.AdminOnly] },
    remove: { name: 'removePageLink', decorators: [user_types_decorator_1.AdminOnly] },
    findOne: { name: 'pageLink', decorators: [public_decorator_1.Public] },
    findAll: { name: 'pageLinks', decorators: [public_decorator_1.Public] },
});
let PageLinkResolver = class PageLinkResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
};
exports.PageLinkResolver = PageLinkResolver;
exports.PageLinkResolver = PageLinkResolver = __decorate([
    (0, graphql_1.Resolver)(() => page_link_entity_1.PageLink)
], PageLinkResolver);
//# sourceMappingURL=page-link.resolver.js.map