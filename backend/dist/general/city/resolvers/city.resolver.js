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
exports.CityResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
const city_service_1 = require("../services/city.service");
const city_entity_1 = require("../entities/city.entity");
const find_cities_arg_1 = require("../dto/args/find-cities.arg");
let CityResolver = class CityResolver {
    constructor(service) {
        this.service = service;
    }
    async findOne(id, departmentId, context) {
        return this.service.city(context, id, departmentId);
    }
    async findAll(args, context) {
        return this.service.cities(context, args);
    }
};
exports.CityResolver = CityResolver;
__decorate([
    (0, graphql_1.Query)(() => city_entity_1.City, { name: "city" }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID }, common_1.ParseUUIDPipe)),
    __param(1, (0, graphql_1.Args)('departmentId', { type: () => graphql_1.ID }, common_1.ParseUUIDPipe)),
    __param(2, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CityResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [city_entity_1.City], { name: "cities" }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_cities_arg_1.FindCitiesArgs, Object]),
    __metadata("design:returntype", Promise)
], CityResolver.prototype, "findAll", null);
exports.CityResolver = CityResolver = __decorate([
    (0, graphql_1.Resolver)((of) => city_entity_1.City),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityResolver);
//# sourceMappingURL=city.resolver.js.map