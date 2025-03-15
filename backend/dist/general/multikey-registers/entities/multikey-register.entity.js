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
exports.MultikeyRegister = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const multikey_register_identifier_1 = require("./multikey-register.identifier");
const auto_increment_decorator_1 = require("../../../patterns/crud-pattern/decorators/auto-increment.decorator");
let MultikeyRegister = class MultikeyRegister {
};
exports.MultikeyRegister = MultikeyRegister;
__decorate([
    (0, graphql_1.Field)(() => multikey_register_identifier_1.MultikeyRegisterId),
    (0, typeorm_1.Column)(() => multikey_register_identifier_1.MultikeyRegisterId, { prefix: '' }),
    __metadata("design:type", multikey_register_identifier_1.MultikeyRegisterId)
], MultikeyRegister.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)({ name: "RegFec" }),
    __metadata("design:type", Date)
], MultikeyRegister.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ name: "RegDes" }),
    __metadata("design:type", String)
], MultikeyRegister.prototype, "description", void 0);
exports.MultikeyRegister = MultikeyRegister = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("GRL_Register"),
    (0, auto_increment_decorator_1.AutoIncrement)("id")
], MultikeyRegister);
//# sourceMappingURL=multikey-register.entity.js.map