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
        } = req.params;

        const user = await db('users').where({
            username,
            password
        });

        if(user[0]){
            res.json(user[0]).send()
        } else {
            res.sendStatus(400)
        }
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
        return res.sendStatus(201)
    }
}

async function bindReturn(var1: any, var2: any): Promise<any>{
    const result = var1 =  var2
    return result
}

export default UserController