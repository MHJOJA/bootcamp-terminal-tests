let assert = require('assert')
let isFrom = require('../isFrom')
describe('isFrom function', function(){

    it('should return all  registration numbers with locatoion', function(){
        assert.equal(true, isFrom('CY 1254','CY'));
    });
    it('should fail if registration does not start with CJ', function(){
      assert.equal(false, isFrom('CA 123 456','CJ'));
  });
  
  });
  