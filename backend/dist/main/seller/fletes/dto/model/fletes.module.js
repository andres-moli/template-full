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
exports.findOneFacturaClienteByCode = exports.FacturaResponseModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const fletes_entity_1 = require("../../entities/fletes.entity");
let FacturaResponseModel = class FacturaResponseModel {
};
exports.FacturaResponseModel = FacturaResponseModel;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_CEDULA", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_NOMCLI", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_FECHA", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_TIPMOV", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_PREFIJ", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_NUMDOC", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_VENDED", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_VENTA", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_VALCOS", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_UTILIDAD", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "TEM_PORCENTAJE_UTILIDAD", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "CL_DEPART", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FacturaResponseModel.prototype, "CLI_CIUDAD", void 0);
exports.FacturaResponseModel = FacturaResponseModel = __decorate([
    (0, graphql_1.ObjectType)()
], FacturaResponseModel);
let findOneFacturaClienteByCode = class findOneFacturaClienteByCode {
};
exports.findOneFacturaClienteByCode = findOneFacturaClienteByCode;
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], findOneFacturaClienteByCode.prototype, "isFound", void 0);
__decorate([
    (0, graphql_1.Field)(() => fletes_entity_1.Fletes, { nullable: true }),
    __metadata("design:type", fletes_entity_1.Fletes)
], findOneFacturaClienteByCode.prototype, "flete", void 0);
exports.findOneFacturaClienteByCode = findOneFacturaClienteByCode = __decorate([
    (0, graphql_1.ObjectType)()
], findOneFacturaClienteByCode);
//# sourceMappingURL=fletes.module.js.map