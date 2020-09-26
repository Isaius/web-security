import express from 'express'
import cors from 'cors'
import nunjucks from 'nunjucks'
import path from 'path'

import routes from './routes'
import db from './database/connection'

const app = express()

app.use(express.static(path.resolve(__dirname, 'src', 'public')))

var env = nunjucks.configure(['src/views/'], {
    autoescape: false,
    express: app
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)