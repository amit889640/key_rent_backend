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
exports.User = void 0;
const db_1 = require("../config/db");
const { DataTypes, Model } = require('sequelize');
class User extends Model {
    constructor(user) {
        super();
        this.id = user.id;
        this.name = user.name;
        this.mobile = user.mobile;
        this.password = user.password;
        this.email = user.email;
        this.type = user.type;
    }
    static getUser(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultDb = yield User.findAll({
                    where: {
                        mobile: mobile
                    }
                });
                return resultDb;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    static getDetailByUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User.findAll({
                    where: {
                        mobile: userName
                    }
                });
                return user;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.User = User;
User.init({
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    mobile: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.NUMBER
    },
}, {
    sequelize: db_1.Db.dbConnect(),
    tableName: 'User',
    timestamps: false
});
