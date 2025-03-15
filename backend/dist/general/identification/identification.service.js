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
exports.IdentificationService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_constants_1 = require("../../security/auth/constants/events.constants");
let IdentificationService = class IdentificationService {
    async verifyIdentificationNumber(IdentificationNumber) {
        console.log("****", IdentificationNumber, "****");
        return true;
    }
    async onPageVersionClone({ identificationNumber, }) {
        const verify = await this.verifyIdentificationNumber(identificationNumber);
        if (!verify) {
            throw new common_1.UnauthorizedException('The identity of the person could not be validated.');
        }
    }
};
exports.IdentificationService = IdentificationService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.verifyIdentificationNumberEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IdentificationService.prototype, "onPageVersionClone", null);
exports.IdentificationService = IdentificationService = __decorate([
    (0, common_1.Injectable)()
], IdentificationService);
//# sourceMappingURL=identification.service.js.map