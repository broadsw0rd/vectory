var Vector = require('../../dist/vectory.umd.js')
var rand = require('../rand.js')

module.exports = {
  'Spread operator': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return [...vector]
    }
  }()),

  'for..of loop': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      var sum = 0
      for (var i of vector) {
        sum += i
      }
      return sum
    }
  }())
}
