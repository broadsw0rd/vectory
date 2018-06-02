import Vector from './vector.js'

/**
 * Reset components of second passed vector to components of first
 * @param  {Vector} one     Vector with new values
 * @param  {Vector} another Vector with old values
 * @return {Vector}         Second vector
 * @static
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(0, 0)
 * var result = Vector.reset(one, another)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === another) // true
 */
Vector.reset = function (one, another) {
  return another.reset(one)
}

/**
 * Reset self components to components of passed vector and return self
 * @param  {Vector} vector Vector with new values
 * @return {Vector}        Self with new values
 * @example
 * var self = new Vector(0, 0)
 * var vector = new Vector(1, 2)
 * var result = self.reset(vector)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === self) // true
 */
Vector.prototype.reset = function (vector) {
  this.x = vector.x
  this.y = vector.y
  return this
}

/**
 * Set to zero components of passed vector
 * @param  {Vector} vector Passed vector
 * @return {Vector}        Passed vector with zero components
 * @static
 * @example
 * var vector = new Vector(1, 2)
 * var result = Vector.zero(vector)
 * console.log(result) // Vector {x: 0, y: 0}
 * console.log(result === vector) // true
 */
Vector.zero = function (vector) {
  return vector.zero()
}

/**
 * Set to zero self components and return self
 * @return {Vector} Self
 * @example
 * var self = new Vector(1, 2)
 * var result = self.zero()
 * console.log(result) // Vector {x: 0, y: 0}
 * console.log(result === self) // true
 */
Vector.prototype.zero = function () {
  this.x = 0
  this.y = 0
  return this
}

/**
 * Reset components of passed vector to passed values and return source vector
 * @param {number} x      X component value
 * @param {number} y      Y component value
 * @param {Vector} vector Source vector
 * @static
 * @example
 * var vector = new Vector(0, 0)
 * var result =  Vector.set(1, 2, vector)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === vector) // true
 */
Vector.set = function (x, y, vector) {
  return vector.set(x, y)
}

/**
 * Reset self components to passed values
 * @param  {number} x X component value
 * @param  {number} y Y component value
 * @return {Vector}   Self
 * @example
 * var self = new Vector(0, 0)
 * var result = self.set(1, 2)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === self) // true
 */
Vector.prototype.set = function (x, y) {
  this.x = x || 0
  this.y = y || 0
  return this
}

export default Vector
