import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack/dev.config';

/* eslint-disable no-console */
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000/');
});
/* eslint-enable no-console */
