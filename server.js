const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.config.js');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(
  {
    ...webpackConfig.devServer,
  },
  compiler
);

(async () => {
  console.log('Starting server...');
  await server.start();
})();
