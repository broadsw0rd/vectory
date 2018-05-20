import Vector from './vector.js'

/**
 * Linear interpolation between two vectors using `t` to weight between them
 * https://en.wikipedia.org/wiki/Linear_interpolation
 * @param  {Vector} one     Start point
 * @param  {Vector} another End point
 * @param  {number} t       Alpha value [0..1]
 * @return {Vector} Interpolation result
 * @static
 * @example
 * var one = new Vector(2, 2)
 * var another = new Vector(4, 4)
 * var time = 0.5
 * var result = Vector.lerp(one, another, time)
 * console.log(result) // Vector {x: 3, y: 3}
 */
Vector.lerp = function (one, another, t) {
  return one.lerp(another, t)
}

/**
 * Linear interpolation between self and passed vector using `t` to weight between them
 * https://en.wikipedia.org/wiki/Linear_interpolation
 * @param  {Vector} vector End point
 * @param  {number} t      Alpha value [0..1]
 * @return {Vector} Interpolation result
 * @example
 * var one = new Vector(2, 2)
 * var another = new Vector(4, 4)
 * var time = 0.5
 * var result = one.lerp(another, time)
 * console.log(result) // Vector {x: 3, y: 3}
 */
Vector.prototype.lerp = function (vector, t) {
  var x = (1 - t) * this.x + t * vector.x
  var y = (1 - t) * this.y + t * vector.y
  return new Vector(x, y)
}

export default Vector
