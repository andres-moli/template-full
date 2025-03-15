"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterType = void 0;
const graphql_1 = require("@nestjs/graphql");
var RouterType;
(function (RouterType) {
    RouterType["InternaltRoute"] = "internal route";
    RouterType["ExternalRoute"] = "external route";
    RouterType["InternalRouteWithArguments"] = "internal route with arguments";
})(RouterType || (exports.RouterType = RouterType = {}));
(0, graphql_1.registerEnumType)(RouterType, { name: 'RouterType' });
//# sourceMappingURL=router-type.enum.js.map