import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class EventsUtils {
    static callOne(eventEmitter: EventEmitter2, eventName: string, payload: any): Promise<any>;
}
