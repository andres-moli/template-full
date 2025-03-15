"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultikeyRegistersModule = void 0;
const common_1 = require("@nestjs/common");
const multikey_registers_service_1 = require("./multikey-registers.service");
const multikey_registers_resolver_1 = require("./multikey-registers.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const multikey_register_entity_1 = require("./entities/multikey-register.entity");
let MultikeyRegistersModule = class MultikeyRegistersModule {
};
exports.MultikeyRegistersModule = MultikeyRegistersModule;
exports.MultikeyRegistersModule = MultikeyRegistersModule = __decorate([
    (0, common_1.Module)({
        providers: [multikey_registers_resolver_1.MultikeyRegistersResolver, multikey_registers_service_1.MultikeyRegistersService],
        imports: [typeorm_1.TypeOrmModule.forFeature([multikey_register_entity_1.MultikeyRegister])]
    })
], MultikeyRegistersModule);
//# sourceMappingURL=multikey-registers.module.js.map