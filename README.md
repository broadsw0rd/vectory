<h1 align="center">Vectory</h1>
<h4 align="center">High performance, DevTools friendly, Crankshaft tolerant 2d vectors</h4>

<p align="center">
   <a href="https://travis-ci.org/broadsw0rd/vectory" target="_blank">
      <img src="https://travis-ci.org/broadsw0rd/vectory.svg?branch=master" alt="Build Status" target="_blank"></img>
   </a>
   <a href='https://coveralls.io/github/broadsw0rd/vectory?branch=master' target="_blank">
      <img src='https://coveralls.io/repos/broadsw0rd/vectory/badge.svg?branch=master&service=github' alt='Coverage Status' />
   </a>
   <a href="https://github.com/feross/standard" target="_blank">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="js-standard-style"></img>
   </a>
</p>

<p align="center">
   <a href="https://saucelabs.com/u/fantabulous-js" target="_blank">
      <img src="https://saucelabs.com/browser-matrix/fantabulous-js.svg" alt="Sauce Test Status"/>
   </a>
</p>

## Features

- Simple - [62 LOC](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L62)
- Lightweight - [0.8 Kb](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.min.js)
- Robust - [100% code coverage](https://coveralls.io/github/broadsw0rd/vectory?branch=master)
- Built for [any](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.js#L9) environment
- Designed with performance in mind and reviewed with [IRHydra](http://mrale.ph/irhydra/2/)

## Install & Usage

## API

**Creation**

- [x] [`new Vector(x, y)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L1)
- [x] [`Vector.from([x, y])`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L8)
- [x] [`Vector.fromAngle(angle, magnitude)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L12)
- [x] [`Vector.parse(string)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L16)

**Addition**

- [x] [`Vector.add(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L20)
- [x] [`Vector.prototype.add(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L24)
- [x] [`Vector.iadd(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L28)
- [x] [`Vector.prototype.iadd(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L32)

**Substraction**

- [x] [`Vector.sub(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L38)
- [x] [`Vector.prototype.sub(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L42)
- [x] [`Vector.isub(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L46)
- [x] [`Vector.prototype.isub(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L50)

**Multiplication**

- [x] [`Vector.mul(vector, scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L56)
- [x] [`Vector.prototype.mul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L60)
- [ ] `Vector.imul(vector, scalar)`
- [ ] `Vector.prototype.imul(scalar)`

**Division**

- [ ] `Vector.div(vector, scalar)`
- [ ] `Vector.prototype.div(scalar)`
- [ ] `Vector.idiv(vector, scalar)`
- [ ] `Vector.prototype.idiv(scalar)`

**Normalization**

- [ ] `Vector.normalized(vector)`
- [ ] `Vector.prototype.normalized()`
- [ ] `Vector.normalize(vector)`
- [ ] `Vector.prototype.normalize()`

**Dot product computing**

- [ ] `Vector.dot(one, another)`
- [ ] `Vector.prototype.dot(vector)`

**Distance computing**

- [ ] `Vector.distance(one, another)`
- [ ] `Vector.prototype.distance(vector)`

**Magnitude computing**

- [ ] `Vector.magnitude(vector)`
- [ ] `Vector.prototype.magnitude()`

**Angle computing**

- [ ] `Vector.angleOf(vector)`
- [ ] `Vector.prototype.angleOf()`
- [ ] `Vector.angleTo(one, another)`
- [ ] `Vector.prototype.angleTo(vector)`

**Resetting**

- [ ] `Vector.zero(vector)`
- [ ] `Vector.prototype.zero()`

**Copy**

- [ ] `Vector.copy(vector)`
- [ ] `Vector.prototype.copy()`

**Convertion**

- [ ] `Vector.toJSON(vector)`
- [ ] `Vector.prototype.toJSON()`
- [ ] `Vector.toString(vector)`
- [ ] `Vector.prototype.toString()`


**Equality**

- [ ] `Vector.equal(one, another)`
- [ ] `Vector.protototype.equal(vector)`

**Swizzling**

- [ ] `Vector.prototype.xx`
- [ ] `Vector.prototype.xy`
- [ ] `Vector.prototype.yx`
- [ ] `Vector.prototype.yy`

**Iterator**

- [ ] `Vector.prototype[Symbol.iterator]()`

## Benchmark

Intel Core i5-4210U @ 1.7 GHz, DDR3 4 Gb, node v4.2.4

```
> node ./bench/index.js

Vectory benchmark:

	√ Vector(x, y) x 49,572,146 ops/sec ±2.64% (87 runs sampled)
	√ Vector.from([x, y]) x 47,941,573 ops/sec ±0.91% (88 runs sampled)
	√ Vector.fromAngle(angle, magnitude) x 13,107,213 ops/sec ±0.70% (93 runs sampled)
	√ Vector.parse(string) x 798,442 ops/sec ±0.64% (89 runs sampled)
	√ Vector.add(one, another) x 46,800,196 ops/sec ±0.80% (93 runs sampled)
	√ Vector#add(vector) x 46,260,848 ops/sec ±0.85% (87 runs sampled)
	√ Vector.iadd(one, another) x 61,132,975 ops/sec ±1.13% (92 runs sampled)
	√ Vector#iadd(vector) x 63,695,766 ops/sec ±1.07% (92 runs sampled)
	√ Vector.sub(one, another) x 46,607,511 ops/sec ±0.97% (88 runs sampled)
	√ Vector#sub(vector) x 48,591,104 ops/sec ±1.38% (89 runs sampled)
	√ Vector.isub(one, another) x 60,871,819 ops/sec ±0.89% (88 runs sampled)
	√ Vector#isub(vector) x 63,049,274 ops/sec ±0.96% (86 runs sampled)
	√ Vector.mul(vector, scalar) x 47,503,799 ops/sec ±0.60% (90 runs sampled)
	√ Vector#mul(vector) x 49,901,210 ops/sec ±0.71% (92 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run wrap` | Wrap source code in [UMD](https://github.com/umdjs/umd)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [mocha](https://mochajs.org/) and compute code coverage by [istanbul](https://github.com/gotwarlost/istanbul)
`npm run build` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
`npm run test-browser` | Make tests available from browser
