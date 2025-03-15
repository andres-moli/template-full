import { SmsManagerService } from './sms.manager.service';
import { ISmsResponse } from '../interface/sms.interface';
import { SmsArgs, SmsRecipient } from '../dto/args/sms.args';
import { ProfileService } from '../../profile/services/profile.service';
import { User } from '../../../../security/users/entities/user.entity';
export declare class SmsService {
    private readonly smsManagerService;
    private readonly profileService;
    constructor(smsManagerService: SmsManagerService, profileService: ProfileService);
    createSms(smsArgs: SmsArgs): Promise<ISmsResponse>;
    getDestinataryByUser(user: User): SmsRecipient;
    private __replaceHtmlWithDictionary;
}
