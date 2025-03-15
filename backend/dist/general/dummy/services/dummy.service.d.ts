import { CreateDummyInput } from '../dto/inputs/create-dummy.input';
import { UpdateDummyInput } from '../dto/inputs/update-dummy.input';
import { Dummy } from '../entities/dummy.entity';
import { FindDummiesArgs } from '../dto/args/find-dummies.args';
import { DummyNotificationService } from './dummy.notification.service';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
import { Repository } from 'typeorm';
export declare const serviceStructure: import("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Dummy, CreateDummyInput, UpdateDummyInput, FindDummiesArgs, IContext>;
declare const DummyService_base: import("@nestjs/common").Type<import("../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Dummy, CreateDummyInput, UpdateDummyInput, FindDummiesArgs, IContext>>;
export declare class DummyService extends DummyService_base {
    private readonly dummyNotification;
    constructor(dummyNotification: DummyNotificationService);
    beforeCreate(context: IContext, repository: Repository<Dummy>, entity: Dummy, createInput: CreateDummyInput): Promise<void>;
}
export {};
