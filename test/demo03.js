const lib = require('../demo03.js');
const should = require('should');

describe('async.js',() => {
    describe('async',() => {
        it('should wait 1000ms',(done) => {
            lib.asyncFn(done);
        })
    })
})