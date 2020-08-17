let assert = require('assert')
let regNumber = require('../regNumbers')
const regNumbers = require('../regNumbers')

describe('the all registration numbers function', function(){
    it("should return 3  registration numbers as entered", function(){
        assert.equal(3, regNumbers("CA 545,ND 86,CSv 458 GP"))
    })
    it('should return two registration numbers', function(){
        assert.equal(2, regNumbers("4654 ZN,CA 5845"))
    })
})