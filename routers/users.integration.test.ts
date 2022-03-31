import app from '../app';
import request from 'supertest';
import UserMongo from '../dataSources/UserMongo'
import MongoDBHandler from '../utils/test-utils/MongoDBHandler'

describe('User Routes', () => {
    beforeEach(() => {
        MongoDBHandler.connect()
    })

    afterEach(() => {
        MongoDBHandler.clear()
        MongoDBHandler.disconnect()
    })

    describe('POST /', () => {
        it('Registers a user', async () => {
            const userData = {
                first_name: 'fname',
                last_name: 'lname',
                ci: '24516345',
                password: 'password',
                email: 'user@mail.com'
            }

            // send data to endpoint
            const response = await request(app).post('/api/users').send(userData)

            // check a new user was created
            const usersCount = await UserMongo.count()
            
            expect(response.status).toBe(200)
            expect(usersCount).toBe(1)
        })
    })
})