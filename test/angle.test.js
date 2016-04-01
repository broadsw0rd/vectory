import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.angleOf(vector)` should return the angle theta of vector', (t) => {
  var vector = new Vector(0, 1)
  var result = Vector.angleOf(vector)
  t.is(result * 180 / Math.PI, 90)
})

test('`Vector#angleOf()` should return the angle theta of vector', (t) => {
  var self = new Vector(0, 1)
  var result = self.angleOf()
  t.is(result * 180 / Math.PI, 90)
})

test('`Vector.angleTo(one, another)` should return the angle between vectors', (t) => {
  var one = new Vector(0, 1)
  var another = new Vector(1, 0)
  var result = Vector.angleTo(one, another)
  t.is(result * 180 / Math.PI, 90)
})

test('`Vector#angleTo(vector)` should return the angle between vectors', (t) => {
  var self = new Vector(0, 1)
  var vector = new Vector(1, 0)
  var result = self.angleTo(vector)
  t.is(result * 180 / Math.PI, 90)
})