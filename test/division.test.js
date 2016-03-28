import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.div(scalar, vector)` should divide vector on scalar', (t) => {
  var vector = new Vector(4, 6)
  var scalar = 2
  var result = Vector.div(scalar, vector)
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 3)
})

test('`Vector#div(scalar)` should divide self on scalar', (t) => {
  var vector = new Vector(4, 6)
  var scalar = 2
  var result = vector.div(scalar)
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 3)
})

test('`Vector.idiv(scalar, vector)` should divide vector on scalar', (t) => {
  var vector = new Vector(4, 6)
  var scalar = 2
  Vector.idiv(scalar, vector)
  t.is(vector.x, 2)
  t.is(vector.y, 3)
})

test('`Vector.idiv(scalar, vector)` should return vector', (t) => {
  var vector = new Vector(4, 6)
  var scalar = 2
  var result = Vector.idiv(scalar, vector)
  t.is(result, vector)
})

test('`Vector#idiv(scalar)` should multiply self on scalar', (t) => {
  var vector = new Vector(4, 6)
  var scalar = 2
  vector.idiv(scalar)
  t.is(vector.x, 2)
  t.is(vector.y, 3)
})

test('`Vector#idiv(scalar)` should return self instance', (t) => {
  var vector = new Vector(4, 6)
  var scalar = 2
  var result = vector.idiv(scalar)
  t.is(result, vector)
})
