import Vector from './vector.js'

Vector.dot = function (one, another) {
  return another.dot(one)
}

Vector.prototype.dot = function (vector) {
  return this.x * vector.x + this.y * vector.y
}

export default Vector
