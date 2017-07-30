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

- [x] [`Vector.copy(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/copy.js#L3) (alias `Vector.clone(vector)`)
- [x] [`Vector.prototype.copy()`](https://github.com/broadsw0rd/vectory/blob/master/src/copy.js#L7) (alias `Vector.prototype.clone(vector)`)

**Convertion**

- [x] [`Vector.toJSON(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L3)
- [x] [`Vector.prototype.toJSON()`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L7)
- [x] [`Vector.toString(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L11)
- [x] [`Vector.prototype.toString()`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L15)
- [x] [`Vector.prototype[Symbol.toStringTag]`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L21) (Latest Chrome and FF or shim)
- [x] [`Vector.toArray(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L24)
- [x] [`Vector.prototype.toArray()`](https://github.com/broadsw0rd/vectory/blob/master/src/convertion.js#L28)


**Equality**

- [x] [`Vector.equals(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L4)
- [x] [`Vector.protototype.equals(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L8)
- [x] [`Vector.compare(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L15)
- [x] [`Vector.protototype.compare(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/equality.js#L19)

**Swizzling**

- [x] [`Vector.prototype.xx`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L4)
- [x] [`Vector.prototype.xy`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L14)
- [x] [`Vector.prototype.yx`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L24)
- [x] [`Vector.prototype.yy`](https://github.com/broadsw0rd/vectory/blob/master/src/swizzling.js#L34)

**Iterator**

- [x] [`Vector.prototype[Symbol.iterator]()`](https://github.com/broadsw0rd/vectory/blob/master/src/iterator.js#L31) (Latest Chrome and FF or shim)

## Benchmark

Intel Core i5-4210U @ 1.7 GHz, DDR3 4 Gb, node v8.2.1

```
> vectory@1.1.0 bench d:\Projects\vectory
> node ./bench/index.js

ℹ start benchmark, please wait a bit...

  Cteation
    ✔ Vector(x, y) x 44,942,911 ops/sec ±0.63% (91 runs sampled)
    ✔ Vector.from([x, y]) x 42,769,625 ops/sec ±0.51% (91 runs sampled)
    ✔ Vector.fromAngle(angle, magnitude) x 45,717,738 ops/sec ±0.75% (91 runs sampled
)
    ✔ Vector.parse(string) x 810,551 ops/sec ±0.84% (87 runs sampled)

  Addition
    ✔ Vector.add(one, another) x 41,577,910 ops/sec ±0.57% (91 runs sampled)
    ✔ Vector#add(vector) x 44,919,876 ops/sec ±0.65% (91 runs sampled)
    ✔ Vector.iadd(one, another) x 50,839,655 ops/sec ±0.58% (93 runs sampled)
    ✔ Vector#iadd(vector) x 53,824,059 ops/sec ±0.72% (92 runs sampled)

  Substraction
    ✔ Vector.sub(one, another) x 41,284,263 ops/sec ±0.72% (90 runs sampled)
    ✔ Vector#sub(vector) x 44,305,755 ops/sec ±0.45% (90 runs sampled)
    ✔ Vector.isub(one, another) x 49,538,692 ops/sec ±0.69% (89 runs sampled)
    ✔ Vector#isub(vector) x 53,937,559 ops/sec ±0.99% (85 runs sampled)

  Multiplication
    ✔ Vector.mul(scalar, vector) x 42,286,364 ops/sec ±0.93% (89 runs sampled)
    ✔ Vector#mul(vector) x 44,096,355 ops/sec ±0.56% (89 runs sampled)
    ✔ Vector.imul(scalar, vector) x 52,284,922 ops/sec ±0.88% (88 runs sampled)
    ✔ Vector#imul(vector) x 56,178,982 ops/sec ±0.70% (90 runs sampled)

  Division
    ✔ Vector.div(scalar, vector) x 40,620,918 ops/sec ±0.82% (92 runs sampled)
    ✔ Vector#div(vector) x 40,981,841 ops/sec ±0.49% (90 runs sampled)
    ✔ Vector.idiv(scalar, vector) x 48,216,444 ops/sec ±0.84% (91 runs sampled)
    ✔ Vector#idiv(vector) x 53,967,631 ops/sec ±0.87% (89 runs sampled)

  Linear Interpolation
    ✔ Vector.lerp(one, another, t) x 36,760,084 ops/sec ±1.08% (86 runs sampled)
    ✔ Vector#lerp(vector, t) x 30,007,447 ops/sec ±1.65% (85 runs sampled)

  Normalization
    ✔ Vector.normalized(vector) x 32,393,920 ops/sec ±0.51% (88 runs sampled)
    ✔ Vector#normalized() x 32,952,870 ops/sec ±0.90% (89 runs sampled)
    ✔ Vector.normalize(vector) x 48,834,926 ops/sec ±0.62% (88 runs sampled)
    ✔ Vector#normalize() x 41,965,198 ops/sec ±3.26% (86 runs sampled)

  Magnitude
    ✔ Vector.magnitude(vector) x 49,491,481 ops/sec ±0.62% (94 runs sampled)
    ✔ Vector#magnitude() x 50,954,715 ops/sec ±1.02% (91 runs sampled)

  Dot Product
    ✔ Vector.dot(one, another) x 47,958,365 ops/sec ±0.69% (89 runs sampled)
    ✔ Vector#dot(vector) x 49,847,660 ops/sec ±0.83% (90 runs sampled)

  Distance
    ✔ Vector.distance(one, another) x 45,994,298 ops/sec ±0.98% (92 runs sampled)
    ✔ Vector#distance(vector) x 47,634,138 ops/sec ±0.74% (89 runs sampled)

  Angle computing
    ✔ Vector.angleOf(vector) x 18,334,234 ops/sec ±0.88% (87 runs sampled)
    ✔ Vector#angleOf() x 16,018,390 ops/sec ±0.41% (93 runs sampled)
    ✔ Vector.angleTo(one, another) x 23,187,834 ops/sec ±1.87% (89 runs sampled)
    ✔ Vector#angleTo(vector) x 25,710,425 ops/sec ±0.44% (90 runs sampled)

  Resetting
    ✔ Vector.reset(one, another) x 54,398,978 ops/sec ±0.75% (89 runs sampled)
    ✔ Vector#reset(vector) x 58,025,549 ops/sec ±0.89% (87 runs sampled)
    ✔ Vector.zero(vector) x 59,075,463 ops/sec ±0.90% (88 runs sampled)
    ✔ Vector#zero() x 64,081,374 ops/sec ±0.82% (88 runs sampled)
    ✔ Vector.set(x, y, vector) x 49,474,295 ops/sec ±0.70% (92 runs sampled)
    ✔ Vector#set(vector) x 53,289,870 ops/sec ±0.79% (88 runs sampled)

  Copy
    ✔ Vector.copy(vector) x 42,925,475 ops/sec ±2.16% (85 runs sampled)
    ✔ Vector#copy() x 44,562,904 ops/sec ±1.99% (88 runs sampled)

  Convertion
    ✔ Vector.toJSON(vector) x 37,934,629 ops/sec ±2.49% (88 runs sampled)
    ✔ Vector#toJSON() x 41,250,931 ops/sec ±1.11% (92 runs sampled)
    ✔ Vector.toString(vector) x 1,697,934 ops/sec ±0.29% (91 runs sampled)
    ✔ Vector#toString() x 1,717,854 ops/sec ±0.74% (93 runs sampled)
    ✔ Vector.toArray(vector) x 38,285,201 ops/sec ±0.58% (90 runs sampled)
    ✔ Vector#toArray() x 41,494,186 ops/sec ±0.80% (87 runs sampled)

  Equality
    ✔ Vector.equals(one, another) x 53,251,045 ops/sec ±0.72% (93 runs sampled)
    ✔ Vector#equals(vector) x 57,484,204 ops/sec ±0.76% (88 runs sampled)
    ✔ Vector.compare(one, another) x 24,502,742 ops/sec ±0.60% (94 runs sampled)
    ✔ Vector#compare(vector) x 25,818,131 ops/sec ±0.50% (92 runs sampled)

  Swizzling
    ✔ Vector#xx get x 47,521,321 ops/sec ±1.21% (87 runs sampled)
    ✔ Vector#xx set x 58,129,018 ops/sec ±0.69% (91 runs sampled)
    ✔ Vector#xy get x 46,922,213 ops/sec ±1.23% (91 runs sampled)
    ✔ Vector#xy set x 57,254,334 ops/sec ±0.92% (90 runs sampled)
    ✔ Vector#yx get x 45,168,687 ops/sec ±1.47% (89 runs sampled)
    ✔ Vector#yx set x 57,913,428 ops/sec ±0.71% (90 runs sampled)
    ✔ Vector#yy get x 48,002,520 ops/sec ±0.57% (93 runs sampled)
    ✔ Vector#yy set x 57,151,478 ops/sec ±1.87% (88 runs sampled)

  Iterator
    ✔ Spread operator x 3,680,746 ops/sec ±0.46% (92 runs sampled)
    ✔ for..of loop x 12,445,990 ops/sec ±1.31% (91 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [ava](https://github.com/sindresorhus/ava) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
