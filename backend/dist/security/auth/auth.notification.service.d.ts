import { EventEmitter2 } from '@nestjs/event-emitter';
import { IContext } from '../../patterns/crud-pattern/interfaces/context.interface';
import { User } from '../users/entities/user.entity';
import { TypeNotification } from '../../general/notifications/notification/enums/type-notificartion.enum';
export declare class AuthNotificationService {
    private readonly eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    signupEmail(context: IContext, user: User, confirmationCode: string): Promise<Notification>;
    sendVerificationCodeToJwt(context: IContext, user: User, code: string, type: TypeNotification): Promise<Notification>;
    onSignupEmail({ context, user, confirmationCode, }: {
        context: IContext;
        user: User;
        confirmationCode: string;
    }): Promise<Notification>;
    onSendVerificationCodeToJwt({ context, user, code, type }: {
        context: IContext;
        user: User;
        code: string;
        type: TypeNotification;
    }): Promise<Notification>;
}
