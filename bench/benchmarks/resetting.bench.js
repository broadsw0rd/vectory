var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.reset(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.reset(one, another)
    }
  }()),

  'Vector#reset(vector)': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.reset(vector)
    }
  }()),

  'Vector.zero(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.zero(vector)
    }
  }()),

  'Vector#zero()': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.zero()
    }
  }())
}
