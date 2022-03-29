import homeRouter from '../routers/home'
import testRouter from '../routers/testRoute'
import { Express } from 'express';

export default function (app: Express) {
    app.use('/', homeRouter)
    app.use('/test', testRouter)
}