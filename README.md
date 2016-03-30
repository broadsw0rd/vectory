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
- Node 0.12+

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

Intel Core i5-4210U @ 1.7 GHz, DDR3 4 Gb, node v4.2.4

```
> vectory@0.0.1 bench d:\Projects\vectory
> node ./bench/index.js

i start benchmark, plase wait a bit...

  Cteation
    √ Vector(x, y) x 48,738,184 ops/sec ±3.25% (80 runs sampled)
    √ Vector.from([x, y]) x 48,661,066 ops/sec ±0.93% (89 runs sampled)
    √ Vector.fromAngle(angle, magnitude) x 13,660,343 ops/sec ±0.91% (92 runs sampled)
    √ Vector.parse(string) x 907,646 ops/sec ±0.73% (83 runs sampled)

  Addition
    √ Vector.add(one, another) x 46,406,837 ops/sec ±1.39% (88 runs sampled)
    √ Vector#add(vector) x 48,038,377 ops/sec ±0.79% (88 runs sampled)
    √ Vector.iadd(one, another) x 59,606,793 ops/sec ±1.27% (87 runs sampled)
    √ Vector#iadd(vector) x 57,243,055 ops/sec ±0.89% (90 runs sampled)

  Substraction
    √ Vector.sub(one, another) x 46,400,583 ops/sec ±1.83% (88 runs sampled)
    √ Vector#sub(vector) x 50,428,891 ops/sec ±0.96% (90 runs sampled)
    √ Vector.isub(one, another) x 60,077,172 ops/sec ±1.51% (88 runs sampled)
    √ Vector#isub(vector) x 62,758,590 ops/sec ±1.08% (89 runs sampled)

  Multiplication
    √ Vector.mul(scalar, vector) x 48,308,190 ops/sec ±0.82% (90 runs sampled)
    √ Vector#mul(vector) x 50,691,670 ops/sec ±0.79% (90 runs sampled)
    √ Vector.imul(scalar, vector) x 62,480,807 ops/sec ±0.90% (88 runs sampled)
    √ Vector#imul(vector) x 66,755,450 ops/sec ±1.03% (89 runs sampled)

  Division
    √ Vector.div(scalar, vector) x 46,791,132 ops/sec ±0.99% (88 runs sampled)
    √ Vector#div(vector) x 49,188,655 ops/sec ±0.88% (88 runs sampled)
    √ Vector.idiv(scalar, vector) x 60,979,579 ops/sec ±1.03% (89 runs sampled)
    √ Vector#idiv(vector) x 61,906,327 ops/sec ±0.96% (88 runs sampled)

  Linear Interpolation
    √ Vector.lerp(one, another, t) x 41,307,587 ops/sec ±0.88% (92 runs sampled)
    √ Vector#lerp(vector, t) x 44,044,565 ops/sec ±0.70% (91 runs sampled)

  Normalization
    √ Vector.normalized(vector) x 20,717,304 ops/sec ±2.00% (71 runs sampled)
    √ Vector#normalized() x 22,180,009 ops/sec ±2.16% (75 runs sampled)
    √ Vector.normalize(vector) x 33,361,316 ops/sec ±1.91% (76 runs sampled)
    √ Vector#normalize() x 34,148,672 ops/sec ±1.64% (77 runs sampled)
    
  Magnitude
    √ Vector.magnitude(vector) x 34,972,494 ops/sec ±2.85% (69 runs sampled)
    √ Vector#magnitude() x 38,121,545 ops/sec ±2.06% (73 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run wrap` | Wrap source code in [UMD](https://github.com/umdjs/umd)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [ava](https://github.com/sindresorhus/ava) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run build` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
