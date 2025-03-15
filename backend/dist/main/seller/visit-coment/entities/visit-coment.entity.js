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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitComent = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("../../../../patterns/crud-pattern/entities/crud-entity");
const user_entity_1 = require("../../../../security/users/entities/user.entity");
const visit_coment_emun_1 = require("../emun/visit-coment.emun");
const visit_entity_1 = require("../../visit/entities/visit.entity");
const moment_1 = __importDefault(require("moment"));
const file_info_entity_1 = require("../../../../general/files/entities/file-info.entity");
let VisitComent = class VisitComent extends crud_entity_1.CrudEntity {
    getFormattedTime() {
        if (this.time) {
            return (0, moment_1.default)(this.time).format('HH:mm');
        }
        return null;
    }
};
exports.VisitComent = VisitComent;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: "8000" }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], VisitComent.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => visit_coment_emun_1.VisitComentTypeEnum),
    __metadata("design:type", String)
], VisitComent.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], VisitComent.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], VisitComent.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], VisitComent.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], VisitComent.prototype, "dateFull", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], VisitComent.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Date)
], VisitComent.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], VisitComent.prototype, "mocked", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], VisitComent.prototype, "getFormattedTime", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_info_entity_1.FileInfo, { nullable: true, lazy: true }),
    (0, graphql_1.Field)(() => file_info_entity_1.FileInfo, { nullable: true }),
    __metadata("design:type", file_info_entity_1.FileInfo)
], VisitComent.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => visit_entity_1.Visit, (visit) => visit.visitItem, { lazy: true }),
    (0, graphql_1.Field)(() => visit_entity_1.Visit),
    __metadata("design:type", visit_entity_1.Visit)
], VisitComent.prototype, "visit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, { lazy: true }),
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], VisitComent.prototype, "user", void 0);
exports.VisitComent = VisitComent = __decorate([
    (0, typeorm_1.Entity)({ name: 'cyt_visitComent' }),
    (0, graphql_1.ObjectType)()
], VisitComent);
//# sourceMappingURL=visit-coment.entity.js.map