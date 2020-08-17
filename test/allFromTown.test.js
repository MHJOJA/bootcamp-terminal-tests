let assert = require('assert')
let allFromTown = require('../allFromTown')

describe('the all from town function', function(){
    it('should return true if registration matches loc ', function(){
        assert.deepEqual(['CA 5585'],allFromTown('CA 5585','CA'))
    })
    it('should return empty list if registration does not match location',function(){
        assert.deepEqual([],allFromTown('CA 545','CY 556'))
    })
})
    