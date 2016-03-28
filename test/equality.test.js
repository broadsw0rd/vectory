import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.equals(one, another)` should check vectors equality', (t) => {
  var one = new Vector(1, 2)
  var another = new Vector(1, 2)
  var result = Vector.equals(one, another)
  t.true(result)
})

test('`Vector#equals(vector)` should check vectors equality', (t) => {
  var self = new Vector(1, 2)
  var vector = new Vector(1, 2)
  var result = self.equals(vector)
  t.true(result)
})

test('`Vector.compare(one, another)` should check vectors equality', (t) => {
  var one = new Vector(2, 2)
  var another = new Vector(1, 2)
  var result = Vector.compare(one, another)
  t.is(result, 1)
})

test('`Vector#compare(vector)` should check vectors equality', (t) => {
  var self = new Vector(1, 2)
  var vector = new Vector(2, 2)
  var result = self.compare(vector)
  t.is(result, -1)
})
