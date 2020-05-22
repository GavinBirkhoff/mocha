const expect = require('chai').expect

describe('hooks', function() {

    before(function() {
        // 在本区块的所有测试用例之前执行
        console.log(`before`)
    });

    after(function() {
        // 在本区块的所有测试用例之后执行
        console.log(`after`)

    });

    beforeEach(function() {
        // 在本区块的每个测试用例之前执行
        console.log(`beforeEach`)

    });

    afterEach(function() {
        // 在本区块的每个测试用例之后执行
        console.log(`afterEach`)
    });

    // test cases

    it('2=2',function(){
        expect(2).equal(2)
    })

    it('3=3',function(){
        expect(3).equal(3)
    })
});
