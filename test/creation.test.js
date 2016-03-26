import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector` should be a function', (t) => {
  t.true(typeof Vector === 'function')
})

test('`new Vector(x, y)` should create vector instance', (t) => {
  var vector = new Vector(1, 2)
  t.true(vector instanceof Vector)
  t.is(vector.x, 1)
  t.is(vector.y, 2)
})

test('`new Vector(x, y)` should create zero vector if args not passed', (t) => {
  var vector = new Vector()
  t.true(vector instanceof Vector)
  t.is(vector.x, 0)
  t.is(vector.y, 0)
})
