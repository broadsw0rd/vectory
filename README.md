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

- Simple - [100 LOC](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L100)
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

- [x] [`Vector.mul(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L56)
- [x] [`Vector.prototype.mul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L60)
- [x] [`Vector.imul(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L64)
- [x] [`Vector.prototype.imul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L68)

**Division**

- [x] [`Vector.div(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L74)
- [x] [`Vector.prototype.div(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L78)
- [x] [`Vector.idiv(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L82)
- [x] [`Vector.prototype.idiv(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L86)

**Linear interpolation**

- [x] [`Vector.lerp(one, another, t)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L92)
- [x] [`Vector.prototype.lerp(vector, t)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L96)

**Normalization**

- [ ] `Vector.normalized(vector)`
- [ ] `Vector.prototype.normalized()`
- [ ] `Vector.normalize(vector)`
- [ ] `Vector.prototype.normalize()`

**Magnitude**

- [ ] `Vector.magnitude(vector)`
- [ ] `Vector.prototype.magnitude()`

**Dot product**

- [ ] `Vector.dot(one, another)`
- [ ] `Vector.prototype.dot(vector)`

**Cross product**

- [ ] `Vector.cross(one, another)`
- [ ] `Vector.prototype.cross(vector)`

**Distance**

- [ ] `Vector.distance(one, another)`
- [ ] `Vector.prototype.distance(vector)`

**Angle computing**

- [ ] `Vector.angleOf(vector)`
- [ ] `Vector.prototype.angleOf()`
- [ ] `Vector.angleTo(one, another)`
- [ ] `Vector.prototype.angleTo(vector)`

**Resetting**

- [ ] `Vector.reset(one, another)`
- [ ] `Vector.prototype.reset(vector)`
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

- [ ] `Vector.equals(one, another)`
- [ ] `Vector.protototype.equals(vector)`

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

	√ Vector(x, y) x 47,919,557 ops/sec ±3.30% (81 runs sampled)
	√ Vector.from([x, y]) x 47,616,024 ops/sec ±1.16% (90 runs sampled)
	√ Vector.fromAngle(angle, magnitude) x 13,124,575 ops/sec ±0.84% (91 runs sampled)
	√ Vector.parse(string) x 917,971 ops/sec ±0.70% (83 runs sampled)
	√ Vector.add(one, another) x 47,479,295 ops/sec ±0.81% (87 runs sampled)
	√ Vector#add(vector) x 50,048,805 ops/sec ±0.90% (89 runs sampled)
	√ Vector.iadd(one, another) x 58,621,649 ops/sec ±1.13% (87 runs sampled)
	√ Vector#iadd(vector) x 63,102,217 ops/sec ±1.14% (86 runs sampled)
	√ Vector.sub(one, another) x 47,476,637 ops/sec ±0.73% (93 runs sampled)
	√ Vector#sub(vector) x 49,548,362 ops/sec ±1.08% (86 runs sampled)
	√ Vector.isub(one, another) x 60,285,387 ops/sec ±0.95% (89 runs sampled)
	√ Vector#isub(vector) x 63,162,346 ops/sec ±0.90% (87 runs sampled)
	√ Vector.mul(scalar, vector) x 48,061,570 ops/sec ±0.65% (91 runs sampled)
	√ Vector#mul(vector) x 49,773,014 ops/sec ±0.86% (89 runs sampled)
	√ Vector.imul(scalar, vector) x 63,415,406 ops/sec ±0.76% (90 runs sampled)
	√ Vector#imul(vector) x 68,208,076 ops/sec ±0.97% (90 runs sampled)
	√ Vector.div(scalar, vector) x 44,850,557 ops/sec ±0.96% (90 runs sampled)
	√ Vector#div(vector) x 48,647,537 ops/sec ±1.15% (92 runs sampled)
	√ Vector.idiv(scalar, vector) x 61,268,740 ops/sec ±0.89% (86 runs sampled)
	√ Vector#idiv(vector) x 63,822,725 ops/sec ±0.88% (89 runs sampled)
	√ Vector.lerp(one, another, t) x 41,578,953 ops/sec ±0.71% (91 runs sampled)
	√ Vector#lerp(vector, t) x 43,443,051 ops/sec ±0.86% (90 runs sampled)

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
