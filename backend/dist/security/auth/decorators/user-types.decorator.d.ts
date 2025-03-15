import { UserTypes } from '../../users/enums/user-type.enum';
export declare const USER_TYPES_KEY = "roles";
export declare const SecureUserTypes: (...userTypes: UserTypes[]) => import("@nestjs/common").CustomDecorator<string>;
export declare const AnyUser: () => import("@nestjs/common").CustomDecorator<string>;
export declare const AdminOnly: () => import("@nestjs/common").CustomDecorator<string>;
export declare const SuperAdminOnly: () => import("@nestjs/common").CustomDecorator<string>;
