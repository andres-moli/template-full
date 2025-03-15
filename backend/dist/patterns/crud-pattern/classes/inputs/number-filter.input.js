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
exports.NumberFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let NumberFilter = class NumberFilter {
};
exports.NumberFilter = NumberFilter;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], NumberFilter.prototype, "_eq", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], NumberFilter.prototype, "_neq", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], NumberFilter.prototype, "_gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], NumberFilter.prototype, "_gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], NumberFilter.prototype, "_lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], NumberFilter.prototype, "_lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Float], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], NumberFilter.prototype, "_in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Float], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], NumberFilter.prototype, "_between", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Float], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], NumberFilter.prototype, "_notbetween", void 0);
exports.NumberFilter = NumberFilter = __decorate([
    (0, graphql_1.InputType)()
], NumberFilter);
//# sourceMappingURL=number-filter.input.js.map