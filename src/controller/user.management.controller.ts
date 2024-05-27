import { Request, Response, NextFunction } from "express";
import { UserManagementService } from "../service/user.service";


export class UserManagementController {
    public static getToken(req: Request, res: Response) {
        return res.send({ status: 'success', data: { AccessToken: 'accesstoken', RefreshToken: 'refresh token' } })
    }

    public static async createUser(req: Request, res: Response, next: NextFunction) {

        const newUser = await UserManagementService.createUser(req, res, next);
        return res.send(newUser);
        // console.log()    
        // return newUser
    }

    public static async login(req: Request, res: Response, next: NextFunction) {

        return await UserManagementService.login(req, res, next);
        // const newUser = await UserManagementService.createUser(req, res, next);

        // return res.send(newUser);
        // console.log()    
        // return newUser
    }


}