var Vector = require('../dist/vectory.js')
var test = require('ava')

test('`Vector.add(one, another)` should return sum of two vectors', function (t) {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.add(one, another)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})

test('`Vector#add(vector)` should return sum of two vectors', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  var result = self.add(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})

test('`Vector.iadd(one, another)` should add one vector to another', function (t) {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  Vector.iadd(one, another)
  t.is(another.x, 4)
  t.is(another.y, 6)
})

test('`Vector.iadd(one, another)` should return another vector', function (t) {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.iadd(one, another)
  t.is(result, another)
})

test('`Vector#iadd(vector)` should add vector to self', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  self.iadd(vector)
  t.is(self.x, 4)
  t.is(self.y, 6)
})

test('`Vector#iadd(vector)` should return self instance', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  var result = self.iadd(vector)
  t.is(result, self)
})
