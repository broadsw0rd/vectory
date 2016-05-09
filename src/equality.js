import Vector from './vector.js'

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

export default Vector
