import { Request, Response } from "express";

export class UserManagement {
    public static getToken(req: Request, res: Response) {
        return res.send({ message: 'user' })
    }
}