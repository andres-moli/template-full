import { Profile } from '../entities/profile.entity';
import { ProfileService } from '../services/profile.service';
declare const ProfileResolver_base: import("@nestjs/common").Type<{
    readonly service: ProfileService;
    create(createInput: import("../dto/inputs/create-profile.input").CreateProfileInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Profile>;
    update(updateInput: import("../dto/inputs/update-profile.input").UpdateProfileInput, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Profile>;
    remove(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Profile>;
    findOne(id: unknown, context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext): Promise<Profile>;
    findAll(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Profile[]>;
    findOneArg(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<Profile>;
    Count(context: import("../../../../patterns/crud-pattern/interfaces/context.interface").IContext, args: any): Promise<import("../../../../patterns/crud-pattern/classes/args/metadata-pagination.args").MetadataPagination>;
}>;
export declare class ProfileResolver extends ProfileResolver_base {
    getUrl(profile: Profile, context: any): Promise<String>;
}
export {};
