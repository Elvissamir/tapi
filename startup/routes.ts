import homeRouter from '../routers/home'
import testRouter from '../routers/testRoute'

function addAppRoutes (app) {
    app.use('/', homeRouter)
    app.use('/test', testRouter)
}

export default addAppRoutes