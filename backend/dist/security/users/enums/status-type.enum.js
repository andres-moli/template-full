"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusTypes = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserStatusTypes;
(function (UserStatusTypes) {
    UserStatusTypes["Active"] = "active";
    UserStatusTypes["PartlyActive"] = "partlyActive";
    UserStatusTypes["Inactive"] = "inactive";
})(UserStatusTypes || (exports.UserStatusTypes = UserStatusTypes = {}));
(0, graphql_1.registerEnumType)(UserStatusTypes, { name: 'UserStatusTypes' });
//# sourceMappingURL=status-type.enum.js.map