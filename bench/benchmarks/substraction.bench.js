var Vector = require('../../dist/vectory.umd.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.sub(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.sub(one, another)
    }
  }()),

  'Vector#sub(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.sub(another)
    }
  }()),

  'Vector.isub(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.isub(one, another)
    }
  }()),

  'Vector#isub(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.isub(another)
    }
  }())
}
