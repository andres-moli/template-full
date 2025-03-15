export declare class WssTemplate {
    code: string;
    metadata?: string;
}
export declare class WssRecipient {
    phone: string;
    phonePrefix?: string;
    name?: string;
    document?: string;
}
export declare class WssArgs {
    notificationGroupId?: string;
    notificationGroupName?: string;
    profileId: string;
    subject: string;
    twoSteps?: boolean;
    template: WssTemplate;
    recipient: WssRecipient;
}
