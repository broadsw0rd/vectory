import Vector from './vector.js'

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

export default Vector
