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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const https = __importStar(require("https"));
const bodyParser = __importStar(require("body-parser"));
const express = __importStar(require("express"));
const fs = __importStar(require("fs"));
const swagger_1 = require("@nestjs/swagger");
const throw_exception_filter_1 = require("./common/functions/throw-exception-filter");
const graphql_1 = require("graphql");
const graphql_2 = require("@nestjs/graphql");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const apollo_server_express_1 = require("apollo-server-express");
const nestjs_i18n_1 = require("nestjs-i18n");
async function bootstrap() {
    const server = express.default();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server), new graphql_2.GraphQLSchemaBuilderModule);
    app.useGlobalFilters(new throw_exception_filter_1.ThrowExceptionFilter());
    configureMiscellaneous(app);
    configureSwagger(app);
    await app.init();
    let appServer = app;
    if (process.env.HTTPS)
        appServer = configureHttpsServer(server);
    await configureSuscriptions(app, server);
    appServer.listen(+process.env.APP_PORT);
}
function configureMiscellaneous(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableCors();
    app.useLogger(['error', 'warn']);
    app.use(bodyParser.json({ limit: process.env.FILES_UPLOAD_LIMIT }));
    app.use(bodyParser.urlencoded({
        limit: process.env.FILES_UPLOAD_LIMIT,
        extended: true,
    }));
    app.useGlobalPipes(new nestjs_i18n_1.I18nValidationPipe());
}
function configureHttpsServer(server) {
    const httpsOptions = {
        pfx: fs.readFileSync(process.env.HTTPS_PFX_PATH),
        passphrase: process.env.HTTPS_PFX_PASS,
    };
    const httpsServer = https.createServer(httpsOptions, server);
    return httpsServer;
}
async function configureSuscriptions(app, server) {
    const { schema } = app.get(graphql_2.GraphQLSchemaHost);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: server, path: '/graphql' });
    new subscriptions_transport_ws_1.SubscriptionServer({
        execute: graphql_1.execute,
        subscribe: graphql_1.subscribe,
        schema,
        onConnect: () => {
            console.log("-- Usuario graphql Conectado -- ");
        },
    }, {
        server: server,
        path: '/graphql',
    });
}
function configureSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setDescription('CS3 BASE')
        .setVersion('1.0')
        .addBearerAuth({
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
    }, 'authorization')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
}
bootstrap();
//# sourceMappingURL=main.js.map