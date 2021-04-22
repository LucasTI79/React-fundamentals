const path = require('path')
const HtmlWebpeckPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[fullhash].js',
  },
  plugins: [
    new HtmlWebpeckPlugin({
      template: path.resolve(__dirname,'public','index.html')
    }),
    new CleanWebpackPlugin(),
  ]
};