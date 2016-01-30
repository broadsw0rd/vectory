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

- Simple - [72 LOC](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L72)
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
- [x] [`Vector.imul(vector, scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L64)
- [x] [`Vector.prototype.imul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L68)

**Division**

- [x] [`Vector.div(vector, scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L74)
- [x] [`Vector.prototype.div(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L78)
- [ ] `Vector.idiv(vector, scalar)`
- [ ] `Vector.prototype.idiv(scalar)`

**Linear interpolation**

- [ ] `Vector.lerp(one, another, t)`
- [ ] `Vector.prototype.lerp(vector, t)`

**Normalization**

- [ ] `Vector.normalized(vector)`
- [ ] `Vector.prototype.normalized()`
- [ ] `Vector.normalize(vector)`
- [ ] `Vector.prototype.normalize()`

**Dot product computing**

- [ ] `Vector.dot(one, another)`
- [ ] `Vector.prototype.dot(vector)`

**Cross product computing**

- [ ] `Vector.cross(one, another)`
- [ ] `Vector.prototype.cross(vector)`

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

	√ Vector(x, y) x 47,735,955 ops/sec ±2.64% (85 runs sampled)
	√ Vector.from([x, y]) x 48,252,081 ops/sec ±0.69% (92 runs sampled)
	√ Vector.fromAngle(angle, magnitude) x 13,389,443 ops/sec ±0.82% (91 runs sampled)
	√ Vector.parse(string) x 877,026 ops/sec ±0.55% (91 runs sampled)
	√ Vector.add(one, another) x 46,152,677 ops/sec ±0.99% (90 runs sampled)
	√ Vector#add(vector) x 48,790,259 ops/sec ±1.06% (90 runs sampled)
	√ Vector.iadd(one, another) x 60,709,919 ops/sec ±0.87% (89 runs sampled)
	√ Vector#iadd(vector) x 62,657,452 ops/sec ±1.33% (84 runs sampled)
	√ Vector.sub(one, another) x 45,794,132 ops/sec ±1.54% (91 runs sampled)
	√ Vector#sub(vector) x 49,865,291 ops/sec ±0.84% (89 runs sampled)
	√ Vector.isub(one, another) x 60,261,634 ops/sec ±0.88% (91 runs sampled)
	√ Vector#isub(vector) x 63,105,631 ops/sec ±1.11% (87 runs sampled)
	√ Vector.mul(vector, scalar) x 47,609,123 ops/sec ±0.62% (91 runs sampled)
	√ Vector#mul(vector) x 49,621,452 ops/sec ±0.83% (89 runs sampled)
	√ Vector.imul(vector, scalar) x 62,808,549 ops/sec ±0.89% (91 runs sampled)
	√ Vector#imul(vector) x 66,804,311 ops/sec ±1.17% (86 runs sampled)
	√ Vector.div(vector, scalar) x 45,581,733 ops/sec ±1.85% (87 runs sampled)
	√ Vector#div(vector) x 47,474,648 ops/sec ±0.79% (91 runs sampled)

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
