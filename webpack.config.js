const path = require('path')
const HtmlWebpeckPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[fullhash].js',
  },
  plugins: [
    new HtmlWebpeckPlugin({
      template: path.resolve(__dirname,'public','index.html')
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test:/\.css$/i, 
        use: ['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  devServer: {
    port: 3000,
  }
};