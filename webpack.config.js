const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean dist folder before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Custom template
      minify: false, // Disable minification during development
    }),
    // // new HtmlWebpackPlugin({
    //     template: './public/about.html', // Another HTML file
    //     filename: 'about.html', // Output file name
    //     chunks: ['about'], // Include only the 'about' JS bundle
    //   }),
  ],
  mode: 'development', // Mode: 'development', 'production', or 'none'
  devServer: {
    static: path.join(__dirname, 'dist'), // Directory to serve files from
    port: 3000, // Port for the dev server
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // Ensures all routes serve index.html
  },
  module: {
    rules: [
      // Rule to handle SCSS files
      {
        test: /\.scss$/i,
        use: [
          'style-loader',  // Inject styles into DOM
          'css-loader',    // Turn CSS into CommonJS
          'sass-loader',   // Compile Sass to CSS
          {
            loader: 'postcss-loader', // Add PostCSS loader
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'), // Use Tailwind
                  require('autoprefixer'), // Add vendor prefixes
                ],
              },
            },
          },
          'sass-loader', // Compile SCSS
        ],
      },
      // Other loaders, e.g., for JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader', // Use babel-loader
            options: {
              presets: ['@babel/preset-env'], // Use the preset to compile modern JS
            },
        }
      },
    ],
  },
};
