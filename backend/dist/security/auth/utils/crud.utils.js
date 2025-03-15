"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudResolverStructure = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../guards/auth.guard");
function CrudResolverStructure(input) {
    return {
        ...input,
        classDecorators: [
            () => (0, common_1.UseGuards)(auth_guard_1.SecurityAuthGuard),
            ...(input.classDecorators ?? []),
        ]
    };
}
exports.CrudResolverStructure = CrudResolverStructure;
//# sourceMappingURL=crud.utils.js.map