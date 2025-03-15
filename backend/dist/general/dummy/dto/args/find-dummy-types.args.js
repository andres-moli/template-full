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
exports.FindDummyTypeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const string_filter_input_1 = require("../../../../patterns/crud-pattern/classes/inputs/string-filter.input");
const find_args_mixin_1 = require("../../../../patterns/crud-pattern/mixins/find-args.mixin");
let FindDummyTypeWhere = class FindDummyTypeWhere {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", string_filter_input_1.StringFilter)
], FindDummyTypeWhere.prototype, "name", void 0);
FindDummyTypeWhere = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], FindDummyTypeWhere);
let FindDummyTypeArgs = class FindDummyTypeArgs extends (0, find_args_mixin_1.FindArgs)(FindDummyTypeWhere) {
};
exports.FindDummyTypeArgs = FindDummyTypeArgs;
exports.FindDummyTypeArgs = FindDummyTypeArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindDummyTypeArgs);
//# sourceMappingURL=find-dummy-types.args.js.map