import Vector from './vector.js'

function rotate (vector, theta) {
  var c = Math.cos(theta)
  var s = Math.sin(theta)
  var x = vector.x
  var y = vector.y
  vector.x = x * c - y * s
  vector.y = x * s + y * c
  return vector
}

Vector.rotate = function (theta, vector) {
  return vector.rotate(theta)
}

Vector.prototype.rotate = function (theta) {
  return rotate(this.copy(), theta)
}

Vector.irotate = function (theta, vector) {
  return vector.irotate(theta)
}

Vector.prototype.irotate = function (theta) {
  return rotate(this, theta)
}

export default Vector
