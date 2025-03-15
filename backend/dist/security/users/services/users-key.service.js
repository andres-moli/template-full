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
exports.UsersKeyService = exports.serviceStructure = void 0;
const common_1 = require("@nestjs/common");
const find_users_args_1 = require("../dto/args/find-users.args");
const user_key_entity_1 = require("../entities/user-key.entity");
const create_user_key_input_1 = require("../dto/inputs/create-user-key.input");
const update_user_key_input_1 = require("../dto/inputs/update-user-key.input");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_constants_1 = require("../constants/events.constants");
const moment = __importStar(require("moment-timezone"));
const moment_1 = __importDefault(require("moment"));
const crud_service_mixin_1 = require("../../../patterns/crud-pattern/mixins/crud-service.mixin");
const crud_service_structure_interface_1 = require("../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface");
exports.serviceStructure = (0, crud_service_structure_interface_1.CrudServiceStructure)({
    entityType: user_key_entity_1.UserKey,
    createInputType: create_user_key_input_1.CreateUserKeyInput,
    updateInputType: update_user_key_input_1.UpdateUserKeyInput,
    findArgsType: find_users_args_1.FindUserArgs,
});
let UsersKeyService = class UsersKeyService extends (0, crud_service_mixin_1.CrudServiceFrom)(exports.serviceStructure) {
    async registerCode(context, code, user, origin) {
        const repository = this.getRepository(context);
        const now = moment.tz('America/Bogota');
        const dateExp = (0, moment_1.default)(now).add(1, 'hour').toString();
        let codeRecord = await repository.findOne({
            where: {
                user: { id: user.id },
                origin
            },
        });
        if (!codeRecord) {
            codeRecord = repository.create({ code, expirationCode: dateExp, user, origin });
        }
        else {
            codeRecord.code = code;
            codeRecord.expirationCode = dateExp;
        }
        await repository.save(codeRecord);
        return true;
    }
    async checkCode(context, code, user, origin) {
        const repository = this.getRepository(context);
        const getRecord = await repository.findOne({
            where: {
                code,
                user: { id: user.id },
                origin
            },
        });
        if (!getRecord)
            return false;
        const { expirationCode } = getRecord;
        const now = (0, moment_1.default)().utcOffset('-05:00');
        const expirationMoment = (0, moment_1.default)(expirationCode).utcOffset('-05:00');
        if (now > expirationMoment)
            return false;
        return true;
    }
    async onRegisterCode({ context, code, user, origin }) {
        return this.registerCode(context, code, user, origin);
    }
    async onCheckCode({ context, code, user, origin }) {
        return this.checkCode(context, code, user, origin);
    }
};
exports.UsersKeyService = UsersKeyService;
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.registerCodeEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersKeyService.prototype, "onRegisterCode", null);
__decorate([
    (0, event_emitter_1.OnEvent)(events_constants_1.checkCodeEvent),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersKeyService.prototype, "onCheckCode", null);
exports.UsersKeyService = UsersKeyService = __decorate([
    (0, common_1.Injectable)()
], UsersKeyService);
//# sourceMappingURL=users-key.service.js.map