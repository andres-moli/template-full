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
exports.DummyResolver = exports.resolverStructure = void 0;
const graphql_1 = require("@nestjs/graphql");
const dummy_service_1 = require("../services/dummy.service");
const dummy_entity_1 = require("../entities/dummy.entity");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const translation_1 = require("../../../common/i18n/translation");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
const public_decorator_1 = require("../../../security/auth/decorators/public.decorator");
const transactional_decorator_1 = require("../../../patterns/crud-pattern/decorators/transactional.decorator");
const crud_resolver_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const user_types_decorator_1 = require("../../../security/auth/decorators/user-types.decorator");
const crud_utils_1 = require("../../../security/auth/utils/crud.utils");
exports.resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...dummy_service_1.serviceStructure,
    serviceType: dummy_service_1.DummyService,
    create: {
        name: "createDummy",
        decorators: [user_types_decorator_1.AdminOnly],
    },
    update: {
        name: "updateDummy",
        decorators: [user_types_decorator_1.AdminOnly],
    },
    remove: {
        name: "removeDummy",
        decorators: [user_types_decorator_1.SuperAdminOnly],
    },
    findOne: {
        name: "dummy",
        decorators: [public_decorator_1.Public],
    },
    findAll: {
        name: "dummies",
        decorators: [public_decorator_1.Public],
    },
    classDecorators: []
});
let DummyResolver = class DummyResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(exports.resolverStructure) {
    async createBatch(context) {
        const service = this.service;
        const dummies = [];
        dummies.push(await service.create(context, {
            firstField: 'primero',
            secondField: new Date(2023, 1, 1),
            thirdField: 1,
        }));
        dummies.push(await service.create(context, {
            firstField: 'segundo',
            secondField: new Date(2023, 1, 2),
            thirdField: 2,
        }));
        dummies.push(await service.create(context, {
            firstField: 'tercero',
            secondField: new Date(2023, 1, 3),
            thirdField: 3,
        }));
        throw new common_1.InternalServerErrorException(`trn finished`);
        dummies.push(await service.create(context, { firstField: "tercero", secondField: new Date(2023, 1, 3), thirdField: 3 }));
        return dummies;
    }
    async i18nTest(i18n) {
        const message = new translation_1.Translations().translateText(i18n, 'message', undefined);
        return message;
    }
};
exports.DummyResolver = DummyResolver;
__decorate([
    (0, graphql_1.Mutation)((returns) => [dummy_entity_1.Dummy], { name: 'createDummiesX' }),
    (0, public_decorator_1.Public)(),
    (0, transactional_decorator_1.Transactional)(),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DummyResolver.prototype, "createBatch", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: 'i18nTest' }),
    (0, public_decorator_1.Public)(),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", Promise)
], DummyResolver.prototype, "i18nTest", null);
exports.DummyResolver = DummyResolver = __decorate([
    (0, graphql_1.Resolver)((of) => dummy_entity_1.Dummy)
], DummyResolver);
//# sourceMappingURL=dummy.resolver.js.map