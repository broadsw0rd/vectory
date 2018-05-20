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

- [x] [`Vector.lerp(one, another, t)`](https://github.com/broadsw0rd/vectory/blob/master/src/lerp.js#L4)
- [x] [`Vector.prototype.lerp(vector, t)`](https://github.com/broadsw0rd/vectory/blob/master/src/lerp.js#L23)

**Normalization**

- [x] [`Vector.normalized(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L4)
- [x] [`Vector.prototype.normalized()`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L18)
- [x] [`Vector.normalize(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L37)
- [x] [`Vector.prototype.normalize()`](https://github.com/broadsw0rd/vectory/blob/master/src/normalization.js#L52)

**Magnitude**

- [x] [`Vector.magnitude(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/magnitude.js#L4)
- [x] [`Vector.prototype.magnitude()`](https://github.com/broadsw0rd/vectory/blob/master/src/magnitude.js#L18)

**Dot product**

- [x] [`Vector.dot(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/dot-product.js#L4)
- [x] [`Vector.prototype.dot(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/dot-product.js#L20)

**Distance**

- [x] [`Vector.distance(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/distance.js#L4)
- [x] [`Vector.prototype.distance(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/distance.js#L20)

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

Intel Core i7-7700HQ @ 2.8 GHz, DDR4 16 Gb, node v9.6.1

```

> vectory@1.2.2 bench D:\Projects\vectory
> node ./bench/index.js

i start benchmark, please wait a bit...

  Cteation
    √ Vector(x, y) x 576,064,375 ops/sec ±0.54% (90 runs sampled)
    √ Vector.from([x, y]) x 579,627,022 ops/sec ±0.48% (93 runs sampled)
    √ Vector.fromAngle(angle, magnitude) x 581,418,808 ops/sec ±0.57% (95 runs sampled)
    √ Vector.parse(string) x 2,205,321 ops/sec ±0.45% (94 runs sampled)

  Addition
    √ Vector.add(one, another) x 577,077,483 ops/sec ±0.68% (90 runs sampled)
    √ Vector#add(vector) x 532,785,431 ops/sec ±1.53% (84 runs sampled)
    √ Vector.iadd(one, another) x 252,135,839 ops/sec ±0.96% (89 runs sampled)
    √ Vector#iadd(vector) x 259,491,794 ops/sec ±1.06% (88 runs sampled)

  Substraction
    √ Vector.sub(one, another) x 576,857,074 ops/sec ±0.56% (87 runs sampled)
    √ Vector#sub(vector) x 582,142,813 ops/sec ±0.58% (90 runs sampled)
    √ Vector.isub(one, another) x 266,869,001 ops/sec ±0.72% (92 runs sampled)
    √ Vector#isub(vector) x 267,673,405 ops/sec ±0.50% (94 runs sampled)

  Multiplication
    √ Vector.mul(scalar, vector) x 574,300,231 ops/sec ±1.37% (90 runs sampled)
    √ Vector#mul(vector) x 525,286,492 ops/sec ±9.30% (86 runs sampled)
    √ Vector.imul(scalar, vector) x 101,107,369 ops/sec ±2.34% (89 runs sampled)
    √ Vector#imul(vector) x 245,973,957 ops/sec ±6.43% (87 runs sampled)

  Division
    √ Vector.div(scalar, vector) x 112,267,360 ops/sec ±2.56% (83 runs sampled)
    √ Vector#div(vector) x 301,068,015 ops/sec ±21.75% (51 runs sampled)
    √ Vector.idiv(scalar, vector) x 105,244,821 ops/sec ±1.65% (84 runs sampled)
    √ Vector#idiv(vector) x 104,699,110 ops/sec ±1.69% (89 runs sampled)

  Linear Interpolation
    √ Vector.lerp(one, another, t) x 193,634,855 ops/sec ±14.77% (34 runs sampled)
    √ Vector#lerp(vector, t) x 114,037,374 ops/sec ±2.72% (86 runs sampled)

  Normalization
    √ Vector.normalized(vector) x 91,678,200 ops/sec ±2.68% (71 runs sampled)
    √ Vector#normalized() x 82,635,224 ops/sec ±1.99% (88 runs sampled)
    √ Vector.normalize(vector) x 55,936,704 ops/sec ±0.87% (94 runs sampled)
    √ Vector#normalize() x 59,766,666 ops/sec ±0.87% (92 runs sampled)

  Magnitude
    √ Vector.magnitude(vector) x 135,111,856 ops/sec ±5.42% (48 runs sampled)
    √ Vector#magnitude() x 117,361,313 ops/sec ±2.36% (88 runs sampled)

  Dot Product
    √ Vector.dot(one, another) x 115,319,224 ops/sec ±2.93% (82 runs sampled)
    √ Vector#dot(vector) x 121,544,170 ops/sec ±4.10% (71 runs sampled)

  Distance
    √ Vector.distance(one, another) x 111,485,280 ops/sec ±1.68% (87 runs sampled)
    √ Vector#distance(vector) x 110,586,220 ops/sec ±3.52% (84 runs sampled)

  Angle computing
    √ Vector.angleOf(vector) x 71,431,653 ops/sec ±1.99% (82 runs sampled)
    √ Vector#angleOf() x 73,940,393 ops/sec ±2.37% (83 runs sampled)
    √ Vector.angleTo(one, another) x 64,870,563 ops/sec ±2.33% (86 runs sampled)
    √ Vector#angleTo(vector) x 66,110,915 ops/sec ±1.94% (86 runs sampled)

  Rotation
    √ Vector.rotate(theta, vector) x 109,463,403 ops/sec ±2.54% (85 runs sampled)
    √ Vector#rotate(theta) x 110,892,159 ops/sec ±2.95% (89 runs sampled)
    √ Vector.irotate(theta, vector) x 97,550,165 ops/sec ±2.24% (88 runs sampled)
    √ Vector#irotate(theta) x 97,232,557 ops/sec ±2.20% (85 runs sampled)

  Resetting
    √ Vector.reset(one, another) x 104,024,382 ops/sec ±1.71% (88 runs sampled)
    √ Vector#reset(vector) x 102,797,163 ops/sec ±2.69% (88 runs sampled)
    √ Vector.zero(vector) x 108,681,742 ops/sec ±3.15% (85 runs sampled)
    √ Vector#zero() x 110,731,190 ops/sec ±2.67% (86 runs sampled)
    √ Vector.set(x, y, vector) x 107,185,478 ops/sec ±1.67% (89 runs sampled)
    √ Vector#set(vector) x 104,199,445 ops/sec ±2.30% (87 runs sampled)

  Copy
    √ Vector.copy(vector) x 113,059,125 ops/sec ±2.65% (85 runs sampled)
    √ Vector#copy() x 112,023,494 ops/sec ±2.50% (84 runs sampled)

  Convertion
    √ Vector.toJSON(vector) x 108,635,059 ops/sec ±2.54% (86 runs sampled)
    √ Vector#toJSON() x 110,273,079 ops/sec ±2.90% (84 runs sampled)
    √ Vector.toString(vector) x 2,304,513 ops/sec ±2.18% (85 runs sampled)
    √ Vector#toString() x 2,333,887 ops/sec ±0.93% (89 runs sampled)
    √ Vector.toArray(vector) x 112,078,799 ops/sec ±2.12% (85 runs sampled)
    √ Vector#toArray() x 112,669,834 ops/sec ±2.54% (89 runs sampled)

  Equality
    √ Vector.equals(one, another) x 82,600,191 ops/sec ±1.59% (91 runs sampled)
    √ Vector#equals(vector) x 82,292,191 ops/sec ±2.28% (87 runs sampled)
    √ Vector.compare(one, another) x 113,778,887 ops/sec ±3.15% (85 runs sampled)
    √ Vector#compare(vector) x 112,494,874 ops/sec ±3.06% (81 runs sampled)

  Swizzling
    √ Vector#xx get x 112,878,263 ops/sec ±2.89% (86 runs sampled)
    √ Vector#xx set x 103,846,800 ops/sec ±2.43% (87 runs sampled)
    √ Vector#xy get x 110,938,684 ops/sec ±2.64% (86 runs sampled)
    √ Vector#xy set x 103,651,095 ops/sec ±2.67% (88 runs sampled)
    √ Vector#yx get x 112,583,385 ops/sec ±1.95% (86 runs sampled)
    √ Vector#yx set x 97,607,543 ops/sec ±3.15% (83 runs sampled)
    √ Vector#yy get x 112,874,661 ops/sec ±2.41% (87 runs sampled)
    √ Vector#yy set x 104,694,826 ops/sec ±1.70% (84 runs sampled)

  Iterator
    √ Spread operator x 5,629,099 ops/sec ±1.04% (91 runs sampled)
    √ for..of loop x 27,390,938 ops/sec ±1.07% (88 runs sampled)


```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [tape](https://github.com/substack/tape) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
