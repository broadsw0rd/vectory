var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.div(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.div(scalar, vector)
    }
  }()),

  'Vector#div(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.div(scalar)
    }
  }()),

  'Vector.idiv(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.idiv(scalar, vector)
    }
  }()),

  'Vector#idiv(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.idiv(scalar)
    }
  }())
}
