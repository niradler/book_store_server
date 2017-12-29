const webpack       = require('webpack');
const path          = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/index.js')
    ],

    target: 'node',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },

    devtool: '#source-map',

    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        }
      ]
    },

    externals: [nodeExternals()],

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
];
