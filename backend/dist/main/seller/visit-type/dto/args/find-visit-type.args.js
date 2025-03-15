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
exports.FindVisitTypeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const string_filter_input_1 = require("../../../../../patterns/crud-pattern/classes/inputs/string-filter.input");
const order_by_type_enum_1 = require("../../../../../patterns/crud-pattern/enums/order-by-type.enum");
const find_args_mixin_1 = require("../../../../../patterns/crud-pattern/mixins/find-args.mixin");
let FindVisitTypeWhere = class FindVisitTypeWhere {
};
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindVisitTypeWhere.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindVisitTypeWhere.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindVisitTypeWhere.prototype, "description", void 0);
FindVisitTypeWhere = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindVisitTypeWhere);
let FindVisitTypeOrderBy = class FindVisitTypeOrderBy {
};
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes),
    __metadata("design:type", String)
], FindVisitTypeOrderBy.prototype, "createdAt", void 0);
FindVisitTypeOrderBy = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindVisitTypeOrderBy);
let FindVisitTypeArgs = class FindVisitTypeArgs extends (0, find_args_mixin_1.FindArgs)(FindVisitTypeWhere, FindVisitTypeOrderBy) {
};
exports.FindVisitTypeArgs = FindVisitTypeArgs;
exports.FindVisitTypeArgs = FindVisitTypeArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindVisitTypeArgs);
//# sourceMappingURL=find-visit-type.args.js.map