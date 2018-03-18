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

Yet another 2d vector implementation for basic motion

``` js
this.velocity.iadd(this.acceleration)
this.position.iadd(this.velocity)
this.acceleration.zero()
```

with rare methods such as [lerp](https://en.wikipedia.org/wiki/Linear_interpolation)

``` js
var prev = new Vector(1, 2)
var next = new Vector(3, 4)
prev.lerp(next, 0.5) // Vector(2, 3)
```

and [swizzling](https://www.opengl.org/wiki/Data_Type_%28GLSL%29#Swizzling)

``` js
var vector = new Vector(1 ,2)
vector.yx // Vector(2, 1)
```

with some ES6 support

``` js
var vector = new Vector(0, 0)
var vec3 = [...vector, 0] // [0, 0, 0]
```

and FP ability

``` js
// create vectors from raw data and scale them twice
var data = [[1, 2], [3, 4]/*,  ... */]
var vectors = data.map(Vector.from).map(Vector.mul.bind(null, 2))
```

## Table of Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [API](#api)
- [Benchmark](#benchmark)
- [Development](#development)

## Features

- Designed with performance in mind
- Simple - [371 LOC](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.js#371)
- Lightweight - [4.5 Kb](https://github.com/broadsw0rd/vectory/blob/master/dist/vectory.min.js)
- Well tested - [100% code coverage](https://coveralls.io/github/broadsw0rd/vectory?branch=master)
- Rich [api](#api) - 33 methods

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
<script src="https://rawgit.com/broadsw0rd/vectory/master/dist/vectory.min.js"></script>
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

- [x] [`Vector.add(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L4)
- [x] [`Vector.prototype.add(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L20)
- [x] [`Vector.iadd(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L34)
- [x] [`Vector.prototype.iadd(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/addition.js#L51)

**Substraction**

- [x] [`Vector.sub(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L4)
- [x] [`Vector.prototype.sub(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L20)
- [x] [`Vector.isub(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L34)
- [x] [`Vector.prototype.isub(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/substraction.js#L51)

**Multiplication**

- [x] [`Vector.mul(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L4)
- [x] [`Vector.prototype.mul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L20)
- [x] [`Vector.imul(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L34)
- [x] [`Vector.prototype.imul(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/multiplication.js#L51)

**Division**

- [x] [`Vector.div(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L4)
- [x] [`Vector.prototype.div(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L20)
- [x] [`Vector.idiv(scalar, vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L34)
- [x] [`Vector.prototype.idiv(scalar)`](https://github.com/broadsw0rd/vectory/blob/master/src/division.js#L51)

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

Intel Core i5-4210U @ 1.7 GHz, DDR3 4 Gb, node v9.2.0

```

> vectory@1.2.2 bench d:\Projects\vectory
> node ./bench/index.js

ℹ start benchmark, please wait a bit...

  Cteation
    ✔ Vector(x, y) x 348,913,616 ops/sec ±1.21% (85 runs sampled)
    ✔ Vector.from([x, y]) x 338,169,673 ops/sec ±1.39% (86 runs sampled)
    ✔ Vector.fromAngle(angle, magnitude) x 356,315,826 ops/sec ±0.82% (85 runs sampled)
    ✔ Vector.parse(string) x 1,524,501 ops/sec ±0.38% (96 runs sampled)

  Addition
    ✔ Vector.add(one, another) x 350,259,731 ops/sec ±0.85% (84 runs sampled)
    ✔ Vector#add(vector) x 352,389,076 ops/sec ±0.74% (87 runs sampled)
    ✔ Vector.iadd(one, another) x 168,892,112 ops/sec ±0.78% (90 runs sampled)
    ✔ Vector#iadd(vector) x 170,948,920 ops/sec ±0.66% (88 runs sampled)

  Substraction
    ✔ Vector.sub(one, another) x 352,975,428 ops/sec ±0.96% (90 runs sampled)
    ✔ Vector#sub(vector) x 346,215,470 ops/sec ±1.30% (88 runs sampled)
    ✔ Vector.isub(one, another) x 168,818,810 ops/sec ±0.90% (87 runs sampled)
    ✔ Vector#isub(vector) x 164,773,894 ops/sec ±1.83% (87 runs sampled)

  Multiplication
    ✔ Vector.mul(scalar, vector) x 352,641,917 ops/sec ±0.72% (92 runs sampled)
    ✔ Vector#mul(vector) x 228,131,960 ops/sec ±18.68% (59 runs sampled)
    ✔ Vector.imul(scalar, vector) x 60,518,558 ops/sec ±1.63% (80 runs sampled)
    ✔ Vector#imul(vector) x 148,143,360 ops/sec ±8.39% (81 runs sampled)

  Division
    ✔ Vector.div(scalar, vector) x 61,518,555 ops/sec ±1.58% (85 runs sampled)
    ✔ Vector#div(vector) x 163,262,379 ops/sec ±22.63% (44 runs sampled)
    ✔ Vector.idiv(scalar, vector) x 49,366,939 ops/sec ±4.25% (76 runs sampled)
    ✔ Vector#idiv(vector) x 59,498,001 ops/sec ±1.77% (83 runs sampled)

  Linear Interpolation
    ✔ Vector.lerp(one, another, t) x 110,432,701 ops/sec ±12.50% (33 runs sampled)
    ✔ Vector#lerp(vector, t) x 60,057,103 ops/sec ±1.93% (85 runs sampled)

  Normalization
    ✔ Vector.normalized(vector) x 51,621,604 ops/sec ±3.21% (60 runs sampled)
    ✔ Vector#normalized() x 25,901,696 ops/sec ±3.97% (76 runs sampled)
    ✔ Vector.normalize(vector) x 29,906,998 ops/sec ±4.02% (75 runs sampled)
    ✔ Vector#normalize() x 29,326,114 ops/sec ±3.41% (80 runs sampled)

  Magnitude
    ✔ Vector.magnitude(vector) x 61,280,362 ops/sec ±3.38% (82 runs sampled)
    ✔ Vector#magnitude() x 79,351,707 ops/sec ±2.30% (62 runs sampled)

  Dot Product
    ✔ Vector.dot(one, another) x 65,872,652 ops/sec ±1.83% (83 runs sampled)
    ✔ Vector#dot(vector) x 73,566,904 ops/sec ±1.89% (78 runs sampled)

  Distance
    ✔ Vector.distance(one, another) x 63,302,249 ops/sec ±1.41% (85 runs sampled)
    ✔ Vector#distance(vector) x 62,915,660 ops/sec ±2.25% (84 runs sampled)

  Angle computing
    ✔ Vector.angleOf(vector) x 19,971,981 ops/sec ±2.31% (75 runs sampled)
    ✔ Vector#angleOf() x 36,392,689 ops/sec ±1.45% (84 runs sampled)
    ✔ Vector.angleTo(one, another) x 9,924,167 ops/sec ±0.68% (93 runs sampled)
    ✔ Vector#angleTo(vector) x 12,599,284 ops/sec ±2.59% (64 runs sampled)

  Rotation
    ✔ Vector.rotate(theta, vector) x 60,097,845 ops/sec ±1.84% (81 runs sampled)
    ✔ Vector#rotate(theta) x 61,736,300 ops/sec ±1.72% (86 runs sampled)
    ✔ Vector.irotate(theta, vector) x 54,403,112 ops/sec ±2.12% (83 runs sampled)
    ✔ Vector#irotate(theta) x 54,691,285 ops/sec ±1.82% (83 runs sampled)

  Resetting
    ✔ Vector.reset(one, another) x 60,446,058 ops/sec ±1.94% (87 runs sampled)
    ✔ Vector#reset(vector) x 46,877,562 ops/sec ±15.80% (69 runs sampled)
    ✔ Vector.zero(vector) x 12,040,985 ops/sec ±17.99% (61 runs sampled)
    ✔ Vector#zero() x 11,444,775 ops/sec ±6.08% (67 runs sampled)
    ✔ Vector.set(x, y, vector) x 17,119,965 ops/sec ±9.95% (64 runs sampled)
    ✔ Vector#set(vector) x 15,993,806 ops/sec ±2.24% (80 runs sampled)

  Copy
    ✔ Vector.copy(vector) x 16,624,837 ops/sec ±10.64% (60 runs sampled)
    ✔ Vector#copy() x 22,157,494 ops/sec ±13.33% (68 runs sampled)

  Convertion
    ✔ Vector.toJSON(vector) x 19,314,908 ops/sec ±17.50% (60 runs sampled)
    ✔ Vector#toJSON() x 11,781,944 ops/sec ±2.69% (76 runs sampled)
    ✔ Vector.toString(vector) x 914,328 ops/sec ±6.69% (59 runs sampled)
    ✔ Vector#toString() x 927,311 ops/sec ±5.89% (66 runs sampled)
    ✔ Vector.toArray(vector) x 30,829,118 ops/sec ±7.14% (67 runs sampled)
    ✔ Vector#toArray() x 35,954,257 ops/sec ±6.06% (70 runs sampled)

  Equality
    ✔ Vector.equals(one, another) x 25,457,189 ops/sec ±4.57% (71 runs sampled)
    ✔ Vector#equals(vector) x 23,318,002 ops/sec ±6.88% (66 runs sampled)
    ✔ Vector.compare(one, another) x 46,436,815 ops/sec ±3.08% (78 runs sampled)
    ✔ Vector#compare(vector) x 32,291,344 ops/sec ±4.25% (69 runs sampled)

  Swizzling
    ✔ Vector#xx get x 31,354,935 ops/sec ±4.03% (66 runs sampled)
    ✔ Vector#xx set x 33,392,725 ops/sec ±5.28% (69 runs sampled)
    ✔ Vector#xy get x 29,551,855 ops/sec ±6.72% (68 runs sampled)
    ✔ Vector#xy set x 33,795,883 ops/sec ±5.03% (63 runs sampled)
    ✔ Vector#yx get x 28,904,521 ops/sec ±13.83% (68 runs sampled)
    ✔ Vector#yx set x 41,581,221 ops/sec ±6.78% (76 runs sampled)
    ✔ Vector#yy get x 33,609,933 ops/sec ±6.54% (68 runs sampled)
    ✔ Vector#yy set x 35,494,083 ops/sec ±5.73% (66 runs sampled)

  Iterator
    ✔ Spread operator x 2,642,300 ops/sec ±4.77% (70 runs sampled)
    ✔ for..of loop x 8,924,210 ops/sec ±4.14% (61 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [tape](https://github.com/substack/tape) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
