"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserKeyOrigin = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserKeyOrigin;
(function (UserKeyOrigin) {
    UserKeyOrigin["TwoSteps"] = "twoSteps";
    UserKeyOrigin["RecoverPassword"] = "recoverPassword";
})(UserKeyOrigin || (exports.UserKeyOrigin = UserKeyOrigin = {}));
(0, graphql_1.registerEnumType)(UserKeyOrigin, { name: 'UserKeyOrigin' });
//# sourceMappingURL=user-key-origin.enum.js.map