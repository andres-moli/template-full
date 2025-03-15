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
exports.VisitController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const visit_service_1 = require("../services/visit.service");
const current_context_decorator_1 = require("../../../../patterns/crud-pattern/decorators/current-context.decorator");
const visit_emun_1 = require("../emun/visit.emun");
let VisitController = class VisitController {
    constructor(visitService) {
        this.visitService = visitService;
    }
    async acceptOrDeclineVisit(context, id, status) {
        return this.visitService.acceptOrDeclineVisit(context, id, status);
    }
    countStatusVisitByDate(context, dateInit, dateFinish) {
        return this.visitService.countStatusVisitStatistic(context, dateInit, dateFinish);
    }
    countStatusVisitComentStatic(context, dateInit, dateFinish) {
        return this.visitService.countStatusVisitComentStatic(context, dateInit, dateFinish);
    }
    commisionsDataUser() {
        return this.visitService.commisionDataUser();
    }
};
exports.VisitController = VisitController;
__decorate([
    (0, common_1.Get)('/aceptOrDecline/:id/:status'),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], VisitController.prototype, "acceptOrDeclineVisit", null);
__decorate([
    (0, common_1.Get)('/countStatusVisitByDate/:dateInit/:dateFinish'),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, common_1.Param)('dateInit')),
    __param(2, (0, common_1.Param)('dateFinish')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], VisitController.prototype, "countStatusVisitByDate", null);
__decorate([
    (0, common_1.Get)('/countStatusVisitComentStatic/:dateInit/:dateFinish'),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, common_1.Param)('dateInit')),
    __param(2, (0, common_1.Param)('dateFinish')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], VisitController.prototype, "countStatusVisitComentStatic", null);
__decorate([
    (0, common_1.Get)('/commisionsDataUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisitController.prototype, "commisionsDataUser", null);
exports.VisitController = VisitController = __decorate([
    (0, common_1.Controller)('/visit/'),
    (0, swagger_1.ApiTags)('visit'),
    __metadata("design:paramtypes", [visit_service_1.VisitService])
], VisitController);
//# sourceMappingURL=visit.controller.js.map