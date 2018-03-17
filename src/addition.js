import Vector from './vector.js'

/**
 * Add two vectors and return new vector
 * @param {Vector} one     First vector
 * @param {Vector} another Second vector
 * @return {Vector} Sum of two vectors
 * @static
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(3, 4)
 * var result = Vector.add(one, another)
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector.add = function (one, another) {
  return another.add(one)
}

/**
 * Add passed vector to self and return new vector
 * @param {Vector} vector Vector for addition
 * @return {Vector} Sum of two vectors
 * @example
 * var self = new Vector(1, 2)
 * var vector = new Vector(3, 4)
 * var result = self.add(vector)
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector.prototype.add = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

/**
 * Add first passed vector to second vector and return modified second vector
 * @param  {Vector} one     Vector for addition
 * @param  {Vector} another Second vector which will be modified
 * @return {Vector}         Modified second vector
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(3, 4)
 * var result = Vector.iadd(one, another)
 * console.log(result) // Vector {x: 4, y: 6}
 * console.log(result === aniother) // true
 */
Vector.iadd = function (one, another) {
  return another.iadd(one)
}

/**
 * Add passed vector to self and return self
 * @param  {Vector} vector Vector for addition
 * @return {Vector}        self
 * @example
 * var self = new Vector(1, 2)
 * var vector = new Vector(3, 4)
 * self.iadd(vector)
 * console.log(self) // Vector {x: 4, y: 6}
 */
Vector.prototype.iadd = function (vector) {
  this.x += vector.x
  this.y += vector.y
  return this
}

export default Vector
