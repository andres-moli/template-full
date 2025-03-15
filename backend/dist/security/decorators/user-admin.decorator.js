"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdmin = void 0;
const common_1 = require("@nestjs/common");
const user_admin_interceptor_1 = require("../interceptors/user-admin.interceptor");
const UserAdmin = () => (0, common_1.UseInterceptors)(user_admin_interceptor_1.UserAdminInterceptor);
exports.UserAdmin = UserAdmin;
//# sourceMappingURL=user-admin.decorator.js.map