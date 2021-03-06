import fs from 'fs';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import postcssImport from 'postcss-import';
import postcssNestedProps from 'postcss-nested-props';

/* eslint-disable max-len */

export default {
  entry: './server/prod',
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  devtool: 'cheap-module-source-map',
  externals: fs.readdirSync(path.resolve(__dirname, '..', '..', 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce((ext, mod) => {
    const commonExt = ext;
    commonExt[mod] = `commonjs ${mod}`;
    return commonExt;
  }, {}),
  node: {
    __filename: true,
    __dirname: true,
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
  postcss(_webpack) {
    return [
      postcssImport({
        addDependencyTo: _webpack,
      }),
      postcssNestedProps,
      precss,
    ];
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
  ],
};
