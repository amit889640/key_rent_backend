"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementController = void 0;
const user_service_1 = require("../service/user.service");
class UserManagementController {
    static getToken(req, res) {
        return res.send({ status: 'success', data: { AccessToken: 'accesstoken', RefreshToken: 'refresh token' } });
    }
    static createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield user_service_1.UserManagementService.createUser(req, res, next);
            return res.send(newUser);
            // console.log()    
            // return newUser
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_service_1.UserManagementService.login(req, res, next);
            // const newUser = await UserManagementService.createUser(req, res, next);
            // return res.send(newUser);
            // console.log()    
            // return newUser
        });
    }
}
exports.UserManagementController = UserManagementController;
