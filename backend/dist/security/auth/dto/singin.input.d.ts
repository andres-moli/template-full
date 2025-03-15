import { PersonTypes } from "../../../common/enum/person-type.enum";
import { UserDocumentTypes } from "../../../common/enum/document-type.enum";
export declare class SigninInput {
    personType?: PersonTypes;
    identificationType?: UserDocumentTypes;
    identificationNumber?: string;
    legalRepresentativeIdentificationNumber?: string;
    verificationDigit?: string;
    email?: string;
    password: string;
}
