import { Request, Response } from "express"
import db from "../database/connection"

class UserController {
    async index(req: Request, res: Response){
        const {
            username,
            password
        } = req.body;

        console.log("Log in: " + username + ", pass: " + password);

        const user = await db.raw("select * from users where username='" + username + "' and password='" + password + "'");

        return res.json(user);
    }

    async store(req: Request, res: Response){
        console.log("Novo cadastro");

        const {
            name,
            username,
            password
        } = req.body;

        await db('users').insert({
            name,
            username,
            password
        });

        console.log("Cadastro feito");
        return res.sendStatus(200);
    }

    async delete(req: Request, res: Response){
        console.log('DELETE USER TABLE');

        await db('users').del();

        return res.sendStatus(200);
    }
}

export default UserController