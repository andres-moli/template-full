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
exports.FindDummyGroupArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const find_dummy_family_args_1 = require("./find-dummy-family.args");
const find_args_mixin_1 = require("../../../../patterns/crud-pattern/mixins/find-args.mixin");
const string_filter_input_1 = require("../../../../patterns/crud-pattern/classes/inputs/string-filter.input");
const FamilyWhere = (0, find_args_mixin_1.getWhereClass)(find_dummy_family_args_1.FindDummyFamilyArgs);
let FindDummyGroupWhere = class FindDummyGroupWhere {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindDummyGroupWhere.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindDummyGroupWhere.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => FamilyWhere),
    __metadata("design:type", Object)
], FindDummyGroupWhere.prototype, "family", void 0);
FindDummyGroupWhere = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindDummyGroupWhere);
let FindDummyGroupArgs = class FindDummyGroupArgs extends (0, find_args_mixin_1.FindArgs)(FindDummyGroupWhere) {
};
exports.FindDummyGroupArgs = FindDummyGroupArgs;
exports.FindDummyGroupArgs = FindDummyGroupArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindDummyGroupArgs);
//# sourceMappingURL=find-dummy-group.args.js.map