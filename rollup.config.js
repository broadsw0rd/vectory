import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  moduleName: 'Vector',
  entry: 'src/index.js',
  dest: 'dist/vectory.js',
  format: 'umd',
  plugins: [
    nodeResolve(),
    commonjs()
  ]
}
