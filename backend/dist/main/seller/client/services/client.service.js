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
exports.ClientService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const client_entity_1 = require("../entities/client.entity");
const create_client_input_1 = require("../dto/inputs/create-client.input");
const update_client_input_1 = require("../dto/inputs/update-client.input");
const crud_service_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const client_notification_service_1 = require("./client.notification.service");
const find_client_args_1 = require("../dto/args/find-client.args");
const department_service_1 = require("../../../../general/department/services/department.service");
const city_service_1 = require("../../../../general/city/services/city.service");
const email_service_1 = require("../../../../general/email/service/email.service");
const client_contact_entity_1 = require("../entities/client-contact.entity");
const users_service_1 = require("../../../../security/users/services/users.service");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: client_entity_1.Client,
    createInputType: create_client_input_1.CreateClientInput,
    updateInputType: update_client_input_1.UpdateClientInput,
    findArgsType: find_client_args_1.FindClientArgs,
});
let ClientService = class ClientService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(clientNotification, departmentService, cityService, mailService, userService) {
        super();
        this.clientNotification = clientNotification;
        this.departmentService = departmentService;
        this.cityService = cityService;
        this.mailService = mailService;
        this.userService = userService;
    }
    async beforeCreate(context, repository, entity, createInput) {
        const oldClient = await repository.findOne({
            where: {
                numberDocument: createInput.numberDocument
            }
        });
        if (oldClient)
            throw new Error(`ya existe un cliente con este nit - [${createInput.numberDocument}]`);
        entity.user = await this.userService.findOne(context, createInput.userId, true);
        entity.department = await this.departmentService.departmentOne(context, createInput.departmentId, true);
        entity.city = await this.cityService.cityOne(context, createInput.cityId, true);
    }
    async beforeUpdate(context, repository, entity, updateInput) {
        entity.user = await this.userService.findOne(context, updateInput.userId, true);
        entity.department = await this.departmentService.departmentOne(context, updateInput.departmentId, true);
        entity.city = await this.cityService.cityOne(context, updateInput.cityId, true);
    }
    async clientContact(context, id) {
        const repository = this.getRepository(context);
        const client = await this.findOne(context, id, true);
        const contact = await repository.manager.find(client_contact_entity_1.ClientContact, {
            where: {
                client: {
                    id: id
                }
            }
        });
        return { client, contact };
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_notification_service_1.ClientNotificationService,
        department_service_1.DepartmentService,
        city_service_1.CityService,
        email_service_1.MailService,
        users_service_1.UsersService])
], ClientService);
//# sourceMappingURL=client.service.js.map