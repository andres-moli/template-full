"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = void 0;
const common_1 = require("@nestjs/common");
const user_status_interceptor_1 = require("../interceptors/user-status.interceptor");
const UserStatus = () => (0, common_1.UseInterceptors)(user_status_interceptor_1.UserStatusInterceptor);
exports.UserStatus = UserStatus;
//# sourceMappingURL=user-status.decorator.js.map