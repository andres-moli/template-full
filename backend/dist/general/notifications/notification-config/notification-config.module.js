"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationConfigModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const notification_config_service_1 = require("./services/notification-config.service");
const notification_config_entity_1 = require("./entities/notification-config.entity");
const notification_config_resolver_1 = require("./resolvers/notification-config.resolver");
const profile_module_1 = require("../../../external-api/certimails/profile/profile.module");
let NotificationConfigModule = class NotificationConfigModule {
};
exports.NotificationConfigModule = NotificationConfigModule;
exports.NotificationConfigModule = NotificationConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notification_config_entity_1.NotificationConfig]), axios_1.HttpModule, profile_module_1.ProfileModule],
        providers: [notification_config_service_1.NotificationConfigService, notification_config_resolver_1.NotificationConfigResolver],
        exports: [notification_config_service_1.NotificationConfigService]
    })
], NotificationConfigModule);
//# sourceMappingURL=notification-config.module.js.map