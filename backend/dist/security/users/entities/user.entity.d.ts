import { TypeWorker, UserTypes } from '../enums/user-type.enum';
import { UserDocumentTypes } from '../../../common/enum/document-type.enum';
import { UserStatusTypes } from '../enums/status-type.enum';
import { City } from '../../../general/city/entities/city.entity';
import { Department } from '../../../general/department/entities/departament.entity';
import { Country } from '../../../general/country/entities/country.entity';
import { CrudEntity } from '../../../patterns/crud-pattern/entities/crud-entity';
import { Role } from '../../roles/entities/role.entity';
export declare class User extends CrudEntity {
    name: string;
    middleName: string;
    lastName: string;
    secondSurname: string;
    email: string;
    password: string;
    identificationType: UserDocumentTypes;
    identificationNumber: string;
    dateIssue: Date;
    legalRepresentativeIdentificationType: UserDocumentTypes;
    legalRepresentativeIdentificationNumber: string;
    phoneCountryCode: string;
    phoneNumber: string;
    address: string;
    hasRural: boolean;
    confirmationCode: string;
    position?: string;
    typeWoker?: TypeWorker;
    status: UserStatusTypes;
    phoneVerification: boolean;
    emailVerification: boolean;
    type: UserTypes;
    roles: Role[];
    city: City;
    department: Department;
    country: Country;
}
