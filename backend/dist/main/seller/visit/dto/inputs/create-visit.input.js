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
exports.CreateVisitInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const visit_emun_1 = require("../../emun/visit.emun");
const create_visit_tool_unit_input_1 = require("../../../tools/tool-visit/dto/input/create-visit-tool-unit.input");
let CreateVisitInput = class CreateVisitInput {
};
exports.CreateVisitInput = CreateVisitInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateVisitInput.prototype, "mocked", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateVisitInput.prototype, "dateVisit", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "typeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => visit_emun_1.StatusVisitEnum),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVisitInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [create_visit_tool_unit_input_1.CreateVisitToolUnitInput], { nullable: true }),
    (0, class_validator_1.IsArray)({ each: true }),
    __metadata("design:type", Array)
], CreateVisitInput.prototype, "tools", void 0);
exports.CreateVisitInput = CreateVisitInput = __decorate([
    (0, graphql_1.InputType)()
], CreateVisitInput);
//# sourceMappingURL=create-visit.input.js.map