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
exports.SmsManagerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
var SmsMethod;
(function (SmsMethod) {
    SmsMethod["Send"] = "rest/WebServices_API/Publicadores/Sms/Enviar";
})(SmsMethod || (SmsMethod = {}));
let SmsManagerService = class SmsManagerService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async sendSms(structure) {
        try {
            const url = process.env.CERTIMAILS_URL + SmsMethod.Send;
            const headers = {
                'Content-Type': 'application/json',
                'x-api-key': structure.ApiKey
            };
            const payload = '{ "Request": ' + JSON.stringify(structure) + '}';
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, payload, { headers }));
            if (response.data.Response.HasError) {
                throw new common_1.InternalServerErrorException(response.data.ErrMessage);
            }
            return response.data.Response;
        }
        catch (error) {
            return {
                HasError: true,
                ErrMessage: error.message
            };
        }
    }
};
exports.SmsManagerService = SmsManagerService;
exports.SmsManagerService = SmsManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SmsManagerService);
//# sourceMappingURL=sms.manager.service.js.map