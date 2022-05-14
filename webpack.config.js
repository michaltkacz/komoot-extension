const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, 'src', 'popup', 'popup.tsx'),
    options: path.join(__dirname, 'src', 'options', 'options.tsx'),
    content: path.join(__dirname, 'src', 'content', 'content.tsx'),
    background: path.join(__dirname, 'src', 'background', 'background.ts'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'src', 'popup', 'popup.html'),
      inject: true,
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'src', 'options', 'options.html'),
      inject: true,
      filename: 'options.html',
      chunks: ['options'],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
    // alias: {
    //   '@': 'src',
    // },
    // alias: Object.keys(tsconfig.compilerOptions.paths).reduce(
    //   (aliases, aliasName) => {
    //     aliases[aliasName] = path.resolve(
    //       __dirname,
    //       `src/${tsconfig.compilerOptions.paths[aliasName][0]}`
    //     );

    //     return aliases;
    //   },
    //   {}
    // ),
  },
};
