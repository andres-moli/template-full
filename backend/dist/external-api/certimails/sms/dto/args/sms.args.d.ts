export declare class SmsRecipient {
    phone: string;
    name?: string;
    lastName?: string;
    email?: string;
}
export declare class SmsArgs {
    subject: string;
    message: string;
    metadata?: string;
    notificationGroupId?: string;
    notificationGroupName?: string;
    profileId: string;
    twoSteps?: boolean;
    recipient: SmsRecipient;
}
