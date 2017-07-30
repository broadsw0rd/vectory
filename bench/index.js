var Benchmark = require('benchmark')
var logSymbols = require('log-symbols')
var argv = require('minimist')(process.argv.slice(2))

var titles = {
  'create': 'Cteation',
  'add': 'Addition',
  'sub': 'Substraction',
  'mul': 'Multiplication',
  'div': 'Division',
  'lerp': 'Linear Interpolation',
  'norm': 'Normalization',
  'mag': 'Magnitude',
  'dot': 'Dot Product',
  'dist': 'Distance',
  'angle': 'Angle computing',
  'reset': 'Resetting',
  'copy': 'Copy',
  'convert': 'Convertion',
  'equal': 'Equality',
  'swizzling': 'Swizzling',
  'iterator': 'Iterator'
}

var benchmarks = {
  'create': require('./benchmarks/creation.bench.js'),
  'add': require('./benchmarks/addition.bench.js'),
  'sub': require('./benchmarks/substraction.bench.js'),
  'mul': require('./benchmarks/multiplication.bench.js'),
  'dev': require('./benchmarks/division.bench.js'),
  'lerp': require('./benchmarks/lerp.bench.js'),
  'norm': require('./benchmarks/normalization.bench.js'),
  'mag': require('./benchmarks/magnitude.bench.js'),
  'dot': require('./benchmarks/dot-product.bench.js'),
  'dist': require('./benchmarks/distance.bench.js'),
  'angle': require('./benchmarks/angle.bench.js'),
  'reset': require('./benchmarks/resetting.bench.js'),
  'copy': require('./benchmarks/copy.bench.js'),
  'convert': require('./benchmarks/convertion.bench.js'),
  'equal': require('./benchmarks/equality.bench.js'),
  'swizzling': require('./benchmarks/swizzling.bench.js'),
  'iterator': require('./benchmarks/iterator.bench.js')
}

function bench (name) {
  var title = titles[name]
  var benchmark = benchmarks[name]
  var suite = new Benchmark.Suite()
  var body = []

  for (var key in benchmark) {
    suite.add(key, benchmark[key])
  }

  suite.on('start', function () {
    body.push('  ' + title)
  })

  suite.on('cycle', function (e) {
    body.push('    ' + logSymbols.success + ' ' + String(e.target))
  })

  suite.run()

  console.log(body.join('\r\n') + '\r\n')
}

console.log(logSymbols.info + ' start benchmark, please wait a bit...' + '\r\n')

var filter = argv.filter

if (filter) {
  bench(filter)
} else {
  var keys = Object.keys(benchmarks)
  for (var i = 0; i < keys.length; i++) {
    bench(keys[i])
  }
}
