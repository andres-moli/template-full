"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypeResolver = void 0;
const documentType_entity_1 = require("../entities/documentType.entity");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const graphql_1 = require("@nestjs/graphql");
const crud_utils_1 = require("../../../security/auth/utils/crud.utils");
const documentType_service_1 = require("../services/documentType.service");
const user_types_decorator_1 = require("../../../security/auth/decorators/user-types.decorator");
const public_decorator_1 = require("../../../security/auth/decorators/public.decorator");
const resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...documentType_service_1.serviceStructure,
    serviceType: documentType_service_1.DocumentTypeService,
    create: { name: 'createDocumentType', decorators: [user_types_decorator_1.AdminOnly] },
    update: { name: 'updateDocumentType', decorators: [user_types_decorator_1.AdminOnly] },
    remove: { name: 'removeDocumentType', decorators: [user_types_decorator_1.AdminOnly] },
    findOne: { name: 'documentType', decorators: [public_decorator_1.Public] },
    findAll: { name: 'documentTypes', decorators: [public_decorator_1.Public] },
});
let DocumentTypeResolver = class DocumentTypeResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(resolverStructure) {
};
exports.DocumentTypeResolver = DocumentTypeResolver;
exports.DocumentTypeResolver = DocumentTypeResolver = __decorate([
    (0, graphql_1.Resolver)(() => documentType_entity_1.DocumentType)
], DocumentTypeResolver);
//# sourceMappingURL=documentType.resolver.js.map