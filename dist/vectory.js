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
  return one.add(another)
}

Vector.prototype.add = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.iadd = function (one, another) {
  return one.iadd(another)
}

Vector.prototype.iadd = function (vector) {
  this.x += vector.x
  this.y += vector.y
  return this
}

Vector.sub = function (one, another) {
  return one.sub(another)
}

Vector.prototype.sub = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

Vector.isub = function (one, another) {
  return one.isub(another)
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

return Vector

}))