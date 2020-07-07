import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from './modules/logging/logger'

import usersRouter from './routes/users'

const app = express()

app.use(logger.middleware())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)

export default app
