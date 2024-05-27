import express from 'express';
import { Router, Request, Response, NextFunction } from "express";
import { json } from 'body-parser';
import morgan from 'morgan'
import { Db } from './config/db';

import userRoute from './route/user.route';

const port: number = 3000;
const app = express();
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
function initServer() {
    Db.dbConnect().authenticate().then(() => {
        console.log('Database connected by sequelize orm');
    }).catch((err: Error) => console.log('Error : ' + err))

    app.listen(port, () => {
        console.log(`Server has started on port ${port}`);
    })
}

/* 
All the route files
*/

/* 

Using the route in the app
 */
app.use('/user', userRoute);

// app.use('/product', productRoute);

/* 
Middleware to check any error
*/
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        res.status(500).send({
            status: false,
            message: err.message
        })
    }
})

initServer();