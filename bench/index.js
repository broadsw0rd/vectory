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

  'Vector.mul(vector, scalar)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.mul(vector, scalar)
    }
  }()),

  'Vector#mul(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.mul(scalar)
    }
  }()),

  'Vector.imul(vector, scalar)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.imul(vector, scalar)
    }
  }()),

  'Vector#imul(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.imul(scalar)
    }
  }()),

  'Vector.div(vector, scalar)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.div(vector, scalar)
    }
  }()),

  'Vector#div(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.div(scalar)
    }
  }()),

  'Vector.idiv(vector, scalar)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return Vector.idiv(vector, scalar)
    }
  }()),

  'Vector#idiv(vector)': (function () {
    var vector = new Vector(rand(0, 100), rand(0, 100))
    var scalar = 2

    return function () {
      return vector.idiv(scalar)
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
