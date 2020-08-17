let assert = require('assert')
let allFromPaarl = require('../allPaarl')

describe("the all from Paarl function", function(){
    it("should return true for registrations starting with 'CL", function(){
    assert.equal(true, allFromPaarl('CL 10244, CL'))
    })
    it('should return false for registration not starting with "CL"', function(){
     assert.equal(false, allFromPaarl("CF 4575,CA"))   
})
})