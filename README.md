<h1 align="center">Vectory</h1>
<h4 align="center">High performance, DevTools friendly, Crankshaft tolerant 2d vectors</h4>

<p align="center">
   <a href="https://travis-ci.org/broadsw0rd/vectory">
      <img src="https://travis-ci.org/broadsw0rd/vectory.svg?branch=master" alt="Build Status"></img>
   </a>
   <a href='https://coveralls.io/github/broadsw0rd/vectory?branch=master'>
      <img src='https://coveralls.io/repos/broadsw0rd/vectory/badge.svg?branch=master&service=github' alt='Coverage Status' />
   </a>
   <a href="https://codeclimate.com/github/broadsw0rd/vectory">
      <img src="https://codeclimate.com/github/broadsw0rd/vectory/badges/gpa.svg" alt="Code Climate"/>
   </a>
   <a href="https://github.com/feross/standard">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="js-standard-style"></img>
   </a>
</p>

## Features

- Simple - [32 LOC](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L32)
- Lightweight - ? Kb
- Robust - [100% code coverage](https://coveralls.io/github/broadsw0rd/vectory?branch=master)
- Designed with performance in mind and reviewed with [IRHydra](http://mrale.ph/irhydra/2/)
- Abuse some hacks([1](https://github.com/WebKit/webkit/blob/master/Source/JavaScriptCore/inspector/InjectedScriptSource.js#L768), [2](https://kangax.github.io/nfe/#webkit-displayName)) to enhance your devtools experience

## Install & Usage

## API

**Creation**

- [x] [`new Vector(x, y)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L1)
- [x] [`Vector.from([x, y])`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L8)
- [x] [`Vector.fromAngle(angle, magnitude)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L12)

**Addition**

- [x] [`Vector.add(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L16)
- [x] [`Vector#add(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L20)
- [x] [`Vector.iadd(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L24)
- [x] [`Vector#iadd(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L28)

**Substraction**

- [x] [`Vector.sub(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L34)
- [x] [`Vector#sub(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L38)
- [ ] `Vector.isub(one, another)`
- [ ] `Vector#isub(vector)`

**Multiplication**

- [ ] `Vector.mul(vector, scalar)`
- [ ] `Vector#mul(scalar)`
- [ ] `Vector.imul(vector, scalar)`
- [ ] `Vector#imul(scalar)`

**Division**

- [ ] `Vector.div(vector, scalar)`
- [ ] `Vector#div(scalar)`
- [ ] `Vector.idiv(vector, scalar)`
- [ ] `Vector#idiv(scalar)`

**Normalization**

- [ ] `Vector.normalized(vector)`
- [ ] `Vector#normalized()`
- [ ] `Vector.normalize(vector)`
- [ ] `Vector#normalize()`

**Distance computing**

- [ ] `Vector.distance(one, another)`
- [ ] `Vector#distance(vector)`

**Magnitude computing**

- [ ] `Vector.magnitude(vector)`
- [ ] `Vector#magnitude()`

**Angle computing**

- [ ] `Vector.angle(vector)`
- [ ] `Vector#angle()`

**Resetting**

- [ ] `Vector.zero(vector)`
- [ ] `Vector#zero()`

**Copy**

- [ ] `Vector.copy(vector)`
- [ ] `Vector#copy()`

**JSON convertion**

- [ ] `Vector.toJSON(vector)`
- [ ] `Vector#toJSON()`

**Swizzling**

- [ ] `Vector#xx`
- [ ] `Vector#xy`
- [ ] `Vector#yx`
- [ ] `Vector#yy`

## Benchmark

Intel Core i5-4210U @ 1.7 GHz, DDR3 4 Gb, node v4.2.4

```
> node ./bench/bench.js

Vectory benchmark:

	√ Vector(x, y) x 48,651,883 ops/sec ±2.69% (82 runs sampled)
	√ Vector.from([x, y]) x 41,785,230 ops/sec ±1.04% (89 runs sampled)
	√ Vector.fromAngle(angle, magnitude) x 13,358,708 ops/sec ±0.79% (89 runs sampled)
	√ Vector.add(one, another) x 46,021,776 ops/sec ±0.90% (90 runs sampled)
	√ Vector#add(vector) x 48,284,295 ops/sec ±1.06% (91 runs sampled)
	√ Vector.iadd(one, another) x 60,882,636 ops/sec ±1.00% (88 runs sampled)
	√ Vector#iadd(vector) x 62,380,417 ops/sec ±1.22% (87 runs sampled)
	√ Vector.sub(one, another) x 46,253,116 ops/sec ±0.92% (91 runs sampled)
	√ Vector#sub(vector) x 45,501,181 ops/sec ±0.81% (87 runs sampled)

```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run wrap` | Wrap source code in [UMD](https://github.com/umdjs/umd)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [mocha](https://mochajs.org/) and compute code coverage by [istanbul](https://github.com/gotwarlost/istanbul)
`npm run build` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
