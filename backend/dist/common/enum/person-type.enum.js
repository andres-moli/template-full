"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonTypes = void 0;
const graphql_1 = require("@nestjs/graphql");
var PersonTypes;
(function (PersonTypes) {
    PersonTypes["Natural"] = "natural";
    PersonTypes["Legal"] = "legal";
})(PersonTypes || (exports.PersonTypes = PersonTypes = {}));
(0, graphql_1.registerEnumType)(PersonTypes, { name: 'PersonTypes' });
//# sourceMappingURL=person-type.enum.js.map