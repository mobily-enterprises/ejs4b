module.exports = {
  input: './main.js',
  output: [
    {
      file: './ejs.js',
      format: 'umd',
      name: 'ejs'
    },
    {
      file: './ejs-es.js',
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

