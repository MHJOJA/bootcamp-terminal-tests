let assert = require('assert')
let itemsOver20 = require('../findItemsOver20')

describe('findItemsOver20 function', function () {

    it('should return items higher than 20.', function () {
      var itemList = [
        { name: 'apples', qty: 10 },
        { name: 'pears', qty: 37 },
        { name: 'bananas', qty: 27},
        { name: 'apples', qty: 3 }
      ];
  
      var itemOver20 = [{ name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 }]
      assert.deepEqual(itemOver20, itemsOver20(itemList));
  
    });
  
    it('should return empty list if the products  are less than 20.', function () {
      var itemList = [
        { name: 'apples', qty: 10 },
        { name: 'pears', qty: 3 },
        { name: 'bananas', qty: 2},
        { name: 'apples', qty: 3 }
      ];
  
      assert.deepEqual([], itemsOver20(itemList));
    });
  
  });