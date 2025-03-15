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
exports.FletesResolver = exports.resolverStructure = void 0;
const graphql_1 = require("@nestjs/graphql");
const crud_utils_1 = require("../../../../security/auth/utils/crud.utils");
const crud_resolver_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const fletes_service_1 = require("../service/fletes.service");
const fletes_entity_1 = require("../entities/fletes.entity");
const public_decorator_1 = require("../../../../security/auth/decorators/public.decorator");
const find_fletes_input_1 = require("../dto/inputs/find-fletes.input");
const current_context_decorator_1 = require("../../../../patterns/crud-pattern/decorators/current-context.decorator");
const fletes_module_1 = require("../dto/model/fletes.module");
const fletesDcoument_module_1 = require("../dto/model/fletesDcoument.module");
exports.resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...fletes_service_1.serviceStructure,
    serviceType: fletes_service_1.FletesService,
    create: {
        name: "createFletes",
        decorators: [public_decorator_1.Public],
    },
    update: {
        name: "updateFletes",
        decorators: [public_decorator_1.Public],
    },
    remove: {
        name: "removeFletes",
        decorators: [public_decorator_1.Public],
    },
    findOne: {
        name: "Fletes",
        decorators: [public_decorator_1.Public],
    },
    findAll: {
        name: "Fletess",
        decorators: [public_decorator_1.Public],
    },
    classDecorators: []
});
let FletesResolver = class FletesResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(exports.resolverStructure) {
    findAllFacturaCliente(args, context) {
        return this.service.findAllFacturaCliente(context, args);
    }
    async findOneFacturaClienteByCode(code, context) {
        const findOne = await this.service.findOneByCode(context, code);
        return {
            isFound: findOne ? true : false,
            flete: findOne
        };
    }
};
exports.FletesResolver = FletesResolver;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Query)((returns) => [fletesDcoument_module_1.FletesWithDocument], { name: 'findAllFacturaCliente' }),
    __param(0, (0, graphql_1.Args)('input', { type: () => find_fletes_input_1.FacturaPorClienteDto, name: 'inputFacturaClient' })),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_fletes_input_1.FacturaPorClienteDto, Object]),
    __metadata("design:returntype", void 0)
], FletesResolver.prototype, "findAllFacturaCliente", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Query)((returns) => fletes_module_1.findOneFacturaClienteByCode, { name: 'findOneFacturaClienteByCode' }),
    __param(0, (0, graphql_1.Args)('code', { type: () => String, name: 'inputfindOneFacturaClienteByCodet' })),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FletesResolver.prototype, "findOneFacturaClienteByCode", null);
exports.FletesResolver = FletesResolver = __decorate([
    (0, graphql_1.Resolver)((of) => fletes_entity_1.Fletes)
], FletesResolver);
//# sourceMappingURL=fletes.resolver.js.map