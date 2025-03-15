import { EmailManagerService } from './email.manager.service';
import { ProfileService } from '../../profile/services/profile.service';
import { EmailArgs, EmailRecipient } from '../dto/args/email.args';
import { IEmailResponse } from '../interface/email.interface';
import { User } from '../../../../security/users/entities/user.entity';
export declare class EmailService {
    private readonly emailManagerService;
    private readonly profileService;
    constructor(emailManagerService: EmailManagerService, profileService: ProfileService);
    createEmail(emailArgs: EmailArgs): Promise<IEmailResponse>;
    getRecipientByUser(user: User): EmailRecipient[];
    private __hasValidRecipient;
}
