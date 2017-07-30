import Vector from './vector.js'
import EPSILON from 'number-epsilon'

Vector.equals = function (one, another) {
  return one.equals(another)
}

Vector.prototype.equals = function (vector) {
  return (
    Math.abs(this.x - vector.x) < EPSILON &&
    Math.abs(this.y - vector.y) < EPSILON
  )
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
