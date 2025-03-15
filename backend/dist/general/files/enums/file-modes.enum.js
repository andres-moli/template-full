"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModes = void 0;
const graphql_1 = require("@nestjs/graphql");
var FileModes;
(function (FileModes) {
    FileModes["buffer"] = "BUFFER";
    FileModes["mongo"] = "MONGODB";
    FileModes["url"] = "URL";
})(FileModes || (exports.FileModes = FileModes = {}));
(0, graphql_1.registerEnumType)(FileModes, { name: 'FileModes' });
//# sourceMappingURL=file-modes.enum.js.map