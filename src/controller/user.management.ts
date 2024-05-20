import { Request, Response } from "express-serve-static-core";

export class UserManagement {
    public static getToken(req: Request, res: Response) {
        return res.send({ message: 'user' })
    }
}