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
exports.Notification = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const state_persistent_enum_1 = require("../enums/state-persistent.enum");
const state_notification_enum_1 = require("../enums/state-notification.enum");
const type_notificartion_enum_1 = require("../enums/type-notificartion.enum");
const notification_config_entity_1 = require("../../notification-config/entities/notification-config.entity");
const notification_group_entity_1 = require("../../notification-group/entities/notification-group.entity");
const user_entity_1 = require("../../../../security/users/entities/user.entity");
const crud_entity_1 = require("../../../../patterns/crud-pattern/entities/crud-entity");
let Notification = class Notification extends crud_entity_1.CrudEntity {
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => type_notificartion_enum_1.TypeNotification),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, undefined, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Notification.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Notification.prototype, "hasPersistent", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Notification.prototype, "persistentExpiration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => state_persistent_enum_1.StatePersistent, { nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "statePersistent", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: state_notification_enum_1.StateNotification.Draft }),
    (0, graphql_1.Field)(() => state_notification_enum_1.StateNotification),
    __metadata("design:type", String)
], Notification.prototype, "stateNotification", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => notification_config_entity_1.NotificationConfig, undefined, { lazy: true }),
    (0, graphql_1.Field)(() => notification_config_entity_1.NotificationConfig),
    __metadata("design:type", notification_config_entity_1.NotificationConfig)
], Notification.prototype, "notificationConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => notification_group_entity_1.NotificationGroup, undefined, { lazy: true, nullable: true }),
    (0, graphql_1.Field)(() => notification_group_entity_1.NotificationGroup, { nullable: true }),
    __metadata("design:type", notification_group_entity_1.NotificationGroup)
], Notification.prototype, "notificationGroup", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "externalMessage", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)({ name: 'msg_notification' }),
    (0, graphql_1.ObjectType)()
], Notification);
//# sourceMappingURL=notification.entity.js.map