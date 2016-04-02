var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.angleOf(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.angleOf(vector)
    }
  }()),

  'Vector#angleOf()': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.angleOf()
    }
  }()),

  'Vector.angleTo(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.angleTo(one, another)
    }
  }()),

  'Vector#angleTo(vector)': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.angleTo(vector)
    }
  }())
}
