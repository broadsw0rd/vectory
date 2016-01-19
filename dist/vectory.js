/*
 _    __          __                  
| |  / /__  _____/ /_____  _______  __
| | / / _ \/ ___/ __/ __ \/ ___/ / / /
| |/ /  __/ /__/ /_/ /_/ / /  / /_/ / 
|___/\___/\___/\__/\____/_/   \__, /  
                             /____/   
*/
;(function umd (name, root, factory) {
  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    root[name] = factory()
  }
}(
'Vectory',
// better `this` reference, inspired [here](https://github.com/facebook/regenerator/blob/master/runtime.js#L662)
typeof global === 'object' ? global : 
/* istanbul ignore next */
typeof window === 'object' ? window : 
typeof self === 'object' ? self : this,  
function factory () {

function Vector (x, y) {
  this.x = x || 0
  this.y = y || 0
}

Vector.VERSION = '0.0.1'

Vector.from = function (data) {
  return new Vector(data[0], data[1])
}

Vector.fromAngle = function (angle, magnitude) {
  return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
}

Vector.add = function (one, another) {
  return one.add(another)
}

Vector.prototype.add = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.iadd = function (one, another) {
  return one.iadd(another)
}

Vector.prototype.iadd = function (vector) {
  this.x += vector.x
  this.y += vector.y
  return this
}

return Vector

}))