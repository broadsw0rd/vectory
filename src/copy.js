import Vector from './vector.js'

/**
 * Copy passed vector
 * Has alias `Vector.clone(vector)`
 * @param  {Vector} vector Source vector
 * @return {Vector}        New vector with same components
 * @static
 * @example
 * var vector = new Vector(1, 2)
 * var result = Vector.copy(vector)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(vector === result) // false
 */
Vector.copy = function (vector) {
  return vector.copy()
}

/**
 * Copy self
 * Has alias `Vector.prototype.clone()`
 * @return {Vector} New vector with same components
 * @example
 * var self = new Vector(1, 2)
 * var result = self.copy()
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(self === result) // false
 */
Vector.prototype.copy = function () {
  return new Vector(this.x, this.y)
}

Vector.clone = Vector.copy

Vector.prototype.clone = Vector.prototype.copy

export default Vector
