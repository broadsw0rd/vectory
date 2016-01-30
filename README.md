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
- [x] [`Vector.idiv(vector, scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L82)
- [x] [`Vector.prototype.idiv(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L86)

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

	√ Vector(x, y) x 50,351,101 ops/sec ±2.35% (88 runs sampled)
	√ Vector.from([x, y]) x 48,615,357 ops/sec ±0.90% (87 runs sampled)
	√ Vector.fromAngle(angle, magnitude) x 13,047,615 ops/sec ±0.74% (91 runs sampled)
	√ Vector.parse(string) x 929,819 ops/sec ±0.67% (81 runs sampled)
	√ Vector.add(one, another) x 47,371,483 ops/sec ±0.79% (92 runs sampled)
	√ Vector#add(vector) x 50,056,576 ops/sec ±0.91% (90 runs sampled)
	√ Vector.iadd(one, another) x 60,886,457 ops/sec ±0.99% (89 runs sampled)
	√ Vector#iadd(vector) x 63,957,641 ops/sec ±1.03% (85 runs sampled)
	√ Vector.sub(one, another) x 46,581,980 ops/sec ±2.85% (90 runs sampled)
	√ Vector#sub(vector) x 49,902,905 ops/sec ±0.78% (88 runs sampled)
	√ Vector.isub(one, another) x 61,176,032 ops/sec ±0.87% (88 runs sampled)
	√ Vector#isub(vector) x 63,685,387 ops/sec ±1.07% (86 runs sampled)
	√ Vector.mul(vector, scalar) x 48,266,420 ops/sec ±0.65% (93 runs sampled)
	√ Vector#mul(vector) x 50,296,578 ops/sec ±0.75% (92 runs sampled)
	√ Vector.imul(vector, scalar) x 63,564,453 ops/sec ±0.74% (86 runs sampled)
	√ Vector#imul(vector) x 66,604,544 ops/sec ±1.30% (88 runs sampled)
	√ Vector.div(vector, scalar) x 47,211,631 ops/sec ±0.76% (92 runs sampled)
	√ Vector#div(vector) x 48,474,559 ops/sec ±1.00% (87 runs sampled)
	√ Vector.idiv(vector, scalar) x 61,674,295 ops/sec ±0.98% (92 runs sampled)
	√ Vector#idiv(vector) x 64,395,042 ops/sec ±1.02% (88 runs sampled)

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
