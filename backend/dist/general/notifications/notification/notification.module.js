"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const bull_1 = require("@nestjs/bull");
const notification_service_1 = require("./services/notification.service");
const notification_entity_1 = require("./entities/notification.entity");
const notification_resolver_1 = require("./resolvers/notification.resolver");
const events_constants_1 = require("./constants/events.constants");
const notification_consumer_1 = require("./consumers/notification.consumer");
const profile_module_1 = require("../../../external-api/certimails/profile/profile.module");
const email_module_1 = require("../../../external-api/certimails/email/email.module");
const sms_module_1 = require("../../../external-api/certimails/sms/sms.module");
const users_module_1 = require("../../../security/users/users.module");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([notification_entity_1.Notification]),
            axios_1.HttpModule,
            profile_module_1.ProfileModule,
            email_module_1.EmailModule,
            sms_module_1.SmsModule,
            users_module_1.UsersModule,
            bull_1.BullModule.registerQueue({
                name: events_constants_1.notificationProcessor
            }),
        ],
        providers: [
            notification_service_1.NotificationService,
            notification_resolver_1.NotificationResolver,
            notification_consumer_1.NotificationConsumer
        ],
        exports: [
            notification_service_1.NotificationService
        ]
    })
], NotificationModule);
//# sourceMappingURL=notification.module.js.map