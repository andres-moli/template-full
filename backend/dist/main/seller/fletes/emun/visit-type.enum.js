"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitTypeStatusEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var VisitTypeStatusEnum;
(function (VisitTypeStatusEnum) {
    VisitTypeStatusEnum["ACTIVE"] = "active";
    VisitTypeStatusEnum["INACTIVE"] = "inactive";
})(VisitTypeStatusEnum || (exports.VisitTypeStatusEnum = VisitTypeStatusEnum = {}));
(0, graphql_1.registerEnumType)(VisitTypeStatusEnum, { name: 'VisitTypeStatusEnum' });
//# sourceMappingURL=visit-type.enum.js.map