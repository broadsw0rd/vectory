import Vector from './vector.js'

Object.defineProperties(Vector.prototype, {
  xx: {
    configurable: true,
    get: function () {
      return new Vector(this.x, this.x)
    },
    set: function (vector) {
      this.x = vector.x
      this.y = vector.x
    }
  },
  xy: {
    configurable: true,
    get: function () {
      return new Vector(this.x, this.y)
    },
    set: function (vector) {
      this.x = vector.x
      this.y = vector.y
    }
  },
  yx: {
    configurable: true,
    get: function () {
      return new Vector(this.y, this.x)
    },
    set: function (vector) {
      this.x = vector.y
      this.y = vector.x
    }
  },
  yy: {
    configurable: true,
    get: function () {
      return new Vector(this.y, this.y)
    },
    set: function (vector) {
      this.x = vector.y
      this.y = vector.y
    }
  }
})

export default Vector
