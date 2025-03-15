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
exports.DummyNotificationService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const users_service_1 = require("../../../security/users/services/users.service");
const create_notification_input_1 = require("../../notifications/notification/dto/inputs/create-notification.input");
const type_notificartion_enum_1 = require("../../notifications/notification/enums/type-notificartion.enum");
const notification_type_enum_1 = require("../../notifications/notification-config/enums/notification-type.enum");
const email_enum_1 = require("../../../external-api/certimails/email/interface/email.enum");
const events_constants_1 = require("../../notifications/notification/constants/events.constants");
let DummyNotificationService = class DummyNotificationService {
    constructor(eventEmitter, usersService) {
        this.eventEmitter = eventEmitter;
        this.usersService = usersService;
    }
    async emailDummy(context, createInput) {
        if (!createInput.email)
            return;
        const user = await this.usersService.findOne(context, context.user.id, true);
        const dictionary = {};
        dictionary['NAME'] = createInput.firstField;
        const notificationInput = new create_notification_input_1.CreateNotificationInput();
        notificationInput.type = type_notificartion_enum_1.TypeNotification.Email;
        notificationInput.typeConfig = notification_type_enum_1.NotificationTypes.Token;
        notificationInput.subtypeConfig = "signUp";
        notificationInput.metadata = JSON.stringify(dictionary);
        const recipients = [{
                email: user.email,
                type: email_enum_1.RecipientType.Destinatary,
                aditionalInfo: {
                    name: user.name,
                    lastName: user.lastName,
                    phone: user.phoneNumber,
                    id: user.identificationNumber,
                }
            }];
        notificationInput.emailRecipients = recipients;
        await this.eventEmitter.emitAsync(events_constants_1.createNotificationEvent, { context, input: notificationInput });
    }
    async smsDummy(context, createInput) {
        if (!createInput.phone)
            return;
        const user = await this.usersService.findOne(context, context.user.id, true);
        const dictionary = {};
        dictionary['NAME'] = createInput.firstField;
        const notificationInput = new create_notification_input_1.CreateNotificationInput();
        notificationInput.type = type_notificartion_enum_1.TypeNotification.Sms;
        notificationInput.typeConfig = notification_type_enum_1.NotificationTypes.Token;
        notificationInput.subtypeConfig = "signUp";
        notificationInput.metadata = JSON.stringify(dictionary);
        notificationInput.smsRecipient = {
            phone: createInput.phone,
            email: createInput.email,
            name: createInput.firstField
        };
        const [result] = await this.eventEmitter.emitAsync(events_constants_1.createNotificationEvent, { context, input: notificationInput });
    }
};
exports.DummyNotificationService = DummyNotificationService;
exports.DummyNotificationService = DummyNotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2,
        users_service_1.UsersService])
], DummyNotificationService);
//# sourceMappingURL=dummy.notification.service.js.map