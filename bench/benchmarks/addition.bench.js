var Vector = require('../../dist/vectory.umd.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.add(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.add(one, another)
    }
  }()),

  'Vector#add(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.add(another)
    }
  }()),

  'Vector.iadd(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.iadd(one, another)
    }
  }()),

  'Vector#iadd(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.iadd(another)
    }
  }())
}
