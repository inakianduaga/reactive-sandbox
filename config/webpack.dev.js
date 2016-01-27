var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '..', 'app');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './app/index.tsx'],
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: APP_DIR
    }],
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts'],
        include: APP_DIR
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
