import Vector from './vector.js'

Vector.copy = function (vector) {
  return vector.copy()
}

Vector.prototype.copy = function () {
  return new Vector(this.x, this.y)
}

export default Vector
