import { RecipientType } from '../../interface/email.enum';
export declare class EmailTemplate {
    principal: string;
    secondary?: string;
    metadata?: string;
}
export declare class EmailArgs {
    subject: string;
    type: string;
    notificationGroupId?: string;
    notificationGroupName?: string;
    profileId: string;
    twoSteps?: boolean;
    template: EmailTemplate;
    recipients: EmailRecipient[];
}
export declare class EmailAditionalInfo {
    name?: string;
    lastName?: string;
    id?: string;
    phone?: string;
}
export declare class EmailRecipient {
    email: string;
    type: RecipientType;
    aditionalInfo?: EmailAditionalInfo;
}
