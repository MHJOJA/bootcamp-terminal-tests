let assert = require('assert')
let allCapeTown = require('../allCapeTown')

describe('the all from Cape Town function',function(){
    it('should return true for registration starting with CA', function(){
        assert.equal(true,allCapeTown('CA 4545,CA'))
    })
    it('should return false for registration not starting with CA',function(){
        assert.equal(false,allCapeTown("CF 2254,ND"))
    })
})