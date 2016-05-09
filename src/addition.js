import Vector from './vector.js'

Vector.add = function (one, another) {
  return another.add(one)
}

Vector.prototype.add = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.iadd = function (one, another) {
  return another.iadd(one)
}

Vector.prototype.iadd = function (vector) {
  this.x += vector.x
  this.y += vector.y
  return this
}

export default Vector
