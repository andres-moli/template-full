"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatePersistent = void 0;
const graphql_1 = require("@nestjs/graphql");
var StatePersistent;
(function (StatePersistent) {
    StatePersistent["Send"] = "send";
    StatePersistent["Receive"] = "receive";
    StatePersistent["Open"] = "open";
    StatePersistent["NoPersistent"] = "";
})(StatePersistent || (exports.StatePersistent = StatePersistent = {}));
(0, graphql_1.registerEnumType)(StatePersistent, { name: 'StatePersistent' });
//# sourceMappingURL=state-persistent.enum.js.map