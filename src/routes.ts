import express from 'express'
import path from 'path'
import CommentController from './controllers/CommentController'
import UserController from './controllers/UserController'

const routes = express.Router()

routes.use(express.static(path.join(__dirname, 'public')))

routes.get('/users/:username/:password', new UserController().index)
routes.post('/users', new UserController().store)
routes.delete('/users', new UserController().delete)

routes.get('/comments', new CommentController().index)
routes.post('/comments', new CommentController().store)

export default routes