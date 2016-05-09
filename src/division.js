import Vector from './vector.js'

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

export default Vector
