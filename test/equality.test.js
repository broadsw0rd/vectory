var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.equals(one, another)` should check vectors equality', function (t) {
  var one = new Vector(1, 2)
  var another = new Vector(1, 2)
  var result = Vector.equals(one, another)
  t.true(result)
  t.end()
})

test('`Vector#equals(vector)` should check vectors equality', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(1, 2)
  var result = self.equals(vector)
  t.true(result)
  t.end()
})

test('`Vector.compare(one, another)` should check vectors equality', function (t) {
  var one = new Vector(2, 2)
  var another = new Vector(1, 2)
  var result = Vector.compare(one, another)
  t.is(result, 1)
  t.end()
})

test('`Vector#compare(vector)` should check vectors equality', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(2, 2)
  var result = self.compare(vector)
  t.is(result, -1)
  t.end()
})
