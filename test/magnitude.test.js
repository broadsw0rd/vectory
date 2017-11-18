var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.magnitude(vector)` should return vector magnitude', function (t) {
  var vector = new Vector(3, 4)
  var magnitude = Vector.magnitude(vector)
  t.is(magnitude, 5)
  t.end()
})

test('`Vector#magnitude()` should return vector magnitude', function (t) {
  var vector = new Vector(3, 4)
  var magnitude = vector.magnitude()
  t.is(magnitude, 5)
  t.end()
})
