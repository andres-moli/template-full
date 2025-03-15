"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeWorker = exports.UserTypes = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserTypes;
(function (UserTypes) {
    UserTypes["User"] = "user";
    UserTypes["Admin"] = "admin";
    UserTypes["SuperAdmin"] = "superAdmin";
})(UserTypes || (exports.UserTypes = UserTypes = {}));
(0, graphql_1.registerEnumType)(UserTypes, { name: 'UserTypes' });
var TypeWorker;
(function (TypeWorker) {
    TypeWorker["externo"] = "externo";
    TypeWorker["interno"] = "interno";
})(TypeWorker || (exports.TypeWorker = TypeWorker = {}));
(0, graphql_1.registerEnumType)(TypeWorker, { name: 'TypeWorker' });
//# sourceMappingURL=user-type.enum.js.map