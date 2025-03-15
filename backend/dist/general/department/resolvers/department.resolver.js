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
exports.DepartmentResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const departament_entity_1 = require("../entities/departament.entity");
const department_service_1 = require("../services/department.service");
const current_context_decorator_1 = require("../../../patterns/crud-pattern/decorators/current-context.decorator");
const find_departments_arg_1 = require("../dto/args/find-departments.arg");
let DepartmentResolver = class DepartmentResolver {
    constructor(service) {
        this.service = service;
    }
    async findOne(id, countryId, context) {
        return this.service.department(context, id, countryId);
    }
    async findAll(args, context) {
        return this.service.departments(context, args);
    }
};
exports.DepartmentResolver = DepartmentResolver;
__decorate([
    (0, graphql_1.Query)(() => departament_entity_1.Department, { name: "department" }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID }, common_1.ParseUUIDPipe)),
    __param(1, (0, graphql_1.Args)('countryId', { type: () => graphql_1.ID }, common_1.ParseUUIDPipe)),
    __param(2, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [departament_entity_1.Department], { name: "departments" }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_departments_arg_1.FindDepartmentsArgs, Object]),
    __metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "findAll", null);
exports.DepartmentResolver = DepartmentResolver = __decorate([
    (0, graphql_1.Resolver)((of) => departament_entity_1.Department),
    __metadata("design:paramtypes", [department_service_1.DepartmentService])
], DepartmentResolver);
//# sourceMappingURL=department.resolver.js.map