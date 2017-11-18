var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.angleOf(vector)` should return the angle theta of vector', function (t) {
  var vector = new Vector(0, 1)
  var result = Vector.angleOf(vector)
  t.is(result * 180 / Math.PI, 90)
  t.end()
})

test('`Vector#angleOf()` should return the angle theta of vector', function (t) {
  var self = new Vector(0, 1)
  var result = self.angleOf()
  t.is(result * 180 / Math.PI, 90)
  t.end()
})

test('`Vector.angleTo(one, another)` should return the angle between vectors', function (t) {
  var one = new Vector(5, 10)
  var another = new Vector(10, 15)
  var result = Vector.angleTo(one, another)
  t.is(Math.round(result * 180 / Math.PI), 7)
  t.end()
})

test('`Vector#angleTo(vector)` should return the angle between vectors', function (t) {
  var self = new Vector(5, 10)
  var vector = new Vector(10, 15)
  var result = self.angleTo(vector)
  t.is(Math.round(result * 180 / Math.PI), 7)
  t.end()
})
