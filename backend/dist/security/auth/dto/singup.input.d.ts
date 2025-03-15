import { UserDocumentTypes } from '../../../common/enum/document-type.enum';
export declare class SignupInput {
    name: string;
    middleName?: string;
    lastName: string;
    secondSurname?: string;
    email: string;
    confirmationEmail: string;
    password: string;
    confirmationPassword: string;
    identificationType: UserDocumentTypes;
    identificationNumber: string;
    dateIssue?: Date;
    legalRepresentativeIdentificationType?: UserDocumentTypes;
    legalRepresentativeIdentificationNumber?: string;
    phoneCountryCode: string;
    phoneNumber: string;
    countryId: string;
    departmentId: string;
    cityId: string;
    address: string;
    hasRural: boolean;
}
