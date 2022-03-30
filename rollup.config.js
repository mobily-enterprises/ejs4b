module.exports = {
  input: './main.js',
  output: [
    {
      file: './dist/ejs4b.js',
      format: 'umd',
      name: 'ejs'
    },
    {
      file: './dist/ejs4b.es.js',
      format: 'es'
    }
  ],
  plugins: [
    require('rollup-plugin-polyfill-node')(),
    require('rollup-plugin-node-resolve')({ mainFields: ['module', 'main'] }),
    require('@rollup/plugin-commonjs')(),
    require('@rollup/plugin-json')()
  ],
  external (id) { return false }
}

