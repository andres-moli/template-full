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
exports.City = void 0;
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const departament_entity_1 = require("../../department/entities/departament.entity");
const user_entity_1 = require("../../../security/users/entities/user.entity");
let City = class City extends crud_entity_1.CrudEntity {
};
exports.City = City;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], City.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departament_entity_1.Department, undefined, { lazy: true }),
    (0, graphql_1.Field)(() => departament_entity_1.Department, { nullable: true }),
    __metadata("design:type", departament_entity_1.Department)
], City.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.city, { lazy: true }),
    __metadata("design:type", Array)
], City.prototype, "user", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)({ name: 'grl_city' }),
    (0, graphql_1.ObjectType)()
], City);
//# sourceMappingURL=city.entity.js.map