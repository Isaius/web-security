import express from 'express'
import path from 'path'
import nunjucks, { render } from 'nunjucks'

import CommentController from './controllers/CommentController'
import UserController from './controllers/UserController'

const routes = express.Router()

routes.get('/users/:username/:password', new UserController().index)
routes.post('/users', new UserController().store)
routes.delete('/users', new UserController().delete)

routes.get('/comments', new CommentController().index)
routes.post('/comments', new CommentController().store)

routes.get('/login', function(req, res) {
    res.render('login.html')
})

routes.get('/', function(req, res) {
    res.render('index.njk')
})

export default routes