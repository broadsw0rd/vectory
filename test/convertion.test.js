var Vector = require('../dist/vectory.js')
var test = require('ava')

test('`Vector.toJSON(vector)` should convert passed vector to JSON', function (t) {
  var vector = new Vector(1, 2)
  var result = Vector.toJSON(vector)
  t.true(result instanceof Array)
  t.is(result.length, 2)
  t.is(result[0], 1)
  t.is(result[1], 2)
})

test('`Vector#toJSON()` should convert self to JSON', function (t) {
  var self = new Vector(1, 2)
  var result = self.toJSON()
  t.true(result instanceof Array)
  t.is(result.length, 2)
  t.is(result[0], 1)
  t.is(result[1], 2)
})

test('`Vector.toString(vector)` should convert to string passed vector', function (t) {
  var vector = new Vector(1, 2)
  var result = Vector.toString(vector)
  t.is(result, '1.000 2.000')
})

test('`Vector.toString(vector)` should call base .toString() if passed nothing', function (t) {
  t.is(Vector.toString(), Function.prototype.toString.call(Vector))
})

test('`Vector#toString()` should convert self to JSON', function (t) {
  var self = new Vector(1, 2)
  var result = self.toString()
  t.is(result, '1.000 2.000')
})

test('`Vector.prototype[Symbol.toStringTag]` should specified [object ___] stringification', function (t) {
  var vector = new Vector(1, 2)
  var result = Object.prototype.toString.call(vector)
  t.is(result, '[object Vector]')
})

test('`Vector.toArray(vector)` should convert passed vector to array', function (t) {
  var vector = new Vector(1, 2)
  var result = Vector.toArray(vector)
  t.true(result instanceof Array)
  t.is(result.length, 2)
  t.is(result[0], 1)
  t.is(result[1], 2)
})

test('`Vector#toArray()` should convert self to array', function (t) {
  var self = new Vector(1, 2)
  var result = self.toArray()
  t.true(result instanceof Array)
  t.is(result.length, 2)
  t.is(result[0], 1)
  t.is(result[1], 2)
})
