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
exports.NotificationModel = exports.ProgressModel = exports.GeneralSuscription = void 0;
const class_validator_1 = require("class-validator");
const type_suscription_enum_1 = require("../../enums/type-suscription.enum");
class GeneralSuscription {
}
exports.GeneralSuscription = GeneralSuscription;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GeneralSuscription.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(type_suscription_enum_1.TypeMessage),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GeneralSuscription.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GeneralSuscription.prototype, "subscription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], GeneralSuscription.prototype, "info", void 0);
class ProgressModel {
}
exports.ProgressModel = ProgressModel;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProgressModel.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProgressModel.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProgressModel.prototype, "maxItem", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProgressModel.prototype, "currentItem", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProgressModel.prototype, "percentage", void 0);
class NotificationModel {
}
exports.NotificationModel = NotificationModel;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NotificationModel.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NotificationModel.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(type_suscription_enum_1.TypeSuscription),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NotificationModel.prototype, "type", void 0);
//# sourceMappingURL=general-message.args.js.map