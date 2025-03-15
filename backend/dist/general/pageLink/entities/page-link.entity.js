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
exports.PageLink = void 0;
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../patterns/crud-pattern/entities/crud-entity");
const router_type_enum_1 = require("../enum/router-type.enum");
const graphql_1 = require("@nestjs/graphql");
let PageLink = class PageLink extends crud_entity_1.CrudEntity {
};
exports.PageLink = PageLink;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => router_type_enum_1.RouterType, { nullable: true }),
    __metadata("design:type", String)
], PageLink.prototype, "routeType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: '' }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PageLink.prototype, "target", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], PageLink.prototype, "arguments", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 2000 }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PageLink.prototype, "url", void 0);
exports.PageLink = PageLink = __decorate([
    (0, typeorm_1.Entity)('grl_pageLink'),
    (0, graphql_1.ObjectType)()
], PageLink);
//# sourceMappingURL=page-link.entity.js.map