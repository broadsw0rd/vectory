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

- Simple - [22 LOC](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L22)
- Lightweight - ? Kb
- Robust - [100% code coverage](https://coveralls.io/github/broadsw0rd/vectory?branch=master)
- Designed with performance in mind and reviewed with [IRHydra](http://mrale.ph/irhydra/2/)
- Abuse some hacks([1](https://github.com/WebKit/webkit/blob/master/Source/JavaScriptCore/inspector/InjectedScriptSource.js#L768), [2](https://kangax.github.io/nfe/#webkit-displayName)) to enhance your devtools experience

## Install & Usage

## API

**Static members**

- [x] [`Vector(x, y)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L1)
- [x] [`Vector.VERSION`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L6)
- [x] [`Vector.from([x, y])`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L8)
- [x] [`Vector.fromAngle(angle, magnitude)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L12)
- [x] [`Vector.add(one, another)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L16)
- [ ] `Vector.iadd(one, another)`
- [ ] `Vector.sub(one, another)`
- [ ] `Vector.isub(one, another)`
- [ ] `Vector.mul(vector, scalar)`
- [ ] `Vector.imul(vector, scalar)`
- [ ] `Vector.div(vector, scalar)`
- [ ] `Vector.idiv(vector, scalar)`
- [ ] `Vector.normalized(vector)`
- [ ] `Vector.normalize(vector)`
- [ ] `Vector.distance(one, another)`
- [ ] `Vector.magnitude(vector)`
- [ ] `Vector.angle(vector)`
- [ ] `Vector.zero(vector)`
- [ ] `Vector.copy(vector)`
- [ ] `Vector.toJSON(vector)`

**Prototype members**

- [x] [`Vector#add(vector)`](https://github.com/broadsw0rd/vectory/blob/master/src/vectory.js#L20)
- [ ] `Vector#iadd(vector)`
- [ ] `Vector#sub(vector)`
- [ ] `Vector#isub(vector)`
- [ ] `Vector#mul(scalar)`
- [ ] `Vector#imul(scalar)`
- [ ] `Vector#div(scalar)`
- [ ] `Vector#idiv(scalar)`
- [ ] `Vector#normalized()`
- [ ] `Vector#normalize()`
- [ ] `Vector#distance(vector)`
- [ ] `Vector#magnitude()`
- [ ] `Vector#angle()`
- [ ] `Vector#zero()`
- [ ] `Vector#copy()`
- [ ] `Vector#toJSON()`
- [ ] `Vector#xx`
- [ ] `Vector#xy`
- [ ] `Vector#yx`
- [ ] `Vector#yy`

## Benchmark

Intel Core i5-4210U @ 1.7 Ghz, DDR3 4 Gb, node v4.2.4

```
> node ./bench/bench.js

Vectory benchmark:

	√ Vector(x, y) x 22,182,632 ops/sec ±2.09% (88 runs sampled)
	√ Vector.from([x, y]) x 17,309,245 ops/sec ±0.77% (91 runs sampled)
	√ Vector.fromAngle(angle, magnitude) x 12,888,104 ops/sec ±0.92% (89 runs sampled)
	√ Vector.add(one, another) x 9,306,880 ops/sec ±0.83% (89 runs sampled)
	√ Vector#add(vector) x 9,362,130 ops/sec ±0.68% (90 runs sampled)
```

## Development

Command | Description
--------| -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run wrap` | Wrap source code in [UMD](https://github.com/umdjs/umd)
`npm run bench` | Run [benchmark](http://benchmarkjs.com/)
`npm run test` | Run tests by [mocha](https://mochajs.org/) and compute code coverage by [istanbul](https://github.com/gotwarlost/istanbul)
`npm run build` | Minify code by [UglifyJS](https://github.com/mishoo/UglifyJS)
