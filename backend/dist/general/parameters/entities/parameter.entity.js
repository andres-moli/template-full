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
exports.Parameter = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const file_info_entity_1 = require("../../files/entities/file-info.entity");
const type_parameter_enum_1 = require("../emun/type-parameter.enum");
let Parameter = class Parameter extends crud_entity_1.CrudEntity {
};
exports.Parameter = Parameter;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Parameter.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Parameter.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Parameter.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => type_parameter_enum_1.TypeParameterEnum),
    __metadata("design:type", String)
], Parameter.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal' }),
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Parameter.prototype, "valueInt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Parameter.prototype, "valueString", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Parameter.prototype, "valueDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_info_entity_1.FileInfo, (file) => file.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => file_info_entity_1.FileInfo, { nullable: true }),
    __metadata("design:type", file_info_entity_1.FileInfo)
], Parameter.prototype, "valueFile", void 0);
exports.Parameter = Parameter = __decorate([
    (0, typeorm_1.Entity)({ name: 'grl_parameter' }),
    (0, graphql_1.ObjectType)()
], Parameter);
//# sourceMappingURL=parameter.entity.js.map