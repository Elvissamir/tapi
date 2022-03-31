import app from './app'
import request from 'supertest'

describe('GET Test', () => {
    it('Checks if the server is up and running.', async () => {
        const response = await request(app).get('/api/test')

        expect(response.status).toBe(200)
        expect(response.text).toBe('The server is up and running.')
    })
})

