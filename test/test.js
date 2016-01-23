/* eslint-env node, mocha */

var Vector = require('../dist/vectory.js')
var expect = require('expect.js')

describe('Vector(x, y)', function () {
  it('should be defined', function () {
    expect(Vector).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector).to.be.a(Function)
  })
  it('should create vector instance', function () {
    var vector = new Vector(1, 2)
    expect(vector.x).to.be(1)
    expect(vector.y).to.be(2)
  })
  it('should create zero vector if args not passed', function () {
    var vector = new Vector()
    expect(vector.x).to.be(0)
    expect(vector.y).to.be(0)
  })
})

describe('Vector.from([x, y])', function () {
  it('should be defined', function () {
    expect(Vector.from).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.from).to.be.a(Function)
  })
  it('should return new vector from data', function () {
    var vector = Vector.from([1, 2])
    expect(vector).to.be.a(Vector)
    expect(vector.x).to.be(1)
    expect(vector.y).to.be(2)
  })
})

describe('Vector.fromAngle(angle, magnitude)', function () {
  it('should be defined', function () {
    expect(Vector.fromAngle).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.fromAngle).to.be.a(Function)
  })
  it('should return new vector from angle and magnitude', function () {
    var vector = Vector.fromAngle(90 * (Math.PI / 180), 1)
    expect(vector).to.be.a(Vector)
    expect(vector.x).to.be.below(Number.EPSILON)
    expect(vector.y).to.be(1)
  })
})

describe('Vector.add(one, another)', function () {
  it('should be defined', function () {
    expect(Vector.add).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.add).to.be.a(Function)
  })
  it('should return sum of two vectors', function () {
    var one = new Vector(1, 2)
    var another = new Vector(3, 4)
    var result = Vector.add(one, another)
    expect(result).to.be.a(Vector)
    expect(result.x).to.be(4)
    expect(result.y).to.be(6)
  })
})

describe('Vector#add(vector)', function () {
  it('should be defined', function () {
    expect(Vector.prototype.add).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.prototype.add).to.be.a(Function)
  })
  it('should return sum of two vectors', function () {
    var one = new Vector(1, 2)
    var another = new Vector(3, 4)
    var result = one.add(another)
    expect(result).to.be.a(Vector)
    expect(result.x).to.be(4)
    expect(result.y).to.be(6)
  })
})

describe('Vector.iadd(one, another)', function () {
  it('should be defined', function () {
    expect(Vector.iadd).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.iadd).to.be.a(Function)
  })
  it('should add second vector to first', function () {
    var one = new Vector(1, 2)
    var another = new Vector(3, 4)
    Vector.iadd(one, another)
    expect(one.x).to.be(4)
    expect(one.y).to.be(6)
  })
  it('should return first vector', function () {
    var one = new Vector(1, 2)
    var another = new Vector(3, 4)
    var result = Vector.iadd(one, another)
    expect(result).to.be(one)
  })
})

describe('Vector#iadd(vector)', function () {
  it('should be defined', function () {
    expect(Vector.prototype.iadd).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.prototype.iadd).to.be.a(Function)
  })
  it('should add vector to self', function () {
    var one = new Vector(1, 2)
    var another = new Vector(3, 4)
    one.iadd(another)
    expect(one.x).to.be(4)
    expect(one.y).to.be(6)
  })
  it('should return self instance', function () {
    var one = new Vector(1, 2)
    var another = new Vector(3, 4)
    var result = one.iadd(another)
    expect(result).to.be(one)
  })
})

describe('Vector.sub(one, another)', function () {
  it('should be defined', function () {
    expect(Vector.sub).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.sub).to.be.a(Function)
  })
  it('should return diff of two vectors', function () {
    var one = new Vector(3, 4)
    var another = new Vector(1, 2)
    var result = Vector.sub(one, another)
    expect(result).to.be.a(Vector)
    expect(result.x).to.be(2)
    expect(result.y).to.be(2)
  })
})

describe('Vector#sub(vector)', function () {
  it('should be defined', function () {
    expect(Vector.prototype.sub).to.be.ok()
  })
  it('should be a function', function () {
    expect(Vector.prototype.sub).to.be.a(Function)
  })
  it('should return diff of two vectors', function () {
    var one = new Vector(3, 4)
    var another = new Vector(1, 2)
    var result = one.sub(another)
    expect(result).to.be.a(Vector)
    expect(result.x).to.be(2)
    expect(result.y).to.be(2)
  })
})
