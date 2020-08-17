let assert =require('assert')
let isWeekDay = require('../isWeekDay')

describe('the is week day function', function(){
    it('should return true if is day of the week',function(){
        assert.equal(true, isWeekDay('Monday'))
    })
    it('should return false if day is not week day', function(){
        assert.equal(false, isWeekDay('Sunday'))
    })
})