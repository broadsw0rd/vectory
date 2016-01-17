function Vector (x, y) {
  this.x = x || 0
  this.y = y || 0
}

Vector.VERSION = '0.0.1'

Vector.from = function (data) {
  return new Vector(data[0], data[1])
}

Vector.fromAngle = function (angle, magnitude) {
  return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
}
