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
exports.WssManagerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
var WssMethods;
(function (WssMethods) {
    WssMethods["Enviar"] = "WebServices_API.Publicadores.Wss.Messages.aEnviar.aspx";
})(WssMethods || (WssMethods = {}));
let WssManagerService = class WssManagerService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async sendWss(structure) {
        try {
            const url = process.env.CERTIMAILS_URL + WssMethods.Enviar;
            const headers = {
                'Content-Type': 'application/json',
                'x-api-key': structure.ApiKey,
            };
            const payload = JSON.stringify(structure);
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, payload, { headers }));
            if (response.data.HasError) {
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
exports.WssManagerService = WssManagerService;
exports.WssManagerService = WssManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], WssManagerService);
//# sourceMappingURL=wss.manager.service.js.map