import Vector from './vector.js'

/**
 * Multiply vector on scalar an return new vector
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector
 * @return {Vector}        Scaled vector
 * @static
 * @example
 * var vector = new Vector(2, 3)
 * var scalar = 2
 * var result = Vector.mul(scalar, vector)
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector.mul = function (scalar, vector) {
  return vector.mul(scalar)
}

/**
 * Multiply self on scalar and return new vector
 * @param  {Number} scalar Scalar
 * @return {Vector}        Scaled vector
 * @example
 * var vector = new Vector(2, 3)
 * var scalar = 2
 * var result = vector.mul(scalar)
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector.prototype.mul = function (scalar) {
  return new Vector(this.x * scalar, this.y * scalar)
}

/**
 * Multiply passed vector on scalar and modified it
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector which will be scaled
 * @return {Vector}        Passed scaled vector
 * @static
 * @example
 * var vector = new Vector(2, 3)
 * var scalar = 2
 * var result = Vector.imul(scalar, vector)
 * console.log(result) // Vector {x: 4, y: 6}
 * console.log(result === vector) // true
 */
Vector.imul = function (scalar, vector) {
  return vector.imul(scalar)
}

/**
 * Multiply self on scalar and return self
 * @param  {Number} scalar Scalar
 * @return {Vector}        self
 * @example
 * var self = new Vector(2, 3)
 * var scalar = 2
 * self.imul(scalar)
 * console.log(self) // Vector {x: 4, y: 6}
 */
Vector.prototype.imul = function (scalar) {
  this.x *= scalar
  this.y *= scalar
  return this
}

export default Vector
