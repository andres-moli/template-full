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
exports.FunctionalityModel = exports.FunctionalityTag = void 0;
const graphql_1 = require("@nestjs/graphql");
var FunctionalityTag;
(function (FunctionalityTag) {
    FunctionalityTag["STANDARD"] = "STANDARD";
    FunctionalityTag["CUSTOM"] = "CUSTOM";
    FunctionalityTag["METHOD"] = "METHOD";
    FunctionalityTag["RESOLVER"] = "RESOLVER";
    FunctionalityTag["CONTROLLER"] = "CONTROLLER";
    FunctionalityTag["MODULE"] = "MODULE";
    FunctionalityTag["PARENT"] = "PARENT";
})(FunctionalityTag || (exports.FunctionalityTag = FunctionalityTag = {}));
(0, graphql_1.registerEnumType)(FunctionalityTag, {
    name: 'FunctionalityTag',
});
let FunctionalityModel = class FunctionalityModel {
    constructor(any) {
        const { name, key, description, tags, ...children } = any;
        this.name = name;
        this.key = key;
        this.description = description;
        this.tags = tags;
        this.children = Object.values(children);
    }
};
exports.FunctionalityModel = FunctionalityModel;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FunctionalityModel.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FunctionalityModel.prototype, "key", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FunctionalityModel.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FunctionalityTag], { nullable: true }),
    __metadata("design:type", Array)
], FunctionalityModel.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FunctionalityModel], { nullable: true }),
    __metadata("design:type", Array)
], FunctionalityModel.prototype, "children", void 0);
exports.FunctionalityModel = FunctionalityModel = __decorate([
    (0, graphql_1.ObjectType)(),
    __metadata("design:paramtypes", [Object])
], FunctionalityModel);
//# sourceMappingURL=functionality.model.js.map