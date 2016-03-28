import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.magnitude(vector)` should return vector magnitude', (t) => {
  var vector = new Vector(3, 4)
  var magnitude = Vector.magnitude(vector)
  t.is(magnitude, 5)
})

test('`Vector#magnitude()` should return vector magnitude', (t) => {
  var vector = new Vector(3, 4)
  var magnitude = vector.magnitude()
  t.is(magnitude, 5)
})
