var Vector = require('../dist/vectory.js')
var expect = require('expect.js')

describe('Vector(x, y)', function(){
  it('should be defined', function(){
    expect(Vector).to.be.ok()
  })
  it('should be a function', function(){
    expect(Vector).to.be.a(Function)
  })
  it('should create vector instance', function(){
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

describe('Vector.from([x, y])', function(){
  it('should be defined', function(){
    expect(Vector.from).to.be.ok()
  })
  it('should be a function', function(){
    expect(Vector.from).to.be.a(Function)
  })
  it('should return new vector from data', function(){
    var vector = Vector.from([1, 2])
    expect(vector).to.be.a(Vector)
    expect(vector.x).to.be(1)
    expect(vector.y).to.be(2)
  })
})

describe('Vector.fromAngle(angle, magnitude)', function(){
  it('should be defined', function(){
    expect(Vector.fromAngle).to.be.ok()
  })
  it('should be a function', function(){
    expect(Vector.fromAngle).to.be.a(Function)
  })
  it('should return new vector from angle and magnitude', function(){
    var vector = Vector.fromAngle(90 * (Math.PI / 180), 1)
    expect(vector).to.be.a(Vector)
    expect(vector.x).to.be.below(Number.EPSILON)
    expect(vector.y).to.be(1)
  })
})
