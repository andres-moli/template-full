import { ClientService } from '../services/client.service';
import { Client } from '../entities/client.entity';
export declare const resolverStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-resolver-structure.inteface").ICrudResolverStructure<unknown, Client, import("../dto/inputs/create-client.input").CreateClientInput, import("../dto/inputs/update-client.input").UpdateClientInput, ClientService, import("../dto/args/find-client.args").FindClientArgs, import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext>;
declare const ClientResolver_base: import("@nestjs/common").Type<{
    readonly service: ClientService;
    create(createInput: import("../dto/inputs/create-client.input").CreateClientInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Client>;
    update(updateInput: import("../dto/inputs/update-client.input").UpdateClientInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Client>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Client>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Client>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Client[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Client>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class ClientResolver extends ClientResolver_base {
    clientContact(id: string, context: any): Promise<{
        client: Client;
        contact: import("../entities/client-contact.entity").ClientContact[];
    }>;
}
export {};
