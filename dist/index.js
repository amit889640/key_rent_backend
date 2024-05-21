"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const morgan_1 = __importDefault(require("morgan"));
const port = 3000;
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
const user_management_1 = require("./controller/user.management");
// postgresql check connection
// import { Db } from './config/db';
// Db.dbConnect().authenticate().then(() => {
//     console.log('Database connected by sequelize orm');
// }).catch((err: Error) => console.log('Error : ' + err))
/*
All the route files
*/
// userRoute
// import userRoute from './route/userRoute';
// productRoute
// import productRoute from './route/productRoute';
/*
Using the route in the app
 */
app.get('/test', user_management_1.UserManagement.getToken);
// app.use('/user', userRoute);
// app.use('/user', userRoute);
// app.use('/product', productRoute);
/*
Middleware to check any error
*/
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send({
            status: false,
            message: err.message
        });
    }
});
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
