import { TypeWorker, UserTypes } from '../../enums/user-type.enum';
import { UserDocumentTypes } from '../../../../common/enum/document-type.enum';
export declare class CreateUserInput {
    name: string;
    middleName?: string;
    lastName: string;
    secondSurname?: string;
    email: string;
    password: string;
    identificationType: UserDocumentTypes;
    identificationNumber: string;
    dateIssue?: Date;
    legalRepresentativeIdentificationType?: UserDocumentTypes;
    legalRepresentativeIdentificationNumber?: string;
    typeWoker?: TypeWorker;
    phoneCountryCode?: string;
    phoneNumber: string;
    countryId: string;
    departmentId: string;
    cityId: string;
    address: string;
    hasRural: boolean;
    type: UserTypes;
    position?: string;
}
