import { TypeNotification } from '../../enums/type-notificartion.enum';
import { EmailRecipient } from '../../../../../external-api/certimails/email/dto/args/email.args';
import { SmsRecipient } from '../../../../../external-api/certimails/sms/dto/args/sms.args';
import { WssRecipient } from '../../../../../external-api/certimails/wss/dto/args/wss.args';
import { NotificationTypes } from '../../../notification-config/enums/notification-type.enum';
export declare class CreateNotificationInput {
    type: TypeNotification;
    userId?: string;
    emailRecipients?: EmailRecipient[];
    smsRecipient?: SmsRecipient;
    wssRecipient?: WssRecipient;
    typeConfig: NotificationTypes;
    subtypeConfig: string;
    metadata?: string;
    notificationGroupId?: string;
    notificationGroupName?: string;
}
