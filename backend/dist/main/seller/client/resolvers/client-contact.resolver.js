"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientContactResolver = exports.resolverStructure = void 0;
const graphql_1 = require("@nestjs/graphql");
const crud_utils_1 = require("../../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../../security/auth/decorators/user-types.decorator");
const crud_resolver_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const client_contact_entity_1 = require("../entities/client-contact.entity");
const client_contact_service_1 = require("../services/client-contact.service");
exports.resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...client_contact_service_1.serviceStructure,
    serviceType: client_contact_service_1.ClientContactService,
    create: {
        name: "createClientContact",
        decorators: [user_types_decorator_1.AnyUser],
    },
    update: {
        name: "updateClientContact",
        decorators: [user_types_decorator_1.AnyUser],
    },
    remove: {
        name: "removeClientContact",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findOne: {
        name: "clientContact",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findAll: {
        name: "clientContacts",
        decorators: [user_types_decorator_1.AnyUser],
    },
    classDecorators: []
});
let ClientContactResolver = class ClientContactResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(exports.resolverStructure) {
};
exports.ClientContactResolver = ClientContactResolver;
exports.ClientContactResolver = ClientContactResolver = __decorate([
    (0, graphql_1.Resolver)((of) => client_contact_entity_1.ClientContact)
], ClientContactResolver);
//# sourceMappingURL=client-contact.resolver.js.map