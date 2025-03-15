"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userStub = exports.city = exports.department = exports.country = exports.userId = void 0;
const status_type_enum_1 = require("../../enums/status-type.enum");
const user_type_enum_1 = require("../../enums/user-type.enum");
const document_type_enum_1 = require("../../../../common/enum/document-type.enum");
exports.userId = '93DB1910-667E-EE11-B0DB-D59CC639059E';
exports.country = {
    id: '93DB1910-667E-EE11-B0DB-D59CC639059F',
    createdAt: new Date('2023-11-08 13:38:52.693'),
    updatedAt: new Date('2023-11-14 16:46:00.626'),
    deletedAt: null,
    code: 2,
    name: "Atlantico",
    user: []
};
exports.department = {
    id: '93DB1910-667E-EE11-B0DB-D59CC639059G',
    createdAt: new Date('2023-11-08 13:38:52.693'),
    updatedAt: new Date('2023-11-14 16:46:00.626'),
    deletedAt: null,
    code: 2,
    name: "Atlantico",
    country: exports.country,
    user: []
};
exports.city = {
    id: '93DB1910-667E-EE11-B0DB-D59CC639059H',
    createdAt: new Date('2023-11-08 13:38:52.693'),
    updatedAt: new Date('2023-11-14 16:46:00.626'),
    deletedAt: null,
    code: 1,
    name: "Barranquilla",
    department: exports.department,
    user: []
};
exports.userStub = {
    createdAt: new Date('2023-11-08 13:38:52.693'),
    updatedAt: new Date('2023-11-14 16:46:00.626'),
    deletedAt: null,
    name: 'Nicolas',
    middleName: null,
    lastName: "Gonzalez",
    secondSurname: null,
    email: 'ngonzalez@comercializadora-s3.com',
    password: '$2b$10$MqSrd.A1Rxn2Tgvk1p361ezKJpIKkd76UOhQw.iXVnLekRtn.kH26',
    identificationType: document_type_enum_1.UserDocumentTypes.CitizenshipCard,
    identificationNumber: "1094961974",
    dateIssue: null,
    phoneCountryCode: "57",
    phoneNumber: "3167951928",
    country: exports.country,
    department: exports.department,
    city: exports.city,
    address: "Calle 9",
    confirmationCode: "12345",
    status: status_type_enum_1.UserStatusTypes.Inactive,
    type: user_type_enum_1.UserTypes.User,
    hasRural: false,
    legalRepresentativeIdentificationType: null,
    legalRepresentativeIdentificationNumber: null,
    roles: [],
    phoneVerification: true,
    emailVerification: false
};
//# sourceMappingURL=user.stub.js.map