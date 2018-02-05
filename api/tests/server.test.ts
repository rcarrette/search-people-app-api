import server from '../src/server'
import * as httpAssert from 'supertest'

const expectedString = 'search-people-app api'

describe('/api/people http call', () => {
    it(`should return '${expectedString}'`, (done) => {
        httpAssert(server)
            .get('/api/people')
            .expect('Content-Type', /json/)
            .expect(200, {
                message: expectedString
            }, done)
    })
})