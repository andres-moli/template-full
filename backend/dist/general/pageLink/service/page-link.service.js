"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLinkService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const page_link_entity_1 = require("../entities/page-link.entity");
const create_page_link_input_1 = require("../dto/create-page-link.input");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: page_link_entity_1.PageLink,
    createInputType: create_page_link_input_1.CreatePageLinkInput,
    updateInputType: create_page_link_input_1.CreatePageLinkInput,
});
let PageLinkService = class PageLinkService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
};
exports.PageLinkService = PageLinkService;
exports.PageLinkService = PageLinkService = __decorate([
    (0, common_1.Injectable)()
], PageLinkService);
//# sourceMappingURL=page-link.service.js.map