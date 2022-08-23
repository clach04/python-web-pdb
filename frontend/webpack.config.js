const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC = path.resolve(__dirname, 'src');
const BUILD = path.resolve(path.dirname(__dirname), 'web_pdb', 'static');

var config = {
  entry: SRC + '/index.js',
  output: {
    path: BUILD,
    filename: 'bundle.min.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
  }),
    new MiniCssExtractPlugin({
      filename: 'styles.min.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-3']
          }
        }
      },
      {
        test: /\.(svg|woff2?|ttf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]'
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  }
};

module.exports = config;
