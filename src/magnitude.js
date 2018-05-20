import Vector from './vector.js'

/**
 * Calculate the length of passed vector
 * @param  {Vector} vector Vector
 * @return {number}        Length of vector
 * @static
 * @example
 * var vector = new Vector(3, 4)
 * var magnitude = Vector.magnitude(vector)
 * console.log(magnitude) // 5
 */
Vector.magnitude = function (vector) {
  return vector.magnitude()
}

/**
 * Calculate the length of self
 * @return {number} Length of self
 * @example
 * var vector = new Vector(3, 4)
 * var magnitude = vector.magnitude()
 * console.log(magnitude) // 5
 */
Vector.prototype.magnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

export default Vector
