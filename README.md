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

- Simple - [156 LOC](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L156)
- Lightweight - [2.1 Kb](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.min.js)
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

- [x] [`Vector.normalized(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L102)
- [x] [`Vector.prototype.normalized()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L106)
- [x] [`Vector.normalize(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L117)
- [x] [`Vector.prototype.normalize()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L121)

**Magnitude**

- [x] [`Vector.magnitude(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L132)
- [x] [`Vector.prototype.magnitude()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L136)

**Dot product**

- [x] [`Vector.dot(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L140)
- [x] [`Vector.prototype.dot(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L144)

**Distance**

- [x] [`Vector.distance(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L148)
- [x] [`Vector.prototype.distance(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L152)

**Angle computing**

- [x] [`Vector.angleOf(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L158)
- [x] [`Vector.prototype.angleOf()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L162)
- [x] [`Vector.angleTo(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L166)
- [x] [`Vector.prototype.angleTo(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L170)

**Resetting**

- [x] [`Vector.reset(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L174)
- [x] [`Vector.prototype.reset(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L178)
- [x] [`Vector.zero(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L184)
- [x] [`Vector.prototype.zero()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L188)

**Copy**

- [x] [`Vector.copy(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L194)
- [x] [`Vector.prototype.copy()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L198)

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

	√ Vector(x, y) x 47,757,545 ops/sec ±3.88% (83 runs sampled)
	√ Vector.from([x, y]) x 48,347,584 ops/sec ±0.92% (92 runs sampled)
	√ Vector.fromAngle(angle, magnitude) x 12,681,203 ops/sec ±0.96% (88 runs sampled)
	√ Vector.parse(string) x 920,616 ops/sec ±0.66% (91 runs sampled)
	√ Vector.add(one, another) x 46,433,970 ops/sec ±1.03% (90 runs sampled)
	√ Vector#add(vector) x 49,388,108 ops/sec ±0.79% (91 runs sampled)
	√ Vector.iadd(one, another) x 60,422,023 ops/sec ±1.18% (87 runs sampled)
	√ Vector#iadd(vector) x 63,371,804 ops/sec ±0.89% (90 runs sampled)
	√ Vector.sub(one, another) x 46,890,073 ops/sec ±0.80% (85 runs sampled)
	√ Vector#sub(vector) x 45,989,342 ops/sec ±0.96% (89 runs sampled)
	√ Vector.isub(one, another) x 60,357,567 ops/sec ±0.93% (92 runs sampled)
	√ Vector#isub(vector) x 63,368,120 ops/sec ±0.98% (89 runs sampled)
	√ Vector.mul(scalar, vector) x 47,626,354 ops/sec ±0.67% (90 runs sampled)
	√ Vector#mul(vector) x 49,914,480 ops/sec ±0.75% (89 runs sampled)
	√ Vector.imul(scalar, vector) x 63,101,653 ops/sec ±0.89% (85 runs sampled)
	√ Vector#imul(vector) x 66,682,488 ops/sec ±1.17% (88 runs sampled)
	√ Vector.div(scalar, vector) x 46,562,089 ops/sec ±0.70% (87 runs sampled)
	√ Vector#div(vector) x 48,129,893 ops/sec ±1.03% (88 runs sampled)
	√ Vector.idiv(scalar, vector) x 61,233,615 ops/sec ±1.13% (92 runs sampled)
	√ Vector#idiv(vector) x 63,934,978 ops/sec ±1.06% (90 runs sampled)
	√ Vector.lerp(one, another, t) x 41,664,345 ops/sec ±0.67% (89 runs sampled)
	√ Vector#lerp(vector, t) x 42,541,461 ops/sec ±0.84% (89 runs sampled)
	√ Vector.normalized(vector) x 32,452,975 ops/sec ±4.15% (80 runs sampled)
	√ Vector#normalized() x 36,790,158 ops/sec ±0.78% (93 runs sampled)

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
