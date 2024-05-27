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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../model/user.model");
class UserManagementService {
    static verifyUser(req, res) {
        return res.send({ message: 'user' });
    }
    static getToken(req, res) {
        return res.send({ message: 'user' });
    }
    static createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // const user = {
            //     id: 1,
            //     name: 'Amit',
            //     mobile: '8896406322',
            //     email: 'amit@gmail.com',
            //     password: '1234',
            //     type: 1
            // }
            // req.body = { ...user }
            console.log(req.body);
            try {
                let password;
                if (!req.body.name) {
                    return res.send(403).send({ status: false, message: ' name is missing' });
                }
                if (!req.body.mobile) {
                    return res.send(403).send({ status: false, message: ' mobile is missing' });
                }
                if (!req.body.email) {
                    return res.send(403).send({ status: false, message: ' email is missing' });
                }
                if (!req.body.password) {
                    return res.send(403).send({ status: false, message: ' password is missing' });
                }
                else {
                    password = yield bcryptjs_1.default.hash(req.body.password, 8);
                }
                const result = yield user_model_1.User.create({ id: req.body.id, name: req.body.name, mobile: req.body.mobile, email: req.body.email, password: password, type: 1 });
                result.password = "***********";
                res.status(200).send({ status: true, message: 'New user created', result });
            }
            catch (error) {
                console.log(error);
                res.send({ message: error });
                // res.status(500).send({ status: false, message: 'Something went wrong', error: error.errors[0].message })
            }
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userName = '';
                let password = '';
                if (!req.body.userName) {
                    res.status(400).send({ status: false, message: 'user_name is missing' });
                }
                else {
                    userName = req.body.userName;
                }
                if (!req.body.password) {
                    res.status(400).send({ status: false, message: 'password is missing' });
                }
                else {
                    password = req.body.password;
                }
                const user = yield user_model_1.User.getDetailByUserName(userName);
                if (user.length == 0) {
                    return res.status(401).send({ status: false, message: 'User does not exist' });
                }
                const isMatch = yield bcryptjs_1.default.compare(password, user[0].password);
                if (isMatch) {
                    var token = jsonwebtoken_1.default.sign({
                        id: user[0].id,
                        mobile: user[0].mobile,
                    }, 'secret', {
                        expiresIn: '2 days'
                    });
                    return res.status(200).send({ status: true, message: 'success', data: { userId: user[0].id, token: token } });
                }
                else {
                    return res.status(401).send({ status: false, message: 'Password is incorrect' });
                }
            }
            catch (error) {
                next(error);
                return res.status(500).send({ status: false, message: 'Something went wrong', error });
            }
        });
    }
}
exports.UserManagementService = UserManagementService;
