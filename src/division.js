import Vector from './vector.js'

/**
 * Divide vector on scalar an return new vector
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector
 * @return {Vector}        Scaled vector
 * @static
 * @example
 * var vector = new Vector(4, 6)
 * var scalar = 2
 * var result = Vector.div(scalar, vector)
 * console.log(result) // Vector {x: 2, y: 3}
 */
Vector.div = function (scalar, vector) {
  return vector.div(scalar)
}

/**
 * Divide self on scalar and return new vector
 * @param  {Number} scalar Scalar
 * @return {Vector}        Scaled vector
 * @example
 * var vector = new Vector(4, 6)
 * var scalar = 2
 * var result = vector.div(scalar)
 * console.log(result) // Vector {x: 2, y: 3}
 */
Vector.prototype.div = function (scalar) {
  return new Vector(this.x / scalar, this.y / scalar)
}

/**
 * Divide passed vector on scalar and modified it
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector which will be scaled
 * @return {Vector}        Passed scaled vector
 * @static
 * @example
 * var vector = new Vector(4, 6)
 * var scalar = 2
 * var result = Vector.idiv(scalar, vector)
 * console.log(result) // Vector {x: 2, y: 3}
 * console.log(result === vector) // true
 */
Vector.idiv = function (scalar, vector) {
  return vector.idiv(scalar)
}

/**
 * Divide self on scalar and return self
 * @param  {Number} scalar Scalar
 * @return {Vector}        self
 * @example
 * var self = new Vector(4, 6)
 * var scalar = 2
 * self.idiv(scalar)
 * console.log(self) // Vector {x: 2, y: 3}
 */
Vector.prototype.idiv = function (scalar) {
  this.x /= scalar
  this.y /= scalar
  return this
}

export default Vector
