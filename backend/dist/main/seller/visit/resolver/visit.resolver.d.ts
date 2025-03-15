import { VisitService } from '../services/visit.service';
import { Visit } from '../entities/visit.entity';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { UpdateStatusInput } from '../dto/inputs/update-status-visit.dto';
import { Message, MessageInput } from '../dto/inputs/location.visit.input';
export declare const resolverStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<unknown, Visit, import("../dto/inputs/create-visit.input").CreateVisitInput, import("../dto/inputs/update-visit.input").UpdateVisitInput, VisitService, import("../dto/args/find-visit.args").FindVisitArgs, IContext>;
declare const VisitResolver_base: import("@nestjs/common").Type<{
    readonly service: VisitService;
    create(createInput: import("../dto/inputs/create-visit.input").CreateVisitInput, context: IContext): Promise<Visit>;
    update(updateInput: import("../dto/inputs/update-visit.input").UpdateVisitInput, context: IContext): Promise<Visit>;
    remove(id: unknown, context: IContext): Promise<Visit>;
    findOne(id: unknown, context: IContext): Promise<Visit>;
    findAll(context: IContext, args: any): Promise<Visit[]>;
    findOneArg(context: IContext, args: any): Promise<Visit>;
    Count(context: IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class VisitResolver extends VisitResolver_base {
    findAllVisitDashboard(context: IContext): Promise<{
        earrings: Visit[];
        realized: Visit[];
    }>;
    finishVisit(context: IContext, updateStatusInput: UpdateStatusInput): Promise<Visit>;
    getHoursByVisit(id: string): Promise<number>;
    private messages;
    getMessages(): Message[];
    sendMessage(messageInput: MessageInput): Message;
    sendResponse(messageInput: MessageInput, messageId: string): Message;
    messageReceived(): AsyncIterator<unknown, any, undefined>;
}
export {};
