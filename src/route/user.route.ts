const userRoute = require('express').Router();

import { UserManagementController } from "../controller/user.management.controller";

userRoute.get('/test', (req, res) => {
    return res.send({ test: 'ok' })
    // UserManagementController.getToken(req, res);
})

userRoute.post('/createuser', (req, res, next) => {
    UserManagementController.createUser(req, res, next);
})

userRoute.post('/login', (req, res, next) => {
    UserManagementController.login(req, res, next);
})

// userRoute.get('/createuser', (req, res, next) => {
//     UserManagementController.createUser(req, res, next);
// })


export default userRoute;
