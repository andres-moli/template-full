"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersResolverMock = void 0;
const user_stub_1 = require("../stubs/user.stub");
exports.usersResolverMock = {
    findOne: jest.fn().mockImplementation((context, id) => {
        return Promise.resolve({
            id,
            ...user_stub_1.userStub
        });
    }),
    create: jest.fn().mockImplementation((context, createInput) => {
        return Promise.resolve({
            id: user_stub_1.userId,
            ...createInput
        });
    }),
    findAll: jest.fn().mockImplementation((context, args) => {
        return Promise.resolve([
            {
                id: user_stub_1.userId,
                ...user_stub_1.userStub
            }
        ]);
    }),
    remove: jest.fn().mockImplementation((context, id) => {
        return Promise.resolve({
            id: user_stub_1.userId,
            ...user_stub_1.userStub
        });
    }),
    update: jest.fn().mockImplementation((context, id, updateInput) => {
        return Promise.resolve({
            id,
            ...user_stub_1.userStub,
            ...updateInput
        });
    })
};
//# sourceMappingURL=users.resolver.js.map