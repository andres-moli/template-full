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
exports.Client = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../../patterns/crud-pattern/entities/crud-entity");
const city_entity_1 = require("../../../../general/city/entities/city.entity");
const departament_entity_1 = require("../../../../general/department/entities/departament.entity");
const country_entity_1 = require("../../../../general/country/entities/country.entity");
const user_entity_1 = require("../../../../security/users/entities/user.entity");
const client_enum_1 = require("../emun/client.enum");
let Client = class Client extends crud_entity_1.CrudEntity {
};
exports.Client = Client;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Client.prototype, "numberDocument", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => client_enum_1.TypeClientEnum, { nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "vertical", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Client.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => city_entity_1.City, { nullable: true }),
    __metadata("design:type", city_entity_1.City)
], Client.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departament_entity_1.Department, (department) => department.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => departament_entity_1.Department, { nullable: true }),
    __metadata("design:type", departament_entity_1.Department)
], Client.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => country_entity_1.Country, { nullable: true }),
    __metadata("design:type", country_entity_1.Country)
], Client.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Client.prototype, "user", void 0);
exports.Client = Client = __decorate([
    (0, typeorm_1.Entity)({ name: 'cyt_client' }),
    (0, graphql_1.ObjectType)()
], Client);
//# sourceMappingURL=client.entity.js.map