var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.lerp(one, another, t)` should return linear interpolant between the vectors', function (t) {
  var one = new Vector(2, 2)
  var another = new Vector(4, 4)
  var time = 0.5
  var result = Vector.lerp(one, another, time)
  t.true(result instanceof Vector)
  t.is(result.x, 3)
  t.is(result.y, 3)
  t.end()
})

test('`Vector#lerp(vector, t)` should return linear interpolant between the vectors', function (t) {
  var one = new Vector(2, 2)
  var another = new Vector(4, 4)
  var time = 0.5
  var result = one.lerp(another, time)
  t.true(result instanceof Vector)
  t.is(result.x, 3)
  t.is(result.y, 3)
  t.end()
})
