import { HttpService } from '@nestjs/axios';
import { CreateProfileInput } from '../dto/inputs/create-profile.input';
export declare class ProfileManagerService {
    private readonly httpService;
    constructor(httpService: HttpService);
    createProfile(createInput: CreateProfileInput): Promise<string>;
}
