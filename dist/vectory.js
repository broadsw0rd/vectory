/**
 * Vector constructor
 * @class
 * @param {number} x First vector component
 * @param {number} y Second vector component
 * @example
 * var vector = new Vector(1, 2)
 * console.log(vector) // Vector {x: 1, y: 2}
 */
function Vector$1 (x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector$1.displayName = 'Vector';

Vector$1.from = function (data) {
  return new Vector$1(data[0], data[1])
};

Vector$1.fromAngle = function (angle, magnitude) {
  return new Vector$1(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
};

Vector$1.parse = function (string) {
  return Vector$1.from(string.trim().replace(',', ' ').split(/\s+/).map(parseFloat))
};

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
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector$1.add = function (one, another) {
  return another.add(one)
};

/**
 * Add passed vector to self and return new vector
 * @param {Vector} vector Vector for addition
 * @return {Vector} Sum of two vectors
 * @example
 * var self = new Vector(1, 2)
 * var vector = new Vector(3, 4)
 * var result = self.add(vector)
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector$1.prototype.add = function (vector) {
  return new Vector$1(this.x + vector.x, this.y + vector.y)
};

/**
 * Add first passed vector to second vector and return modified second vector
 * @param  {Vector} one     Vector for addition
 * @param  {Vector} another Second vector which will be modified
 * @return {Vector}         Modified second vector
 * @static
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(3, 4)
 * var result = Vector.iadd(one, another)
 * console.log(result) // Vector {x: 4, y: 6}
 * console.log(result === another) // true
 */
Vector$1.iadd = function (one, another) {
  return another.iadd(one)
};

/**
 * Add passed vector to self and return self
 * @param  {Vector} vector Vector for addition
 * @return {Vector}        self
 * @example
 * var self = new Vector(1, 2)
 * var vector = new Vector(3, 4)
 * self.iadd(vector)
 * console.log(self) // Vector {x: 4, y: 6}
 */
Vector$1.prototype.iadd = function (vector) {
  this.x += vector.x;
  this.y += vector.y;
  return this
};

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
Vector$1.sub = function (one, another) {
  return another.sub(one)
};

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
Vector$1.prototype.sub = function (vector) {
  return new Vector$1(this.x - vector.x, this.y - vector.y)
};

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
 * console.log(result) // Vector {x: 2, y: 2}
 * console.log(result === another) // true
 */
Vector$1.isub = function (one, another) {
  return another.isub(one)
};

/**
 * Substruct passed vector from self
 * @param  {Vector} vector Subtrahend vector
 * @return {Vector}        self
 * @example
 * var self = new Vector(3, 4)
 * var vector = new Vector(1, 2)
 * self.isub(vector)
 * console.log(self) // Vector {x: 2, y: 2}
 */
Vector$1.prototype.isub = function (vector) {
  this.x -= vector.x;
  this.y -= vector.y;
  return this
};

/**
 * Multiply vector on scalar an return new vector
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector
 * @return {Vector}        Scaled vector
 * @static
 * @example
 * var vector = new Vector(2, 3)
 * var scalar = 2
 * var result = Vector.mul(scalar, vector)
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector$1.mul = function (scalar, vector) {
  return vector.mul(scalar)
};

/**
 * Multiply self on scalar and return new vector
 * @param  {Number} scalar Scalar
 * @return {Vector}        Scaled vector
 * @example
 * var vector = new Vector(2, 3)
 * var scalar = 2
 * var result = vector.mul(scalar)
 * console.log(result) // Vector {x: 4, y: 6}
 */
Vector$1.prototype.mul = function (scalar) {
  return new Vector$1(this.x * scalar, this.y * scalar)
};

/**
 * Multiply passed vector on scalar and modified it
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector which will be scaled
 * @return {Vector}        Passed scaled vector
 * @static
 * @example
 * var vector = new Vector(2, 3)
 * var scalar = 2
 * var result = Vector.imul(scalar, vector)
 * console.log(result) // Vector {x: 4, y: 6}
 * console.log(result === vector) // true
 */
Vector$1.imul = function (scalar, vector) {
  return vector.imul(scalar)
};

/**
 * Multiply self on scalar and return self
 * @param  {Number} scalar Scalar
 * @return {Vector}        self
 * @example
 * var self = new Vector(2, 3)
 * var scalar = 2
 * self.imul(scalar)
 * console.log(self) // Vector {x: 4, y: 6}
 */
Vector$1.prototype.imul = function (scalar) {
  this.x *= scalar;
  this.y *= scalar;
  return this
};

/**
 * Divide vector on scalar an return new vector
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector
 * @return {Vector}        Scaled vector
 * @static
 * @example
 * var vector = new Vector(4, 6)
 * var scalar = 2
 * var result = Vector.div(scalar, vector)
 * console.log(result) // Vector {x: 2, y: 3}
 */
Vector$1.div = function (scalar, vector) {
  return vector.div(scalar)
};

/**
 * Divide self on scalar and return new vector
 * @param  {Number} scalar Scalar
 * @return {Vector}        Scaled vector
 * @example
 * var vector = new Vector(4, 6)
 * var scalar = 2
 * var result = vector.div(scalar)
 * console.log(result) // Vector {x: 2, y: 3}
 */
Vector$1.prototype.div = function (scalar) {
  return new Vector$1(this.x / scalar, this.y / scalar)
};

/**
 * Divide passed vector on scalar and modified it
 * @param  {Number} scalar Scalar
 * @param  {Vector} vector Vector which will be scaled
 * @return {Vector}        Passed scaled vector
 * @static
 * @example
 * var vector = new Vector(4, 6)
 * var scalar = 2
 * var result = Vector.idiv(scalar, vector)
 * console.log(result) // Vector {x: 2, y: 3}
 * console.log(result === vector) // true
 */
Vector$1.idiv = function (scalar, vector) {
  return vector.idiv(scalar)
};

/**
 * Divide self on scalar and return self
 * @param  {Number} scalar Scalar
 * @return {Vector}        self
 * @example
 * var self = new Vector(4, 6)
 * var scalar = 2
 * self.idiv(scalar)
 * console.log(self) // Vector {x: 2, y: 3}
 */
Vector$1.prototype.idiv = function (scalar) {
  this.x /= scalar;
  this.y /= scalar;
  return this
};

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
Vector$1.lerp = function (one, another, t) {
  return one.lerp(another, t)
};

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
Vector$1.prototype.lerp = function (vector, t) {
  var x = (1 - t) * this.x + t * vector.x;
  var y = (1 - t) * this.y + t * vector.y;
  return new Vector$1(x, y)
};

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
Vector$1.normalized = function (vector) {
  return vector.normalized()
};

/**
 * Calculates the unit vector in the same direction as self, but with length 1
 * @return {Vector} Unit vector
 * @example
 * var vector = new Vector(0, 0)
 * var result = vector.normalized()
 * console.log(result) // Vector {x: 1, y: 0}
 */
Vector$1.prototype.normalized = function () {
  var x = this.x;
  var y = this.y;
  var length = Math.sqrt(x * x + y * y);
  if (length > 0) {
    return new Vector$1(x / length, y / length)
  } else {
    return new Vector$1(0, 0)
  }
};

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
Vector$1.normalize = function (vector) {
  return vector.normalize()
};

/**
 * Reduce self to length 1
 * @return {Vector} Self, but with length 1
 * @example
 * var vector = new Vector(2, 0)
 * vector.normalize()
 * console.log(vector) // Vector {x: 1, y: 0}
 */
Vector$1.prototype.normalize = function () {
  var x = this.x;
  var y = this.y;
  var length = Math.sqrt(x * x + y * y);
  if (length > 0) {
    this.x = x / length;
    this.y = y / length;
  }
  return this
};

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
Vector$1.magnitude = function (vector) {
  return vector.magnitude()
};

/**
 * Calculate the length of self
 * @return {number} Length of self
 * @example
 * var vector = new Vector(3, 4)
 * var magnitude = vector.magnitude()
 * console.log(magnitude) // 5
 */
Vector$1.prototype.magnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
};

/**
 * Calculates the dot product of two passed vectors
 * @param  {Vector} one     Ferst vector
 * @param  {Vector} another Second vector
 * @return {number}         Dot product
 * @static
 * @example
 * var one = new Vector(2, 3)
 * var another = new Vector(3, 2)
 * var product = Vector.dot(one, another)
 * console.log(product) // 12
 */
Vector$1.dot = function (one, another) {
  return another.dot(one)
};

/**
 * Calculates the dot product of self and passed vector
 * @param  {Vector} vector Vector
 * @return {number}        Dot product
 * @example
 * var self = new Vector(2, 3)
 * var vector = new Vector(3, 2)
 * var product = self.dot(vector)
 * console.log(product) // 12
 */
Vector$1.prototype.dot = function (vector) {
  return this.x * vector.x + this.y * vector.y
};

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
Vector$1.cross = function (one, another) {
  return another.cross(one)
};

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
Vector$1.prototype.cross = function (vector) {
  return this.x * vector.y + this.y * vector.x
};

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
Vector$1.distance = function (one, another) {
  return another.distance(one)
};

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
Vector$1.prototype.distance = function (vector) {
  var x = this.x - vector.x;
  var y = this.y - vector.y;
  return Math.sqrt(x * x + y * y)
};

Vector$1.angleOf = function (vector) {
  return vector.angleOf()
};

Vector$1.prototype.angleOf = function () {
  return Math.atan2(this.y, this.x)
};

Vector$1.angleTo = function (one, another) {
  return another.angleTo(one)
};

Vector$1.prototype.angleTo = function (vector) {
  return Math.acos(this.dot(vector) / (this.magnitude() * vector.magnitude()))
};

function rotate (vector, theta) {
  var c = Math.cos(theta);
  var s = Math.sin(theta);
  var x = vector.x;
  var y = vector.y;
  vector.x = x * c - y * s;
  vector.y = x * s + y * c;
  return vector
}

Vector$1.rotate = function (theta, vector) {
  return vector.rotate(theta)
};

Vector$1.prototype.rotate = function (theta) {
  return rotate(this.copy(), theta)
};

Vector$1.irotate = function (theta, vector) {
  return vector.irotate(theta)
};

Vector$1.prototype.irotate = function (theta) {
  return rotate(this, theta)
};

/**
 * Reset components of second passed vector to components of first
 * @param  {Vector} one     Vector with new values
 * @param  {Vector} another Vector with old values
 * @return {Vector}         Second vector
 * @static
 * @example
 * var one = new Vector(1, 2)
 * var another = new Vector(0, 0)
 * var result = Vector.reset(one, another)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === another) // true
 */
Vector$1.reset = function (one, another) {
  return another.reset(one)
};

/**
 * Reset self components to components of passed vector and return self
 * @param  {Vector} vector Vector with new values
 * @return {Vector}        Self with new values
 * @example
 * var self = new Vector(0, 0)
 * var vector = new Vector(1, 2)
 * var result = self.reset(vector)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === self) // true
 */
Vector$1.prototype.reset = function (vector) {
  this.x = vector.x;
  this.y = vector.y;
  return this
};

/**
 * Set to zero components of passed vector
 * @param  {Vector} vector Passed vector
 * @return {Vector}        Passed vector with zero components
 * @static
 * @example
 * var vector = new Vector(1, 2)
 * var result = Vector.zero(vector)
 * console.log(result) // Vector {x: 0, y: 0}
 * console.log(result === vector) // true
 */
Vector$1.zero = function (vector) {
  return vector.zero()
};

/**
 * Set to zero self components and return self
 * @return {Vector} Self
 * @example
 * var self = new Vector(1, 2)
 * var result = self.zero()
 * console.log(result) // Vector {x: 0, y: 0}
 * console.log(result === self) // true
 */
Vector$1.prototype.zero = function () {
  this.x = 0;
  this.y = 0;
  return this
};

/**
 * Reset components of passed vector to passed values and return source vector
 * @param {number} x      X component value
 * @param {number} y      Y component value
 * @param {Vector} vector Source vector
 * @static
 * @example
 * var vector = new Vector(0, 0)
 * var result =  Vector.set(1, 2, vector)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === vector) // true
 */
Vector$1.set = function (x, y, vector) {
  return vector.set(x, y)
};

/**
 * Reset self components to passed values
 * @param  {number} x X component value
 * @param  {number} y Y component value
 * @return {Vector}   Self
 * @example
 * var self = new Vector(0, 0)
 * var result = self.set(1, 2)
 * console.log(result) // Vector {x: 1, y: 2}
 * console.log(result === self) // true
 */
Vector$1.prototype.set = function (x, y) {
  this.x = x || 0;
  this.y = y || 0;
  return this
};

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
Vector$1.copy = function (vector) {
  return vector.copy()
};

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
Vector$1.prototype.copy = function () {
  return new Vector$1(this.x, this.y)
};

Vector$1.clone = Vector$1.copy;

Vector$1.prototype.clone = Vector$1.prototype.copy;

Vector$1.toJSON = function (vector) {
  return vector.toJSON()
};

Vector$1.prototype.toJSON = function () {
  return [this.x, this.y]
};

Vector$1.toString = function (vector) {
  return vector ? vector.toString() : Function.prototype.toString.call(this)
};

Vector$1.prototype.toString = function () {
  return this.x.toFixed(3) + ' ' + this.y.toFixed(3)
};

/* istanbul ignore else */
if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  Vector$1.prototype[Symbol.toStringTag] = 'Vector';
}

Vector$1.toArray = function (vector) {
  return vector.toArray()
};

Vector$1.prototype.toArray = function () {
  return [this.x, this.y]
};

var numberEpsilon = 'EPSILON' in Number ? Number.EPSILON : 2.220446049250313e-16;

Vector$1.equals = function (one, another) {
  return one.equals(another)
};

Vector$1.prototype.equals = function (vector) {
  return (
    Math.abs(this.x - vector.x) < numberEpsilon &&
    Math.abs(this.y - vector.y) < numberEpsilon
  )
};

Vector$1.compare = function (one, another) {
  return one.compare(another)
};

Vector$1.prototype.compare = function (vector) {
  var thisMagnitude = this.magnitude();
  var vectorMagnitude = vector.magnitude();
  return (thisMagnitude > vectorMagnitude) - (vectorMagnitude > thisMagnitude)
};

Object.defineProperties(Vector$1.prototype, {
  xx: {
    configurable: true,
    get: function () {
      return new Vector$1(this.x, this.x)
    },
    set: function (vector) {
      this.x = vector.x;
      this.y = vector.x;
    }
  },
  xy: {
    configurable: true,
    get: function () {
      return new Vector$1(this.x, this.y)
    },
    set: function (vector) {
      this.x = vector.x;
      this.y = vector.y;
    }
  },
  yx: {
    configurable: true,
    get: function () {
      return new Vector$1(this.y, this.x)
    },
    set: function (vector) {
      this.x = vector.y;
      this.y = vector.x;
    }
  },
  yy: {
    configurable: true,
    get: function () {
      return new Vector$1(this.y, this.y)
    },
    set: function (vector) {
      this.x = vector.y;
      this.y = vector.y;
    }
  }
});

function VectorIterator (vector) {
  this.vector = vector;
  this.__idx = 0;
}

VectorIterator.prototype.next = function () {
  if (this.__idx === 0) {
    this.__idx++;
    return {
      done: false,
      value: this.vector.x
    }
  } else if (this.__idx === 1) {
    this.__idx++;
    return {
      done: false,
      value: this.vector.y
    }
  } else {
    return {
      done: true,
      value: void 0
    }
  }
};

/* istanbul ignore else */
if (typeof Symbol !== 'undefined' && Symbol.iterator) {
  Vector$1.prototype[Symbol.iterator] = function iterator () {
    return new VectorIterator(this)
  };
}

export default Vector$1;
