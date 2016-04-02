var Vector = require('../../dist/vectory.js')
var rand = require('../rand.js')

module.exports = {
  'Vector#xx get': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.xx
    }
  }()),

  'Vector#xx set': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      self.xx = vector
    }
  }()),

  'Vector#xy get': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.xy
    }
  }()),

  'Vector#xy set': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      self.xy = vector
    }
  }()),

  'Vector#yx get': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.yx
    }
  }()),

  'Vector#yx set': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      self.yx = vector
    }
  }()),

  'Vector#yy get': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.yy
    }
  }()),

  'Vector#yy set': (function () {
    var self = new Vector(rand(0, 100), rand(0, 100))
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      self.yy = vector
    }
  }())
}
