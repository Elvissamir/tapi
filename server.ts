import app from './app'

const port = process.env.APP_PORT || 3001

console.log(process.env.APP_PORT)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})