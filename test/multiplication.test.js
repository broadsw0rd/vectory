var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.mul(scalar, vector)` should multiply vector on scalar', function (t) {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = Vector.mul(scalar, vector)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
  t.end()
})

test('`Vector#mul(scalar)` should multiply self on scalar', function (t) {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = vector.mul(scalar)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
  t.end()
})

test('`Vector.imul(scalar, vector)` should multiply vector on scalar', function (t) {
  var vector = new Vector(2, 3)
  var scalar = 2
  Vector.imul(scalar, vector)
  t.is(vector.x, 4)
  t.is(vector.y, 6)
  t.end()
})

test('`Vector.imul(scalar, vector)` should return vector', function (t) {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = Vector.imul(scalar, vector)
  t.is(result, vector)
  t.end()
})

test('`Vector#imul(scalar)` should multiply self on scalar', function (t) {
  var vector = new Vector(2, 3)
  var scalar = 2
  vector.imul(scalar)
  t.is(vector.x, 4)
  t.is(vector.y, 6)
  t.end()
})

test('`Vector#imul(scalar)` should return self instance', function (t) {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = vector.imul(scalar)
  t.is(result, vector)
  t.end()
})
