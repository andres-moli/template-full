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
exports.ProfileManagerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
var profileMethod;
(function (profileMethod) {
    profileMethod["Require"] = "rest/WebServices_API/Publicadores/Cliente/Requerir";
})(profileMethod || (profileMethod = {}));
let ProfileManagerService = class ProfileManagerService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createProfile(createInput) {
        try {
            const payload = JSON.stringify({
                "Request": {
                    "Information": {
                        "CorreoElectronico": createInput.email,
                        "Nombres": createInput.firstName,
                        "Apellidos": createInput.lastName,
                        "Telefono": createInput.phone,
                        "Departamento": createInput.region,
                        "Municipio": createInput.city,
                        "NumeroDocumento": createInput.document,
                    }
                }
            });
            const url = process.env.CERTIMAILS_URL + profileMethod.Require;
            const headers = {
                'Content-Type': 'application/json',
            };
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService
                .post(url, payload, {
                headers,
            }));
            if (response.data.Response.HasError)
                throw new Error(response.data.Response.ErrMessage);
            return response.data.Response.ApiKey.trim();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("An error occurred while trying to create Certimails profile: " + error);
        }
    }
};
exports.ProfileManagerService = ProfileManagerService;
exports.ProfileManagerService = ProfileManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ProfileManagerService);
//# sourceMappingURL=profile.manager.service.js.map