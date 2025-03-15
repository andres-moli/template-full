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
exports.DummyService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const create_dummy_input_1 = require("../dto/inputs/create-dummy.input");
const update_dummy_input_1 = require("../dto/inputs/update-dummy.input");
const dummy_entity_1 = require("../entities/dummy.entity");
const find_dummies_args_1 = require("../dto/args/find-dummies.args");
const dummy_notification_service_1 = require("./dummy.notification.service");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: dummy_entity_1.Dummy,
    createInputType: create_dummy_input_1.CreateDummyInput,
    updateInputType: update_dummy_input_1.UpdateDummyInput,
    findArgsType: find_dummies_args_1.FindDummiesArgs,
});
let DummyService = class DummyService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(dummyNotification) {
        super();
        this.dummyNotification = dummyNotification;
    }
    async beforeCreate(context, repository, entity, createInput) {
        await this.dummyNotification.emailDummy(context, createInput);
        await this.dummyNotification.smsDummy(context, createInput);
    }
};
exports.DummyService = DummyService;
exports.DummyService = DummyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dummy_notification_service_1.DummyNotificationService])
], DummyService);
//# sourceMappingURL=dummy.service.js.map