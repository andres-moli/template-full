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
exports.UpdateMultikeyRegisterInput = void 0;
const multikey_register_identifier_1 = require("../entities/multikey-register.identifier");
const create_multikey_register_input_1 = require("./create-multikey-register.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateMultikeyRegisterInput = class UpdateMultikeyRegisterInput extends (0, graphql_1.PartialType)(create_multikey_register_input_1.CreateMultikeyRegisterInput) {
};
exports.UpdateMultikeyRegisterInput = UpdateMultikeyRegisterInput;
__decorate([
    (0, graphql_1.Field)(() => multikey_register_identifier_1.MultikeyRegisterId),
    __metadata("design:type", multikey_register_identifier_1.MultikeyRegisterId)
], UpdateMultikeyRegisterInput.prototype, "id", void 0);
exports.UpdateMultikeyRegisterInput = UpdateMultikeyRegisterInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateMultikeyRegisterInput);
//# sourceMappingURL=update-multikey-register.input.js.map