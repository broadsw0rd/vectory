import Vector from './vector.js'

Vector.toJSON = function (vector) {
  return vector.toJSON()
}

Vector.prototype.toJSON = function () {
  return [this.x, this.y]
}

Vector.toString = function (vector) {
  return vector ? vector.toString() : Function.prototype.toString.call(this)
}

Vector.prototype.toString = function () {
  return this.x.toFixed(3) + ' ' + this.y.toFixed(3)
}

export default Vector
