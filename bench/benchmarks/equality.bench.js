var Vector = require('../../dist/vectory.umd.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.equals(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.equals(one, another)
    }
  }()),

  'Vector#equals(vector)': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.equals(vector)
    }
  }()),

  'Vector.compare(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.compare(one, another)
    }
  }()),

  'Vector#compare(vector)': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.compare(vector)
    }
  }())
}
