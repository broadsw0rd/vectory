var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.magnitude(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.magnitude(vector)
    }
  }()),

  'Vector#magnitude()': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.magnitude()
    }
  }())
}
