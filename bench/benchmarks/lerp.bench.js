var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.lerp(one, another, t)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))
    var time = 0.5

    return function () {
      return Vector.lerp(one, another, time)
    }
  }()),

  'Vector#lerp(vector, t)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))
    var time = 0.5

    return function () {
      return one.lerp(another, time)
    }
  }())
}
