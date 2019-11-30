let lib = require('../demo01.js');
let assert = require('assert');
let should = require('should');
/**
 * describe(moduleName,testDetail):描述将要测试的模块
 * @param:moduleName 模块名称
 * @param:testDetail 测试详情
 * 
 * it(info,function()):测试语句放在回调函数中
 * @param:info 是正确输出时的简单语句描述
 * @param: 一个it对应一个实际的可能情况
*/

/**
 * assert.staticEqual(actual, expected[, message])
 * assert.notEqual(actual, expected[, message])
 * assert.deepStrictEqual(actual, expected[, message])
 * assert.notDeepStrictEqual(actual, expected[, message])
*/
describe('Math',() => {
    describe('#add',() => {
        it('add(0,0) should return 0',() => {
            // assert.strictEqual(0,lib.add(0,0));
            lib.add(0,0).should.be.equal(0);
        });
        it('add(1,-1) should return 0',() => {
            // assert.strictEqual(0,lib.add(1,-1))
            lib.add(1,-1).should.be.equal(0);
        });
        it('add(1,1) should return 2',() => {
            // assert.strictEqual(2,lib.add(1,1))
            lib.add(1,1).should.be.equal(2)
        });
    })
})