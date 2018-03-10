/**
 * Vector constructor
 * @constructs
 * @param {number} x First vector component
 * @param {number} y Second vector component
 * @example
 * var vector = new Vector(10, 20)
 */
function Vector (x, y) {
  this.x = x || 0
  this.y = y || 0
}

Vector.displayName = 'Vector'

export default Vector
