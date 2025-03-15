import { CreateDummyInput } from '../dto/inputs/create-dummy.input';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UsersService } from '../../../security/users/services/users.service';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
export declare class DummyNotificationService {
    private readonly eventEmitter;
    private readonly usersService;
    constructor(eventEmitter: EventEmitter2, usersService: UsersService);
    emailDummy(context: IContext, createInput: CreateDummyInput): Promise<void>;
    smsDummy(context: IContext, createInput: CreateDummyInput): Promise<void>;
}
