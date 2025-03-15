import { CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';
import { ExtendedExecutionContext } from '../interfaces/functionality.interface';
export declare class FunctionalityGuard implements CanActivate {
    private reflector;
    private readonly authService;
    constructor(reflector: Reflector, authService: AuthService);
    canActivate(context: ExtendedExecutionContext): Promise<boolean>;
}
