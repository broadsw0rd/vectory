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

describe('Dot product', function () {
  describe('Vector.dot(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.dot).to.be.a(Function)
    })
    it('should return dot product', function () {
      var one = new Vector(2, 3)
      var another = new Vector(3, 2)
      var product = Vector.dot(one, another)
      expect(product).to.be(12)
    })
  })

  describe('Vector.prototype.dot(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.dot).to.be.a(Function)
    })
    it('should return dot product', function () {
      var self = new Vector(2, 3)
      var vector = new Vector(3, 2)
      var product = self.dot(vector)
      expect(product).to.be(12)
    })
  })
})

describe('Distance', function () {
  describe('Vector.distance(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.distance).to.be.a(Function)
    })
    it('should return dot product', function () {
      var one = new Vector(4, 3)
      var another = new Vector(8, 6)
      var distance = Vector.distance(one, another)
      expect(distance).to.be(5)
    })
  })

  describe('Vector.prototype.distance(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.distance).to.be.a(Function)
    })
    it('should return dot product', function () {
      var self = new Vector(8, 6)
      var vector = new Vector(4, 3)
      var distance = self.distance(vector)
      expect(distance).to.be(5)
    })
  })
})

describe('Angle computing', function () {
  describe('Vector.angleOf(vector)', function () {
    it('should be a function', function () {
      expect(Vector.angleOf).to.be.a(Function)
    })
    it('should return the angle theta of vector', function () {
      var vector = new Vector(0, 1)
      var result = Vector.angleOf(vector)
      expect(result * 180 / Math.PI).to.be(90)
    })
  })

  describe('Vector.prototype.angleOf()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.angleOf).to.be.a(Function)
    })
    it('should return the angle theta of vector', function () {
      var self = new Vector(0, 1)
      var result = self.angleOf()
      expect(result * 180 / Math.PI).to.be(90)
    })
  })

  describe('Vector.angleTo(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.angleTo).to.be.a(Function)
    })
    it('should return the angle between vectors', function () {
      var one = new Vector(0, 1)
      var another = new Vector(1, 0)
      var result = Vector.angleTo(one, another)
      expect(result * 180 / Math.PI).to.be(90)
    })
  })

  describe('Vector.prototype.angleTo(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.angleTo).to.be.a(Function)
    })
    it('should return the angle between vectors', function () {
      var self = new Vector(0, 1)
      var vector = new Vector(1, 0)
      var result = self.angleTo(vector)
      expect(result * 180 / Math.PI).to.be(90)
    })
  })
})

describe('Resetting', function () {
  describe('Vector.reset(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.reset).to.be.a(Function)
    })
    it('should reset vector values', function () {
      var one = new Vector(1, 2)
      var another = new Vector(0, 0)
      Vector.reset(one, another)
      expect(another.x).to.be(1)
      expect(another.y).to.be(2)
    })
    it('should return another vector', function () {
      var one = new Vector(1, 2)
      var another = new Vector(0, 0)
      var result = Vector.reset(one, another)
      expect(result).to.be(another)
    })
  })

  describe('Vector.prototype.reset(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.reset).to.be.a(Function)
    })
    it('should reset vector values', function () {
      var self = new Vector(0, 0)
      var vector = new Vector(1, 2)
      self.reset(vector)
      expect(self.x).to.be(1)
      expect(self.y).to.be(2)
    })
    it('should return self', function () {
      var self = new Vector(0, 0)
      var vector = new Vector(1, 2)
      var result = self.reset(vector)
      expect(result).to.be(self)
    })
  })

  describe('Vector.zero(vector)', function () {
    it('should be a function', function () {
      expect(Vector.zero).to.be.a(Function)
    })
    it('should reset vector values to zero', function () {
      var vector = new Vector(1, 2)
      Vector.zero(vector)
      expect(vector.x).to.be(0)
      expect(vector.y).to.be(0)
    })
    it('should return passed vector', function () {
      var vector = new Vector(1, 2)
      var result = Vector.zero(vector)
      expect(result).to.be(vector)
    })
  })

  describe('Vector.prototype.zero()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.zero).to.be.a(Function)
    })
    it('should reset vector values to zero', function () {
      var self = new Vector(1, 2)
      self.zero()
      expect(self.x).to.be(0)
      expect(self.y).to.be(0)
    })
    it('should return self', function () {
      var self = new Vector(1, 2)
      var result = self.zero()
      expect(result).to.be(self)
    })
  })
})

describe('Copy', function () {
  describe('Vector.copy(vector)', function () {
    it('should be a function', function () {
      expect(Vector.copy).to.be.a(Function)
    })
    it('should copy passed vector', function () {
      var vector = new Vector(1, 2)
      var result = Vector.copy(vector)
      expect(result.x).to.be(1)
      expect(result.y).to.be(2)
    })
  })

  describe('Vector.prototype.copy()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.copy).to.be.a(Function)
    })
    it('should copy self', function () {
      var self = new Vector(1, 2)
      var result = self.copy()
      expect(result.x).to.be(1)
      expect(result.y).to.be(2)
    })
  })
})

describe('Convertion', function () {
  describe('Vector.toJSON(vector)', function () {
    it('should be a function', function () {
      expect(Vector.toJSON).to.be.a(Function)
    })
    it('should convert to JSON passed vector', function () {
      var vector = new Vector(1, 2)
      var result = Vector.toJSON(vector)
      expect(result[0]).to.be(1)
      expect(result[1]).to.be(2)
    })
  })

  describe('Vector.prototype.toJSON()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.toJSON).to.be.a(Function)
    })
    it('should convert self to JSON', function () {
      var self = new Vector(1, 2)
      var result = self.toJSON()
      expect(result[0]).to.be(1)
      expect(result[1]).to.be(2)
    })
  })

  describe('Vector.toString(vector)', function () {
    it('should be a function', function () {
      expect(Vector.toString).to.be.a(Function)
    })
    it('should convert to string passed vector', function () {
      var vector = new Vector(1, 2)
      var result = Vector.toString(vector)
      expect(result).to.be('1.000 2.000')
    })
    it('should call base .toString() if passed nothing', function () {
      expect(Vector.toString()).to.be(Function.prototype.toString.call(Vector))
    })
  })

  describe('Vector.prototype.toString()', function () {
    it('should be a function', function () {
      expect(Vector.prototype.toString).to.be.a(Function)
    })
    it('should convert self to JSON', function () {
      var self = new Vector(1, 2)
      var result = self.toString()
      expect(result).to.be('1.000 2.000')
    })
  })
})

describe('Equality', function () {
  describe('Vector.equals(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.equals).to.be.a(Function)
    })
    it('should check vectors equality', function () {
      var one = new Vector(1, 2)
      var another = new Vector(1, 2)
      var result = Vector.equals(one, another)
      expect(result).to.be(true)
    })
  })

  describe('Vector.prototype.equals(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.equals).to.be.a(Function)
    })
    it('should check vectors equality', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(1, 2)
      var result = self.equals(vector)
      expect(result).to.be(true)
    })
  })

  describe('Vector.compare(one, another)', function () {
    it('should be a function', function () {
      expect(Vector.compare).to.be.a(Function)
    })
    it('should check vectors equality', function () {
      var one = new Vector(2, 2)
      var another = new Vector(1, 2)
      var result = Vector.compare(one, another)
      expect(result).to.be(1)
    })
  })

  describe('Vector.prototype.compare(vector)', function () {
    it('should be a function', function () {
      expect(Vector.prototype.compare).to.be.a(Function)
    })
    it('should check vectors equality', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(2, 2)
      var result = self.compare(vector)
      expect(result).to.be(-1)
    })
  })
})

describe('Swizzling', function () {
  describe('Vector.prototype.xx', function () {
    it('should be an accessor', function () {
      expect(Vector.prototype.xx).to.be.ok()
      var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'xx')
      expect(descriptor.configurable).to.be(true)
      expect(descriptor.enumerable).to.be(false)
      expect(descriptor.get).to.be.a(Function)
      expect(descriptor.set).to.be.a(Function)
    })
    it('should have getter which return new vector', function () {
      var self = new Vector(1, 2)
      var result = self.xx
      expect(result).to.be.a(Vector)
      expect(result.x).to.be(1)
      expect(result.y).to.be(1)
    })
    it('should have setter which set vector values', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(3, 4)
      self.xx = vector
      expect(self.x).to.be(3)
      expect(self.y).to.be(3)
    })
  })

  describe('Vector.prototype.xy', function () {
    it('should be an accessor', function () {
      expect(Vector.prototype.xy).to.be.ok()
      var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'xy')
      expect(descriptor.configurable).to.be(true)
      expect(descriptor.enumerable).to.be(false)
      expect(descriptor.get).to.be.a(Function)
      expect(descriptor.set).to.be.a(Function)
    })
    it('should have getter which return new vector', function () {
      var self = new Vector(1, 2)
      var result = self.xy
      expect(result).to.be.a(Vector)
      expect(result.x).to.be(1)
      expect(result.y).to.be(2)
    })
    it('should have setter which set vector values', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(3, 4)
      self.xy = vector
      expect(self.x).to.be(3)
      expect(self.y).to.be(4)
    })
  })

  describe('Vector.prototype.yx', function () {
    it('should be an accessor', function () {
      expect(Vector.prototype.yx).to.be.ok()
      var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'yx')
      expect(descriptor.configurable).to.be(true)
      expect(descriptor.enumerable).to.be(false)
      expect(descriptor.get).to.be.a(Function)
      expect(descriptor.set).to.be.a(Function)
    })
    it('should have getter which return new vector', function () {
      var self = new Vector(1, 2)
      var result = self.yx
      expect(result).to.be.a(Vector)
      expect(result.x).to.be(2)
      expect(result.y).to.be(1)
    })
    it('should have setter which set vector values', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(3, 4)
      self.yx = vector
      expect(self.x).to.be(4)
      expect(self.y).to.be(3)
    })
  })

  describe('Vector.prototype.yy', function () {
    it('should be an accessor', function () {
      expect(Vector.prototype.yy).to.be.ok()
      var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'yy')
      expect(descriptor.configurable).to.be(true)
      expect(descriptor.enumerable).to.be(false)
      expect(descriptor.get).to.be.a(Function)
      expect(descriptor.set).to.be.a(Function)
    })
    it('should have getter which return new vector', function () {
      var self = new Vector(1, 2)
      var result = self.yy
      expect(result).to.be.a(Vector)
      expect(result.x).to.be(2)
      expect(result.y).to.be(2)
    })
    it('should have setter which set vector values', function () {
      var self = new Vector(1, 2)
      var vector = new Vector(3, 4)
      self.yy = vector
      expect(self.x).to.be(4)
      expect(self.y).to.be(4)
    })
  })
})

if (typeof Symbol !== 'undefined' && Symbol.iterator) {
  describe('Iterator', function () {
    describe('Vector.prototype[Symbol.iterator]()', function () {
      it('shoud be a function', function () {
        expect(Vector.prototype[Symbol.iterator]).to.be.a(Function)
      })
      it('should return an iterator', function () {
        var vector = new Vector(3, 4)
        var iterator = vector[Symbol.iterator]()
        expect(iterator).to.be.ok()
        expect(iterator.next).to.be.a(Function)
        expect(iterator.next()).to.eql({ done: false, value: 3 })
        expect(iterator.next()).to.eql({ done: false, value: 4 })
        expect(iterator.next()).to.eql({ done: true, value: void 0 })
      })
    })
  })
}
