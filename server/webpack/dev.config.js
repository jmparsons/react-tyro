import webpack from 'webpack';
import path from 'path';
import postcssImport from 'postcss-import';

/* eslint-disable max-len */

export default {
  target: 'web',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './app/index',
  ],
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist'),
    publicPath: '/assets/',
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
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss(_webpack) {
    return [
      postcssImport({
        addDependencyTo: _webpack,
      }),
    ];
  },
};
