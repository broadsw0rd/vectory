var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.dot(one, another)` should return dot product', function (t) {
  var one = new Vector(2, 3)
  var another = new Vector(3, 2)
  var product = Vector.dot(one, another)
  t.is(product, 12)
  t.end()
})

test('`Vector#dot(vector)` should return dot product', function (t) {
  var self = new Vector(2, 3)
  var vector = new Vector(3, 2)
  var product = self.dot(vector)
  t.is(product, 12)
  t.end()
})
