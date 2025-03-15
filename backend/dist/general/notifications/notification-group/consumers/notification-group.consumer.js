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
exports.NotificationGroupConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const events_constants_1 = require("../constants/events.constants");
const notification_group_service_1 = require("../services/notification-group.service");
const suscription_service_1 = require("../../../suscriptions/services/suscription.service");
const type_suscription_enum_1 = require("../../../suscriptions/enums/type-suscription.enum");
let NotificationGroupConsumer = class NotificationGroupConsumer {
    constructor(notificationGroupService, suscriptionService) {
        this.notificationGroupService = notificationGroupService;
        this.suscriptionService = suscriptionService;
    }
    async onActive(job) {
        await this.suscriptionService.messageSuscription({
            id: job.data.lote.id,
            subscription: 'NotificationGroupSuscription',
            type: type_suscription_enum_1.TypeMessage.Notification,
            info: {
                title: 'Iniciando proceso de inserción',
                description: 'Iniciando proceso de inserción lote',
                type: type_suscription_enum_1.TypeSuscription.startProcess
            }
        });
    }
    async createNotificationGroup(job) {
        await new Promise(async (resolve, reject) => {
            try {
                await this.notificationGroupService.fillGroup({ user: job.data.user }, job.data.entity, job.data.createInput);
                resolve('Data processed');
            }
            catch (error) {
                reject(error);
            }
        });
        return { done: true };
    }
};
exports.NotificationGroupConsumer = NotificationGroupConsumer;
__decorate([
    (0, bull_1.OnQueueActive)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationGroupConsumer.prototype, "onActive", null);
__decorate([
    (0, bull_1.Process)(events_constants_1.createNotificationGroupQueue),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationGroupConsumer.prototype, "createNotificationGroup", null);
exports.NotificationGroupConsumer = NotificationGroupConsumer = __decorate([
    (0, bull_1.Processor)(events_constants_1.notificationGroupProcessor),
    __metadata("design:paramtypes", [notification_group_service_1.NotificationGroupService,
        suscription_service_1.SuscriptionService])
], NotificationGroupConsumer);
//# sourceMappingURL=notification-group.consumer.js.map