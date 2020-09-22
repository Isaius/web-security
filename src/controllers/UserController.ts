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
        
        var query = `select * from users where username='${username}' and password='${password}'`;
        console.log(query);

        await db3.serialize(async function() {
            await db3.exec(query)
            await db3.get("select * from users where username='" + username + "' and password='" + password + "'", 
                async function(err: any, row: any){
                    console.log(row)
                    return res.json(row);
                }
            )
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
        return res.sendStatus(201)
    }

    async delete(req: Request, res: Response){
        console.log('DELETE USER TABLE');

        await db('users').del();

        return res.sendStatus(200);
    }
}

async function bindReturn(var1: any, var2: any): Promise<any>{
    const result = var1 =  var2
    return result
}

export default UserController