"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationGroupModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const notification_group_service_1 = require("./services/notification-group.service");
const notification_group_entity_1 = require("./entities/notification-group.entity");
const notification_group_resolver_1 = require("./resolvers/notification-group.resolver");
const notification_config_module_1 = require("../notification-config/notification-config.module");
const notification_module_1 = require("../notification/notification.module");
const suscription_module_1 = require("../../suscriptions/suscription.module");
let NotificationGroupModule = class NotificationGroupModule {
};
exports.NotificationGroupModule = NotificationGroupModule;
exports.NotificationGroupModule = NotificationGroupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notification_group_entity_1.NotificationGroup]), axios_1.HttpModule, notification_config_module_1.NotificationConfigModule, notification_module_1.NotificationModule, suscription_module_1.SuscriptionModule],
        providers: [notification_group_service_1.NotificationGroupService, notification_group_resolver_1.NotificationGroupResolver],
        exports: [notification_group_service_1.NotificationGroupService]
    })
], NotificationGroupModule);
//# sourceMappingURL=notification-group.module.js.map