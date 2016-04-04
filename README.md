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
   <a href="https://www.bithound.io/github/broadsw0rd/vectory">
   	<img src="https://www.bithound.io/github/broadsw0rd/vectory/badges/code.svg" alt="bitHound Code">
   </a>
</p>

## Table of Contents

- [Features](#features)
- [Install & Usage](install--usage)
- [Support](#support)
- [API](#api)
- [Benchmark](#benchmark)
- [Development](#development)

## Features

- Simplicity - [313 LOC](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L313)
- Lightness - [3.9 Kb](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.min.js)
- Reliability - [100% code coverage](https://coveralls.io/github/broadsw0rd/vectory?branch=master)
- Rich [api](#api) - 29 methods
- Built for [any](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.js#L9) environment
- Designed with performance in mind and reviewed with [IRHydra](http://mrale.ph/irhydra/2/)

## Install & Usage

## Support

- Latest Chrome, FF, Safari
- IE 9+
- Node 0.10+

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

- [x] [`Vector.toJSON(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L202)
- [x] [`Vector.prototype.toJSON()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L206)
- [x] [`Vector.toString(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L210)
- [x] [`Vector.prototype.toString()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L214)


**Equality**

- [x] [`Vector.equals(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L218)
- [x] [`Vector.protototype.equals(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L222)
- [x] [`Vector.compare(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L226)
- [x] [`Vector.protototype.compare(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L230)

**Swizzling**

- [x] [`Vector.prototype.xx`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L237)
- [x] [`Vector.prototype.xy`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L247)
- [x] [`Vector.prototype.yx`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L257)
- [x] [`Vector.prototype.yy`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L267)

**Iterator**

- [x] [`Vector.prototype[Symbol.iterator]()`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L309) (Latest Chrome and FF or shim)

## Benchmark

Intel Core i5-4210U @ 1.7 GHz, DDR3 4 Gb, node v5.10.0

```
> vectory@0.0.1 bench d:\Projects\vectory
> node ./bench/index.js

i start benchmark, please wait a bit...

  Cteation
    √ Vector(x, y) x 53,348,398 ops/sec ±0.69% (89 runs sampled)
    √ Vector.from([x, y]) x 48,612,322 ops/sec ±1.14% (85 runs sampled)
    √ Vector.fromAngle(angle, magnitude) x 13,210,711 ops/sec ±0.76% (90 runs sampled)
    √ Vector.parse(string) x 896,306 ops/sec ±0.82% (87 runs sampled)

  Addition
    √ Vector.add(one, another) x 47,443,019 ops/sec ±0.84% (91 runs sampled)
    √ Vector#add(vector) x 50,905,843 ops/sec ±1.08% (89 runs sampled)
    √ Vector.iadd(one, another) x 59,167,753 ops/sec ±1.21% (85 runs sampled)
    √ Vector#iadd(vector) x 61,101,575 ops/sec ±1.27% (90 runs sampled)

  Substraction
    √ Vector.sub(one, another) x 47,062,946 ops/sec ±0.97% (87 runs sampled)
    √ Vector#sub(vector) x 49,834,764 ops/sec ±0.94% (86 runs sampled)
    √ Vector.isub(one, another) x 59,405,842 ops/sec ±0.83% (91 runs sampled)
    √ Vector#isub(vector) x 61,927,552 ops/sec ±1.16% (87 runs sampled)

  Multiplication
    √ Vector.mul(scalar, vector) x 46,162,401 ops/sec ±1.00% (85 runs sampled)
    √ Vector#mul(vector) x 51,100,212 ops/sec ±0.73% (90 runs sampled)
    √ Vector.imul(scalar, vector) x 61,484,440 ops/sec ±1.17% (89 runs sampled)
    √ Vector#imul(vector) x 64,707,513 ops/sec ±1.18% (89 runs sampled)

  Division
    √ Vector.div(scalar, vector) x 45,731,565 ops/sec ±1.10% (88 runs sampled)
    √ Vector#div(vector) x 49,149,095 ops/sec ±1.11% (85 runs sampled)
    √ Vector.idiv(scalar, vector) x 61,187,030 ops/sec ±0.90% (87 runs sampled)
    √ Vector#idiv(vector) x 63,406,263 ops/sec ±0.83% (90 runs sampled)

  Linear Interpolation
    √ Vector.lerp(one, another, t) x 41,626,105 ops/sec ±0.94% (90 runs sampled)
    √ Vector#lerp(vector, t) x 43,755,974 ops/sec ±0.79% (89 runs sampled)

  Normalization
    √ Vector.normalized(vector) x 36,564,936 ops/sec ±0.88% (89 runs sampled)
    √ Vector#normalized() x 36,594,317 ops/sec ±0.95% (91 runs sampled)
    √ Vector.normalize(vector) x 46,605,194 ops/sec ±0.37% (89 runs sampled)
    √ Vector#normalize() x 46,345,188 ops/sec ±0.65% (90 runs sampled)

  Magnitude
    √ Vector.magnitude(vector) x 57,184,952 ops/sec ±1.11% (88 runs sampled)
    √ Vector#magnitude() x 59,954,064 ops/sec ±1.19% (91 runs sampled)

  Dot Product
    √ Vector.dot(one, another) x 55,660,710 ops/sec ±1.22% (90 runs sampled)
    √ Vector#dot(vector) x 58,028,028 ops/sec ±1.14% (88 runs sampled)

  Distance
    √ Vector.distance(one, another) x 52,515,846 ops/sec ±1.40% (85 runs sampled)
    √ Vector#distance(vector) x 53,330,350 ops/sec ±0.76% (86 runs sampled)

  Angle computing
    √ Vector.angleOf(vector) x 9,901,181 ops/sec ±0.72% (91 runs sampled)
    √ Vector#angleOf() x 12,351,848 ops/sec ±0.85% (91 runs sampled)
    √ Vector.angleTo(one, another) x 8,400,104 ops/sec ±0.95% (88 runs sampled)
    √ Vector#angleTo(vector) x 8,480,427 ops/sec ±0.73% (88 runs sampled)

  Resetting
    √ Vector.reset(one, another) x 60,904,144 ops/sec ±1.43% (84 runs sampled)
    √ Vector#reset(vector) x 64,218,486 ops/sec ±1.34% (88 runs sampled)
    √ Vector.zero(vector) x 67,420,267 ops/sec ±1.28% (87 runs sampled)
    √ Vector#zero() x 71,791,298 ops/sec ±1.68% (83 runs sampled)

  Copy
    √ Vector.copy(vector) x 50,231,506 ops/sec ±1.12% (86 runs sampled)
    √ Vector#copy() x 53,683,436 ops/sec ±3.12% (86 runs sampled)

  Convertion
    √ Vector.toJSON(vector) x 47,047,162 ops/sec ±1.12% (91 runs sampled)
    √ Vector#toJSON() x 48,523,699 ops/sec ±1.92% (85 runs sampled)
    √ Vector.toString(vector) x 1,228,097 ops/sec ±6.24% (73 runs sampled)
    √ Vector#toString() x 1,552,068 ops/sec ±2.84% (84 runs sampled)

  Equality
    √ Vector.equals(one, another) x 52,155,518 ops/sec ±2.97% (81 runs sampled)
    √ Vector#equals(vector) x 65,605,360 ops/sec ±1.70% (91 runs sampled)
    √ Vector.compare(one, another) x 12,514,780 ops/sec ±2.21% (88 runs sampled)
    √ Vector#compare(vector) x 13,060,100 ops/sec ±0.31% (90 runs sampled)

  Swizzling
    √ Vector#xx get x 55,685,201 ops/sec ±0.91% (90 runs sampled)
    √ Vector#xx set x 67,897,612 ops/sec ±1.13% (89 runs sampled)
    √ Vector#xy get x 54,026,813 ops/sec ±1.43% (90 runs sampled)
    √ Vector#xy set x 68,333,655 ops/sec ±0.97% (89 runs sampled)
    √ Vector#yx get x 54,857,330 ops/sec ±1.30% (90 runs sampled)
    √ Vector#yx set x 67,266,556 ops/sec ±1.45% (89 runs sampled)
    √ Vector#yy get x 54,545,907 ops/sec ±1.15% (89 runs sampled)
    √ Vector#yy set x 68,067,535 ops/sec ±1.04% (89 runs sampled)

  Iterator
    √ Spread operator x 1,480,281 ops/sec ±0.67% (89 runs sampled)
    √ for..of loop x 6,435,854 ops/sec ±0.84% (91 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run wrap` | Wrap source code in [UMD](https://github.com/umdjs/umd)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [ava](https://github.com/sindresorhus/ava) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run build` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
