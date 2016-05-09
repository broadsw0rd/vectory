import Vector from './vector.js'

Vector.from = function (data) {
  return new Vector(data[0], data[1])
}

Vector.fromAngle = function (angle, magnitude) {
  return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
}

Vector.parse = function (string) {
  return Vector.from(string.trim().replace(',', ' ').split(/\s+/).map(parseFloat))
}

export default Vector
