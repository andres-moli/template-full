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
exports.getOrderByClass = exports.getWhereClass = exports.FindArgs = exports.ORDER_BY_CLASS_KEY = exports.WHERE_CLASS_KEY = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const pagination_input_1 = require("../classes/inputs/pagination.input");
exports.WHERE_CLASS_KEY = 'WhereClass';
exports.ORDER_BY_CLASS_KEY = 'OrderByClass';
function FindArgs(whereStructureType, orderByStructureType) {
    let ArgsClass = class ArgsClass {
    };
    __decorate([
        (0, graphql_1.Field)(() => pagination_input_1.Pagination, { nullable: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", pagination_input_1.Pagination)
    ], ArgsClass.prototype, "pagination", void 0);
    ArgsClass = __decorate([
        (0, graphql_1.ArgsType)()
    ], ArgsClass);
    let returnedClass = ArgsClass;
    if (whereStructureType) {
        let WhereClass = class WhereClass extends (0, graphql_1.PartialType)(whereStructureType) {
        };
        __decorate([
            (0, graphql_1.Field)(() => [WhereClass], { nullable: true }),
            (0, class_validator_1.IsOptional)(),
            __metadata("design:type", Array)
        ], WhereClass.prototype, "_and", void 0);
        __decorate([
            (0, graphql_1.Field)(() => [WhereClass], { nullable: true }),
            (0, class_validator_1.IsOptional)(),
            __metadata("design:type", Array)
        ], WhereClass.prototype, "_or", void 0);
        WhereClass = __decorate([
            (0, graphql_1.InputType)(whereStructureType.name)
        ], WhereClass);
        let ArgsClassWithWhere = class ArgsClassWithWhere extends returnedClass {
        };
        __decorate([
            (0, graphql_1.Field)(() => WhereClass, { nullable: true }),
            (0, class_validator_1.IsOptional)(),
            __metadata("design:type", WhereClass)
        ], ArgsClassWithWhere.prototype, "where", void 0);
        ArgsClassWithWhere = __decorate([
            (0, graphql_1.ArgsType)(),
            (0, common_1.SetMetadata)(exports.WHERE_CLASS_KEY, WhereClass)
        ], ArgsClassWithWhere);
        returnedClass = ArgsClassWithWhere;
    }
    if (orderByStructureType) {
        let OrderByClass = class OrderByClass extends (0, graphql_1.PartialType)(orderByStructureType) {
        };
        OrderByClass = __decorate([
            (0, graphql_1.InputType)(orderByStructureType.name)
        ], OrderByClass);
        let ArgsClassWithOrderBy = class ArgsClassWithOrderBy extends returnedClass {
        };
        __decorate([
            (0, graphql_1.Field)(() => [OrderByClass], { nullable: true }),
            (0, class_validator_1.IsOptional)(),
            __metadata("design:type", Array)
        ], ArgsClassWithOrderBy.prototype, "orderBy", void 0);
        ArgsClassWithOrderBy = __decorate([
            (0, graphql_1.ArgsType)(),
            (0, common_1.SetMetadata)(exports.ORDER_BY_CLASS_KEY, OrderByClass)
        ], ArgsClassWithOrderBy);
        returnedClass = ArgsClassWithOrderBy;
    }
    return (0, common_1.mixin)(returnedClass);
}
exports.FindArgs = FindArgs;
function getWhereClass(findArgsType) {
    return Reflect.getMetadata(exports.WHERE_CLASS_KEY, findArgsType);
}
exports.getWhereClass = getWhereClass;
function getOrderByClass(findArgsType) {
    return Reflect.getMetadata(exports.ORDER_BY_CLASS_KEY, findArgsType);
}
exports.getOrderByClass = getOrderByClass;
//# sourceMappingURL=find-args.mixin.js.map