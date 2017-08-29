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

- Simple - [376 LOC](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.js#376)
- Lightweight - [4.5 Kb](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.min.js)
- Well tested - [100% code coverage](https://coveralls.io/github/broadsw0rd/vectory?branch=master)
- Rich [api](#api) - 33 methods
- Designed with performance in mind and tested with [IRHydra](http://mrale.ph/irhydra/2/)

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

Follow [this link](https://processing.org/tutorials/pvector/) to read more about vectors' usage in the Daniel Shiffman's article

## Support

- Latest Chrome, FF, Safari
- IE 9+
- Node 4+

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

**Rotation**

- [x] [`Vector.rotate(theta, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/rotation.js#L13)
- [x] [`Vector.prototype.rotate(theta)`](https://github.com/broadsw0rd/vectory/blob/master/src/rotation.js#L17)
- [x] [`Vector.irotate(theta, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/rotation.js#L21)
- [x] [`Vector.prototype.irotate(theta)`](https://github.com/broadsw0rd/vectory/blob/master/src/rotation.js#L25)

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
> vectory@1.2.0 bench d:\Projects\vectory
> node ./bench/index.js

ℹ start benchmark, please wait a bit...

  Cteation
    ✔ Vector(x, y) x 46,743,543 ops/sec ±0.51% (95 runs sampled)
    ✔ Vector.from([x, y]) x 43,975,387 ops/sec ±0.74% (95 runs sampled)
    ✔ Vector.fromAngle(angle, magnitude) x 46,690,953 ops/sec ±0.50% (94 runs sampled)
    ✔ Vector.parse(string) x 844,061 ops/sec ±0.71% (91 runs sampled)

  Addition
    ✔ Vector.add(one, another) x 42,209,927 ops/sec ±0.85% (91 runs sampled)
    ✔ Vector#add(vector) x 45,393,805 ops/sec ±0.60% (91 runs sampled)
    ✔ Vector.iadd(one, another) x 51,974,197 ops/sec ±0.67% (92 runs sampled)
    ✔ Vector#iadd(vector) x 56,314,420 ops/sec ±0.97% (94 runs sampled)

  Substraction
    ✔ Vector.sub(one, another) x 42,524,916 ops/sec ±0.87% (92 runs sampled)
    ✔ Vector#sub(vector) x 46,091,266 ops/sec ±0.63% (91 runs sampled)
    ✔ Vector.isub(one, another) x 51,595,827 ops/sec ±0.67% (94 runs sampled)
    ✔ Vector#isub(vector) x 56,167,879 ops/sec ±1.27% (90 runs sampled)

  Multiplication
    ✔ Vector.mul(scalar, vector) x 42,963,883 ops/sec ±1.10% (89 runs sampled)
    ✔ Vector#mul(vector) x 45,479,457 ops/sec ±0.99% (93 runs sampled)
    ✔ Vector.imul(scalar, vector) x 53,674,489 ops/sec ±0.89% (93 runs sampled)
    ✔ Vector#imul(vector) x 56,131,658 ops/sec ±1.45% (87 runs sampled)

  undefined
    ✔ Vector.div(scalar, vector) x 41,455,674 ops/sec ±1.00% (92 runs sampled)
    ✔ Vector#div(vector) x 43,982,841 ops/sec ±0.94% (92 runs sampled)
    ✔ Vector.idiv(scalar, vector) x 50,470,195 ops/sec ±0.99% (92 runs sampled)
    ✔ Vector#idiv(vector) x 54,262,823 ops/sec ±1.11% (89 runs sampled)

  Linear Interpolation
    ✔ Vector.lerp(one, another, t) x 37,476,071 ops/sec ±0.67% (93 runs sampled)
    ✔ Vector#lerp(vector, t) x 40,018,105 ops/sec ±0.95% (91 runs sampled)

  Normalization
    ✔ Vector.normalized(vector) x 34,610,141 ops/sec ±1.70% (91 runs sampled)
    ✔ Vector#normalized() x 33,910,394 ops/sec ±1.02% (91 runs sampled)
    ✔ Vector.normalize(vector) x 45,430,996 ops/sec ±0.48% (93 runs sampled)
    ✔ Vector#normalize() x 51,779,510 ops/sec ±0.98% (92 runs sampled)

  Magnitude
    ✔ Vector.magnitude(vector) x 50,388,862 ops/sec ±1.07% (92 runs sampled)
    ✔ Vector#magnitude() x 52,680,430 ops/sec ±0.55% (92 runs sampled)

  Dot Product
    ✔ Vector.dot(one, another) x 49,099,926 ops/sec ±1.11% (92 runs sampled)
    ✔ Vector#dot(vector) x 50,984,589 ops/sec ±0.75% (91 runs sampled)

  Distance
    ✔ Vector.distance(one, another) x 45,798,049 ops/sec ±1.19% (91 runs sampled)
    ✔ Vector#distance(vector) x 48,614,015 ops/sec ±0.86% (86 runs sampled)

  Angle computing
    ✔ Vector.angleOf(vector) x 19,578,714 ops/sec ±0.71% (94 runs sampled)
    ✔ Vector#angleOf() x 15,775,111 ops/sec ±0.71% (93 runs sampled)
    ✔ Vector.angleTo(one, another) x 24,279,594 ops/sec ±1.05% (89 runs sampled)
    ✔ Vector#angleTo(vector) x 25,635,012 ops/sec ±2.02% (88 runs sampled)

  Rotation
    ✔ Vector.rotate(theta, vector) x 14,454,664 ops/sec ±0.29% (95 runs sampled)
    ✔ Vector#rotate(theta) x 14,748,750 ops/sec ±0.83% (89 runs sampled)
    ✔ Vector.irotate(theta, vector) x 15,671,034 ops/sec ±0.99% (92 runs sampled)
    ✔ Vector#irotate(theta) x 15,809,098 ops/sec ±0.40% (93 runs sampled)

  Resetting
    ✔ Vector.reset(one, another) x 56,820,469 ops/sec ±0.71% (91 runs sampled)
    ✔ Vector#reset(vector) x 59,785,743 ops/sec ±1.02% (89 runs sampled)
    ✔ Vector.zero(vector) x 61,210,667 ops/sec ±0.95% (90 runs sampled)
    ✔ Vector#zero() x 37,152,570 ops/sec ±18.39% (52 runs sampled)
    ✔ Vector.set(x, y, vector) x 23,268,702 ops/sec ±4.99% (69 runs sampled)
    ✔ Vector#set(vector) x 33,454,572 ops/sec ±4.58% (66 runs sampled)

  Copy
    ✔ Vector.copy(vector) x 25,562,562 ops/sec ±3.15% (66 runs sampled)
    ✔ Vector#copy() x 24,956,985 ops/sec ±2.95% (69 runs sampled)

  Convertion
    ✔ Vector.toJSON(vector) x 25,875,224 ops/sec ±4.33% (72 runs sampled)
    ✔ Vector#toJSON() x 31,665,509 ops/sec ±3.53% (81 runs sampled)
    ✔ Vector.toString(vector) x 1,394,192 ops/sec ±2.21% (81 runs sampled)
    ✔ Vector#toString() x 1,722,970 ops/sec ±0.89% (89 runs sampled)
    ✔ Vector.toArray(vector) x 38,888,744 ops/sec ±2.66% (86 runs sampled)
    ✔ Vector#toArray() x 34,146,372 ops/sec ±2.63% (87 runs sampled)

  Equality
    ✔ Vector.equals(one, another) x 40,988,367 ops/sec ±2.15% (84 runs sampled)
    ✔ Vector#equals(vector) x 41,154,452 ops/sec ±2.89% (78 runs sampled)
    ✔ Vector.compare(one, another) x 21,772,261 ops/sec ±1.69% (86 runs sampled)
    ✔ Vector#compare(vector) x 26,722,372 ops/sec ±0.38% (94 runs sampled)

  Swizzling
    ✔ Vector#xx get x 49,012,070 ops/sec ±0.91% (92 runs sampled)
    ✔ Vector#xx set x 59,257,367 ops/sec ±1.06% (89 runs sampled)
    ✔ Vector#xy get x 48,156,050 ops/sec ±0.68% (92 runs sampled)
    ✔ Vector#xy set x 59,525,311 ops/sec ±0.98% (92 runs sampled)
    ✔ Vector#yx get x 47,543,864 ops/sec ±0.43% (90 runs sampled)
    ✔ Vector#yx set x 59,701,618 ops/sec ±0.86% (92 runs sampled)
    ✔ Vector#yy get x 49,532,593 ops/sec ±0.62% (92 runs sampled)
    ✔ Vector#yy set x 59,408,608 ops/sec ±1.11% (88 runs sampled)

  Iterator
    ✔ Spread operator x 3,825,038 ops/sec ±0.56% (92 runs sampled)
    ✔ for..of loop x 12,763,966 ops/sec ±1.56% (93 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [ava](https://github.com/sindresorhus/ava) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
