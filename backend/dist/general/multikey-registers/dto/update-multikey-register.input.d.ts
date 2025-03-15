import { MultikeyRegisterId } from '../entities/multikey-register.identifier';
import { CreateMultikeyRegisterInput } from './create-multikey-register.input';
declare const UpdateMultikeyRegisterInput_base: import("@nestjs/common").Type<Partial<CreateMultikeyRegisterInput>>;
export declare class UpdateMultikeyRegisterInput extends UpdateMultikeyRegisterInput_base {
    id: MultikeyRegisterId;
}
export {};
