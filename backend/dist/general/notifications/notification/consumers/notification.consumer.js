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
exports.NotificationConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const events_constants_1 = require("../constants/events.constants");
const notification_service_1 = require("../services/notification.service");
let NotificationConsumer = class NotificationConsumer {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async createNotification(job) {
        await new Promise(async (resolve, reject) => {
            try {
                await this.notificationService.create({ user: job.data.user }, job.data.input);
                resolve('Data processed');
            }
            catch (error) {
                reject(error);
            }
        });
        return { done: true };
    }
    onActive(job) {
        console.log(`Processing job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
};
exports.NotificationConsumer = NotificationConsumer;
__decorate([
    (0, bull_1.Process)(events_constants_1.createNotificationQueue),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationConsumer.prototype, "createNotification", null);
__decorate([
    (0, bull_1.OnQueueActive)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationConsumer.prototype, "onActive", null);
exports.NotificationConsumer = NotificationConsumer = __decorate([
    (0, bull_1.Processor)(events_constants_1.notificationProcessor),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationConsumer);
//# sourceMappingURL=notification.consumer.js.map