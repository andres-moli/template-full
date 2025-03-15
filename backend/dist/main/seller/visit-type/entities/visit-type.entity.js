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
exports.VisitType = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../../patterns/crud-pattern/entities/crud-entity");
const visit_type_enum_1 = require("../emun/visit-type.enum");
let VisitType = class VisitType extends crud_entity_1.CrudEntity {
};
exports.VisitType = VisitType;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], VisitType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], VisitType.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: visit_type_enum_1.VisitTypeStatusEnum.ACTIVE }),
    (0, graphql_1.Field)(() => visit_type_enum_1.VisitTypeStatusEnum),
    __metadata("design:type", String)
], VisitType.prototype, "status", void 0);
exports.VisitType = VisitType = __decorate([
    (0, typeorm_1.Entity)({ name: 'cyt_visitType' }),
    (0, graphql_1.ObjectType)()
], VisitType);
//# sourceMappingURL=visit-type.entity.js.map