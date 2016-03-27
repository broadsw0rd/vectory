import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.add(one, another)` should return sum of two vectors', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.add(one, another)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})

test('`Vector#add(vector)` should return sum of two vectors', (t) => {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  var result = self.add(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})

test('`Vector.iadd(one, another)` should add one vector to another', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  Vector.iadd(one, another)
  t.is(another.x, 4)
  t.is(another.y, 6)
})

test('`Vector.iadd(one, another)` should return another vector', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.iadd(one, another)
  t.is(result, another)
})
