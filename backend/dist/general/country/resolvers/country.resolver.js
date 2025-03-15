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
exports.CountryResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
const country_entity_1 = require("../entities/country.entity");
const country_service_1 = require("../services/country.service");
const find_countries_arg_1 = require("../dto/args/find-countries.arg");
let CountryResolver = class CountryResolver {
    constructor(service) {
        this.service = service;
    }
    async findOne(id, context) {
        return this.service.country(context, id);
    }
    async findAll(args, context) {
        return this.service.countries(context, args);
    }
};
exports.CountryResolver = CountryResolver;
__decorate([
    (0, graphql_1.Query)(() => country_entity_1.Country, { name: 'country' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID }, common_1.ParseUUIDPipe)),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [country_entity_1.Country], { name: 'countries' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_countries_arg_1.FindCountriesArgs, Object]),
    __metadata("design:returntype", Promise)
], CountryResolver.prototype, "findAll", null);
exports.CountryResolver = CountryResolver = __decorate([
    (0, graphql_1.Resolver)((of) => country_entity_1.Country),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryResolver);
//# sourceMappingURL=country.resolver.js.map