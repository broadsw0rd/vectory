/*
 _    __          __                  
| |  / /__  _____/ /_____  _______  __
| | / / _ \/ ___/ __/ __ \/ ___/ / / /
| |/ /  __/ /__/ /_/ /_/ / /  / /_/ / 
|___/\___/\___/\__/\____/_/   \__, /  
                             /____/   
*/
;(function umd (name, root, factory) {
  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    root[name] = factory()
  }
}(
'Vector',
// better `this` reference, inspired [here](https://github.com/facebook/regenerator/blob/master/runtime.js#L662)
typeof global === 'object' ? global : 
/* istanbul ignore next */
typeof window === 'object' ? window : 
typeof self === 'object' ? self : this,  
function factory () {

function Vector (x, y) {
  this.x = x || 0
  this.y = y || 0
}

Vector.displayName = 'Vector'

Vector.from = function (data) {
  return new Vector(data[0], data[1])
}

Vector.fromAngle = function (angle, magnitude) {
  return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
}

Vector.parse = function (string) {
  return Vector.from(string.trim().replace(',', ' ').split(/\s+/).map(parseFloat))
}

Vector.add = function (one, another) {
  return another.add(one)
}

Vector.prototype.add = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.iadd = function (one, another) {
  return another.iadd(one)
}

Vector.prototype.iadd = function (vector) {
  this.x += vector.x
  this.y += vector.y
  return this
}

Vector.sub = function (one, another) {
  return another.sub(one)
}

Vector.prototype.sub = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

Vector.isub = function (one, another) {
  return another.isub(one)
}

Vector.prototype.isub = function (vector) {
  this.x -= vector.x
  this.y -= vector.y
  return this
}

Vector.mul = function (scalar, vector) {
  return vector.mul(scalar)
}

Vector.prototype.mul = function (scalar) {
  return new Vector(this.x * scalar, this.y * scalar)
}

Vector.imul = function (scalar, vector) {
  return vector.imul(scalar)
}

Vector.prototype.imul = function (scalar) {
  this.x *= scalar
  this.y *= scalar
  return this
}

Vector.div = function (scalar, vector) {
  return vector.div(scalar)
}

Vector.prototype.div = function (scalar) {
  return new Vector(this.x / scalar, this.y / scalar)
}

Vector.idiv = function (scalar, vector) {
  return vector.idiv(scalar)
}

Vector.prototype.idiv = function (scalar) {
  this.x /= scalar
  this.y /= scalar
  return this
}

Vector.lerp = function (one, another, t) {
  return one.lerp(another, t)
}

Vector.prototype.lerp = function (vector, t) {
  var x = (1 - t) * this.x + t * vector.x
  var y = (1 - t) * this.y + t * vector.y
  return new Vector(x, y)
}

Vector.normalized = function (vector) {
  return vector.normalized()
}

Vector.prototype.normalized = function () {
  var x = this.x
  var y = this.y
  var length = Math.sqrt(x * x + y * y)
  if (length > 0) {
    return new Vector(x / length, y / length)
  } else {
    return new Vector(0, 0)
  }
}

Vector.normalize = function (vector) {
  return vector.normalize()
}

Vector.prototype.normalize = function () {
  var x = this.x
  var y = this.y
  var length = Math.sqrt(x * x + y * y)
  if (length > 0) {
    this.x = x / length
    this.y = y / length
  }
  return this
}

Vector.magnitude = function (vector) {
  return vector.magnitude()
}

Vector.prototype.magnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

Vector.dot = function (one, another) {
  return another.dot(one)
}

Vector.prototype.dot = function (vector) {
  return this.x * vector.x + this.y * vector.y
}

Vector.distance = function (one, another) {
  return another.distance(one)
}

Vector.prototype.distance = function (vector) {
  var x = this.x - vector.x
  var y = this.y - vector.y
  return Math.sqrt(x * x + y * y)
}

Vector.angleOf = function (vector) {
  return vector.angleOf()
}

Vector.prototype.angleOf = function () {
  return Math.atan2(this.y, this.x)
}

Vector.angleTo = function (one, another) {
  return another.angleTo(one)
}

Vector.prototype.angleTo = function (vector) {
  return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude())
}

Vector.reset = function (one, another) {
  return another.reset(one)
}

Vector.prototype.reset = function (vector) {
  this.x = vector.x
  this.y = vector.y
  return this
}

Vector.zero = function (vector) {
  return vector.zero()
}

Vector.prototype.zero = function () {
  this.x = 0
  this.y = 0
  return this
}

Vector.copy = function (vector) {
  return vector.copy()
}

Vector.prototype.copy = function () {
  return new Vector(this.x, this.y)
}

Vector.toJSON = function (vector) {
  return vector.toJSON()
}

Vector.prototype.toJSON = function () {
  return [this.x, this.y]
}

Vector.toString = function (vector) {
  return vector.toString()
}

Vector.prototype.toString = function () {
  return this.x.toFixed(3) + ' ' + this.y.toFixed(3)
}

Vector.equals = function (one, another) {
  return one.equals(another)
}

Vector.prototype.equals = function (vector) {
  return this.x === vector.x && this.y === vector.y
}

Vector.compare = function (one, another) {
  return one.compare(another)
}

Vector.prototype.compare = function (vector) {
  var thisMagnitude = this.magnitude()
  var vectorMagnitude = vector.magnitude()
  return (thisMagnitude > vectorMagnitude) - (vectorMagnitude > thisMagnitude)
}

Object.defineProperties(Vector.prototype, {
  xx: {
    configurable: true,
    get: function () {
      return new Vector(this.x, this.x)
    },
    set: function (vector) {
      this.x = vector.x
      this.y = vector.x
    }
  },
  xy: {
    configurable: true,
    get: function () {
      return new Vector(this.x, this.y)
    },
    set: function (vector) {
      this.x = vector.x
      this.y = vector.y
    }
  }
})

return Vector

}))