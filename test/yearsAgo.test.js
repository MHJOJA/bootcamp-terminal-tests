let assert = require('assert')
let yearsAgo = require('../yearsAgo')
 
describe('the years ago function', function(){
    it('should return 27 years ago ', function(){
        assert.equal('27',yearsAgo('1993'))
    })
    it('shoul return 0 yearsfrom now',function(){
        assert.equal('0', yearsAgo('2020'))
    })
    it('should return 25 years ago', function(){
        assert.equal('25',yearsAgo('1995'))
    })
})