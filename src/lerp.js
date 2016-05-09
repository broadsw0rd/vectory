import Vector from './vector.js'

Vector.lerp = function (one, another, t) {
  return one.lerp(another, t)
}

Vector.prototype.lerp = function (vector, t) {
  var x = (1 - t) * this.x + t * vector.x
  var y = (1 - t) * this.y + t * vector.y
  return new Vector(x, y)
}

export default Vector
