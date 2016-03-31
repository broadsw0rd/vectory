var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.distance(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.distance(one, another)
    }
  }()),

  'Vector#distance(vector)': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.distance(vector)
    }
  }())
}
