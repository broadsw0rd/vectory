import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.mul(scalar, vector)` should multiply vector on scalar', (t) => {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = Vector.mul(scalar, vector)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})

test('`Vector#mul(scalar)` should multiply self on scalar', (t) => {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = vector.mul(scalar)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})

test('`Vector.imul(scalar, vector)` should multiply vector on scalar', (t) => {
  var vector = new Vector(2, 3)
  var scalar = 2
  Vector.imul(scalar, vector)
  t.is(vector.x, 4)
  t.is(vector.y, 6)
})

test('`Vector.imul(scalar, vector)` should return vector', (t) => {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = Vector.imul(scalar, vector)
  t.is(result, vector)
})

test('`Vector#imul(scalar)` should multiply self on scalar', (t) => {
  var vector = new Vector(2, 3)
  var scalar = 2
  vector.imul(scalar)
  t.is(vector.x, 4)
  t.is(vector.y, 6)
})

test('`Vector#imul(scalar)` should return self instance', (t) => {
  var vector = new Vector(2, 3)
  var scalar = 2
  var result = vector.imul(scalar)
  t.is(result, vector)
})
