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
exports.FindUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_type_enum_1 = require("../../enums/user-type.enum");
const string_filter_input_1 = require("../../../../patterns/crud-pattern/classes/inputs/string-filter.input");
const order_by_type_enum_1 = require("../../../../patterns/crud-pattern/enums/order-by-type.enum");
const find_args_mixin_1 = require("../../../../patterns/crud-pattern/mixins/find-args.mixin");
let FindUsersWhere = class FindUsersWhere {
};
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindUsersWhere.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindUsersWhere.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], FindUsersWhere.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_type_enum_1.UserTypes]),
    __metadata("design:type", Array)
], FindUsersWhere.prototype, "type", void 0);
FindUsersWhere = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindUsersWhere);
let FindUsersOrderBy = class FindUsersOrderBy {
};
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes),
    __metadata("design:type", String)
], FindUsersOrderBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes),
    __metadata("design:type", String)
], FindUsersOrderBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_type_enum_1.OrderByTypes),
    __metadata("design:type", String)
], FindUsersOrderBy.prototype, "createdAt", void 0);
FindUsersOrderBy = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindUsersOrderBy);
let FindUserArgs = class FindUserArgs extends (0, find_args_mixin_1.FindArgs)(FindUsersWhere, FindUsersOrderBy) {
};
exports.FindUserArgs = FindUserArgs;
exports.FindUserArgs = FindUserArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUserArgs);
//# sourceMappingURL=find-users.args.js.map