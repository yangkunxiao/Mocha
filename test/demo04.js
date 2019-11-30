const request = require('supertest');
const app = require('../demo04.js');

describe('GET /user',() => {
    it('should an name with age',(done) => {
        request(app)
        .get('/user')
        .expect('Content-Type','application/json;charset=utf-8')
        .expect(200,{
            name:'ykx',
            age:24
        },done)
    })
})