/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const npmCfg = require('../package.json');
const projectRoot = path.resolve(__dirname, '../');
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var banner = [
    'vue-cookie-law v' + npmCfg.version,
    '(c) ' + (new Date().getFullYear()) + ' ' + npmCfg.author,
    npmCfg.homepage
].join('\n')

module.exports = {
    entry: './src/components/CookieLaw.vue',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vue-cookie-law.js',
        library: 'CookieLaw',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig
        },
        {
          test: /\.js$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }]
              ],
              'plugins': ['transform-runtime', 'transform-es2015-modules-commonjs'],
            }
          }],
          include: [resolve('src'), resolve('test')]
        }
      ]
    },

    plugins: [
        new webpack.BannerPlugin(banner)
    ]
}
