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
