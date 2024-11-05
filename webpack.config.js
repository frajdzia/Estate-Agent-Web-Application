const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Your entry JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'),  // Where Webpack will put your bundled files
    filename: 'bundle.js',  // Output filename
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // For handling JavaScript and JSX
        exclude: /node_modules/,
        use: 'babel-loader',  // Use Babel to transpile JavaScript and JSX files
      },
      {
        test: /\.css$/,  // For handling CSS files
        use: ['style-loader', 'css-loader'],  // Inject CSS into JS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve .js and .jsx files without needing extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // The HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),  // Serve files from the 'dist' directory
    hot: true,  // Enable Hot Module Replacement (HMR)
    open: true,  // Open the browser automatically when the server starts
  },
  mode: 'development',  // Set the mode to 'development' for easier debugging
};