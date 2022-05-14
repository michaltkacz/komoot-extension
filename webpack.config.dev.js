const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');

const outputDir = 'buildDev';

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: path.join(__dirname, outputDir),
    filename: '[name].js',
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      WDS: 'false',
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'src', 'content', 'content.html'),
      inject: true,
      filename: 'content.html',
      chunks: ['content'],
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
      filename: 'index.html',
      chunks: ['index'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src', 'manifest.json'),
          transform: function (content, absoluteFrom) {
            const manifest = JSON.parse(content.toString());
            return Buffer.from(
              JSON.stringify({
                ...manifest,
                name: `[Dev] ${manifest?.name}`,
                description: `[Dev] ${manifest?.description}`,
              })
            );
          },
        },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    static: path.join(__dirname, outputDir),
    open: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
});
