import Vector from './vector.js'

Vector.angleOf = function (vector) {
  return vector.angleOf()
}

Vector.prototype.angleOf = function () {
  return Math.atan2(this.y, this.x)
}

Vector.angleTo = function (one, another) {
  return another.angleTo(one)
}

Vector.prototype.angleTo = function (vector) {
  return Math.acos(this.dot(vector) / (this.magnitude() * vector.magnitude()))
}

export default Vector
