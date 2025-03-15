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
exports.ClientContactService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const client_notification_service_1 = require("./client.notification.service");
const client_contact_entity_1 = require("../entities/client-contact.entity");
const create_client_contact_input_1 = require("../dto/inputs/create-client-contact.input");
const update_client_contact_input_1 = require("../dto/inputs/update-client-contact.input");
const find_client_contact_args_1 = require("../dto/args/find-client-contact.args");
const client_service_1 = require("./client.service");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: client_contact_entity_1.ClientContact,
    createInputType: create_client_contact_input_1.CreateClientContactInput,
    updateInputType: update_client_contact_input_1.UpdateClientContactInput,
    findArgsType: find_client_contact_args_1.FindClientContactArgs,
});
let ClientContactService = class ClientContactService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(clientNotification, clientService) {
        super();
        this.clientNotification = clientNotification;
        this.clientService = clientService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        entity.client = await this.clientService.findOne(context, createInput.clientId, true);
    }
};
exports.ClientContactService = ClientContactService;
exports.ClientContactService = ClientContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_notification_service_1.ClientNotificationService,
        client_service_1.ClientService])
], ClientContactService);
//# sourceMappingURL=client-contact.service.js.map