const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo Manager',
      template: 'index.html',
    }),
  ],
};
