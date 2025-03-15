"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusVisitEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var StatusVisitEnum;
(function (StatusVisitEnum) {
    StatusVisitEnum["programmed"] = "programmed";
    StatusVisitEnum["confirmed"] = "confirmed";
    StatusVisitEnum["reprogrammed"] = "reprogrammed";
    StatusVisitEnum["canceled"] = "canceled";
    StatusVisitEnum["realized"] = "realized";
    StatusVisitEnum["initiated"] = "initiated";
})(StatusVisitEnum || (exports.StatusVisitEnum = StatusVisitEnum = {}));
(0, graphql_1.registerEnumType)(StatusVisitEnum, { name: 'StatusVisitEnum' });
//# sourceMappingURL=visit.emun.js.map