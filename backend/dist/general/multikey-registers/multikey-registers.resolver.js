"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultikeyRegistersResolver = exports.resolverStructure = void 0;
const graphql_1 = require("@nestjs/graphql");
const multikey_registers_service_1 = require("./multikey-registers.service");
const multikey_register_entity_1 = require("./entities/multikey-register.entity");
const multikey_register_identifier_1 = require("./entities/multikey-register.identifier");
const user_types_decorator_1 = require("../../security/auth/decorators/user-types.decorator");
const crud_utils_1 = require("../../security/auth/utils/crud.utils");
const public_decorator_1 = require("../../security/auth/decorators/public.decorator");
const crud_resolver_mixin_1 = require("../../patterns/crud-pattern/mixins/crud-resolver.mixin");
exports.resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...multikey_registers_service_1.serviceStructure,
    serviceType: multikey_registers_service_1.MultikeyRegistersService,
    create: {
        name: "createMultiKeyRegister",
        decorators: [user_types_decorator_1.AdminOnly],
    },
    update: {
        name: "updateMultiKeyRegister",
        decorators: [user_types_decorator_1.AdminOnly],
    },
    remove: {
        name: "removeMultiKeyRegister",
        decorators: [user_types_decorator_1.AdminOnly],
    },
    findOne: {
        name: "multiKeyRegister",
        decorators: [public_decorator_1.Public],
    },
    findAll: {
        name: "multiKeyRegisters",
        decorators: [public_decorator_1.Public],
    },
    primaryKey: {
        type: multikey_register_identifier_1.MultikeyRegisterId
    }
});
let MultikeyRegistersResolver = class MultikeyRegistersResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(exports.resolverStructure) {
};
exports.MultikeyRegistersResolver = MultikeyRegistersResolver;
exports.MultikeyRegistersResolver = MultikeyRegistersResolver = __decorate([
    (0, graphql_1.Resolver)(() => multikey_register_entity_1.MultikeyRegister)
], MultikeyRegistersResolver);
//# sourceMappingURL=multikey-registers.resolver.js.map