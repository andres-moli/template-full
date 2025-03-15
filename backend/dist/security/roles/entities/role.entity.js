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
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const role_fx_entity_1 = require("./role-fx.entity");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const user_type_enum_1 = require("../../users/enums/user-type.enum");
const user_entity_1 = require("../../users/entities/user.entity");
let Role = class Role extends crud_entity_1.CrudEntity {
};
exports.Role = Role;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => user_type_enum_1.UserTypes, { nullable: true }),
    __metadata("design:type", String)
], Role.prototype, "defaultForType", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.roles),
    (0, graphql_1.Field)(() => [user_entity_1.User], { nullable: true }),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => role_fx_entity_1.RoleFx, (roleFx) => roleFx.role, { cascade: true }),
    (0, graphql_1.Field)(() => [role_fx_entity_1.RoleFx]),
    __metadata("design:type", Array)
], Role.prototype, "roleFx", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)('sec_role'),
    (0, graphql_1.ObjectType)()
], Role);
//# sourceMappingURL=role.entity.js.map