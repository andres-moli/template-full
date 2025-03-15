import { WssManagerService } from './wss.manager.service';
import { ProfileService } from '../../profile/services/profile.service';
import { WssArgs, WssRecipient } from '../dto/args/wss.args';
import { IWssResponse } from '../interface/wss.interface';
import { User } from '../../../../security/users/entities/user.entity';
export declare class WssService {
    private readonly wssManagerService;
    private readonly profileService;
    constructor(wssManagerService: WssManagerService, profileService: ProfileService);
    createWss(wssArgs: WssArgs): Promise<IWssResponse>;
    getDestinataryByUser(user: User): WssRecipient;
}
