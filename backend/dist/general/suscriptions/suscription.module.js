"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const suscription_service_1 = require("./services/suscription.service");
const graphql_subscriptions_1 = require("graphql-subscriptions");
let SuscriptionModule = class SuscriptionModule {
};
exports.SuscriptionModule = SuscriptionModule;
exports.SuscriptionModule = SuscriptionModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            suscription_service_1.SuscriptionService,
            {
                provide: 'PUB_SUB',
                useValue: new graphql_subscriptions_1.PubSub(),
                useFactory: () => {
                    return new graphql_subscriptions_1.PubSub();
                }
            }
        ],
        exports: [suscription_service_1.SuscriptionService, 'PUB_SUB'],
    })
], SuscriptionModule);
//# sourceMappingURL=suscription.module.js.map