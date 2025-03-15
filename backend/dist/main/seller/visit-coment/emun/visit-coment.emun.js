"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitComentStatusEnum = exports.VisitComentTypeEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var VisitComentTypeEnum;
(function (VisitComentTypeEnum) {
    VisitComentTypeEnum["INICIO"] = "INICIO";
    VisitComentTypeEnum["FIN"] = "FIN";
    VisitComentTypeEnum["INTERMEDIO"] = "INTERMEDIO";
})(VisitComentTypeEnum || (exports.VisitComentTypeEnum = VisitComentTypeEnum = {}));
var VisitComentStatusEnum;
(function (VisitComentStatusEnum) {
    VisitComentStatusEnum["PENDINIG"] = "pendinig";
    VisitComentStatusEnum["CANCELED"] = "canceled";
    VisitComentStatusEnum["REALIZED"] = "realized";
})(VisitComentStatusEnum || (exports.VisitComentStatusEnum = VisitComentStatusEnum = {}));
(0, graphql_1.registerEnumType)(VisitComentTypeEnum, { name: 'VisitComentTypeEnum' });
(0, graphql_1.registerEnumType)(VisitComentStatusEnum, { name: 'VisitComentStatusEnum' });
//# sourceMappingURL=visit-coment.emun.js.map