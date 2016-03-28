import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.toJSON(vector)` should convert passed vector to JSON', (t) => {
  var vector = new Vector(1, 2)
  var result = Vector.toJSON(vector)
  t.true(result instanceof Array)
  t.is(result.length, 2)
  t.is(result[0], 1)
  t.is(result[1], 2)
})

test('`Vector#toJSON()` should convert self to JSON', (t) => {
  var self = new Vector(1, 2)
  var result = self.toJSON()
  t.true(result instanceof Array)
  t.is(result.length, 2)
  t.is(result[0], 1)
  t.is(result[1], 2)
})

test('`Vector.toString(vector)` should convert to string passed vector', (t) => {
  var vector = new Vector(1, 2)
  var result = Vector.toString(vector)
  t.is(result, '1.000 2.000')
})

test('`Vector.toString(vector)` should call base .toString() if passed nothing', (t) => {
  t.is(Vector.toString(), Function.prototype.toString.call(Vector))
})

test('`Vector#toString()` should convert self to JSON', (t) => {
  var self = new Vector(1, 2)
  var result = self.toString()
  t.is(result, '1.000 2.000')
})
