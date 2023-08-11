const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your application
  output: {
    filename: 'bundle.js',  // Output bundle file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use these loaders
      },
    ],
  },
};