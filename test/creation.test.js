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

test('`Vector.from` should be a function', (t) => {
  t.true(typeof Vector.from === 'function')
})

test('`Vector.from([x, y])` should return new vector from data', (t) => {
  var vector = Vector.from([1, 2])
  t.true(vector instanceof Vector)
  t.is(vector.x, 1)
  t.is(vector.y, 2)
})

test('`Vector.fromAngle` should be a function', (t) => {
  t.true(typeof Vector.fromAngle === 'function')
})

test('`Vector.fromAngle(angle, magnitude)` should return new vector from angle and magnitude', (t) => {
  var vector = Vector.fromAngle(90 * (Math.PI / 180), 1)
  t.true(vector instanceof Vector)
  t.is(Math.round(vector.x), 0)
  t.is(vector.y, 1)
})
