var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`Vector.rotate(theta, vector)` should rotate vector on theta angle', function (t) {
  var vector = new Vector(3, 3)
  var theta = Math.PI / 2
  var result = Vector.rotate(theta, vector)
  t.true(result instanceof Vector)
  t.is(result.x, -3)
  t.is(result.y, 3)
  t.end()
})

test('`Vector#rotate(theta)` should rotate vector on theta angle', function (t) {
  var self = new Vector(3, 3)
  var theta = Math.PI / 2
  var result = self.rotate(theta)
  t.true(result instanceof Vector)
  t.is(result.x, -3)
  t.is(result.y, 3)
  t.end()
})

test('`Vector.irotate(theta, vector)` should rotate vector on theta angle', function (t) {
  var vector = new Vector(3, 3)
  var theta = Math.PI / 2
  var result = Vector.irotate(theta, vector)
  t.true(result instanceof Vector)
  t.is(result, vector)
  t.is(result.x, -3)
  t.is(result.y, 3)
  t.end()
})

test('`Vector.irotate(theta, vector)` should return vector', function (t) {
  var vector = new Vector(3, 3)
  var theta = Math.PI / 2
  var result = Vector.irotate(theta, vector)
  t.is(result, vector)
  t.end()
})

test('`Vector#irotate(theta)` should rotate vector on theta angle', function (t) {
  var self = new Vector(3, 3)
  var theta = Math.PI / 2
  var result = self.irotate(theta)
  t.true(result instanceof Vector)
  t.is(result, self)
  t.is(result.x, -3)
  t.is(result.y, 3)
  t.end()
})

test('`Vector#irotate(theta)` should return self instance', function (t) {
  var self = new Vector(3, 3)
  var theta = Math.PI / 2
  var result = self.irotate(theta)
  t.is(result, self)
  t.end()
})
