let assert = require('assert')
let totalPhoneBill = require('../totalPhoneBill')


describe('totalPhoneBill function', function(){

    it("should return 'R11.00' for 4 calls", function(){
      assert.equal('R11.00', totalPhoneBill('call'));
    });
    it("should return R1.95 for 3 sms ", function(){
      assert.equal('R1.95', totalPhoneBill('sms'));
    });
  
  
  });
  