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
exports.Visit = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../../patterns/crud-pattern/entities/crud-entity");
const user_entity_1 = require("../../../../security/users/entities/user.entity");
const visit_emun_1 = require("../emun/visit.emun");
const visit_type_entity_1 = require("../../visit-type/entities/visit-type.entity");
const visit_coment_entity_1 = require("../../visit-coment/entities/visit-coment.entity");
const visit_tool_unit_entity_1 = require("../../tools/tool-visit/entities/visit-tool-unit.entity");
let Visit = class Visit extends crud_entity_1.CrudEntity {
};
exports.Visit = Visit;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Visit.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Visit.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Visit.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Visit.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Visit.prototype, "mocked", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    (0, typeorm_1.Index)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Visit.prototype, "dateVisit", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: visit_emun_1.StatusVisitEnum.programmed }),
    (0, graphql_1.Field)(() => visit_emun_1.StatusVisitEnum),
    __metadata("design:type", String)
], Visit.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => visit_tool_unit_entity_1.VisitToolUnit, vtu => vtu.visit, { lazy: true }),
    (0, graphql_1.Field)(() => [visit_tool_unit_entity_1.VisitToolUnit], { nullable: true }),
    __metadata("design:type", Array)
], Visit.prototype, "toolUnitsUsed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => visit_type_entity_1.VisitType, (type) => type.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => visit_type_entity_1.VisitType, { nullable: true }),
    __metadata("design:type", visit_type_entity_1.VisitType)
], Visit.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => visit_coment_entity_1.VisitComent, (item) => item.visit, { lazy: true }),
    (0, graphql_1.Field)(() => [visit_coment_entity_1.VisitComent]),
    __metadata("design:type", Array)
], Visit.prototype, "visitItem", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, { lazy: true }),
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.Index)(),
    __metadata("design:type", user_entity_1.User)
], Visit.prototype, "user", void 0);
exports.Visit = Visit = __decorate([
    (0, typeorm_1.Entity)({ name: 'cyt_visit' }),
    (0, graphql_1.ObjectType)()
], Visit);
//# sourceMappingURL=visit.entity.js.map