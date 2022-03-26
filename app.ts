import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import addRoutes from './startup/routes'

const app = express()

addRoutes(app)

export default app