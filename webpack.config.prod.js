const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');

const outputDir = 'buildProd';

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, outputDir),
    filename: '[name].js',
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      WDS: 'false',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src', 'manifest.json'),
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
});
