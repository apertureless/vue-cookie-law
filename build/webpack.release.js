/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const npmCfg = require('../package.json');
const vueLoaderConfig = require('./vue-loader.conf');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var banner = [
    'vue-cookie-law v' + npmCfg.version,
    '(c) ' + (new Date().getFullYear()) + ' ' + npmCfg.author,
    npmCfg.homepage
].join('\n')

module.exports = {
    mode: "production",
    optimization: {
      minimize: false,
    },
    entry: './src/components/CookieLaw.vue',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vue-cookie-law.js',
        library: 'CookieLaw',
        libraryTarget: 'umd',
        globalObject: 'this',
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
                ['@babel/preset-env', { modules: false }]
              ],
            }
          }],
          include: [resolve('src'), resolve('test')]
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }
      ]
    },

    plugins: [
        new webpack.BannerPlugin(banner),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ]
}
