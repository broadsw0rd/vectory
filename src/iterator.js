import Vector from './vector.js'

function VectorIterator (vector) {
  this.vector = vector
  this.__idx = 0
}

VectorIterator.prototype.next = function () {
  if (this.__idx === 0) {
    this.__idx++
    return {
      done: false,
      value: this.vector.x
    }
  } else if (this.__idx === 1) {
    this.__idx++
    return {
      done: false,
      value: this.vector.y
    }
  } else {
    return {
      done: true,
      value: void 0
    }
  }
}

/* istanbul ignore else */
if (typeof Symbol !== 'undefined' && Symbol.iterator) {
  Object.defineProperty(Vector.prototype, Symbol.iterator, {
    configurable: true,
    value: function iterator () {
      return new VectorIterator(this)
    }
  })
}

export default Vector
