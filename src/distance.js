import Vector from './vector.js'

Vector.distance = function (one, another) {
  return another.distance(one)
}

Vector.prototype.distance = function (vector) {
  var x = this.x - vector.x
  var y = this.y - vector.y
  return Math.sqrt(x * x + y * y)
}

export default Vector
