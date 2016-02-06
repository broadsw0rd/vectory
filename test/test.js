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
    it('should add one vector to another', function () {
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
      var self = new Vector(1, 2)
      var vector = new Vector(3, 4)
      var result = self.add(vector)
      expect(result).to.be.a(Vector)
      expect(result.x).to.be(4)
      expect(result.y).to.be(6)
    })
  })

  describe('Vector.iadd(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.iadd).to.be.a(Function)
    })
    it('should add one vector to another', function () {
      var one = new Vector(1, 2)
      var another = new Vector(3, 4)
      Vector.iadd(one, another)
      expect(another.x).to.be(4)
      expect(another.y).to.be(6)
    })
    it('should return another vector', function () {
      var one = new Vector(1, 2)
      var another = new Vector(3, 4)
      var result = Vector.iadd(one, another)
      expect(result).to.be(another)
    })
  })

  describe('Vector#iadd(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.iadd).to.be.a(Function)
    })
    it('should add vector to self', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(3, 4)
      self.iadd(vector)
      expect(self.x).to.be(4)
      expect(self.y).to.be(6)
    })
    it('should return self instance', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(3, 4)
      var result = self.iadd(vector)
      expect(result).to.be(self)
    })
  })
})

describe('Substraction', function () {
  describe('Vector.sub(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.sub).to.be.a(Function)
    })
    it('should substract one vector from another', function () {
      var one = new Vector(1, 2)
      var another = new Vector(3, 4)
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
      var self = new Vector(3, 4)
      var vector = new Vector(1, 2)
      var result = self.sub(vector)
      expect(result).to.be.a(Vector)
      expect(result.x).to.be(2)
      expect(result.y).to.be(2)
    })
  })

  describe('Vector.isub(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.isub).to.be.a(Function)
    })
    it('should substract one vector from another', function () {
      var one = new Vector(1, 2)
      var another = new Vector(3, 4)
      Vector.isub(one, another)
      expect(another.x).to.be(2)
      expect(another.y).to.be(2)
    })
    it('should return another vector', function () {
      var one = new Vector(1, 2)
      var another = new Vector(3, 4)
      var result = Vector.isub(one, another)
      expect(result).to.be(another)
    })
  })

  describe('Vector#isub(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.isub).to.be.a(Function)
    })
    it('should substract vector from self', function () {
      var self = new Vector(3, 4)
      var vector = new Vector(1, 2)
      self.isub(vector)
      expect(self.x).to.be(2)
      expect(self.y).to.be(2)
    })
    it('should return self instance', function () {
      var self = new Vector(3, 4)
      var vector = new Vector(1, 2)
      var result = self.isub(vector)
      expect(result).to.be(self)
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

describe('Linear interpolation', function () {
  describe('Vector.lerp(one, another, t)', function () {
    it('should be a function', function () {
      expect(Vector.lerp).to.be.a(Function)
    })
    it('should return linear interpolant between the vectors', function () {
      var one = new Vector(2, 2)
      var another = new Vector(4, 4)
      var time = 0.5
      var result = Vector.lerp(one, another, time)
      expect(result.x).to.be(3)
      expect(result.y).to.be(3)
    })
  })

  describe('Vector.prototype.lerp(vector, t)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.lerp).to.be.a(Function)
    })
    it('should return linear interpolant between the vectors', function () {
      var one = new Vector(2, 2)
      var another = new Vector(4, 4)
      var time = 0.5
      var result = one.lerp(another, time)
      expect(result.x).to.be(3)
      expect(result.y).to.be(3)
    })
  })
})

describe('Normalization', function () {
  describe('Vector.normalized(vector)', function () {
    it('should be a function', function () {
      expect(Vector.normalized).to.be.a(Function)
    })
    it('should return unit vector', function () {
      var vector = new Vector(2, 0)
      var result = Vector.normalized(vector)
      expect(result.x).to.be(1)
      expect(result.y).to.be(0)
    })
    it('should return zero vector if zero vector was passed', function () {
      var vector = new Vector(0, 0)
      var result = Vector.normalized(vector)
      expect(result.x).to.be(0)
      expect(result.y).to.be(0)
    })
  })

  describe('Vector.prototype.normalized()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.normalized).to.be.a(Function)
    })
    it('should return unit vector', function () {
      var vector = new Vector(2, 0)
      var result = vector.normalized()
      expect(result.x).to.be(1)
      expect(result.y).to.be(0)
    })
    it('should return zero vector from zero vector', function () {
      var vector = new Vector(0, 0)
      var result = vector.normalized()
      expect(result.x).to.be(0)
      expect(result.y).to.be(0)
    })
  })

  describe('Vector.normalize(vector)', function () {
    it('should be a function', function () {
      expect(Vector.normalize).to.be.a(Function)
    })
    it('should convert passed vector to unit vector', function () {
      var vector = new Vector(2, 0)
      var result = Vector.normalize(vector)
      expect(result.x).to.be(1)
      expect(result.y).to.be(0)
      expect(result).to.be(vector)
    })
    it('should do nothing if zero vector was passed', function () {
      var vector = new Vector(0, 0)
      var result = Vector.normalize(vector)
      expect(result.x).to.be(0)
      expect(result.y).to.be(0)
      expect(result).to.be(vector)
    })
  })

  describe('Vector.prototype.normalize()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.normalize).to.be.a(Function)
    })
    it('should convert vector to unit vector', function () {
      var vector = new Vector(2, 0)
      vector.normalize()
      expect(vector.x).to.be(1)
      expect(vector.y).to.be(0)
    })
    it('should return self', function () {
      var vector = new Vector(0, 0)
      var result = vector.normalize()
      expect(result).to.be(vector)
    })
  })
})

describe('Magnitude', function () {
  describe('Vector.magnitude(vector)', function () {
    it('should be a function', function () {
      expect(Vector.magnitude).to.be.a(Function)
    })
    it('should return vector magnitude', function () {
      var vector = new Vector(3, 4)
      var magnitude = Vector.magnitude(vector)
      expect(magnitude).to.be(5)
    })
  })

  describe('Vector.prototype.magnitude()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.magnitude).to.be.a(Function)
    })
    it('should return vector magnitude', function () {
      var vector = new Vector(3, 4)
      var magnitude = vector.magnitude()
      expect(magnitude).to.be(5)
    })
  })
})
