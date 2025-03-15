import { Repository } from 'typeorm';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { ClientNotificationService } from './client.notification.service';
import { ClientContact } from '../entities/client-contact.entity';
import { CreateClientContactInput } from '../dto/inputs/create-client-contact.input';
import { UpdateClientContactInput } from '../dto/inputs/update-client-contact.input';
import { FindClientContactArgs } from '../dto/args/find-client-contact.args';
import { ClientService } from './client.service';
export declare const serviceStructure: import("src/patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, ClientContact, CreateClientContactInput, UpdateClientContactInput, FindClientContactArgs, IContext>;
declare const ClientContactService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, ClientContact, CreateClientContactInput, UpdateClientContactInput, FindClientContactArgs, IContext>>;
export declare class ClientContactService extends ClientContactService_base {
    private readonly clientNotification;
    private readonly clientService;
    constructor(clientNotification: ClientNotificationService, clientService: ClientService);
    beforeCreate(context: IContext, repository: Repository<ClientContact>, entity: ClientContact, createInput: CreateClientContactInput): Promise<void>;
}
export {};
