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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../../security/users/entities/user.entity");
const typeorm_2 = require("typeorm");
const country_entity_1 = require("../../country/entities/country.entity");
let Department = class Department extends crud_entity_1.CrudEntity {
};
exports.Department = Department;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Department.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)(() => country_entity_1.Country, undefined, { lazy: true }),
    (0, graphql_1.Field)(() => country_entity_1.Country, { nullable: true }),
    __metadata("design:type", country_entity_1.Country)
], Department.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.department, { lazy: true }),
    __metadata("design:type", Array)
], Department.prototype, "user", void 0);
exports.Department = Department = __decorate([
    (0, typeorm_1.Entity)({ name: 'grl_department' }),
    (0, graphql_1.ObjectType)()
], Department);
//# sourceMappingURL=departament.entity.js.map