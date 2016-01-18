var Benchmark = require('benchmark')
var chalk = require('chalk')
var logSymbols = require('log-symbols')
var Vector = require('../dist/vectory.js')
var suite = new Benchmark.Suite()

var benchmarks = {
  'Vector(x, y)': function (x, y) {
    return function(){
      return new Vector(x, y)
    }
  }(rand(0, 100), rand(0, 100)),

  'Vector.from([x, y])': function(data){
    return function(){
      return new Vector.from(data)
    }
  }([rand(0, 100), rand(0, 100)]),

  'Vector.fromAngle(angle, magnitude)': function(){
    return Vector.fromAngle(90 * (Math.PI / 180), 1)
  },

  'Vector.add(one, another)': function(one, another){
    return function(){
      return Vector.add(one, another)
    }
  }(new Vector(rand(0, 100), rand(0, 100)), new Vector(rand(0, 100), rand(0, 100))),

  'Vector#add(vector)': function(one, another){
    return function(){
      return one.add(another)
    }
  }(new Vector(rand(0, 100), rand(0, 100)), new Vector(rand(0, 100), rand(0, 100)))
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