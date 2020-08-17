let assert =require('assert')
let regCheck = require('../regCheck')

describe('regCheck function', function(){  it('should return true if the registration ends with the corresponding location', function(){
    assert.equal(true, regCheck('SX 7854 GP','GP'));
});

it('should fail if the registration does not end with  corresponding location', function(){
  assert.equal(false, regCheck('CY 45 548, CY'));
});

});
