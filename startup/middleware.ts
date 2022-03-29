import express from "express"
import { Express } from "express"
import helmet from "helmet";
import cors from "express"
import compression from "compression"

export default function (app: Express) {
    app.use(helmet())
    app.use(cors())
    app.use(express.json())
    app.use(compression())
}