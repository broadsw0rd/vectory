var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.sub(one, another)` should return diff of two vectors', function (t) {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.sub(one, another)
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 2)
  t.end()
})

test('`Vector#sub(vector)` should return diff of two vectors', function (t) {
  var self = new Vector(3, 4)
  var vector = new Vector(1, 2)
  var result = self.sub(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 2)
  t.end()
})

test('`Vector.isub(one, another)` should substract one vector from another', function (t) {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  Vector.isub(one, another)
  t.is(another.x, 2)
  t.is(another.y, 2)
  t.end()
})

test('`Vector.isub(one, another)` should return another vector', function (t) {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.isub(one, another)
  t.is(result, another)
  t.end()
})

test('`Vector#isub(vector)` should substract vector from self', function (t) {
  var self = new Vector(3, 4)
  var vector = new Vector(1, 2)
  self.isub(vector)
  t.is(self.x, 2)
  t.is(self.y, 2)
  t.end()
})

test('`Vector#isub(vector)` should return self instance', function (t) {
  var self = new Vector(3, 4)
  var vector = new Vector(1, 2)
  var result = self.isub(vector)
  t.is(result, self)
  t.end()
})
