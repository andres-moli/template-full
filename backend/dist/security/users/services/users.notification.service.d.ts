import { EventEmitter2 } from '@nestjs/event-emitter';
import { IContext } from '../../../patterns/crud-pattern/interfaces/context.interface';
import { User } from '../entities/user.entity';
export declare class UsersNotificationService {
    private readonly eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    recoverPasswordEmail(context: IContext, user: User, code: string): Promise<Notification>;
    onRecoverPasswordEmail({ context, user, code, }: {
        context: IContext;
        user: User;
        code: string;
    }): Promise<Notification>;
}
