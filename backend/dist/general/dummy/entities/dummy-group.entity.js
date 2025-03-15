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
exports.DummyGroup = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const dummy_family_entity_1 = require("./dummy-family.entity");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
let DummyGroup = class DummyGroup extends crud_entity_1.CrudEntity {
};
exports.DummyGroup = DummyGroup;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DummyGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DummyGroup.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dummy_family_entity_1.DummyFamily, undefined, { lazy: true }),
    (0, graphql_1.Field)(() => dummy_family_entity_1.DummyFamily, { nullable: true }),
    __metadata("design:type", dummy_family_entity_1.DummyFamily)
], DummyGroup.prototype, "family", void 0);
exports.DummyGroup = DummyGroup = __decorate([
    (0, typeorm_1.Entity)({ name: 'grl_dummyGroup' }),
    (0, graphql_1.ObjectType)()
], DummyGroup);
//# sourceMappingURL=dummy-group.entity.js.map