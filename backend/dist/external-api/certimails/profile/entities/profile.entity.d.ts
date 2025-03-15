import { CrudEntity } from '../../../../patterns/crud-pattern/entities/crud-entity';
export declare class Profile extends CrudEntity {
    description: string;
    firstName: string;
    lastName: string;
    city: number;
    region: number;
    document: string;
    email: string;
    phone?: string;
    externalId: string;
    stateAws?: string;
}
