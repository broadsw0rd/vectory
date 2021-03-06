# Changelog

## [1.2.2] - 2017-11-18

### Fixed

- Fixed Wrong .angleTo() computing [#41](https://github.com/broadsw0rd/vectory/issues/41)

## [1.2.1] - 2017-09-04

### Added

- Support of es6 [pkg.module](https://github.com/rollup/rollup/wiki/pkg.module) [#38](https://github.com/broadsw0rd/vectory/issues/38)

## [1.2.0] - 2017-08-29

### Added

- Implemented vector rotation [#34](https://github.com/broadsw0rd/vectory/issues/34)

  - `Vector.rotate(theta, vector)`
  - `Vector.prototype.rotate(theta)`
  - `Vector.irotate(theta, vector)`
  - `Vector.prototype.irotate(theta)`

- Implemented alias `Vector#clone()` for `Vector#copy()` [#35](https://github.com/broadsw0rd/vectory/issues/35) 

- Implemented filter for benchmark [#29](https://github.com/broadsw0rd/vectory/issues/29)

```
npm run behch -- --filter add
```

list of available filters: `create`, `add`, `sub`, `mul`, `div`, `lerp`, `norm`, `mag`, `dot`, `dist`, `angle`, `rotate`, `reset`, `copy`, `convert`, `equal`, `swizzling`, `iterator`

### Fixed

- Fixed vectors' equality: implemented usage of `Number.EPSILON` [#36](https://github.com/broadsw0rd/vectory/issues/36) 

### Removed

- Dropped support of Node < 4

## [1.1.0] - 2016-07-23

### Added

- Implemented `Vector.prototype.set(x, y)`
- Implemented `Vector.prototype.toArray()`
- Implemented `Symbol.toStringTag` support
