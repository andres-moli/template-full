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
exports.ProfileService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const create_profile_input_1 = require("../dto/inputs/create-profile.input");
const update_profile_input_1 = require("../dto/inputs/update-profile.input");
const profile_entity_1 = require("../entities/profile.entity");
const profile_manager_service_1 = require("./profile.manager.service");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: profile_entity_1.Profile,
    createInputType: create_profile_input_1.CreateProfileInput,
    updateInputType: update_profile_input_1.UpdateProfileInput,
});
let ProfileService = class ProfileService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(profileManagerService) {
        super();
        this.profileManagerService = profileManagerService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        entity.externalId = await this.profileManagerService.createProfile(createInput);
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(profile_manager_service_1.ProfileManagerService)),
    __metadata("design:paramtypes", [profile_manager_service_1.ProfileManagerService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map