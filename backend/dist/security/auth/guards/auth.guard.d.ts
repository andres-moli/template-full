import { Reflector } from "@nestjs/core";
import { ExecutionContext } from "@nestjs/common";
declare const SecurityAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class SecurityAuthGuard extends SecurityAuthGuard_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    getRequest(context: ExecutionContext): any;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext, status?: any): TUser;
}
export {};
