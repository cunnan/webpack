const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
  };

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('此处打开：http://localhost:5000');
});