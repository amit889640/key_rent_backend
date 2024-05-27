"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./config/db");
const user_route_1 = __importDefault(require("./route/user.route"));
const port = 3000;
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
function initServer() {
    db_1.Db.dbConnect().authenticate().then(() => {
        console.log('Database connected by sequelize orm');
    }).catch((err) => console.log('Error : ' + err));
    app.listen(port, () => {
        console.log(`Server has started on port ${port}`);
    });
}
/*
All the route files
*/
/*

Using the route in the app
 */
app.use('/user', user_route_1.default);
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
initServer();
