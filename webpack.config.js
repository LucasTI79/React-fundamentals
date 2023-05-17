const path = require('path')
const HtmlWebpeckPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode:'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[fullhash].js',
  },
  plugins: [
    new HtmlWebpeckPlugin({
      template: path.resolve(__dirname,'public','index.html')
    }),
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude:/node_modules/,
        use: [
          'style-loader', 
          { 
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude:/node_modules/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  }
};