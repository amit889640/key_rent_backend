"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoute = require('express').Router();
const user_management_controller_1 = require("../controller/user.management.controller");
userRoute.get('/test', (req, res) => {
    return res.send({ test: 'ok' });
    // UserManagementController.getToken(req, res);
});
userRoute.post('/createuser', (req, res, next) => {
    user_management_controller_1.UserManagementController.createUser(req, res, next);
});
userRoute.post('/login', (req, res, next) => {
    user_management_controller_1.UserManagementController.login(req, res, next);
});
// userRoute.get('/createuser', (req, res, next) => {
//     UserManagementController.createUser(req, res, next);
// })
exports.default = userRoute;
