import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { EntityManager } from "typeorm";
export declare class TransactionInterceptor implements NestInterceptor {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
