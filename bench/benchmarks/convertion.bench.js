var Vector = require('../../dist/vectory.umd.js')
var rand = require('../rand.js')

module.exports = {
  'Vector.toJSON(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.toJSON(vector)
    }
  }()),

  'Vector#toJSON()': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.toJSON()
    }
  }()),

  'Vector.toString(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.toString(vector)
    }
  }()),

  'Vector#toString()': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.toString()
    }
  }()),

  'Vector.toArray(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.toArray(vector)
    }
  }()),

  'Vector#toArray()': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return self.toArray()
    }
  }())
}
