var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.normalized(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.normalized(vector)
    }
  }()),

  'Vector#normalized()': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.normalized()
    }
  }()),

  'Vector.normalize(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.normalize(vector)
    }
  }()),

  'Vector#normalize()': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.normalize()
    }
  }())
}
