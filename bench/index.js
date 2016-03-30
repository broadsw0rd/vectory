var Benchmark = require('benchmark')
var logSymbols = require('log-symbols')

var benchmarks = {
  'Cteation': require('./benchmarks/creation.bench.js'),
  'Addition': require('./benchmarks/addition.bench.js'),
  'Substraction': require('./benchmarks/substraction.bench.js'),
  'Multiplication': require('./benchmarks/multiplication.bench.js'),
  'Division': require('./benchmarks/division.bench.js'),
  'Linear Interpolation': require('./benchmarks/lerp.bench.js'),
  'Normalization': require('./benchmarks/normalization.bench.js'),
  'Magnitude': require('./benchmarks/magnitude.bench.js')
}

var keys = Object.keys(benchmarks)

console.log(logSymbols.info + ' start benchmark, plase wait a bit...' + '\r\n')

for (var i = 0; i < keys.length; i++) {
  var title = keys[i]
  var benchmark = benchmarks[title]
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
