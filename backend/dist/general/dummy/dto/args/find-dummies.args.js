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
exports.FindDummiesArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const find_dummy_types_args_1 = require("./find-dummy-types.args");
const find_dummy_group_args_1 = require("./find-dummy-group.args");
const find_args_mixin_1 = require("../../../../patterns/crud-pattern/mixins/find-args.mixin");
const string_filter_input_1 = require("../../../../patterns/crud-pattern/classes/inputs/string-filter.input");
const date_filter_input_1 = require("../../../../patterns/crud-pattern/classes/inputs/date-filter.input");
const number_filter_input_1 = require("../../../../patterns/crud-pattern/classes/inputs/number-filter.input");
const order_by_type_enum_1 = require("../../../../patterns/crud-pattern/enums/order-by-type.enum");
const TypeWhere = (0, find_args_mixin_1.getWhereClass)(find_dummy_types_args_1.FindDummyTypeArgs);
const GroupWhere = (0, find_args_mixin_1.getWhereClass)(find_dummy_group_args_1.FindDummyGroupArgs);
let FindDummyWhere = class FindDummyWhere {
};
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter),
    __metadata("design:type", Object)
], FindDummyWhere.prototype, "firstField", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_filter_input_1.DateFilter),
    __metadata("design:type", Object)
], FindDummyWhere.prototype, "secondField", void 0);
__decorate([
    (0, graphql_1.Field)(() => number_filter_input_1.NumberFilter),
    __metadata("design:type", Object)
], FindDummyWhere.prototype, "thirdField", void 0);
__decorate([
    (0, graphql_1.Field)(() => TypeWhere),
    __metadata("design:type", Object)
], FindDummyWhere.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => GroupWhere),
    __metadata("design:type", Object)
], FindDummyWhere.prototype, "group", void 0);
FindDummyWhere = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindDummyWhere);
let FindDummyOrderBy = class FindDummyOrderBy {
};
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes),
    __metadata("design:type", Object)
], FindDummyOrderBy.prototype, "firstField", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes),
    __metadata("design:type", Object)
], FindDummyOrderBy.prototype, "secondField", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes),
    __metadata("design:type", Object)
], FindDummyOrderBy.prototype, "thirdField", void 0);
FindDummyOrderBy = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindDummyOrderBy);
let FindDummiesArgs = class FindDummiesArgs extends (0, find_args_mixin_1.FindArgs)(FindDummyWhere, FindDummyOrderBy) {
};
exports.FindDummiesArgs = FindDummiesArgs;
exports.FindDummiesArgs = FindDummiesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindDummiesArgs);
//# sourceMappingURL=find-dummies.args.js.map