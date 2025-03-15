import { ClientContact } from '../entities/client-contact.entity';
import { ClientContactService } from '../services/client-contact.service';
export declare const resolverStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<unknown, ClientContact, import("../dto/inputs/create-client-contact.input").CreateClientContactInput, import("../dto/inputs/update-client-contact.input").UpdateClientContactInput, ClientContactService, import("../dto/args/find-client-contact.args").FindClientContactArgs, import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const ClientContactResolver_base: import("@nestjs/common").Type<{
    readonly service: ClientContactService;
    create(createInput: import("../dto/inputs/create-client-contact.input").CreateClientContactInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<ClientContact>;
    update(updateInput: import("../dto/inputs/update-client-contact.input").UpdateClientContactInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<ClientContact>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<ClientContact>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<ClientContact>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<ClientContact[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<ClientContact>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class ClientContactResolver extends ClientContactResolver_base {
}
export {};
