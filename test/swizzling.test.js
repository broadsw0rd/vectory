var Vector = require('../dist/vectory.js')
var test = require('ava')

test('`Vector#xx` should be an accessor', function (t) {
  var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'xx')
  t.is(descriptor.configurable, true)
  t.is(descriptor.enumerable, false)
  t.true(typeof descriptor.get === 'function')
  t.true(typeof descriptor.set === 'function')
})

test('`Vector#xx` should have getter which return new vector', function (t) {
  var self = new Vector(1, 2)
  var result = self.xx
  t.true(result instanceof Vector)
  t.is(result.x, 1)
  t.is(result.y, 1)
})

test('`Vector#xx` should have setter which set vector values', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  self.xx = vector
  t.is(self.x, 3)
  t.is(self.y, 3)
})

test('`Vector#xy` should be an accessor', function (t) {
  var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'xy')
  t.is(descriptor.configurable, true)
  t.is(descriptor.enumerable, false)
  t.true(typeof descriptor.get === 'function')
  t.true(typeof descriptor.set === 'function')
})

test('`Vector#xy` should have getter which return new vector', function (t) {
  var self = new Vector(1, 2)
  var result = self.xy
  t.true(result instanceof Vector)
  t.is(result.x, 1)
  t.is(result.y, 2)
})

test('`Vector#xy` should have setter which set vector values', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  self.xy = vector
  t.is(self.x, 3)
  t.is(self.y, 4)
})

test('`Vector#yx` should be an accessor', function (t) {
  var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'yx')
  t.is(descriptor.configurable, true)
  t.is(descriptor.enumerable, false)
  t.true(typeof descriptor.get === 'function')
  t.true(typeof descriptor.set === 'function')
})
test('`Vector#yx` should have getter which return new vector', function (t) {
  var self = new Vector(1, 2)
  var result = self.yx
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 1)
})

test('`Vector#yx` should have setter which set vector values', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  self.yx = vector
  t.is(self.x, 4)
  t.is(self.y, 3)
})

test('`Vector#yy` should be an accessor', function (t) {
  var descriptor = Object.getOwnPropertyDescriptor(Vector.prototype, 'yy')
  t.is(descriptor.configurable, true)
  t.is(descriptor.enumerable, false)
  t.true(typeof descriptor.get === 'function')
  t.true(typeof descriptor.set === 'function')
})

test('`Vector#yy` should have getter which return new vector', function (t) {
  var self = new Vector(1, 2)
  var result = self.yy
  t.true(result instanceof Vector)
  t.is(result.x, 2)
  t.is(result.y, 2)
})

test('`Vector#yy` should have setter which set vector values', function (t) {
  var self = new Vector(1, 2)
  var vector = new Vector(3, 4)
  self.yy = vector
  t.is(self.x, 4)
  t.is(self.y, 4)
})
