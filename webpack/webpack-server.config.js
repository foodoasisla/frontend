module.exports = require('./webpack.config.js')({
  isServer: true,
  devtool: 'source-map',
  jsFileName: 'bundle.[hash].js',
  vendorFileName: 'bundle.vendor.[hash].js',
  cssFileName: 'bundle.[hash].css',
});
