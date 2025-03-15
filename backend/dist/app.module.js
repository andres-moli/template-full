"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const bull_1 = require("@nestjs/bull");
const path_1 = require("path");
const Joi = __importStar(require("joi"));
const security_module_1 = require("./security/security.module");
const typeorm_1 = require("@nestjs/typeorm");
const main_module_1 = require("./main/main.module");
const general_module_1 = require("./general/general.module");
const event_emitter_1 = require("@nestjs/event-emitter");
const config_2 = require("./config");
const patterns_module_1 = require("./patterns/patterns.module");
const mongoose_1 = require("@nestjs/mongoose");
const external_api_module_1 = require("./external-api/external-api.module");
const password_scalar_1 = require("./security/users/scalars/password.scalar");
const throw_exception_filter_1 = require("./common/functions/throw-exception-filter");
const nestjs_i18n_1 = require("nestjs-i18n");
const language_decorator_1 = require("./common/i18n/decorators/language.decorator");
const serve_static_1 = require("@nestjs/serve-static");
const graphql_subscriptions_1 = require("graphql-subscriptions");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.config],
                validationSchema: Joi.object({
                    STATE: Joi.string().required(),
                    APP_PORT: Joi.number().required(),
                    HTTPS: Joi.string().optional(),
                    HTTPS_PFX_PATH: Joi.string().optional(),
                    HTTPS_PFX_PASS: Joi.string().optional(),
                    FILES_UPLOAD_LIMIT: Joi.string().required(),
                    DB_TYPE: Joi.string().required(),
                    DB_HOST: Joi.string().required(),
                    DB_PORT: Joi.number().required(),
                    DB_USERNAME: Joi.string().required(),
                    DB_PASSWORD: Joi.string().required(),
                    DB_NAME: Joi.string().required(),
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRES_IN: Joi.string().required(),
                    DB_FILE_MODE: Joi.string().required(),
                    DB_MONGODB_SERVER: Joi.string().optional(),
                    DB_MONGODB_NAME: Joi.string().optional(),
                    SA_EMAIL: Joi.string().required(),
                    SA_PASSWORD: Joi.string().required(),
                }),
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                plugins: [
                    (0, default_1.ApolloServerPluginLandingPageLocalDefault)()
                ],
                subscriptions: {
                    'subscriptions-transport-ws': {
                        path: '/graphql',
                    },
                },
                resolvers: { ValidatePassword: password_scalar_1.CustomPasswordScalar },
                formatError: (formatttedError, error) => {
                    return {
                        message: formatttedError.message,
                        code: formatttedError.extensions.code,
                        status: error.extensions.status,
                        path: process.env.STATE === 'prod' ? undefined : formatttedError.path,
                        locations: process.env.STATE === 'prod' ? undefined : formatttedError.locations,
                    };
                }
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_2.config.KEY],
                useFactory: (configService) => {
                    console.log('configService', configService);
                    return {
                        type: configService.database.type,
                        host: configService.database.host,
                        port: +configService.database.port,
                        username: configService.database.user,
                        password: configService.database.password,
                        database: configService.database.name,
                        synchronize: true,
                        autoLoadEntities: true,
                        logging: true,
                        timezone: 'Z',
                        useUTC: true,
                        extra: {
                            trustServerCertificate: true,
                        }
                    };
                }
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            ...(process.env.REDIS_PORT) ?
                [
                    bull_1.BullModule.forRootAsync({
                        imports: [config_1.ConfigModule],
                        inject: [config_2.config.KEY],
                        useFactory: async (configService) => ({
                            redis: {
                                host: configService.redis.host,
                                port: +configService.redis.port,
                                db: 1
                            }
                        }),
                    })
                ] : [],
            ...(process.env.DB_MONGODB_SERVER) ?
                [
                    mongoose_1.MongooseModule.forRoot(process.env.DB_MONGODB_SERVER + '/' + process.env.DB_MONGODB_NAME, { dbName: process.env.DB_MONGODB_NAME })
                ] : [],
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
                serveRoot: '/public',
            }),
            nestjs_i18n_1.I18nModule.forRootAsync({
                useFactory: (configService) => ({
                    fallbackLanguage: 'en',
                    loaderOptions: {
                        path: (0, path_1.join)(__dirname, '/common/i18n/'),
                        watch: true,
                    },
                }),
                resolvers: [
                    { use: nestjs_i18n_1.QueryResolver, options: ['lang'] },
                    nestjs_i18n_1.AcceptLanguageResolver,
                    new nestjs_i18n_1.HeaderResolver(['x-lang']),
                ],
                inject: [config_1.ConfigService],
            }),
            security_module_1.SecurityModule,
            main_module_1.MainModule,
            general_module_1.GeneralModule,
            patterns_module_1.PatternsModule,
            external_api_module_1.ExternalApiModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: throw_exception_filter_1.ThrowExceptionFilter
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: language_decorator_1.LanguageInterceptor,
            },
            graphql_subscriptions_1.PubSub
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map