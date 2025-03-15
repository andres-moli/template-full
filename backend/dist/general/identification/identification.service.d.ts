export declare class IdentificationService {
    verifyIdentificationNumber(IdentificationNumber: string): Promise<boolean>;
    onPageVersionClone({ identificationNumber, }: {
        identificationNumber: string;
    }): Promise<void>;
}
