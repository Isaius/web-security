import express from 'express'
import path from 'path'

import UserController from './controllers/UserController'

const routes = express.Router()

routes.use(express.static(path.join(__dirname, 'public')))

routes.get('/users', new UserController().index)
routes.post('/users', new UserController().store)

export default routes