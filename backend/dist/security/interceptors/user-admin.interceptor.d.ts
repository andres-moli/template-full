import { Observable } from 'rxjs';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
export declare class UserAdminInterceptor implements NestInterceptor {
    private readonly userService;
    constructor(userService: UsersService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
