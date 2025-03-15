export declare const config: (() => {
    database: {
        type: string;
        host: string;
        port: string;
        user: string;
        password: string;
        name: string;
    };
    redis: {
        host: string;
        port: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    sa: {
        email: string;
        password: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        type: string;
        host: string;
        port: string;
        user: string;
        password: string;
        name: string;
    };
    redis: {
        host: string;
        port: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    sa: {
        email: string;
        password: string;
    };
}>;
