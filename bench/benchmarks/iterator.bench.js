var Vector = require('../../dist/vectory.js')
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
    var sum = 0

    return function () {
      for (var i of vector) {
        sum += i
      }
    }
  }())
}
