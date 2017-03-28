module.exports = require('./webpack.config.js')({
  isServer: false,
  devtool: 'cheap-eval-source-map',
  jsFileName: 'bundle.js',
  cssFileName: 'bundle.css',
  app: {
    host: 'http://localhost',
    port: 3000,
  },
  api: {
    host: 'http://localhost:8000',
  },
});
