import Vector from './vector.js'

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

Vector.set = function (x, y, vector) {
  return vector.set(x, y)
}

Vector.prototype.set = function (x, y) {
  this.x = x || 0
  this.y = y || 0
  return this
}

export default Vector
