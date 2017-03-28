var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        screw_ie8:false,
        warnings: false
      },
      // https://github.com/mishoo/UglifyJS2/blob/master/lib/output.js
       output:{
                "quote_keys": true,
                "screw_ie8":false
              }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }],
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader']
      }
    ]
  }
};
