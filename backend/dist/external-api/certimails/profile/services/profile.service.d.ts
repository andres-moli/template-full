import { Repository } from 'typeorm';
import { CreateProfileInput } from '../dto/inputs/create-profile.input';
import { UpdateProfileInput } from '../dto/inputs/update-profile.input';
import { Profile } from '../entities/profile.entity';
import { ProfileManagerService } from './profile.manager.service';
import { IContext } from '../../../../patterns/crud-pattern/interfaces/context.interface';
export declare const serviceStructure: import("../../../../patterns/crud-pattern/interfaces/structures/crud-service-structure.interface").ICrudServiceStructure<unknown, Profile, CreateProfileInput, UpdateProfileInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>;
declare const ProfileService_base: import("@nestjs/common").Type<import("../../../../patterns/crud-pattern/interfaces/crud-service.interface").ICrudService<unknown, Profile, CreateProfileInput, UpdateProfileInput, import("../../../../patterns/crud-pattern/classes/args/default.args").DefaultArgs, IContext>>;
export declare class ProfileService extends ProfileService_base {
    private readonly profileManagerService;
    constructor(profileManagerService: ProfileManagerService);
    beforeCreate(context: IContext, repository: Repository<Profile>, entity: Profile, createInput: CreateProfileInput): Promise<void>;
}
export {};
