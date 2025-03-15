import { CrudEntity } from 'src/patterns/crud-pattern/entities/crud-entity';
import { Client } from './client.entity';
export declare class ClientContact extends CrudEntity {
    name: string;
    celular: string;
    email: string;
    position: string;
    telefono?: string;
    client: Client;
}
