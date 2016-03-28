import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.reset(one, another)` should reset vector values', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(0, 0)
  Vector.reset(one, another)
  t.is(another.x, 1)
  t.is(another.y, 2)
})

test('`Vector.reset(one, another)` should return another vector', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(0, 0)
  var result = Vector.reset(one, another)
  t.is(result, another)
})

test('`Vector#reset(vector)` should reset vector values', (t) => {
  var self = new Vector(0, 0)
  var vector = new Vector(1, 2)
  self.reset(vector)
  t.is(self.x, 1)
  t.is(self.y, 2)
})

test('`Vector#reset(vector)` should return self', (t) => {
  var self = new Vector(0, 0)
  var vector = new Vector(1, 2)
  var result = self.reset(vector)
  t.is(result, self)
})

test('`Vector.zero(vector)` should reset vector values to zero', (t) => {
  var vector = new Vector(1, 2)
  Vector.zero(vector)
  t.is(vector.x, 0)
  t.is(vector.y, 0)
})

test('`Vector.zero(vector)` should return passed vector', (t) => {
  var vector = new Vector(1, 2)
  var result = Vector.zero(vector)
  t.is(result, vector)
})

test('`Vector#zero()` should reset vector values to zero', (t) => {
  var self = new Vector(1, 2)
  self.zero()
  t.is(self.x, 0)
  t.is(self.y, 0)
})

test('`Vector#zero()` should return self', (t) => {
  var self = new Vector(1, 2)
  var result = self.zero()
  t.is(result, self)
})
