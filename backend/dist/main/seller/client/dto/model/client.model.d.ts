import { Client } from "../../entities/client.entity";
import { ClientContact } from "../../entities/client-contact.entity";
export declare class ClientContactModel {
    client: Client;
    contact: [ClientContact];
}
