import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import precss from 'precss';
import postcssImport from 'postcss-import';
import postcssNestedProps from 'postcss-nested-props';

/* eslint-disable max-len */

export default {
  target: 'web',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './app/index',
  ],
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.resolve(__dirname, '..', '..', 'app'),
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-hot-loader/babel'],
        },
      }, {
        test: /\.sss$/,
        loader: 'style-loader?sourceMap!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss',
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: 'images/[name].[ext]',
          limit: 10000,
        },
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss(_webpack) {
    return [
      postcssImport({
        addDependencyTo: _webpack,
      }),
      postcssNestedProps,
      precss,
    ];
  },
};
