"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultikeyRegistersService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const create_multikey_register_input_1 = require("./dto/create-multikey-register.input");
const update_multikey_register_input_1 = require("./dto/update-multikey-register.input");
const multikey_register_entity_1 = require("./entities/multikey-register.entity");
const crud_service_structure_interface_1 = require("../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../patterns/crud-pattern/mixins/crud-service.mixin");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: multikey_register_entity_1.MultikeyRegister,
    createInputType: create_multikey_register_input_1.CreateMultikeyRegisterInput,
    updateInputType: update_multikey_register_input_1.UpdateMultikeyRegisterInput,
});
let MultikeyRegistersService = class MultikeyRegistersService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
};
exports.MultikeyRegistersService = MultikeyRegistersService;
exports.MultikeyRegistersService = MultikeyRegistersService = __decorate([
    (0, common_1.Injectable)()
], MultikeyRegistersService);
//# sourceMappingURL=multikey-registers.service.js.map