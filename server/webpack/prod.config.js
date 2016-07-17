import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import postcssImport from 'postcss-import';
import postcssNestedProps from 'postcss-nested-props';

/* eslint-disable max-len */

export default {
  entry: './app/index',
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      }, {
        test: /\.sss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'),
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
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
