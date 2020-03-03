const lib = require('../demo02.js');
const should = require('should');

describe('objType.js',() => {
    describe('objType',() => {
        it('object should return an object',() => {
            should(lib.objType({'name':'ykx'})).be.a.Object()
        });
        it('data should return an object',() => {
            should(lib.objType(new Date())).be.a.Object()
        });
        it('reg should return an object',() => {
            should(lib.objType(new RegExp())).be.a.Object()
        });
        //error
        it('reg should return an object',() => {
            should(lib.objType({})).be.a.Object()
        })
    })
})