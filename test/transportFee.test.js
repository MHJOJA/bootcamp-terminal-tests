let assert = require('assert')
let transportFee = require('../trnsaportFee')

describe('the transport fee function', function(){
    it('should return "R20" for morning shift', function(){
        assert.equal('R20', transportFee('morning'))
    })
    it('should return R10 for the afternoon shift',function(){
        assert.equal('R10', transportFee('afternoon'))
    })
    it('should return fre for night shift', function(){
        assert.equal('free', transportFee('night'))
    })
})