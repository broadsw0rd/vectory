import Vector from './vector.js'

/**
 * Calculates the unit vector in the same direction as the passed vector, but with length 1
 * @param  {Vector} vector Vector to normalize
 * @return {Vector}        Unit vector
 * @static
 * @example
 * var vector = new Vector(2, 0)
 * var result = Vector.normalized(vector)
 * console.log(result) // Vector {x: 1, y: 0}
 */
Vector.normalized = function (vector) {
  return vector.normalized()
}

/**
 * Calculates the unit vector in the same direction as self, but with length 1
 * @return {Vector} Unit vector
 * @example
 * var vector = new Vector(0, 0)
 * var result = vector.normalized()
 * console.log(result) // Vector {x: 1, y: 0}
 */
Vector.prototype.normalized = function () {
  var x = this.x
  var y = this.y
  var length = Math.sqrt(x * x + y * y)
  if (length > 0) {
    return new Vector(x / length, y / length)
  } else {
    return new Vector(0, 0)
  }
}

/**
 * Reduce the passed vector to length 1
 * @param  {Vector} vector Vector to normalize
 * @return {Vector}        Passed vector, but with length 1
 * @static
 * @example
 * var vector = new Vector(2, 0)
 * var result = Vector.normalize(vector)
 * console.log(result) // Vector {x: 1, y: 0}
 * console.log(result === vector) // true
 */
Vector.normalize = function (vector) {
  return vector.normalize()
}

/**
 * Reduce self to length 1
 * @return {Vector} Self, but with length 1
 * @example
 * var vector = new Vector(2, 0)
 * vector.normalize()
 * console.log(vector) // Vector {x: 1, y: 0}
 */
Vector.prototype.normalize = function () {
  var x = this.x
  var y = this.y
  var length = Math.sqrt(x * x + y * y)
  if (length > 0) {
    this.x = x / length
    this.y = y / length
  }
  return this
}

export default Vector
