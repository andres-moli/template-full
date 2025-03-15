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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const create_user_input_1 = require("../dto/inputs/create-user.input");
const update_user_input_1 = require("../dto/inputs/update-user.input");
const user_entity_1 = require("../entities/user.entity");
const user_type_enum_1 = require("../enums/user-type.enum");
const find_users_args_1 = require("../dto/args/find-users.args");
const status_type_enum_1 = require("../enums/status-type.enum");
const jwt_1 = require("@nestjs/jwt");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_constants_1 = require("../constants/events.constants");
const functions_1 = require("../../../common/functions");
const user_key_origin_enum_1 = require("../enums/user-key-origin.enum");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
const config_1 = require("../../../config");
const events_constants_2 = require("../../auth/constants/events.constants");
const events_contants_1 = require("../../roles/constants/events.contants");
const visit_entity_1 = require("../../../main/seller/visit/entities/visit.entity");
const visit_emun_1 = require("../../../main/seller/visit/emun/visit.emun");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: user_entity_1.User,
    createInputType: create_user_input_1.CreateUserInput,
    updateInputType: update_user_input_1.UpdateUserInput,
    findArgsType: find_users_args_1.FindUserArgs
});
let UsersService = class UsersService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    constructor(configService, jwtService, eventEmitter) {
        super();
        this.configService = configService;
        this.jwtService = jwtService;
        this.eventEmitter = eventEmitter;
    }
    hash(plainPassword) {
        return bcrypt.hashSync(plainPassword, 10);
    }
    checkUserPassword(password, user) {
        const { password: currentPassword } = user;
        if (!bcrypt.compareSync(password, currentPassword))
            throw new common_1.BadRequestException('There was a problem validating the current password.');
        return true;
    }
    checkPasswordConfirm(password, passwordConfirm) {
        if (password !== passwordConfirm)
            throw new common_1.BadRequestException('confirmationPassword must be equal to password');
        return true;
    }
    async resetSuperAdmin(context) {
        const repository = this.getRepository(context);
        const saEmail = this.configService.sa.email;
        const saPassword = this.configService.sa.password;
        let user = await this.findOneByEmail(context, saEmail);
        const password = this.hash(saPassword);
        if (!user) {
            user = repository.create({ email: saEmail, password, name: 'super admin', type: user_type_enum_1.UserTypes.SuperAdmin, status: status_type_enum_1.UserStatusTypes.Active });
        }
        else {
            user.password = password;
        }
        return repository.save(user);
    }
    async partialCreation(context, createInput) {
        const repository = this.getRepository(context);
        const { email, password } = createInput;
        const findUser = await repository.findOne({
            where: {
                email
            }
        });
        if (findUser) {
            throw new common_1.BadRequestException(`User with email: ${email} already exists in the database`);
        }
        const newUser = repository.create({ ...createInput, password: this.hash(password) });
        await repository.save(newUser);
        return newUser;
    }
    async beforeCreate(context, repository, entity, createInput) {
        if (createInput.type === user_type_enum_1.UserTypes.SuperAdmin &&
            context.user.type !== user_type_enum_1.UserTypes.SuperAdmin)
            throw new common_1.ForbiddenException(`only a superAdmin can create a new superAdmin user`);
        const sameEmailUser = await this.findOneByEmail(context, createInput.email);
        if (sameEmailUser)
            throw new common_1.BadRequestException(`User with email ${createInput.email} alredy exists`);
        entity.password = this.hash(createInput.password);
    }
    async beforeUpdate(context, repository, entity, updateInput) {
        if (updateInput.type === user_type_enum_1.UserTypes.SuperAdmin &&
            context.user.type !== user_type_enum_1.UserTypes.SuperAdmin)
            throw new common_1.ForbiddenException(`only a superAdmin can update a new superAdmin user`);
        if (updateInput.email && updateInput.password)
            entity.password = this.hash(updateInput.password);
    }
    async beforeRemove(context, repository, entity) {
        if (entity.type === user_type_enum_1.UserTypes.SuperAdmin &&
            context.user.type !== user_type_enum_1.UserTypes.SuperAdmin)
            throw new common_1.ForbiddenException(`only a superAdmin can remove a new superAdmin user`);
    }
    async findOneByEmail(context, email, orFail) {
        const repository = this.getRepository(context);
        const user = await repository.findOneBy({ email });
        if (orFail && !user)
            throw new common_1.NotFoundException(`User with email: ${email} not found`);
        return user;
    }
    async findOneById(context, id, orFail) {
        const repository = this.getRepository(context);
        const user = await repository.findOne({
            where: {
                id
            },
            relations: ['roles', 'roles.roleFx']
        });
        if (orFail && !user)
            throw new common_1.NotFoundException(`User with id: ${id} not found`);
        return user;
    }
    async findOneByIdentificationNumber(context, identificationNumber, identificationType, orFail) {
        const repository = this.getRepository(context);
        const user = await repository.findOneBy({ identificationNumber, identificationType });
        if (orFail && !user)
            throw new common_1.NotFoundException(`User with identification number: ${identificationNumber} not found`);
        return user;
    }
    async findActivityNowUser(context, id) {
        const repository = this.getRepository(context).manager;
        const visits = await repository.find(visit_entity_1.Visit, {
            where: {
                user: {
                    id: id
                },
                status: visit_emun_1.StatusVisitEnum.initiated
            },
        });
        return visits.length > 0;
    }
    async findOneByIdentificationNumberOrEmail(context, identificationNumber, email, orFail) {
        const repository = this.getRepository(context);
        const user = await repository.findOne({
            where: [
                { identificationNumber },
                { email }
            ]
        });
        if (orFail && !user)
            throw new common_1.NotFoundException(`User with identification number: ${identificationNumber} not found`);
        return user;
    }
    async codeConfirmation(context, codeConfirmationInput) {
        const { code, email } = codeConfirmationInput;
        const repository = this.getRepository(context);
        const user = await this.findOneByEmail(context, email, true);
        if (user.confirmationCode !== code) {
            throw new common_1.BadRequestException("The code supplied does not correspond to the one sent");
        }
        const status = user.identificationNumber ? status_type_enum_1.UserStatusTypes.Active : status_type_enum_1.UserStatusTypes.PartlyActive;
        await repository.update(user.id, { status });
        user.status = status;
        return user;
    }
    async recoverPassword(context, passwordRecoveryInput) {
        const { email } = passwordRecoveryInput;
        const user = await this.findOneByEmail(context, email, true);
        const code = (0, functions_1.generateRandomCode)(6);
        await this.eventEmitter.emitAsync(events_constants_2.recoverPasswordEmailEvent, { context, user, code });
        await this.eventEmitter.emitAsync(events_constants_1.registerCodeEvent, { context, code, user, origin: user_key_origin_enum_1.UserKeyOrigin.RecoverPassword });
        return "Code sent successfully";
    }
    async updatePassword(context, updatePasswordInput) {
        const { token, password, passwordConfirm } = updatePasswordInput;
        const repository = this.getRepository(context);
        this.checkPasswordConfirm(password, passwordConfirm);
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.jwt.secret
            });
            const { id } = payload;
            const user = await this.findOneById(context, id, true);
            const hashedPassword = this.hash(password);
            await repository.update(user.id, { password: hashedPassword });
            return user;
        }
        catch (error) {
            throw new common_1.ForbiddenException("Invalid token");
        }
    }
    async hasFunctionality(context, key, userId) {
        const repository = this.getRepository(context);
        const user = await repository.findOne({
            where: {
                id: userId,
                roles: {
                    roleFx: {
                        permission: key
                    }
                }
            },
            relations: [
                'roles',
                'roles.roleFx'
            ]
        });
        return user ? true : false;
    }
    async findUserAndRole(context, addAndRemoveRoleInput) {
        const { roleId, userId } = addAndRemoveRoleInput;
        const user = await this.findOneById(context, userId, true);
        const roleEvent = await this.eventEmitter.emitAsync(events_contants_1.validateRoleEvent, { context, roleId, orFail: true });
        const role = roleEvent[0];
        if (!role)
            throw new common_1.NotFoundException(`Role with id: ${roleId} not found`);
        return { user, role };
    }
    async addUserRole(context, addAndRemoveRoleInput) {
        const repository = this.getRepository(context);
        const data = await this.findUserAndRole(context, addAndRemoveRoleInput);
        const { user, role: roleFound } = data;
        const validate = user.roles.find(role => role.id === roleFound.id);
        if (!validate)
            user.roles.push(roleFound);
        return repository.save(user);
    }
    async removeUserRole(context, addAndRemoveRoleInput) {
        const repository = this.getRepository(context);
        const data = await this.findUserAndRole(context, addAndRemoveRoleInput);
        const { user, role: roleFound } = data;
        const roles = user.roles.filter(role => role.id !== roleFound.id);
        user.roles = roles;
        return repository.save(user);
    }
    async userRoles(context, user) {
        let userRoles = [];
        const currentUser = await this.findOneById(context, user.id, false);
        const { roles } = currentUser;
        userRoles = roles;
        return userRoles;
    }
    async userRolesFx(context, user) {
        const roles = await this.userRoles(context, user);
        let rolesFxWithoutRepeating;
        if (roles) {
            const rolesFx = roles.map(role => role.roleFx).flat();
            const seenPermissions = {};
            rolesFxWithoutRepeating = rolesFx.filter((role) => {
                if (!seenPermissions.hasOwnProperty(role.permission)) {
                    seenPermissions[role.permission] = true;
                    return true;
                }
                return false;
            });
        }
        return rolesFxWithoutRepeating;
    }
    async updateUserInformation(context, updateUserInformationInput) {
        const repository = this.getRepository(context);
        const { name: userName, lastName } = updateUserInformationInput;
        const { user: { id, name: currentName, lastName: currentLastName } } = context;
        const name = `${userName ? userName : currentName} ${lastName ? lastName : currentLastName}`;
        await repository.update(id, { name, ...updateUserInformationInput });
        const updatedUser = await this.findOneById(context, id, true);
        return updatedUser;
    }
    async updateUserPassword(context, updateUserPasswordInput) {
        const { currentPassword, newPassword, newPasswordConfirm } = updateUserPasswordInput;
        this.checkPasswordConfirm(newPassword, newPasswordConfirm);
        const { user: { id } } = context;
        const currentUser = await this.findOneById(context, id, true);
        this.checkUserPassword(currentPassword, currentUser);
        const repository = this.getRepository(context);
        await repository.update(id, { password: this.hash(newPassword) });
        return currentUser;
    }
    async resetPassword(context, password) {
        const { user: { id } } = context;
        const currentUser = await this.findOneById(context, id, true);
        const repository = this.getRepository(context);
        await repository.update(id, { password: this.hash(password) });
        return currentUser;
    }
    async enableAndDisableDoubleVerification(context, doubleVerificationInput) {
        const { code, emailVerification, phoneVerification } = doubleVerificationInput;
        const { user } = context;
        const repository = this.getRepository(context);
        const currentUser = await this.findOneById(context, user.id, true);
        const { phoneVerification: phoneVerificationDb, emailVerification: emailVerificationDb } = currentUser;
        if ((phoneVerification && !phoneVerificationDb) || (emailVerification && !emailVerificationDb)) {
            if (!code)
                throw new common_1.BadRequestException("You must provide a code");
            const checkJwtCode = await this.eventEmitter.emitAsync(events_constants_1.checkCodeEvent, { context, code, user, origin: user_key_origin_enum_1.UserKeyOrigin.TwoSteps });
            const checkJwtCodeEv = checkJwtCode[0];
            if (!checkJwtCodeEv)
                throw new common_1.UnauthorizedException('Invalid code');
            delete doubleVerificationInput.code;
            await repository.update(user.id, { ...doubleVerificationInput });
        }
        if ((!phoneVerification && !emailVerification) || (!phoneVerification && phoneVerificationDb) || (!emailVerification && emailVerificationDb)) {
            delete doubleVerificationInput.code;
            await repository.update(user.id, { ...doubleVerificationInput });
        }
        return "Updated two-step verification";
    }
    async fullName(context, user) {
        const { name, lastName } = user;
        return `${name} ${lastName}`;
    }
    async codeRecoverPassword(context, codeRecoverPasswordInput) {
        const { code, email } = codeRecoverPasswordInput;
        const user = await this.findOneByEmail(context, email, true);
        const [result] = await this.eventEmitter.emitAsync(events_constants_1.checkCodeEvent, { context, code, user, origin: user_key_origin_enum_1.UserKeyOrigin.RecoverPassword });
        if (!result)
            throw new common_1.UnauthorizedException('Invalid code');
        const token = this.jwtService.sign({ id: user.id });
        return token;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.config.KEY)),
    __metadata("design:paramtypes", [void 0, jwt_1.JwtService,
        event_emitter_1.EventEmitter2])
], UsersService);
//# sourceMappingURL=users.service.js.map