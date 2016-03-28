import Vector from '../dist/vectory.js'
import test from 'ava'

test('`Vector.prototype[Symbol.iterator]()` should return an iterator', (t) => {
  var vector = new Vector(3, 4)
  var iterator = vector[Symbol.iterator]()
  t.ok(iterator)
  t.true(typeof iterator.next === 'function')
  t.same(iterator.next(), { done: false, value: 3 })
  t.same(iterator.next(), { done: false, value: 4 })
  t.same(iterator.next(), { done: true, value: void 0 })
})
