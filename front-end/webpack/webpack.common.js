const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].[contenthash].js',
    // publicPath: '/static/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'source', to: 'dest', noErrorOnMissing: true }],
    }),
    new miniCss({
      filename: '[name].style.[contenthash].css',
      ignoreOrder: false,
    }),
  ],
}
