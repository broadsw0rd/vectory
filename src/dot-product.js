import Vector from './vector.js'

/**
 * Calculates the dot product of two passed vectors
 * @param  {Vector} one     Ferst vector
 * @param  {Vector} another Second vector
 * @return {number}         Dot product
 * @static
 * @example
 * var one = new Vector(2, 3)
 * var another = new Vector(3, 2)
 * var product = Vector.dot(one, another)
 * console.log(product) // 12
 */
Vector.dot = function (one, another) {
  return another.dot(one)
}

/**
 * Calculates the dot product of self and passed vector
 * @param  {Vector} vector Vector
 * @return {number}        Dot product
 * @example
 * var self = new Vector(2, 3)
 * var vector = new Vector(3, 2)
 * var product = self.dot(vector)
 * console.log(product) // 12
 */
Vector.prototype.dot = function (vector) {
  return this.x * vector.x + this.y * vector.y
}

export default Vector
