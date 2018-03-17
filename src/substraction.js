import Vector from './vector.js'

/**
 * Substruct two vectors and return new vector
 * @param  {Vector} one     Subtrahend vector
 * @param  {Vector} another Minuend vector
 * @return {Vector}         Diff of two vectors
 * @static
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(3, 4)
 * var result = Vector.sub(one, another)
 * console.log(result) // Vector {x: 2, y: 2}
 */
Vector.sub = function (one, another) {
  return another.sub(one)
}

/**
 * Substruct vector from self
 * @param  {Vector} vector Subtrahend vector
 * @return {Vector}        Diff of two vectors
 * @example
 * var self = new Vector(3, 4)
 * var vector = new Vector(1, 2)
 * var result = self.sub(vector)
 * console.log(result) // Vector {x: 2, y: 2}
 */
Vector.prototype.sub = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

/**
 * Substruct first passed vector from second and return modified second vector
 * @param  {Vector} one     Subtrahend vector
 * @param  {Vector} another Minuend vector
 * @return {Vector}         Modified minuend vector
 * @static
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(3, 4)
 * var result = Vector.isub(one, another)
 * console.log(result) // Vector {x: 2, y: 2}
 * console.log(result === another) // true
 */
Vector.isub = function (one, another) {
  return another.isub(one)
}

/**
 * Substruct passed vector from self
 * @param  {Vector} vector Subtrahend vector
 * @return {Vector}        self
 * @example
 * var self = new Vector(3, 4)
 * var vector = new Vector(1, 2)
 * self.isub(vector)
 * console.log(self) // Vector {x: 2, y: 2}
 */
Vector.prototype.isub = function (vector) {
  this.x -= vector.x
  this.y -= vector.y
  return this
}

export default Vector
