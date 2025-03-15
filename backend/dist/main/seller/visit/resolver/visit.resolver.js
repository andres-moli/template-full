"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitResolver = exports.resolverStructure = void 0;
const graphql_1 = require("@nestjs/graphql");
const crud_utils_1 = require("../../../../security/auth/utils/crud.utils");
const user_types_decorator_1 = require("../../../../security/auth/decorators/user-types.decorator");
const crud_resolver_mixin_1 = require("../../../../patterns/crud-pattern/mixins/crud-resolver.mixin");
const visit_service_1 = require("../services/visit.service");
const visit_entity_1 = require("../entities/visit.entity");
const current_context_decorator_1 = require("../../../../patterns/crud-pattern/decorators/current-context.decorator");
const visit_model_1 = require("../dto/models/visit.model");
const update_status_visit_dto_1 = require("../dto/inputs/update-status-visit.dto");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const location_visit_input_1 = require("../dto/inputs/location.visit.input");
const pubSub = new graphql_subscriptions_1.PubSub();
exports.resolverStructure = (0, crud_utils_1.CrudResolverStructure)({
    ...visit_service_1.serviceStructure,
    serviceType: visit_service_1.VisitService,
    create: {
        name: "createVisit",
        decorators: [user_types_decorator_1.AnyUser],
    },
    update: {
        name: "updateVisit",
        decorators: [user_types_decorator_1.AnyUser],
    },
    remove: {
        name: "removeVisit",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findOne: {
        name: "visit",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findAll: {
        name: "visits",
        decorators: [user_types_decorator_1.AnyUser],
    },
    findOneArg: {
        name: "visitFindOneArg",
        decorators: [user_types_decorator_1.AnyUser]
    },
    classDecorators: []
});
let VisitResolver = class VisitResolver extends (0, crud_resolver_mixin_1.CrudResolverFrom)(exports.resolverStructure) {
    constructor() {
        super(...arguments);
        this.messages = [];
    }
    findAllVisitDashboard(context) {
        return this.service.findAllVisitDashboard(context);
    }
    finishVisit(context, updateStatusInput) {
        return this.service.finishVisit(context, updateStatusInput);
    }
    async getHoursByVisit(id) {
        return await this.service.getVisitWithTotalHours(id);
    }
    getMessages() {
        return this.messages;
    }
    sendMessage(messageInput) {
        const newMessage = {
            id: (this.messages.length + 1).toString(),
            senderId: messageInput.senderId,
            content: messageInput.content,
            timestamp: new Date().toISOString(),
        };
        console.log(messageInput);
        this.messages.push(newMessage);
        pubSub.publish('messageReceived', { messageReceived: newMessage });
        return newMessage;
    }
    sendResponse(messageInput, messageId) {
        const originalMessage = this.messages.find((msg) => msg.id === messageId);
        if (!originalMessage) {
            throw new Error('Message not found');
        }
        const responseMessage = {
            id: (this.messages.length + 1).toString(),
            senderId: messageInput.senderId,
            content: messageInput.content,
            timestamp: new Date().toISOString(),
        };
        this.messages.push(responseMessage);
        pubSub.publish('messageReceived', { messageReceived: responseMessage });
        return responseMessage;
    }
    messageReceived() {
        return pubSub.asyncIterator('messageReceived');
    }
};
exports.VisitResolver = VisitResolver;
__decorate([
    (0, user_types_decorator_1.AnyUser)(),
    (0, graphql_1.Query)(() => visit_model_1.VisitDashboardModel, { name: 'findAllVisitDashboard' }),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VisitResolver.prototype, "findAllVisitDashboard", null);
__decorate([
    (0, user_types_decorator_1.AnyUser)(),
    (0, graphql_1.Mutation)(() => visit_entity_1.Visit, { name: 'finishVisit' }),
    __param(0, (0, current_context_decorator_1.CurrentContext)()),
    __param(1, (0, graphql_1.Args)("UpdateStatusInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_status_visit_dto_1.UpdateStatusInput]),
    __metadata("design:returntype", void 0)
], VisitResolver.prototype, "finishVisit", null);
__decorate([
    (0, user_types_decorator_1.AnyUser)(),
    (0, graphql_1.Query)(() => graphql_1.Float),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VisitResolver.prototype, "getHoursByVisit", null);
__decorate([
    (0, graphql_1.Query)(() => [location_visit_input_1.Message]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisitResolver.prototype, "getMessages", null);
__decorate([
    (0, user_types_decorator_1.AnyUser)(),
    (0, graphql_1.Mutation)(() => location_visit_input_1.Message),
    __param(0, (0, graphql_1.Args)('messageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_visit_input_1.MessageInput]),
    __metadata("design:returntype", location_visit_input_1.Message)
], VisitResolver.prototype, "sendMessage", null);
__decorate([
    (0, user_types_decorator_1.AnyUser)(),
    (0, graphql_1.Mutation)(() => location_visit_input_1.Message),
    __param(0, (0, graphql_1.Args)('messageInput')),
    __param(1, (0, graphql_1.Args)('messageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_visit_input_1.MessageInput, String]),
    __metadata("design:returntype", location_visit_input_1.Message)
], VisitResolver.prototype, "sendResponse", null);
__decorate([
    (0, user_types_decorator_1.AnyUser)(),
    (0, graphql_1.Subscription)(() => location_visit_input_1.Message, {
        filter: (payload, variables) => {
            return payload.senderId === variables.senderId;
        },
        resolve: (payload) => {
            return payload;
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisitResolver.prototype, "messageReceived", null);
exports.VisitResolver = VisitResolver = __decorate([
    (0, graphql_1.Resolver)((of) => visit_entity_1.Visit)
], VisitResolver);
//# sourceMappingURL=visit.resolver.js.map