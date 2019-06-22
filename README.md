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

Intel Core i7-7700HQ @ 2.8 GHz, DDR3 16 Gb, node v12.4.0

```

> vectory@1.2.3 bench D:\Projects\vectory
> node ./bench/index.js

i start benchmark, please wait a bit...

  Cteation
    √ Vector(x, y) x 861,542,389 ops/sec ±0.69% (94 runs sampled)
    √ Vector.from([x, y]) x 844,695,778 ops/sec ±1.22% (93 runs sampled)
    √ Vector.fromAngle(angle, magnitude) x 838,933,413 ops/sec ±1.43% (88 runs sampled)
    √ Vector.parse(string) x 1,510,940 ops/sec ±2.42% (86 runs sampled)

  Addition
    √ Vector.add(one, another) x 782,517,391 ops/sec ±1.27% (85 runs sampled)
    √ Vector#add(vector) x 781,789,927 ops/sec ±0.88% (87 runs sampled)
    √ Vector.iadd(one, another) x 353,879,756 ops/sec ±0.60% (89 runs sampled)
    √ Vector#iadd(vector) x 367,269,195 ops/sec ±0.64% (91 runs sampled)

  Substraction
    √ Vector.sub(one, another) x 822,718,592 ops/sec ±0.50% (95 runs sampled)
    √ Vector#sub(vector) x 808,219,928 ops/sec ±0.71% (91 runs sampled)
    √ Vector.isub(one, another) x 360,450,634 ops/sec ±0.60% (92 runs sampled)
    √ Vector#isub(vector) x 366,154,868 ops/sec ±0.43% (90 runs sampled)

  Multiplication
    √ Vector.mul(scalar, vector) x 817,965,124 ops/sec ±0.70% (91 runs sampled)
    √ Vector#mul(vector) x 808,311,011 ops/sec ±0.60% (94 runs sampled)
    √ Vector.imul(scalar, vector) x 361,688,702 ops/sec ±0.47% (90 runs sampled)
    √ Vector#imul(vector) x 357,685,548 ops/sec ±0.51% (92 runs sampled)

  Division
    √ Vector.div(scalar, vector) x 816,988,130 ops/sec ±0.43% (94 runs sampled)
    √ Vector#div(vector) x 615,974,995 ops/sec ±21.62% (69 runs sampled)
    √ Vector.idiv(scalar, vector) x 120,962,052 ops/sec ±2.20% (88 runs sampled)
    √ Vector#idiv(vector) x 118,041,377 ops/sec ±2.95% (86 runs sampled)

  Linear Interpolation
    √ Vector.lerp(one, another, t) x 776,561,727 ops/sec ±1.07% (90 runs sampled)
    √ Vector#lerp(vector, t) x 804,305,035 ops/sec ±0.92% (88 runs sampled)

  Normalization
    √ Vector.normalized(vector) x 177,230,218 ops/sec ±1.25% (93 runs sampled)
    √ Vector#normalized() x 175,674,151 ops/sec ±0.94% (89 runs sampled)
    √ Vector.normalize(vector) x 81,142,672 ops/sec ±0.45% (90 runs sampled)
    √ Vector#normalize() x 72,733,658 ops/sec ±0.81% (93 runs sampled)

  Magnitude
    √ Vector.magnitude(vector) x 862,343,311 ops/sec ±0.96% (95 runs sampled)
    √ Vector#magnitude() x 861,499,315 ops/sec ±0.88% (91 runs sampled)

  Dot Product
    √ Vector.dot(one, another) x 861,820,342 ops/sec ±0.83% (94 runs sampled)
    √ Vector#dot(vector) x 693,283,756 ops/sec ±19.13% (77 runs sampled)

  Distance
    √ Vector.distance(one, another) x 140,160,765 ops/sec ±2.67% (86 runs sampled)
    √ Vector#distance(vector) x 846,767,936 ops/sec ±0.95% (88 runs sampled)

  Angle computing
    √ Vector.angleOf(vector) x 861,986,566 ops/sec ±0.68% (89 runs sampled)
    √ Vector#angleOf() x 848,238,376 ops/sec ±0.77% (94 runs sampled)
    √ Vector.angleTo(one, another) x 768,939,821 ops/sec ±0.69% (90 runs sampled)
    √ Vector#angleTo(vector) x 796,718,879 ops/sec ±0.54% (89 runs sampled)

  Rotation
    √ Vector.rotate(theta, vector) x 831,731,143 ops/sec ±0.96% (91 runs sampled)
    √ Vector#rotate(theta) x 869,785,085 ops/sec ±0.42% (97 runs sampled)
    √ Vector.irotate(theta, vector) x 233,852,488 ops/sec ±6.66% (81 runs sampled)
    √ Vector#irotate(theta) x 118,719,502 ops/sec ±2.55% (89 runs sampled)

  Resetting
    √ Vector.reset(one, another) x 824,366,918 ops/sec ±1.40% (87 runs sampled)
    √ Vector#reset(vector) x 870,499,543 ops/sec ±0.74% (89 runs sampled)
    √ Vector.zero(vector) x 864,045,085 ops/sec ±0.91% (94 runs sampled)
    √ Vector#zero() x 872,766,394 ops/sec ±0.68% (89 runs sampled)
    √ Vector.set(x, y, vector) x 875,117,874 ops/sec ±0.45% (94 runs sampled)
    √ Vector#set(vector) x 879,133,310 ops/sec ±0.41% (95 runs sampled)

  Copy
    √ Vector.copy(vector) x 857,718,468 ops/sec ±0.59% (94 runs sampled)
    √ Vector#copy() x 860,378,542 ops/sec ±0.73% (94 runs sampled)

  Convertion
    √ Vector.toJSON(vector) x 474,395,813 ops/sec ±27.90% (55 runs sampled)
    √ Vector#toJSON() x 142,701,054 ops/sec ±2.75% (85 runs sampled)
    √ Vector.toString(vector) x 2,119,735 ops/sec ±0.49% (94 runs sampled)
    √ Vector#toString() x 2,194,938 ops/sec ±0.41% (96 runs sampled)
    √ Vector.toArray(vector) x 861,049,656 ops/sec ±0.72% (94 runs sampled)
    √ Vector#toArray() x 851,493,627 ops/sec ±0.57% (91 runs sampled)

  Equality
    √ Vector.equals(one, another) x 186,961,843 ops/sec ±0.23% (91 runs sampled)
    √ Vector#equals(vector) x 182,172,457 ops/sec ±0.58% (93 runs sampled)
    √ Vector.compare(one, another) x 857,370,215 ops/sec ±0.70% (94 runs sampled)
    √ Vector#compare(vector) x 879,521,174 ops/sec ±0.41% (95 runs sampled)

  Swizzling
    √ Vector#xx get x 872,462,026 ops/sec ±0.49% (95 runs sampled)
    √ Vector#xx set x 851,739,979 ops/sec ±0.82% (92 runs sampled)
    √ Vector#xy get x 796,653,570 ops/sec ±18.91% (89 runs sampled)
    √ Vector#xy set x 137,242,036 ops/sec ±2.91% (86 runs sampled)
    √ Vector#yx get x 869,334,030 ops/sec ±0.48% (94 runs sampled)
    √ Vector#yx set x 857,707,815 ops/sec ±0.62% (91 runs sampled)
    √ Vector#yy get x 871,330,173 ops/sec ±0.43% (93 runs sampled)
    √ Vector#yy set x 877,637,098 ops/sec ±0.40% (94 runs sampled)

  Iterator
    √ Spread operator x 7,353,650 ops/sec ±1.96% (90 runs sampled)
    √ for..of loop x 49,734,482 ops/sec ±0.63% (91 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](https://github.com/rollup/rollup)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [tape](https://github.com/substack/tape) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
