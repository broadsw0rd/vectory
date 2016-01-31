var Benchmark = require('benchmark')
var chalk = require('chalk')
var logSymbols = require('log-symbols')
var Vector = require('../dist/vectory.js')
var suite = new Benchmark.Suite()

var benchmarks = {
  'Vector(x, y)': (function () {
    var x = rand(0, 100)
    var y = rand(0, 100)

    return function () {
      return new Vector(x, y)
    }
  }()),

  'Vector.from([x, y])': (function () {
    var data = [rand(0, 100), rand(0, 100)]

    return function () {
      return Vector.from(data)
    }
  }()),

  'Vector.fromAngle(angle, magnitude)': (function () {
    return function () {
      return Vector.fromAngle(90 * (Math.PI / 180), 1)
    }
  }()),

  'Vector.parse(string)': (function () {
    var string = [rand(0, 100), rand(0, 100)].join()

    return function () {
      return Vector.parse(string)
    }
  }()),

  'Vector.add(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.add(one, another)
    }
  }()),

  'Vector#add(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.add(another)
    }
  }()),

  'Vector.iadd(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.iadd(one, another)
    }
  }()),

  'Vector#iadd(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.iadd(another)
    }
  }()),

  'Vector.sub(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.sub(one, another)
    }
  }()),

  'Vector#sub(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.sub(another)
    }
  }()),

  'Vector.isub(one, another)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.isub(one, another)
    }
  }()),

  'Vector#isub(vector)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return one.isub(another)
    }
  }()),

  'Vector.mul(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.mul(scalar, vector)
    }
  }()),

  'Vector#mul(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.mul(scalar)
    }
  }()),

  'Vector.imul(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.imul(scalar, vector)
    }
  }()),

  'Vector#imul(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.imul(scalar)
    }
  }()),

  'Vector.div(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.div(scalar, vector)
    }
  }()),

  'Vector#div(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.div(scalar)
    }
  }()),

  'Vector.idiv(scalar, vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.idiv(scalar, vector)
    }
  }()),

  'Vector#idiv(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.idiv(scalar)
    }
  }()),

  'Vector.lerp(one, another, t)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))
    var time = 0.5

    return function () {
      return Vector.lerp(one, another, time)
    }
  }()),

  'Vector#lerp(vector, t)': (function () {
    var one = new Vector(rand(0, 100), rand(0, 100))
    var another = new Vector(rand(0, 100), rand(0, 100))
    var time = 0.5

    return function () {
      return one.lerp(another, time)
    }
  }()),

  'Vector.normalized(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return Vector.normalized(vector)
    }
  }()),

  'Vector#normalized()': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))

    return function () {
      return vector.normalized()
    }
  }())
}

for (var i in benchmarks) {
  suite.add(i, benchmarks[i])
}

console.log('Vectory benchmark:\r\n')

suite
  .on('cycle', log)
  .run()

function rand (from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from
}

function log (e) {
  console.log('\t' + chalk.green(logSymbols.success) + ' ' + String(e.target))
}
