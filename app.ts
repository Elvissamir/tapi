import express from 'express'
import dotenv from 'dotenv'
import addRoutes from './startup/routes'
import addMiddleware from './startup/middleware'
dotenv.config()

const app = express()

addMiddleware(app)
addRoutes(app)

export default app