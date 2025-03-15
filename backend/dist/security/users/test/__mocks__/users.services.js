"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServicesMock = void 0;
const user_stub_1 = require("../stubs/user.stub");
exports.usersServicesMock = {
    findOneBy: jest.fn().mockImplementation((id) => {
        return Promise.resolve({
            id,
            ...user_stub_1.userStub
        });
    }),
    findOneByEmail: jest.fn().mockImplementation((context, email, orFail) => {
        return Promise.resolve({
            id: user_stub_1.userId,
            ...user_stub_1.userStub,
        });
    }),
    update: jest.fn().mockImplementation((id, updateInput) => {
        return Promise.resolve({
            id: user_stub_1.userId,
            ...user_stub_1.userStub
        });
    })
};
//# sourceMappingURL=users.services.js.map