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

Vector$1.add = function (one, another) {
  return another.add(one)
};

Vector$1.prototype.add = function (vector) {
  return new Vector$1(this.x + vector.x, this.y + vector.y)
};

Vector$1.iadd = function (one, another) {
  return another.iadd(one)
};

Vector$1.prototype.iadd = function (vector) {
  this.x += vector.x;
  this.y += vector.y;
  return this
};

Vector$1.sub = function (one, another) {
  return another.sub(one)
};

Vector$1.prototype.sub = function (vector) {
  return new Vector$1(this.x - vector.x, this.y - vector.y)
};

Vector$1.isub = function (one, another) {
  return another.isub(one)
};

Vector$1.prototype.isub = function (vector) {
  this.x -= vector.x;
  this.y -= vector.y;
  return this
};

Vector$1.mul = function (scalar, vector) {
  return vector.mul(scalar)
};

Vector$1.prototype.mul = function (scalar) {
  return new Vector$1(this.x * scalar, this.y * scalar)
};

Vector$1.imul = function (scalar, vector) {
  return vector.imul(scalar)
};

Vector$1.prototype.imul = function (scalar) {
  this.x *= scalar;
  this.y *= scalar;
  return this
};

Vector$1.div = function (scalar, vector) {
  return vector.div(scalar)
};

Vector$1.prototype.div = function (scalar) {
  return new Vector$1(this.x / scalar, this.y / scalar)
};

Vector$1.idiv = function (scalar, vector) {
  return vector.idiv(scalar)
};

Vector$1.prototype.idiv = function (scalar) {
  this.x /= scalar;
  this.y /= scalar;
  return this
};

Vector$1.lerp = function (one, another, t) {
  return one.lerp(another, t)
};

Vector$1.prototype.lerp = function (vector, t) {
  var x = (1 - t) * this.x + t * vector.x;
  var y = (1 - t) * this.y + t * vector.y;
  return new Vector$1(x, y)
};

Vector$1.normalized = function (vector) {
  return vector.normalized()
};

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

Vector$1.normalize = function (vector) {
  return vector.normalize()
};

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

Vector$1.magnitude = function (vector) {
  return vector.magnitude()
};

Vector$1.prototype.magnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
};

Vector$1.dot = function (one, another) {
  return another.dot(one)
};

Vector$1.prototype.dot = function (vector) {
  return this.x * vector.x + this.y * vector.y
};

Vector$1.distance = function (one, another) {
  return another.distance(one)
};

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

Vector$1.reset = function (one, another) {
  return another.reset(one)
};

Vector$1.prototype.reset = function (vector) {
  this.x = vector.x;
  this.y = vector.y;
  return this
};

Vector$1.zero = function (vector) {
  return vector.zero()
};

Vector$1.prototype.zero = function () {
  this.x = 0;
  this.y = 0;
  return this
};

Vector$1.set = function (x, y, vector) {
  return vector.set(x, y)
};

Vector$1.prototype.set = function (x, y) {
  this.x = x || 0;
  this.y = y || 0;
  return this
};

Vector$1.copy = function (vector) {
  return vector.copy()
};

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

'use strict';
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
