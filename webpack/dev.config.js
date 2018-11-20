const path = require('path')

module.exports = require('./base.config')({
  mode: 'development',
  devtool: 'source-map',
  entry: [
    // 'eventsource-polyfill', // Necessary for hot reloading with IE
    // 'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  performance: {
    hints: false,
  },
})
