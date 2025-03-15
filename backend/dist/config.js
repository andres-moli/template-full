"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config_1 = require("@nestjs/config");
exports.config = (0, config_1.registerAs)('config', () => {
    return {
        database: {
            type: process.env.DB_TYPE,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            name: process.env.DB_NAME,
        },
        redis: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        },
        jwt: {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRES_IN,
        },
        sa: {
            email: process.env.SA_EMAIL,
            password: process.env.SA_PASSWORD,
        }
    };
});
//# sourceMappingURL=config.js.map