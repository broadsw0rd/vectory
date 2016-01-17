var Vector = require('../dist/vectory.js')
var expect = require('expect.js')

describe('Vector()', function(){
  it('should be defined', function(){
    expect(Vector).to.be.ok()
  })
  it('should be a function', function(){
    expect(Vector).to.be.a(Function)
  })
  it('should create an instance of Vector', function(){
    var vector = new Vector(1, 2)
    expect(vector.x).to.be(1)
    expect(vector.y).to.be(2)
  })
  it('should create zero vector if args not passed', function(){
    var vector = new Vector()
    expect(vector.x).to.be(0)
    expect(vector.y).to.be(0)
  })
})

describe('Vector.VERSION', function(){
  it('should be defined', function(){
    expect(Vector.VERSION).to.be.ok()
  })
  it('should be a current version of library', function(){
    expect(Vector.VERSION).to.be('0.0.1')
  })
})
