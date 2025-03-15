"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderByTypes = void 0;
const graphql_1 = require("@nestjs/graphql");
var OrderByTypes;
(function (OrderByTypes) {
    OrderByTypes["ASC"] = "ASC";
    OrderByTypes["DESC"] = "DESC";
})(OrderByTypes || (exports.OrderByTypes = OrderByTypes = {}));
(0, graphql_1.registerEnumType)(OrderByTypes, { name: 'OrderTypes' });
//# sourceMappingURL=order-by-type.enum.js.map