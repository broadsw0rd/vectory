var Vector = require('../dist/vectory.umd.js')
var test = require('ava')

if (typeof Symbol !== 'undefined' && Symbol.iterator && Vector.prototype[Symbol.iterator]) {
  test('`Vector.prototype[Symbol.iterator]()` should return an iterator', function (t) {
    var vector = new Vector(3, 4)
    var iterator = vector[Symbol.iterator]()
    t.truthy(iterator)
    t.true(typeof iterator.next === 'function')
    t.deepEqual(iterator.next(), { done: false, value: 3 })
    t.deepEqual(iterator.next(), { done: false, value: 4 })
    t.deepEqual(iterator.next(), { done: true, value: void 0 })
  })
} else {
  test.skip('`Vector.prototype[Symbol.iterator]()` should return an iterator', function (t) {})
}
