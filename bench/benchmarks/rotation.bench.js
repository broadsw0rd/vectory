var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.rotate(theta, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var theta = Math.PI

    return function () {
      return Vector.rotate(theta, vector)
    }
  }()),

  'Vector#rotate(theta)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var theta = Math.PI

    return function () {
      return vector.rotate(theta)
    }
  }()),

  'Vector.irotate(theta, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var theta = Math.PI

    return function () {
      return Vector.irotate(theta, vector)
    }
  }()),

  'Vector#irotate(theta)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var theta = Math.PI

    return function () {
      return vector.irotate(theta)
    }
  }())
}
