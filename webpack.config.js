const { webpack } = require('webpack'); // ** why in {} ?
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
  // where the application starts executing and webpack starts bundling
  entry: './client/src/index.js' , 
  output: {
      // the target directory for all output files
      path: path.resolve(__dirname, 'dist'),
      // the url to the output directory resolved relative to the HTML page
      publicPath: '/',
      // file name template for entry chunks      // ** what are entry chunks?
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          //tells webpack compiler to use the babel preset-env or preset-react when coming across js or jsx files
          test: /\.jsx?/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        },
        // {
        //   test: /.(css|scss)$/,
        //   include: [/client\/stylesheets\/modules/],
        //   use: [
        //     'style-loader',
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         modules: true,
        //         localIdentName: '[name]__[local]___[hash:base64:5]'
        //       },
        //     },
        //     'sass-loader'],
        // },
      ],
    },
    
  // style of source mapping to enhance debugging process
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    // enable HMR on the devServer
    hot: true,  // * HMR = Hot Module Replacement (makes changes to modules while an application is running, without a full reload)
    historyApiFallback: true,
    proxy: {
        '/api': {  // ** what are the ** for?
            target: 'http://localhost:3000/',
            // // return false to produce a 404 error for the request
            // secure: false,
        },
        // '/assets/**': {
        //     target: 'http://localhost:3000/',
        //     secure: false,
        // }
      },
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'Development', template: './client/src/index.html'}),
    new CopyPlugin({ patterns: [{ from: './src/style.css' }]}),
  ],
  
//   resolve: {
//     entensions: ['js', 'jsx'],
//   },

}