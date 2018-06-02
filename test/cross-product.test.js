var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.cross(one, another)` should return cross product', function (t) {
  var one = new Vector(3, 4)
  var another = new Vector(1, 2)
  var product = Vector.cross(one, another)
  t.is(product, 10)
  t.end()
})

test('`Vector#cross(vector)` should return cross product', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  var product = self.cross(vector)
  t.is(product, 10)
  t.end()
})
