import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.add` should be a function', (t) => {
  t.true(typeof Vector.add === 'function')
})

test('`Vector.add(one, another)` should return sum of two vectors', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(3, 4)
  var result = Vector.add(one, another)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})

test('`Vector#add` should be a function', (t) => {
  t.true(typeof Vector.prototype.add === 'function')
})

test('`Vector#add(vector)` should return sum of two vectors', (t) => {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  var result = self.add(vector)
  t.true(result instanceof Vector)
  t.is(result.x, 4)
  t.is(result.y, 6)
})
