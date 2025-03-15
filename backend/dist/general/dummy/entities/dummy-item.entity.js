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
exports.DummyItem = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const dummy_entity_1 = require("./dummy.entity");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
let DummyItem = class DummyItem extends crud_entity_1.CrudEntity {
};
exports.DummyItem = DummyItem;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DummyItem.prototype, "firstField", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], DummyItem.prototype, "secondField", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], DummyItem.prototype, "thirdField", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10 }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], DummyItem.prototype, "fourthField", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dummy_entity_1.Dummy, (dummy) => dummy.items, { lazy: true }),
    (0, graphql_1.Field)(() => dummy_entity_1.Dummy),
    __metadata("design:type", dummy_entity_1.Dummy)
], DummyItem.prototype, "dummy", void 0);
exports.DummyItem = DummyItem = __decorate([
    (0, typeorm_1.Entity)({ name: 'grl_dummyItem' }),
    (0, graphql_1.ObjectType)()
], DummyItem);
//# sourceMappingURL=dummy-item.entity.js.map