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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuscriptionService = void 0;
const common_1 = require("@nestjs/common");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const type_suscription_enum_1 = require("../enums/type-suscription.enum");
let SuscriptionService = class SuscriptionService {
    constructor(pubSub) {
        this.pubSub = pubSub;
    }
    async messageSuscription(data) {
        data.info.__typename = data.type == type_suscription_enum_1.TypeMessage.Progress ? 'ProgressSuscription' : 'NotificationSuscription';
        await this.pubSub.publish(data.subscription, { ...data });
    }
};
exports.SuscriptionService = SuscriptionService;
exports.SuscriptionService = SuscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PUB_SUB')),
    __metadata("design:paramtypes", [graphql_subscriptions_1.PubSub])
], SuscriptionService);
//# sourceMappingURL=suscription.service.js.map