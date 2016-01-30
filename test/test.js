/* eslint-env node, mocha */

var Vector = require('../dist/vectory.js')
var expect = require('expect.js')

describe('Creation', function () {
  describe('Vector(x, y)', function () {
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
    it('should be a function', function () {
      expect(Vector.fromAngle).to.be.a(Function)
    })
    it('should return new vector from angle and magnitude', function () {
      var vector = Vector.fromAngle(90 * (Math.PI / 180), 1)
      expect(vector).to.be.a(Vector)
      expect(Math.round(vector.x)).to.be(0)
      expect(vector.y).to.be(1)
    })
  })

  describe('Vector.parse(string)', function () {
    it('should be a function', function () {
      expect(Vector.parse).to.be.a(Function)
    })
    it('should return new vector from data', function () {
      var vector = Vector.parse('1.1, 2.2')
      expect(vector).to.be.a(Vector)
      expect(vector.x).to.be(1.1)
      expect(vector.y).to.be(2.2)

      vector = Vector.parse('1.1,2.2')
      expect(vector).to.be.a(Vector)
      expect(vector.x).to.be(1.1)
      expect(vector.y).to.be(2.2)

      vector = Vector.parse('1.1 2.2')
      expect(vector).to.be.a(Vector)
      expect(vector.x).to.be(1.1)
      expect(vector.y).to.be(2.2)

      vector = Vector.parse(' 1.1 2.2 ')
      expect(vector).to.be.a(Vector)
      expect(vector.x).to.be(1.1)
      expect(vector.y).to.be(2.2)
    })
  })
})

describe('Addition', function () {
  describe('Vector.add(one, another)', function () {
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
})

describe('Substraction', function () {
  describe('Vector.sub(one, another)', function () {
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

  describe('Vector.isub(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.isub).to.be.a(Function)
    })
    it('should substract second vector from first', function () {
      var one = new Vector(3, 4)
      var another = new Vector(1, 2)
      Vector.isub(one, another)
      expect(one.x).to.be(2)
      expect(one.y).to.be(2)
    })
    it('should return first vector', function () {
      var one = new Vector(3, 4)
      var another = new Vector(1, 2)
      var result = Vector.isub(one, another)
      expect(result).to.be(one)
    })
  })

  describe('Vector#isub(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.isub).to.be.a(Function)
    })
    it('should substract vector from self', function () {
      var one = new Vector(3, 4)
      var another = new Vector(1, 2)
      one.isub(another)
      expect(one.x).to.be(2)
      expect(one.y).to.be(2)
    })
    it('should return self instance', function () {
      var one = new Vector(3, 4)
      var another = new Vector(1, 2)
      var result = one.isub(another)
      expect(result).to.be(one)
    })
  })
})

describe('Multiplication', function () {
  describe('Vector.mul(scalar, vector)', function () {
    it('should be a function', function () {
      expect(Vector.mul).to.be.a(Function)
    })
    it('should multiply vector on scalar', function () {
      var vector = new Vector(2, 3)
      var scalar = 2
      var result = Vector.mul(scalar, vector)
      expect(result.x).to.be(4)
      expect(result.y).to.be(6)
    })
  })

  describe('Vector#mul(scalar)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.mul).to.be.a(Function)
    })
    it('should multiply self on scalar', function () {
      var vector = new Vector(2, 3)
      var scalar = 2
      var result = vector.mul(scalar)
      expect(result.x).to.be(4)
      expect(result.y).to.be(6)
    })
  })

  describe('Vector.imul(scalar, vector)', function () {
    it('should be a function', function () {
      expect(Vector.imul).to.be.a(Function)
    })
    it('should multiply vector on scalar', function () {
      var vector = new Vector(2, 3)
      var scalar = 2
      var result = Vector.imul(scalar, vector)
      expect(result.x).to.be(4)
      expect(result.y).to.be(6)
    })
    it('should return vector', function () {
      var vector = new Vector(2, 3)
      var scalar = 2
      var result = Vector.imul(scalar, vector)
      expect(result).to.be(vector)
    })
  })

  describe('Vector#imul(scalar)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.imul).to.be.a(Function)
    })
    it('should multiply self on scalar', function () {
      var vector = new Vector(2, 3)
      var scalar = 2
      var result = vector.imul(scalar)
      expect(result.x).to.be(4)
      expect(result.y).to.be(6)
    })
    it('should return self instance', function () {
      var vector = new Vector(2, 3)
      var scalar = 2
      var result = vector.imul(scalar)
      expect(result).to.be(vector)
    })
  })
})

describe('Division', function () {
  describe('Vector.div(scalar, vector)', function () {
    it('should be a function', function () {
      expect(Vector.div).to.be.a(Function)
    })
    it('should divide vector on scalar', function () {
      var vector = new Vector(4, 6)
      var scalar = 2
      var result = Vector.div(scalar, vector)
      expect(result.x).to.be(2)
      expect(result.y).to.be(3)
    })
  })

  describe('Vector.prototype.div(scalar)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.div).to.be.a(Function)
    })
    it('should divide self on scalar', function () {
      var vector = new Vector(4, 6)
      var scalar = 2
      var result = vector.div(scalar)
      expect(result.x).to.be(2)
      expect(result.y).to.be(3)
    })
  })

  describe('Vector.idiv(scalar, vector)', function () {
    it('should be a function', function () {
      expect(Vector.idiv).to.be.a(Function)
    })
    it('should multiply vector on scalar', function () {
      var vector = new Vector(4, 6)
      var scalar = 2
      var result = Vector.idiv(scalar, vector)
      expect(result.x).to.be(2)
      expect(result.y).to.be(3)
    })
    it('should return vector', function () {
      var vector = new Vector(4, 6)
      var scalar = 2
      var result = Vector.idiv(scalar, vector)
      expect(result).to.be(vector)
    })
  })

  describe('Vector#idiv(scalar)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.idiv).to.be.a(Function)
    })
    it('should multiply self on scalar', function () {
      var vector = new Vector(4, 6)
      var scalar = 2
      var result = vector.idiv(scalar)
      expect(result.x).to.be(2)
      expect(result.y).to.be(3)
    })
    it('should return self instance', function () {
      var vector = new Vector(4, 6)
      var scalar = 2
      var result = vector.idiv(scalar)
      expect(result).to.be(vector)
    })
  })
})
