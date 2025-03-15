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
exports.NotificationGroup = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const state_notification_group_enum_1 = require("../enums/state-notification-group.enum");
const notification_config_entity_1 = require("../../notification-config/entities/notification-config.entity");
const type_notification_group_enum_1 = require("../enums/type-notification-group.enum");
const crud_entity_1 = require("../../../../patterns/crud-pattern/entities/crud-entity");
const groups_entity_1 = require("../../../../security/groups/entities/groups.entity");
let NotificationGroup = class NotificationGroup extends crud_entity_1.CrudEntity {
};
exports.NotificationGroup = NotificationGroup;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], NotificationGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: type_notification_group_enum_1.TypeNotificationGroup.Automatic }),
    (0, graphql_1.Field)(() => type_notification_group_enum_1.TypeNotificationGroup),
    __metadata("design:type", String)
], NotificationGroup.prototype, "typeNotificationGroup", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: state_notification_group_enum_1.StateNotificationGroup.Draft }),
    (0, graphql_1.Field)(() => state_notification_group_enum_1.StateNotificationGroup),
    __metadata("design:type", String)
], NotificationGroup.prototype, "stateNotificationGroup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => notification_config_entity_1.NotificationConfig, (item) => item.id, { lazy: true }),
    (0, graphql_1.Field)(() => notification_config_entity_1.NotificationConfig),
    __metadata("design:type", notification_config_entity_1.NotificationConfig)
], NotificationGroup.prototype, "notificationConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => groups_entity_1.Group, (item) => item.id, { lazy: true }),
    (0, graphql_1.Field)(() => groups_entity_1.Group),
    __metadata("design:type", groups_entity_1.Group)
], NotificationGroup.prototype, "group", void 0);
exports.NotificationGroup = NotificationGroup = __decorate([
    (0, typeorm_1.Entity)({ name: 'msg_notificationGroup' }),
    (0, graphql_1.ObjectType)()
], NotificationGroup);
//# sourceMappingURL=notification-group.entity.js.map