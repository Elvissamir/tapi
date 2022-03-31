import homeController from '../routers/home'
import usersController from '../routers/users'
import testController from '../routers/testRoute'
import { Express } from 'express';

export default function (app: Express) {
    app.use('/api', homeController)
    app.use('/api/users', usersController)
    app.use('/api/test', testController)
}