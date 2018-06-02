import Vector from './vector.js'

/**
 * Calculates the distance between two passed vectors. Same as `another.sub(one).magnitude()`
 * @param  {Vector} one     First vector
 * @param  {Vector} another Second vector
 * @return {number}         Distance
 * @static
 * @example
 * var one = new Vector(4, 3)
 * var another = new Vector(8, 6)
 * var distance = Vector.distance(one, another)
 * console.log(product) // 5
 */
Vector.distance = function (one, another) {
  return another.distance(one)
}

/**
 * Calculates the distance between self and passed vector. Same as `self.sub(vector).magnitude()`
 * @param  {Vector} vector Vector
 * @return {number}        Distance
 * @example
 * var self = new Vector(8, 6)
 * var vector = new Vector(4, 3)
 * var distance = self.distance(vector)
 * console.log(product) // 5
 */
Vector.prototype.distance = function (vector) {
  var x = this.x - vector.x
  var y = this.y - vector.y
  return Math.sqrt(x * x + y * y)
}

export default Vector
