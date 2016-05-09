import Vector from './vector.js'

Vector.magnitude = function (vector) {
  return vector.magnitude()
}

Vector.prototype.magnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

export default Vector
