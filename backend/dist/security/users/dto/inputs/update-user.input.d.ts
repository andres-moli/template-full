import { CreateUserInput } from './create-user.input';
import { UserStatusTypes } from '../../enums/status-type.enum';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    id: string;
    isActive?: boolean;
    status: UserStatusTypes;
}
export {};
