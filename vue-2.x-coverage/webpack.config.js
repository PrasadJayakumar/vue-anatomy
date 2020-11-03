const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const MODE = 'development'; // development, production or none

module.exports = {
  mode: MODE,
  entry: {
    app: './src/main.js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      vue$:
        MODE == 'production'
          ? 'vue/dist/vue.esm.browser.min.js'
          : 'vue/dist/vue.esm.js',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name]-[chunkhash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use:
          MODE == 'production'
            ? [MiniCssExtractPlugin.loader, 'css-loader']
            : ['vue-style-loader', 'style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // retain original file name
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, {
        nodir: true,
      }),
    }),
  ],
};
