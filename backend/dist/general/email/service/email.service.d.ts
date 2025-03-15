import { MailerService } from '@nestjs-modules/mailer';
import { ISendMailContext } from '../interface/email.interface';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(to: string, subject: string, template: string, context: ISendMailContext): Promise<void>;
}
