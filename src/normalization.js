import Vector from './vector.js'

Vector.normalized = function (vector) {
  return vector.normalized()
}

Vector.prototype.normalized = function () {
  var x = this.x
  var y = this.y
  var length = Math.sqrt(x * x + y * y)
  if (length > 0) {
    return new Vector(x / length, y / length)
  } else {
    return new Vector(0, 0)
  }
}

Vector.normalize = function (vector) {
  return vector.normalize()
}

Vector.prototype.normalize = function () {
  var x = this.x
  var y = this.y
  var length = Math.sqrt(x * x + y * y)
  if (length > 0) {
    this.x = x / length
    this.y = y / length
  }
  return this
}

export default Vector
