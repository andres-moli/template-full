import { IAuditService } from '../../patterns/crud-pattern/interfaces/audit-service.interface';
import { IContext } from '../../patterns/crud-pattern/interfaces/context.interface';
export declare class AuditService implements IAuditService {
    Audit(context: IContext, serviceName: string, action: string, objectId?: string, valueBefore?: object, valueAfter?: object): Promise<void>;
}
