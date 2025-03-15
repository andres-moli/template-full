import { TypeClientEnum } from '../../emun/client.enum';
export declare class CreateClientInput {
    name: string;
    numberDocument: string;
    celular: string;
    descripcion?: string;
    telefono?: string;
    email?: string;
    address?: string;
    type?: TypeClientEnum;
    vertical?: string;
    cityId?: string;
    departmentId?: string;
    countryId?: string;
    userId?: string;
}
