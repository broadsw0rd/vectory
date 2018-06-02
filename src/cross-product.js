import Vector from './vector.js'

/**
 * Calculates the cross product of two passed vectors
 * And return z-component as a scalar
 * @param  {Vector} one     Ferst vector
 * @param  {Vector} another Second vector
 * @return {number}         Z-component as scalar
 * @static
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(3, 4)
 * var product = Vector.dot(one, another)
 * console.log(product) // 10
 */
Vector.cross = function (one, another) {
  return another.cross(one)
}

/**
 * Calculates the cross product of self and passed vector
 * And return z-component as a scalar
 * @param  {Vector} vector Vector
 * @return {number}        Z-component as scalar
 * @example
 * var self = new Vector(1, 2)
 * var vector = new Vector(3, 4)
 * var product = self.dot(vector)
 * console.log(product) // 10
 */
Vector.prototype.cross = function (vector) {
  return this.x * vector.y + this.y * vector.x
}

export default Vector
