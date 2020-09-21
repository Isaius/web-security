import { Request, Response } from "express"
import db from "../database/connection"
import path from 'path'

var sqlite3 = require('sqlite3').verbose();
var db3 = new sqlite3.Database(path.resolve(__dirname, '..', 'database', 'database.sqlite'))

class UserController {
    async index(req: Request, res: Response){
        const {
            username,
            password
        } = req.body;

        console.log("Log in: " + username + ", pass: " + password);
        
        let user:any = []

        await db3.serialize(async function() {
            await db3.all("select * from users where username='" + username + "' and password='" + password + "'", function(err: any, row: any){
                user = row
                console.log(user)
                return res.json(user);
            })
        })    
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