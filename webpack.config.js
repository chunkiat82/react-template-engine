import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/public/main.js'
  ],
  output: {
    path: path.join(__dirname, '.build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.rayel$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
          '__DEVELOPMENT__': process.env.NODE_ENV !== 'production'
      })
  ]
};