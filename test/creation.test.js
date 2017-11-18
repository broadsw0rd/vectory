var Vector = require('../dist/vectory.umd.js')
var test = require('tape')

test('`new Vector(x, y)` should create vector instance', function (t) {
  var vector = new Vector(1, 2)
  t.true(vector instanceof Vector)
  t.is(vector.x, 1)
  t.is(vector.y, 2)
  t.end()
})

test('`new Vector(x, y)` should create zero vector if args not passed', function (t) {
  var vector = new Vector()
  t.true(vector instanceof Vector)
  t.is(vector.x, 0)
  t.is(vector.y, 0)
  t.end()
})

test('`Vector.from([x, y])` should return new vector from data', function (t) {
  var vector = Vector.from([1, 2])
  t.true(vector instanceof Vector)
  t.is(vector.x, 1)
  t.is(vector.y, 2)
  t.end()
})

test('`Vector.fromAngle(angle, magnitude)` should return new vector from angle and magnitude', function (t) {
  var vector = Vector.fromAngle(90 * (Math.PI / 180), 1)
  t.true(vector instanceof Vector)
  t.is(Math.round(vector.x), 0)
  t.is(vector.y, 1)
  t.end()
})

test('`Vector.parse(string)` should return new vector from string', function (t) {
  var vector = Vector.parse('1.1, 2.2')
  t.true(vector instanceof Vector)
  t.is(vector.x, 1.1)
  t.is(vector.y, 2.2)

  vector = Vector.parse('1.1,2.2')
  t.true(vector instanceof Vector)
  t.is(vector.x, 1.1)
  t.is(vector.y, 2.2)

  vector = Vector.parse('1.1 2.2')
  t.true(vector instanceof Vector)
  t.is(vector.x, 1.1)
  t.is(vector.y, 2.2)

  vector = Vector.parse(' 1.1 2.2 ')
  t.true(vector instanceof Vector)
  t.is(vector.x, 1.1)
  t.is(vector.y, 2.2)
  t.end()
})
