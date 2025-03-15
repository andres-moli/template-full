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
exports.RoleFx = void 0;
const role_entity_1 = require("./role.entity");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
let RoleFx = class RoleFx extends crud_entity_1.CrudEntity {
};
exports.RoleFx = RoleFx;
__decorate([
    (0, typeorm_1.Column)({ length: '200' }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RoleFx.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.id),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => role_entity_1.Role, { nullable: true }),
    __metadata("design:type", role_entity_1.Role)
], RoleFx.prototype, "role", void 0);
exports.RoleFx = RoleFx = __decorate([
    (0, typeorm_1.Entity)({ name: 'sec_rolefx', }),
    (0, graphql_1.ObjectType)()
], RoleFx);
//# sourceMappingURL=role-fx.entity.js.map