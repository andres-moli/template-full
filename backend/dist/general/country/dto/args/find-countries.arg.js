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
exports.FindCountriesArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const order_by_type_enum_1 = require("../../../../patterns/crud-pattern/enums/order-by-type.enum");
let FindCountriesArgs = class FindCountriesArgs {
};
exports.FindCountriesArgs = FindCountriesArgs;
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FindCountriesArgs.prototype, "orderBy", void 0);
exports.FindCountriesArgs = FindCountriesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindCountriesArgs);
//# sourceMappingURL=find-countries.arg.js.map