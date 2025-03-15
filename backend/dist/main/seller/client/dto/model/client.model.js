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
exports.ClientContactModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_entity_1 = require("../../entities/client.entity");
const client_contact_entity_1 = require("../../entities/client-contact.entity");
let ClientContactModel = class ClientContactModel {
};
exports.ClientContactModel = ClientContactModel;
__decorate([
    (0, graphql_1.Field)(() => client_entity_1.Client),
    __metadata("design:type", client_entity_1.Client)
], ClientContactModel.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_contact_entity_1.ClientContact]),
    __metadata("design:type", Array)
], ClientContactModel.prototype, "contact", void 0);
exports.ClientContactModel = ClientContactModel = __decorate([
    (0, graphql_1.ObjectType)()
], ClientContactModel);
//# sourceMappingURL=client.model.js.map