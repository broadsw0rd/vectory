var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector(x, y)': (function () {
    var x = rand(0, 100)
    var y = rand(0, 100)

    return function () {
      return new Vector(x, y)
    }
  }()),

  'Vector.from([x, y])': (function () {
    var data = [rand(0, 100), rand(0, 100)]

    return function () {
      return Vector.from(data)
    }
  }()),

  'Vector.fromAngle(angle, magnitude)': (function () {
    return function () {
      return Vector.fromAngle(90 * (Math.PI / 180), 1)
    }
  }()),

  'Vector.parse(string)': (function () {
    var string = [rand(0, 100), rand(0, 100)].join()

    return function () {
      return Vector.parse(string)
    }
  }())
}
