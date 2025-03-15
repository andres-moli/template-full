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
exports.Dummy = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const dummy_item_entity_1 = require("./dummy-item.entity");
const dummy_type_entity_1 = require("./dummy-type.entity");
const dummy_group_entity_1 = require("./dummy-group.entity");
const filterable_field_decorator_1 = require("../../../patterns/crud-pattern/decorators/filterable-field.decorator");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const notification_entity_1 = require("../../notifications/notification/entities/notification.entity");
let Dummy = class Dummy extends crud_entity_1.CrudEntity {
};
exports.Dummy = Dummy;
__decorate([
    (0, typeorm_1.Column)(),
    (0, filterable_field_decorator_1.FilterableField)(() => String),
    __metadata("design:type", String)
], Dummy.prototype, "firstField", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Dummy.prototype, "secondField", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Dummy.prototype, "thirdField", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Dummy.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Dummy.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => notification_entity_1.Notification, undefined, { nullable: true, lazy: true }),
    (0, graphql_1.Field)(() => notification_entity_1.Notification, { nullable: true }),
    __metadata("design:type", notification_entity_1.Notification)
], Dummy.prototype, "notification", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dummy_item_entity_1.DummyItem, (item) => item.dummy, { lazy: true }),
    (0, graphql_1.Field)(() => [dummy_item_entity_1.DummyItem]),
    __metadata("design:type", Array)
], Dummy.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dummy_type_entity_1.DummyType, undefined, { lazy: true }),
    (0, graphql_1.Field)(() => dummy_type_entity_1.DummyType, { nullable: true }),
    __metadata("design:type", dummy_type_entity_1.DummyType)
], Dummy.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dummy_group_entity_1.DummyGroup, undefined, { lazy: true }),
    (0, graphql_1.Field)(() => dummy_group_entity_1.DummyGroup, { nullable: true }),
    __metadata("design:type", dummy_group_entity_1.DummyGroup)
], Dummy.prototype, "group", void 0);
exports.Dummy = Dummy = __decorate([
    (0, typeorm_1.Entity)({ name: 'grl_dummy' }),
    (0, graphql_1.ObjectType)()
], Dummy);
//# sourceMappingURL=dummy.entity.js.map