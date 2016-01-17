var Vector = require('../dist/vectory.js')
var expect = require('expect.js')

describe('Vectory', function(){
  describe('Vector()', function(){
    it('should be defined', function(){
      expect(Vector).to.be.ok()
    })
    it('should be a function', function(){
      expect(Vector).to.be.a(Function)
    })
  })
})
