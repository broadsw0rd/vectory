var Vector = require('../../dist/vectory.umd.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.copy(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.copy(vector)
    }
  }()),

  'Vector#copy()': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.copy()
    }
  }())
}
