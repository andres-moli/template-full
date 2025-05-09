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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_type_enum_1 = require("../enums/user-type.enum");
const document_type_enum_1 = require("../../../common/enum/document-type.enum");
const status_type_enum_1 = require("../enums/status-type.enum");
const city_entity_1 = require("../../../general/city/entities/city.entity");
const departament_entity_1 = require("../../../general/department/entities/departament.entity");
const country_entity_1 = require("../../../general/country/entities/country.entity");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const documento_usuario_entity_1 = require("../../../main/seller/doc/document/entities/documento-usuario.entity");
let User = class User extends crud_entity_1.CrudEntity {
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "middleName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "secondSurname", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => document_type_enum_1.UserDocumentTypes, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "identificationType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "identificationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "dateIssue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => document_type_enum_1.UserDocumentTypes, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "legalRepresentativeIdentificationType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "legalRepresentativeIdentificationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phoneCountryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], User.prototype, "hasRural", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "confirmationCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => user_type_enum_1.TypeWorker, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "typeWoker", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: status_type_enum_1.UserStatusTypes.Active }),
    (0, graphql_1.Field)(() => status_type_enum_1.UserStatusTypes),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], User.prototype, "phoneVerification", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], User.prototype, "emailVerification", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => user_type_enum_1.UserTypes),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, (role) => role.id),
    (0, typeorm_1.JoinTable)({ name: 'sec_userrole' }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => city_entity_1.City, { nullable: true }),
    __metadata("design:type", city_entity_1.City)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departament_entity_1.Department, (department) => department.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => departament_entity_1.Department, { nullable: true }),
    __metadata("design:type", departament_entity_1.Department)
], User.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => country_entity_1.Country, { nullable: true }),
    __metadata("design:type", country_entity_1.Country)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => documento_usuario_entity_1.DocumentoUsuario, doc => doc.usuario, { lazy: true }),
    (0, graphql_1.Field)(() => [documento_usuario_entity_1.DocumentoUsuario], { nullable: true }),
    __metadata("design:type", Promise)
], User.prototype, "documentos", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'sec_user' }),
    (0, graphql_1.ObjectType)()
], User);
//# sourceMappingURL=user.entity.js.map