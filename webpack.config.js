const path = require('path');
const webpack = require('webpack'); 

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index'},
  output: {
    path: path.join(__dirname, '/public/js'),
    publicPath: '/',
    filename: 'main.js'},
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    hot: true,
    compress: true,
    // watchContentBase: true,
    // open: true,
    // liveReload: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]};
