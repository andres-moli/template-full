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
exports.ClientResolver = exports.resolverStructure = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_service_1 = require("../services/client.service");
const client_entity_1 = require("../entities/client.entity");
const crud_utils_1 = require("../../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../../security/auth/decorators/user-types.decorator");
const crud_resolver_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const current_context_decorator_1 = require("../../../../patterns/crud-pattern/decorators/current-context.decorator");
const client_model_1 = require("../dto/model/client.model");
exports.resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...client_service_1.serviceStructure,
    serviceType: client_service_1.ClientService,
    create: {
        name: "createClient",
        decorators: [user_types_decorator_1.AnyUser],
    },
    update: {
        name: "updateClient",
        decorators: [user_types_decorator_1.AnyUser],
    },
    remove: {
        name: "removeClient",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findOne: {
        name: "client",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findAll: {
        name: "clients",
        decorators: [user_types_decorator_1.AnyUser],
    },
    classDecorators: []
});
let ClientResolver = class ClientResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(exports.resolverStructure) {
    async clientContact(id, context) {
        return this.service.clientContact(context, id);
    }
};
exports.ClientResolver = ClientResolver;
__decorate([
    (0, user_types_decorator_1.AnyUser)(),
    (0, graphql_1.Query)(() => client_model_1.ClientContactModel, { name: "clientAndContact" }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "clientContact", null);
exports.ClientResolver = ClientResolver = __decorate([
    (0, graphql_1.Resolver)((of) => client_entity_1.Client)
], ClientResolver);
//# sourceMappingURL=client.resolver.js.map