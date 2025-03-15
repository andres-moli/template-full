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
exports.ClientContact = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../../patterns/crud-pattern/entities/crud-entity");
const client_entity_1 = require("./client.entity");
let ClientContact = class ClientContact extends crud_entity_1.CrudEntity {
};
exports.ClientContact = ClientContact;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ClientContact.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ClientContact.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ClientContact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ClientContact.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ClientContact.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, (country) => country.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => client_entity_1.Client, { nullable: true }),
    __metadata("design:type", client_entity_1.Client)
], ClientContact.prototype, "client", void 0);
exports.ClientContact = ClientContact = __decorate([
    (0, typeorm_1.Entity)({ name: 'cyt_clientContact' }),
    (0, graphql_1.ObjectType)()
], ClientContact);
//# sourceMappingURL=client-contact.entity.js.map