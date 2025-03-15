import { EventEmitter2 } from '@nestjs/event-emitter';
import { UsersService } from 'src/security/users/services/users.service';
export declare class ClientNotificationService {
    private readonly eventEmitter;
    private readonly usersService;
    constructor(eventEmitter: EventEmitter2, usersService: UsersService);
}
