var test = require('tape')
var tapDiff = require('tap-diff')

test.createStream()
  .pipe(tapDiff())
  .pipe(process.stdout)

require('./addition.test.js')
require('./angle.test.js')
require('./convertion.test.js')
require('./copy.test.js')
require('./creation.test.js')
require('./distance.test.js')
require('./division.test.js')
require('./dot-product.test.js')
require('./equality.test.js')
require('./index.test.js')
require('./iterator.test.js')
require('./lerp.test.js')
require('./magnitude.test.js')
require('./multiplication.test.js')
require('./normalization.test.js')
require('./resetting.test.js')
require('./rotation.test.js')
require('./substraction.test.js')
require('./swizzling.test.js')