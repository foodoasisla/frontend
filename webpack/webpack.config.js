const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = (options) => {
  // Style loaders
  const loaders = [
    {
      loader: 'css-loader',
      options: {
        minimize: options.isServer,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => ([autoprefixer({ browsers: 'last 2 versions' })]),
      },
    },
    {
      loader: 'sass-loader',
      options: {},
    },
  ];

  const webpackConfig = {
    devtool: options.devtool,
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [{
        test: /.js$/,
        include: Path.join(__dirname, '../src'),
        loader: 'babel-loader',
      }],
    },
    plugins: [],
  };

  if (options.isServer) {
    webpackConfig.entry = {
      app: [Path.join(__dirname, '../src/index')],
      vendor: [
        'lodash',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux',
        'redux-actions',
        'redux-promise',
        'redux-thunk',
      ],
    };

    webpackConfig.output = {
      path: Path.join(__dirname, '../dist'),
      filename: `scripts/${options.jsFileName}`,
    };

    webpackConfig.plugins.push(
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, '../src/index.html'),
        filename: 'app.html',
      }),
      new Webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: `scripts/${options.vendorFileName}`,
        minChunks: 3,
      }),
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          API_HOST: JSON.stringify(process.env.API_HOST),
        },
      }),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: true,
        },
        sourceMap: false,
        minimize: true,
      }),
      new ExtractTextPlugin(`/styles/${options.cssFileName}`)
    );

    webpackConfig.module.rules.push({
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: loaders,
      }),
    });
  } else {
    webpackConfig.entry = [
      `webpack-dev-server/client?${options.app.host}:${options.app.port}`,
      'react-hot-loader/patch',
      Path.join(__dirname, '../src/index'),
    ];

    webpackConfig.output = {
      path: Path.join(__dirname, '../'),
      publicPath: '/',
      filename: `${options.jsFileName}`,
    };

    webpackConfig.plugins.push(
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, '../src/index.html'),
      }),
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
          API_HOST: JSON.stringify(options.api.host),
        },
      }),
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NamedModulesPlugin()
    );

    webpackConfig.module.rules.push({
      test: /\.s?css$/,
      use: [{ loader: 'style-loader' }].concat(loaders),
    });

    webpackConfig.devServer = {
      contentBase: Path.join(__dirname, '../'),
      hot: true,
      port: options.app.port,
      inline: true,
      historyApiFallback: true,
    };
  }

  return webpackConfig;
};
