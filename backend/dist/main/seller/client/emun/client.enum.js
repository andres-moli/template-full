"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeClientEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeClientEnum;
(function (TypeClientEnum) {
    TypeClientEnum["INTEGRADOR"] = "integrador";
    TypeClientEnum["DISTRIBUIDOR"] = "distribuidor";
    TypeClientEnum["INSTALADOR"] = "instalador";
    TypeClientEnum["CLIENTE_FINAL"] = "cliente_final";
})(TypeClientEnum || (exports.TypeClientEnum = TypeClientEnum = {}));
(0, graphql_1.registerEnumType)(TypeClientEnum, { name: 'TypeClientEnum' });
//# sourceMappingURL=client.enum.js.map