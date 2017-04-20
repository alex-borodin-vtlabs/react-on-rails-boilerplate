/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack');
const pathLib = require('path');

const devBuild = process.env.NODE_ENV !== 'production';

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/bundles/MainApp/startup/serverRegistration',
  ],

  output: {
    filename: 'server-bundle.js',
    path: pathLib.resolve(__dirname, '../app/assets/webpack'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      libs: pathLib.resolve(__dirname, 'app/libs'),
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  ],
  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham',
          }
        },
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
             test: /\.css$/,
             use: {
               loader: 'css-loader/locals',
               options: {
                 modules: true,
                 importLoaders: 0,
                 localIdentName: '[name]__[local]__[hash:base64:5]'
               }
             }
           },
           {
             test: /\.scss$/,
             use: [
               {
                 loader: 'css-loader/locals',
                 options: {
                   modules: true,
                   importLoaders: 2,
                   localIdentName: '[name]__[local]__[hash:base64:5]',
                 }
               },
               {
                 loader: 'sass-loader'
               },
               {
                 loader: 'sass-resources-loader',
                 options: {
                   resources: './app/assets/styles/app-variables.scss',
                 },
               }
             ],
           },
    ],
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
