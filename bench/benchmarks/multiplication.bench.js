var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.mul(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.mul(scalar, vector)
    }
  }()),

  'Vector#mul(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.mul(scalar)
    }
  }()),

  'Vector.imul(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.imul(scalar, vector)
    }
  }()),

  'Vector#imul(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.imul(scalar)
    }
  }())
}
