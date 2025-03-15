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
exports.UsersNotificationService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const create_notification_input_1 = require("../../../general/notifications/notification/dto/inputs/create-notification.input");
const notification_type_enum_1 = require("../../../general/notifications/notification-config/enums/notification-type.enum");
const type_notificartion_enum_1 = require("../../../general/notifications/notification/enums/type-notificartion.enum");
const email_enum_1 = require("../../../external-api/certimails/email/interface/email.enum");
const events_constants_1 = require("../../../general/notifications/notification/constants/events.constants");
const events_constants_2 = require("../../auth/constants/events.constants");
let UsersNotificationService = class UsersNotificationService {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    async recoverPasswordEmail(context, user, code) {
        if (!user.email)
            return;
        const dictionary = {};
        dictionary['CODE'] = code;
        const notificationInput = new create_notification_input_1.CreateNotificationInput();
        notificationInput.typeConfig = notification_type_enum_1.NotificationTypes.Token;
        notificationInput.subtypeConfig = "recoverPassword";
        notificationInput.userId = user.id;
        notificationInput.metadata = JSON.stringify(dictionary);
        notificationInput.type = type_notificartion_enum_1.TypeNotification.Email;
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
        const [result] = await this.eventEmitter.emitAsync(events_constants_1.createNotificationEvent, { context, input: notificationInput });
        if (!(result instanceof Notification)) {
            throw new common_1.BadRequestException('An error occurred while creating the notification: ' + result);
        }
        return result;
    }
    async onRecoverPasswordEmail({ context, user, code, }) {
        return this.recoverPasswordEmail(context, user, code);
    }
};
exports.UsersNotificationService = UsersNotificationService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_2.recoverPasswordEmailEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersNotificationService.prototype, "onRecoverPasswordEmail", null);
exports.UsersNotificationService = UsersNotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], UsersNotificationService);
//# sourceMappingURL=users.notification.service.js.map