let assert = require('assert')
const isFromBellville = require('../isfromBellville')

describe('isFromBellville function' , function(){

    it('should return registrations from Bellville (CY)' , function(){
      assert.equal(true, isFromBellville('CY 878'));
           });

    it('should return false for registration not from Bellville(CY)' , function(){
       assert.equal(false, isFromBellville('CA 414'));
          });
});