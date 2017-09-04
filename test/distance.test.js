var Vector = require('../dist/vectory.umd.js')
var test = require('ava')

test('`Vector.distance(one, another)` should return distance between vectors', function (t) {
  var one = new Vector(4, 3)
  var another = new Vector(8, 6)
  var distance = Vector.distance(one, another)
  t.is(distance, 5)
})

test('`Vector#distance(vector)` should return distance between vectors', function (t) {
  var self = new Vector(8, 6)
  var vector = new Vector(4, 3)
  var distance = self.distance(vector)
  t.is(distance, 5)
})
