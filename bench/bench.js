var Benchmark = require('benchmark')
var chalk = require('chalk')
var logSymbols = require('log-symbols')
var Vector = require('../dist/vectory.js')
var suite = new Benchmark.Suite()

var benchmarks = {
  'Vector(x, y)': function () {
    return new Vector(rand(0, 100), rand(0, 100))
  }
}

for (var i in benchmarks) {
  suite.add(i, benchmarks[i])
}

console.log('Vectory benchmark:\r\n')

suite
  .on('cycle', log)
  .run()

function rand(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from
}

function log(e){
  console.log('\t' + chalk.green(logSymbols.success) + ' ' + String(e.target))
}