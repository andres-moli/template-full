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
exports.Group = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const notification_config_entity_1 = require("../../../general/notifications/notification-config/entities/notification-config.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Group = class Group extends crud_entity_1.CrudEntity {
};
exports.Group = Group;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => notification_config_entity_1.NotificationConfig, (item) => item.id, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => notification_config_entity_1.NotificationConfig, { nullable: true }),
    __metadata("design:type", notification_config_entity_1.NotificationConfig)
], Group.prototype, "notificationConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => [user_entity_1.User], { nullable: true }),
    (0, typeorm_1.JoinTable)({ name: "sec_groupUser" }),
    __metadata("design:type", Array)
], Group.prototype, "users", void 0);
exports.Group = Group = __decorate([
    (0, typeorm_1.Entity)('sec_group'),
    (0, graphql_1.ObjectType)()
], Group);
//# sourceMappingURL=groups.entity.js.map