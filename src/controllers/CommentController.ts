import { Request, Response } from "express"
import db from "../database/connection"

class CommentController {
    async index(req: Request, res: Response){
        console.log("Recuperando comentários");

        const comments = await db('comments')
            .join('users', 'comments.user_id', '=', 'users.id')
            .select(['comments.content', 'users.username']);

            console.log(comments)
        return res.json(comments);
    }

    async store(req: Request, res: Response){
        const {
            user_id,
            content
        } = req.body;

        console.log("Novo comentário de " + user_id + ": " + content);

        await db('comments').insert({
            content,
            user_id
        });

        console.log("Comentário salvo");
        return res.sendStatus(200);
    }
}

export default CommentController