import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.sub(one, another)` should return diff of two vectors', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.sub(one, another)
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 2)
})

test('`Vector#sub(vector)` should return diff of two vectors', (t) => {
  var self = new Vector(3, 4)
  var vector = new Vector(1, 2)
  var result = self.sub(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 2)
})

test('`Vector.isub(one, another)` should substract one vector from another', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  Vector.isub(one, another)
  t.is(another.x, 2)
  t.is(another.y, 2)
})

test('`Vector.isub(one, another)` should return another vector', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.isub(one, another)
  t.is(result, another)
})

test('`Vector#isub(vector)` should substract vector from self', (t) => {
  var self = new Vector(3, 4)
  var vector = new Vector(1, 2)
  self.isub(vector)
  t.is(self.x, 2)
  t.is(self.y, 2)
})

test('`Vector#isub(vector)` should return self instance', (t) => {
  var self = new Vector(3, 4)
  var vector = new Vector(1, 2)
  var result = self.isub(vector)
  t.is(result, self)
})
