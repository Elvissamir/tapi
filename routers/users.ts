import express from 'express'
import UserMongo from '../dataSources/UserMongo'
const router = express.Router()

router.post('/', async (req, res) => {

    // validate data
    // create user
    const user = new UserMongo(req.body)
    await user.save()

    // allow showing the x-auth-token header in the headers using 
    // the header access-control-expose-headers
    // set x-auth-token header to the token
    // return created user 

    return res.send('response')    
})

export default router