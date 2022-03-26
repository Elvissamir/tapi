import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    return res.send('The server is up and running.')
})

export default router