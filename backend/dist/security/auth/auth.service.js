"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const users_service_1 = require("../users/services/users.service");
const user_type_enum_1 = require("../users/enums/user-type.enum");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_constants_1 = require("./constants/events.constants");
const document_type_enum_1 = require("../../common/enum/document-type.enum");
const status_type_enum_1 = require("../users/enums/status-type.enum");
const verification_type_1 = require("./enum/verification-type");
const events_constants_2 = require("../users/constants/events.constants");
const user_key_origin_enum_1 = require("../users/enums/user-key-origin.enum");
const type_notificartion_enum_1 = require("../../general/notifications/notification/enums/type-notificartion.enum");
const functions_1 = require("../../common/functions");
const email_service_1 = require("../../general/email/service/email.service");
const moment_1 = __importDefault(require("moment"));
let AuthService = class AuthService {
    constructor(userService, jwtService, eventEmitter, mailService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.eventEmitter = eventEmitter;
        this.mailService = mailService;
    }
    async sendEmailRecovryPassword(email) {
        try {
            const user = await this.userService.findOneByEmail({ user: undefined }, email, true);
            const token = this.getJwtTokenWithAuth(user);
            let contextE = {
                url: process.env.EMAIL_FRONTEND + "resetPassword/" + token,
                name: user.name + " " + user.lastName || "",
                date: (0, moment_1.default)().format("YYYY MM DD HH:mm")
            };
            await this.mailService.sendMail(email, "RECUPERAR CONTRASEÑA", "password", contextE);
            return "Correo enviado con exito";
        }
        catch (err) {
            new Error(err.message);
        }
    }
    async restPassword(user, password) {
        return this.userService.resetPassword({ user }, password);
    }
    getJwtTokenWithOutAuth(user) {
        return this.jwtService.sign({ id: user.id, hasAuthorized: false });
    }
    getJwtTokenWithAuth(user) {
        return this.jwtService.sign({ id: user.id, hasAuthorized: true });
    }
    async checkToken(token) {
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET,
                ignoreExpiration: false
            });
            const { id } = payload;
            const user = await this.userService.findOneById({ user: undefined }, id, true);
            return user;
        }
        catch (e) {
            throw new common_1.BadRequestException("Invalid token");
        }
    }
    async sendVerificationCode(type, context, user, code) {
        if (user.password)
            delete user.password;
        const origin = user_key_origin_enum_1.UserKeyOrigin.TwoSteps;
        await this.eventEmitter.emitAsync(events_constants_2.registerCodeEvent, { context, code, user, origin });
        if (type === verification_type_1.VerificationTypes.Phone) {
            this.eventEmitter.emitAsync(events_constants_1.sendVerificationCodeToJwtEvent, { context, user, code, type: type_notificartion_enum_1.TypeNotification.Sms });
        }
        else if (type === verification_type_1.VerificationTypes.Email) {
            this.eventEmitter.emitAsync(events_constants_1.sendVerificationCodeToJwtEvent, { context, user, code, type: type_notificartion_enum_1.TypeNotification.Email });
        }
    }
    async signUpWithDocument(context, signupInput) {
        const { name, email, confirmationEmail, password, confirmationPassword, identificationNumber, identificationType, legalRepresentativeIdentificationNumber, dateIssue } = signupInput;
        if (email !== confirmationEmail) {
            throw new common_1.BadRequestException('confirmationEmail must be equal to email');
        }
        if (password !== confirmationPassword) {
            throw new common_1.BadRequestException('confirmationPassword must be equal to password');
        }
        const validateDocument = await this.userService.findOneByIdentificationNumber(context, identificationNumber, identificationType, false);
        if (validateDocument) {
            throw new common_1.BadRequestException(`User with identification number: ${identificationNumber} already exists in the database`);
        }
        if (identificationType === document_type_enum_1.UserDocumentTypes.Nit && !legalRepresentativeIdentificationNumber) {
            throw new common_1.BadRequestException('Legal entities must have a legal representative');
        }
        if (identificationType !== document_type_enum_1.UserDocumentTypes.Nit && !dateIssue) {
            throw new common_1.BadRequestException('Natural persons must have the date of issuance of the document.');
        }
        if (identificationType === document_type_enum_1.UserDocumentTypes.Nit) {
            if (!name) {
                throw new common_1.BadRequestException('Legal entities must have a name');
            }
            delete signupInput.middleName;
            delete signupInput.lastName;
            delete signupInput.secondSurname;
        }
        const confirmationCode = (0, functions_1.generateRandomCode)(9);
        const findCountry = await this.eventEmitter.emitAsync(events_constants_1.countryEvent, { context, countryId: signupInput.countryId });
        const country = findCountry[0];
        if (!country)
            throw new common_1.NotFoundException(`Country with id ${signupInput.countryId} does not exist`);
        const findDepartment = await this.eventEmitter.emitAsync(events_constants_1.departmentEvent, { context, departmentId: signupInput.departmentId, countryId: signupInput.countryId });
        const department = findDepartment[0];
        if (!department)
            throw new common_1.NotFoundException(`Department with id ${signupInput.departmentId} does not exist`);
        const findCity = await this.eventEmitter.emitAsync(events_constants_1.cityEvent, { context, cityId: signupInput.cityId, departmentId: signupInput.departmentId });
        const city = findCity[0];
        if (!city)
            throw new common_1.NotFoundException(`City with id ${signupInput.cityId} does not exist`);
        const signupInputWithRandomCode = {
            ...signupInput,
            confirmationCode,
            country,
            department,
            city,
        };
        await this.eventEmitter.emitAsync(events_constants_1.verifyIdentificationNumberEvent, { identificationNumber });
        const user = await this.userService.create(context, { ...signupInputWithRandomCode, type: user_type_enum_1.UserTypes.User });
        this.eventEmitter.emitAsync(events_constants_1.signupEmailEvent, { context, user, confirmationCode });
        const token = this.getJwtTokenWithAuth(user);
        return { token, user };
    }
    async signUpWithEmail(context, signupInput) {
        const { password, confirmationPassword } = signupInput;
        if (password !== confirmationPassword) {
            throw new common_1.BadRequestException('confirmationPassword must be equal to password');
        }
        const confirmationCode = (0, functions_1.generateRandomCode)(9);
        const signupInputWithRandomCode = {
            ...signupInput,
            confirmationCode,
            type: user_type_enum_1.UserTypes.User
        };
        const user = await this.userService.partialCreation(context, signupInputWithRandomCode);
        this.eventEmitter.emitAsync(events_constants_1.signupEmailEvent, { context, user, confirmationCode });
        const token = this.getJwtTokenWithAuth(user);
        return { token, user };
    }
    async signin(context, signinInput) {
        const { email, password, identificationNumber, legalRepresentativeIdentificationNumber, identificationType, verificationDigit } = signinInput;
        const user = await this.userService.findOneByIdentificationNumberOrEmail(context, identificationNumber, email, true);
        if (user.identificationType === document_type_enum_1.UserDocumentTypes.Nit) {
            if (!verificationDigit || !identificationNumber)
                throw new common_1.UnauthorizedException('Credentials invalid');
            const validateVerificationDigit = (0, functions_1.calculateDigitVerification)(identificationNumber).toString();
            if (verificationDigit !== validateVerificationDigit)
                throw new common_1.UnauthorizedException("The verification digit is not correct");
            const { legalRepresentativeIdentificationNumber: legalRepresentativeIdentificationNumberDb, legalRepresentativeIdentificationType: identificationTypeDb } = user;
            if ((legalRepresentativeIdentificationNumber !== legalRepresentativeIdentificationNumberDb) || (identificationType !== identificationTypeDb))
                throw new common_1.UnauthorizedException('Credentials invalid');
            if (email)
                throw new common_1.UnauthorizedException('You cant login with email');
        }
        if (user.status === status_type_enum_1.UserStatusTypes.Inactive || !bcrypt.compareSync(password, user.password))
            throw new common_1.UnauthorizedException('Credentials invalid');
        const token = this.getJwtTokenWithAuth(user);
        return { token, user };
    }
    async signInUserAdmin(user, signInAdminInput) {
        const { phoneVerification, emailVerification } = user;
        const { verificationTypes } = signInAdminInput;
        const context = { user: undefined };
        let token;
        if (!phoneVerification && !emailVerification) {
            token = this.getJwtTokenWithAuth(user);
        }
        else {
            if (phoneVerification && emailVerification && !verificationTypes)
                throw new common_1.BadRequestException("You must provide a method of verification");
            const code = (0, functions_1.generateRandomCode)(6);
            if (verificationTypes) {
                if (verificationTypes === verification_type_1.VerificationTypes.Phone && !user.phoneNumber)
                    throw new common_1.BadRequestException("You must select another verification method");
                await this.sendVerificationCode(verificationTypes, context, user, code);
            }
            else {
                if (user.phoneVerification && !user.phoneNumber)
                    throw new common_1.BadRequestException("You must select another verification method");
                if (user.phoneVerification && user.phoneNumber)
                    await this.sendVerificationCode(verification_type_1.VerificationTypes.Phone, context, user, code);
                if (user.emailVerification)
                    await this.sendVerificationCode(verification_type_1.VerificationTypes.Email, context, user, code);
            }
            token = this.getJwtTokenWithOutAuth(user);
        }
        return { token, user };
    }
    async validateUser(context, id) {
        const user = await this.userService.findOne(context, id, true);
        if (user.status === status_type_enum_1.UserStatusTypes.Inactive)
            throw new common_1.UnauthorizedException(`user is inactive`);
        delete user.password;
        return user;
    }
    async validateFunctionality(context, key, userId) {
        return this.userService.hasFunctionality(context, key, userId);
    }
    async validateUserToken(validateTokenInput) {
        const { token } = validateTokenInput;
        const user = await this.checkToken(token);
        delete user.password;
        return user;
    }
    async approvalJwt(approvalTokenInput) {
        const { code, token } = approvalTokenInput;
        const user = await this.checkToken(token);
        const checkJwtCode = await this.eventEmitter.emitAsync(events_constants_2.checkCodeEvent, { context: { user: undefined }, code, user, origin: user_key_origin_enum_1.UserKeyOrigin.TwoSteps });
        const checkJwtCodeEv = checkJwtCode[0];
        if (!checkJwtCodeEv)
            throw new common_1.UnauthorizedException('Invalid code');
        const newToken = this.getJwtTokenWithAuth(user);
        return { token: newToken, user };
    }
    revalidateToken(user) {
        const token = this.getJwtTokenWithAuth(user);
        return { token, user };
    }
    async sendCodeDoubleVerification(sendDoubleVerificationInput) {
        const { token, email, phoneNumber } = sendDoubleVerificationInput;
        if ((!email && !phoneNumber) || (email && phoneNumber))
            throw new common_1.BadRequestException('You must provide at least one method of sending the code.');
        const user = await this.checkToken(token);
        const currentUser = {
            ...user,
            email: email ? email : user.email,
            phoneNumber: phoneNumber ? phoneNumber : user.phoneNumber
        };
        const context = { user: undefined };
        const type = email ? verification_type_1.VerificationTypes.Email : verification_type_1.VerificationTypes.Phone;
        const code = (0, functions_1.generateRandomCode)(6);
        this.sendVerificationCode(type, context, currentUser, code);
        return "Code sent successfully";
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        event_emitter_1.EventEmitter2,
        email_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map