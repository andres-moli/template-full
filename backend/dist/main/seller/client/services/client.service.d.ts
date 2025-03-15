import { Client } from '../entities/client.entity';
import { Repository } from 'typeorm';
import { CreateClientInput } from '../dto/inputs/create-client.input';
import { UpdateClientInput } from '../dto/inputs/update-client.input';
import { IContext } from 'src/patterns/crud-pattern/interfaces/context.interface';
import { ClientNotificationService } from './client.notification.service';
import { FindClientArgs } from '../dto/args/find-client.args';
import { DepartmentService } from 'src/general/department/services/department.service';
import { CityService } from 'src/general/city/services/city.service';
import { MailService } from 'src/general/email/service/email.service';
import { ClientContact } from '../entities/client-contact.entity';
import { UsersService } from 'src/security/users/services/users.service';
export declare const serviceStructure: import("src/patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Client, CreateClientInput, UpdateClientInput, FindClientArgs, IContext>;
declare const ClientService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Client, CreateClientInput, UpdateClientInput, FindClientArgs, IContext>>;
export declare class ClientService extends ClientService_base {
    private readonly clientNotification;
    private readonly departmentService;
    private readonly cityService;
    private readonly mailService;
    private readonly userService;
    constructor(clientNotification: ClientNotificationService, departmentService: DepartmentService, cityService: CityService, mailService: MailService, userService: UsersService);
    beforeCreate(context: IContext, repository: Repository<Client>, entity: Client, createInput: CreateClientInput): Promise<void>;
    beforeUpdate(context: IContext, repository: Repository<Client>, entity: Client, updateInput: UpdateClientInput): Promise<void>;
    clientContact(context: IContext, id: string): Promise<{
        client: Client;
        contact: ClientContact[];
    }>;
}
export {};
