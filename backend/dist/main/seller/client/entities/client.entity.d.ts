import { CrudEntity } from 'src/patterns/crud-pattern/entities/crud-entity';
import { City } from 'src/general/city/entities/city.entity';
import { Department } from 'src/general/department/entities/departament.entity';
import { Country } from 'src/general/country/entities/country.entity';
import { User } from 'src/security/users/entities/user.entity';
import { TypeClientEnum } from '../emun/client.enum';
export declare class Client extends CrudEntity {
    name: string;
    numberDocument: string;
    email: string;
    telefono?: string;
    address?: string;
    descripcion?: string;
    type?: TypeClientEnum;
    vertical?: string;
    celular: string;
    city?: City;
    department?: Department;
    country?: Country;
    user?: User;
}
