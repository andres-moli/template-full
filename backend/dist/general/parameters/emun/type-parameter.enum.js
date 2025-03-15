"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeParameterEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeParameterEnum;
(function (TypeParameterEnum) {
    TypeParameterEnum["number"] = "NUMBER";
    TypeParameterEnum["string"] = "STRING";
    TypeParameterEnum["date"] = "DATE";
    TypeParameterEnum["file"] = "FILE";
})(TypeParameterEnum || (exports.TypeParameterEnum = TypeParameterEnum = {}));
(0, graphql_1.registerEnumType)(TypeParameterEnum, { name: 'TypeParameterEnum' });
//# sourceMappingURL=type-parameter.enum.js.map