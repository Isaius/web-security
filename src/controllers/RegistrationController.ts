import { Request, Response } from "express"
import db from "../database/connection"

class RegistrationController {
    async index(req: Request, res: Response){
        res.send("Hello, sir! All systems running well.")
    }

    async store(req: Request, res: Response){

    }
}

export default RegistrationController