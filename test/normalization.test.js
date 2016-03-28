import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.normalized(vector)` should return unit vector', (t) => {
  var vector = new Vector(2, 0)
  var result = Vector.normalized(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 1)
  t.is(result.y, 0)
})

test('`Vector.normalized(vector)` should return zero vector if zero vector was passed', (t) => {
  var vector = new Vector(0, 0)
  var result = Vector.normalized(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 0)
  t.is(result.y, 0)
})

test('`Vector#normalized()` should return unit vector', (t) => {
  var vector = new Vector(2, 0)
  var result = vector.normalized()
  t.true(result instanceof Vector)
  t.is(result.x, 1)
  t.is(result.y, 0)
})

test('`Vector#normalized()` should return zero vector from zero vector', (t) => {
  var vector = new Vector(0, 0)
  var result = vector.normalized()
  t.true(result instanceof Vector)
  t.is(result.x, 0)
  t.is(result.y, 0)
})

test('`Vector.normalize(vector)` should convert passed vector to unit vector', (t) => {
  var vector = new Vector(2, 0)
  var result = Vector.normalize(vector)
  t.is(vector.x, 1)
  t.is(vector.y, 0)
  t.is(result, vector)
})

test('`Vector.normalize(vector)` should do nothing if zero vector was passed', (t) => {
  var vector = new Vector(0, 0)
  var result = Vector.normalize(vector)
  t.is(vector.x, 0)
  t.is(vector.y, 0)
  t.is(result, vector)
})

test('`Vector#normalize()` should convert vector to unit vector', (t) => {
  var vector = new Vector(2, 0)
  vector.normalize()
  t.is(vector.x, 1)
  t.is(vector.y, 0)
})

test('`Vector#normalize()` should return self', (t) => {
  var vector = new Vector(0, 0)
  var result = vector.normalize()
  t.is(result, vector)
})
