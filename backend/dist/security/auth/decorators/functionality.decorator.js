"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalityResolver = exports.Functionality = exports.FUNCTIONALITY_KEY = void 0;
const common_1 = require("@nestjs/common");
const functionality_guard_1 = require("../guards/functionality.guard");
exports.FUNCTIONALITY_KEY = 'functionality';
const RolesFx = (functionality) => (0, common_1.SetMetadata)(exports.FUNCTIONALITY_KEY, functionality);
function Functionality(key) {
    return () => (0, common_1.applyDecorators)(RolesFx(key), (0, common_1.UseGuards)(functionality_guard_1.FunctionalityGuard));
}
exports.Functionality = Functionality;
function FunctionalityResolver(key) {
    return Functionality(key)();
}
exports.FunctionalityResolver = FunctionalityResolver;
//# sourceMappingURL=functionality.decorator.js.map