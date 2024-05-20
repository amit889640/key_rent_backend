"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
class UserManagement {
    static getToken(req, res) {
        return res.send({ message: 'user' });
    }
}
exports.UserManagement = UserManagement;
