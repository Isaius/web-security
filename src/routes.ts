import express from 'express'
import RegistrationController from './controllers/RegistrationController'

const routes = express.Router()

routes.get('/', new RegistrationController().index)

export default routes