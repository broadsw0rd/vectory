<h1 align="center">Vectory</h1>
<h4 align="center">High performant, DevTools friendly, Crankshaft tolerant 2d vectors</h4>

<p align="center">
   <a href="https://www.npmjs.com/package/vectory" target="_blank">
      <img src="https://img.shields.io/npm/v/vectory.svg" alt="NPM version" target="_blank"></img>
   </a>
   <a href="https://travis-ci.org/broadsw0rd/vectory" target="_blank">
      <img src="https://travis-ci.org/broadsw0rd/vectory.svg?branch=master" alt="Build Status" target="_blank"></img>
   </a>
   <a href='https://coveralls.io/github/broadsw0rd/vectory?branch=master' target="_blank">
      <img src='https://coveralls.io/repos/broadsw0rd/vectory/badge.svg?branch=master&service=github' alt='Coverage Status' />
   </a>
   <a href="https://www.bithound.io/github/broadsw0rd/vectory">
      <img src="https://www.bithound.io/github/broadsw0rd/vectory/badges/score.svg" alt="bitHound Overall Score">
   </a>
   <a href="https://github.com/feross/standard" target="_blank">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="js-standard-style"></img>
   </a>
</p>

## Table of Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [API](#api)
- [Benchmark](#benchmark)
- [Development](#development)

## Features

- Simple - [343 LOC](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.js#L343)
- Lightweight - [4.1 Kb](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.min.js)
- Well tested - [100% code coverage](https://coveralls.io/github/broadsw0rd/vectory?branch=master)
- Rich [api](#api) - 29 methods
- Designed with performance in mind and reviewed with [IRHydra](http://mrale.ph/irhydra/2/)

## Install

```
npm install --save vectory
```

```js
import Vector from 'vectory'
var position = new Vector(0, 0)
```

or

```html
<script src="https://rawgit.com/broadsw0rd/vectory/1.1.0/dist/vectory.min.js"></script>
```

```js
var position = new Vector(0, 0)
```

## Usage

Nice [article](https://processing.org/tutorials/pvector/) about vector usage by Daniel Shiffman

## Support

- Latest Chrome, FF, Safari
- IE 9+
- Node 0.10+

## API

**Creation**

- [x] [`new Vector(x, y)`](https://github.com/broadsw0rd/vectory/blob/master/src/vector.js#L1)
- [x] [`Vector.from([x, y])`](https://github.com/broadsw0rd/vectory/blob/master/src/creation.js#L3)
- [x] [`Vector.fromAngle(angle, magnitude)`](https://github.com/broadsw0rd/vectory/blob/master/src/creation.js#L7)
- [x] [`Vector.parse(string)`](https://github.com/broadsw0rd/vectory/blob/master/src/creation.js#L11)

**Addition**

- [x] [`Vector.add(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L3)
- [x] [`Vector.prototype.add(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L7)
- [x] [`Vector.iadd(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L11)
- [x] [`Vector.prototype.iadd(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L15)

**Substraction**

- [x] [`Vector.sub(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L3)
- [x] [`Vector.prototype.sub(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L7)
- [x] [`Vector.isub(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L11)
- [x] [`Vector.prototype.isub(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L15)

**Multiplication**

- [x] [`Vector.mul(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L3)
- [x] [`Vector.prototype.mul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L7)
- [x] [`Vector.imul(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L11)
- [x] [`Vector.prototype.imul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L15)

**Division**

- [x] [`Vector.div(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L3)
- [x] [`Vector.prototype.div(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L7)
- [x] [`Vector.idiv(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L11)
- [x] [`Vector.prototype.idiv(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L15)

**Linear interpolation**

- [x] [`Vector.lerp(one, another, t)`](https://github.com/broadsw0rd/vectory/blob/master/src/lerp.js#L3)
- [x] [`Vector.prototype.lerp(vector, t)`](https://github.com/broadsw0rd/vectory/blob/master/src/lerp.js#L7)

**Normalization**

- [x] [`Vector.normalized(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L3)
- [x] [`Vector.prototype.normalized()`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L7)
- [x] [`Vector.normalize(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L18)
- [x] [`Vector.prototype.normalize()`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L22)

**Magnitude**

- [x] [`Vector.magnitude(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/magnitude.js#L3)
- [x] [`Vector.prototype.magnitude()`](https://github.com/broadsw0rd/vectory/blob/master/src/magnitude.js#L7)

**Dot product**

- [x] [`Vector.dot(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/dot-product.js#L3)
- [x] [`Vector.prototype.dot(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/dot-product.js#L7)

**Distance**

- [x] [`Vector.distance(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/distance.js#L3)
- [x] [`Vector.prototype.distance(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/distance.js#L7)

**Angle computing**

- [x] [`Vector.angleOf(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/angle.js#L3)
- [x] [`Vector.prototype.angleOf()`](https://github.com/broadsw0rd/vectory/blob/master/src/angle.js#L7)
- [x] [`Vector.angleTo(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/angle.js#L11)
- [x] [`Vector.prototype.angleTo(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/angle.js#L15)

**Resetting**

- [x] [`Vector.reset(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/resetting.js#L3)
- [x] [`Vector.prototype.reset(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/resetting.js#L7)
- [x] [`Vector.zero(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/resetting.js#L13)
- [x] [`Vector.prototype.zero()`](https://github.com/broadsw0rd/vectory/blob/master/src/resetting.js#L17)
- [x] [`Vector.set(x, y, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/resetting.js#L23)
- [x] [`Vector.prototype.set(x, y)`](https://github.com/broadsw0rd/vectory/blob/master/src/resetting.js#L27)

**Copy**

- [x] [`Vector.copy(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/copy.js#L3)
- [x] [`Vector.prototype.copy()`](https://github.com/broadsw0rd/vectory/blob/master/src/copy.js#L7)

**Convertion**

- [x] [`Vector.toJSON(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L3)
- [x] [`Vector.prototype.toJSON()`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L7)
- [x] [`Vector.toString(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L11)
- [x] [`Vector.prototype.toString()`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L15)
- [x] [`Vector.prototype[Symbol.toStringTag]`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L21) (Latest Chrome and FF or shim)
- [x] [`Vector.toArray(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L24)
- [x] [`Vector.prototype.toArray()`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L28)


**Equality**

- [x] [`Vector.equals(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L3)
- [x] [`Vector.protototype.equals(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L7)
- [x] [`Vector.compare(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L11)
- [x] [`Vector.protototype.compare(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L15)

**Swizzling**

- [x] [`Vector.prototype.xx`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L4)
- [x] [`Vector.prototype.xy`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L14)
- [x] [`Vector.prototype.yx`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L24)
- [x] [`Vector.prototype.yy`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L34)

**Iterator**

- [x] [`Vector.prototype[Symbol.iterator]()`](https://github.com/broadsw0rd/vectory/blob/master/src/iterator.js#L31) (Latest Chrome and FF or shim)

## Benchmark

Intel Core i5-4210U @ 1.7 GHz, DDR3 4 Gb, node v6.3.1

```
> vectory@0.0.1 bench d:\Projects\vectory
> node ./bench/index.js

i start benchmark, please wait a bit...

  Cteation
    √ Vector(x, y) x 49,512,710 ops/sec ±0.81% (87 runs sampled)
    √ Vector.from([x, y]) x 47,104,546 ops/sec ±0.92% (88 runs sampled)
    √ Vector.fromAngle(angle, magnitude) x 12,662,508 ops/sec ±0.80% (90 runs sampled)
    √ Vector.parse(string) x 652,311 ops/sec ±0.76% (89 runs sampled)

  Addition
    √ Vector.add(one, another) x 46,077,828 ops/sec ±0.80% (91 runs sampled)
    √ Vector#add(vector) x 48,307,437 ops/sec ±0.89% (85 runs sampled)
    √ Vector.iadd(one, another) x 58,040,869 ops/sec ±1.02% (90 runs sampled)
    √ Vector#iadd(vector) x 59,066,303 ops/sec ±1.50% (89 runs sampled)

  Substraction
    √ Vector.sub(one, another) x 45,984,263 ops/sec ±1.04% (90 runs sampled)
    √ Vector#sub(vector) x 48,748,601 ops/sec ±0.92% (91 runs sampled)
    √ Vector.isub(one, another) x 57,212,440 ops/sec ±1.33% (87 runs sampled)
    √ Vector#isub(vector) x 59,872,144 ops/sec ±0.88% (88 runs sampled)

  Multiplication
    √ Vector.mul(scalar, vector) x 46,318,979 ops/sec ±0.72% (90 runs sampled)
    √ Vector#mul(vector) x 48,208,856 ops/sec ±1.02% (85 runs sampled)
    √ Vector.imul(scalar, vector) x 60,006,913 ops/sec ±0.86% (89 runs sampled)
    √ Vector#imul(vector) x 64,025,854 ops/sec ±0.92% (87 runs sampled)

  Division
    √ Vector.div(scalar, vector) x 44,440,514 ops/sec ±1.09% (91 runs sampled)
    √ Vector#div(vector) x 47,104,740 ops/sec ±1.00% (86 runs sampled)
    √ Vector.idiv(scalar, vector) x 56,566,257 ops/sec ±2.31% (85 runs sampled)
    √ Vector#idiv(vector) x 61,024,679 ops/sec ±1.01% (87 runs sampled)

  Linear Interpolation
    √ Vector.lerp(one, another, t) x 39,208,489 ops/sec ±1.94% (91 runs sampled)
    √ Vector#lerp(vector, t) x 42,296,249 ops/sec ±0.87% (88 runs sampled)

  Normalization
    √ Vector.normalized(vector) x 33,836,031 ops/sec ±0.74% (90 runs sampled)
    √ Vector#normalized() x 35,412,207 ops/sec ±1.48% (88 runs sampled)
    √ Vector.normalize(vector) x 52,856,590 ops/sec ±1.20% (86 runs sampled)
    √ Vector#normalize() x 54,077,054 ops/sec ±0.65% (88 runs sampled)

  Magnitude
    √ Vector.magnitude(vector) x 55,322,298 ops/sec ±1.15% (88 runs sampled)
    √ Vector#magnitude() x 57,453,229 ops/sec ±1.06% (89 runs sampled)

  Dot Product
    √ Vector.dot(one, another) x 53,461,194 ops/sec ±1.01% (90 runs sampled)
    √ Vector#dot(vector) x 53,250,294 ops/sec ±1.76% (87 runs sampled)

  Distance
    √ Vector.distance(one, another) x 49,628,596 ops/sec ±2.08% (86 runs sampled)
    √ Vector#distance(vector) x 51,163,629 ops/sec ±1.06% (88 runs sampled)

  Angle computing
    √ Vector.angleOf(vector) x 9,324,785 ops/sec ±0.76% (87 runs sampled)
    √ Vector#angleOf() x 9,480,884 ops/sec ±0.70% (88 runs sampled)
    √ Vector.angleTo(one, another) x 7,580,951 ops/sec ±0.79% (89 runs sampled)
    √ Vector#angleTo(vector) x 7,916,520 ops/sec ±1.15% (91 runs sampled)

  Resetting
    √ Vector.reset(one, another) x 62,069,347 ops/sec ±1.02% (84 runs sampled)
    √ Vector#reset(vector) x 62,803,906 ops/sec ±0.97% (86 runs sampled)
    √ Vector.zero(vector) x 64,707,806 ops/sec ±1.18% (86 runs sampled)
    √ Vector#zero() x 71,958,947 ops/sec ±1.18% (88 runs sampled)
    √ Vector.set(x, y, vector) x 56,381,229 ops/sec ±1.21% (88 runs sampled)
    √ Vector#set(vector) x 58,844,000 ops/sec ±2.53% (83 runs sampled)

  Copy
    √ Vector.copy(vector) x 48,914,566 ops/sec ±1.23% (88 runs sampled)
    √ Vector#copy() x 45,898,400 ops/sec ±2.81% (81 runs sampled)

  Convertion
    √ Vector.toJSON(vector) x 43,851,372 ops/sec ±1.07% (89 runs sampled)
    √ Vector#toJSON() x 46,252,815 ops/sec ±1.16% (89 runs sampled)
    √ Vector.toString(vector) x 1,595,817 ops/sec ±0.74% (89 runs sampled)
    √ Vector#toString() x 1,610,517 ops/sec ±0.66% (90 runs sampled)
    √ Vector.toArray(vector) x 44,316,711 ops/sec ±0.85% (91 runs sampled)
    √ Vector#toArray() x 47,084,035 ops/sec ±0.92% (90 runs sampled)

  Equality
    √ Vector.equals(one, another) x 60,568,526 ops/sec ±0.77% (91 runs sampled)
    √ Vector#equals(vector) x 65,289,973 ops/sec ±1.19% (87 runs sampled)
    √ Vector.compare(one, another) x 12,351,913 ops/sec ±2.40% (85 runs sampled)
    √ Vector#compare(vector) x 13,029,982 ops/sec ±0.34% (91 runs sampled)

  Swizzling
    √ Vector#xx get x 52,683,890 ops/sec ±0.94% (90 runs sampled)
    √ Vector#xx set x 65,997,193 ops/sec ±0.84% (91 runs sampled)
    √ Vector#xy get x 51,679,447 ops/sec ±0.96% (88 runs sampled)
    √ Vector#xy set x 65,912,948 ops/sec ±0.86% (88 runs sampled)
    √ Vector#yx get x 49,653,537 ops/sec ±1.48% (86 runs sampled)
    √ Vector#yx set x 62,334,747 ops/sec ±1.98% (84 runs sampled)
    √ Vector#yy get x 51,242,161 ops/sec ±1.55% (88 runs sampled)
    √ Vector#yy set x 63,577,072 ops/sec ±1.58% (88 runs sampled)

  Iterator
    √ Spread operator x 3,515,449 ops/sec ±0.92% (89 runs sampled)
    √ for..of loop x 8,514,056 ops/sec ±3.96% (79 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [ava](https://github.com/sindresorhus/ava) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
