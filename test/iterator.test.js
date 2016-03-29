import Vector from '../dist/vectory.js'
import test from 'ava'

if (typeof Symbol !== 'undefined' && Symbol.iterator) {
  test('`Vector.prototype[Symbol.iterator]()` should return an iterator', (t) => {
    var vector = new Vector(3, 4)
    console.log(vector, Symbol, Symbol.iterator, vector[Symbol.iterator])
    var iterator = vector[Symbol.iterator]()
    t.ok(iterator)
    t.true(typeof iterator.next === 'function')
    t.same(iterator.next(), { done: false, value: 3 })
    t.same(iterator.next(), { done: false, value: 4 })
    t.same(iterator.next(), { done: true, value: void 0 })
  })
} else {
  test.skip('`Vector.prototype[Symbol.iterator]()` should return an iterator', (t) => {})
}
