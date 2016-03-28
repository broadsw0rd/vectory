import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.dot(one, another)` should return dot product', (t) => {
  var one = new Vector(2, 3)
  var another = new Vector(3, 2)
  var product = Vector.dot(one, another)
  t.is(product, 12)
})

test('`Vector#dot(vector)` should return dot product', (t) => {
  var self = new Vector(2, 3)
  var vector = new Vector(3, 2)
  var product = self.dot(vector)
  t.is(product, 12)
})
