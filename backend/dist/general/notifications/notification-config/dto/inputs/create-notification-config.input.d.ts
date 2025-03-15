import { NotificationTypes } from '../../enums/notification-type.enum';
export declare class CreateNotificationConfigInput {
    name: string;
    profileId: string;
    type: NotificationTypes;
    subtype: string;
    hasEmail?: boolean;
    hasTwoStepsEmail?: boolean;
    hasSms?: boolean;
    hasTwoStepsSms?: boolean;
    hasWss?: boolean;
    hasTwoStepsWss?: boolean;
    hasPush?: boolean;
    hasTwoStepsPush?: boolean;
    emailPrincipalCode?: string;
    emailDuplicateCode?: string;
    smsBody?: string;
    wssCode?: string;
    html?: string;
}
