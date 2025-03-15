import { IContext } from "./context.interface";
export interface IAuditService {
    Audit(context: IContext, serviceName: string, action: string, objectId?: string, valueBefore?: object, valueAfter?: object): Promise<void>;
}
export declare const IAuditService: unique symbol;
