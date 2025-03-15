"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminOnly = exports.AdminOnly = exports.AnyUser = exports.SecureUserTypes = exports.USER_TYPES_KEY = void 0;
const common_1 = require("@nestjs/common");
const user_type_enum_1 = require("../../users/enums/user-type.enum");
exports.USER_TYPES_KEY = 'roles';
const SecureUserTypes = (...userTypes) => (0, common_1.SetMetadata)(exports.USER_TYPES_KEY, userTypes);
exports.SecureUserTypes = SecureUserTypes;
const AnyUser = () => (0, exports.SecureUserTypes)(user_type_enum_1.UserTypes.User, user_type_enum_1.UserTypes.Admin, user_type_enum_1.UserTypes.SuperAdmin);
exports.AnyUser = AnyUser;
const AdminOnly = () => (0, exports.SecureUserTypes)(user_type_enum_1.UserTypes.Admin, user_type_enum_1.UserTypes.SuperAdmin);
exports.AdminOnly = AdminOnly;
const SuperAdminOnly = () => (0, exports.SecureUserTypes)(user_type_enum_1.UserTypes.SuperAdmin);
exports.SuperAdminOnly = SuperAdminOnly;
//# sourceMappingURL=user-types.decorator.js.map