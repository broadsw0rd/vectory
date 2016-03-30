var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.dot(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.dot(one, another)
    }
  }()),

  'Vector#dot(vector)': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.dot(vector)
    }
  }())
}
