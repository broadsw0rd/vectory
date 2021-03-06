var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.copy(vector)` should copy passed vector', function (t) {
  var vector = new Vector(1, 2)
  var result = Vector.copy(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 1)
  t.is(result.y, 2)
  t.end()
})

test('`Vector#copy()` should copy self', function (t) {
  var self = new Vector(1, 2)
  var result = self.copy()
  t.true(result instanceof Vector)
  t.is(result.x, 1)
  t.is(result.y, 2)
  t.end()
})
