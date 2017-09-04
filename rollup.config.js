import pkg from './package.json'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'umd', name: 'Vector' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
    nodeResolve(),
    commonjs()
  ]
}
