let assert = require('assert')
let itemsOver = require('../itemsOver')



describe('findItemsOver function', function () {

    it('should return items higher than 25.', function () {
      var itemList = [
        { name: 'apples', qty: 10 },
        { name: 'pears', qty: 37 },
        { name: 'bananas', qty: 27},
        { name: 'apples', qty: 3 }
      ];
  
      var itemOver25 = [{ name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 }]
      assert.deepEqual(itemOver25, itemsOver(itemList,25));
  
    });
  
    it('should return empty list if the products  are less than 25.', function () {
      var itemList = [
        { name: 'apples', qty: 10 },
        { name: 'pears', qty: 3 },
        { name: 'bananas', qty: 2},
        { name: 'apples', qty: 3 }
      ];
  
      assert.deepEqual([], itemsOver(itemList,25));
    });
  
  });