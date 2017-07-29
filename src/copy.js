import Vector from './vector.js'

Vector.copy = function (vector) {
  return vector.copy()
}

Vector.prototype.copy = function () {
  return new Vector(this.x, this.y)
}

Vector.clone = Vector.copy

Vector.prototype.clone = Vector.prototype.copy

export default Vector
