/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack');
const pathLib = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const config = {
  context: __dirname,
  entry: {
    // See use of 'vendor' in the CommonsChunkPlugin inclusion below.
    vendor: [
      'babel-polyfill',
      'es5-shim/es5-shim',
      'es5-shim/es5-sham',
      'jquery',
      // Below libraries are listed as entry points to be sure they get included in the
      // vendor-bundle.js. Note, if we added some library here, but don't use it in the
      // app-bundle.js, then we just wasted a bunch of space.
      'immutable',
      'lodash',
      'react-dom',
      'react-redux',
      'react-on-rails',
      'react-router-redux',
      'redux-thunk'
    ],

    // This will contain the app entry points defined by webpack.hot.config and webpack.rails.config
    app: [
      './app/bundles/MainApp/startup/clientRegistration'
    ],

  },

  output: {
    filename: '[name]-bundle.js',
    path: pathLib.join(__dirname, '../app/assets/webpack')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      libs: pathLib.resolve(__dirname, 'app/libs')
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            query: 'jQuery'
          },
          {
            loader: 'expose-loader',
            query: '$'
          }
        ]
      },
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 3,
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: 'autoprefixer'
              }
            },
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './app/assets/styles/app-variables.scss'
              },
            }
          ],
        }),
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
    TRACE_TURBOLINKS: devBuild,
  }),

  // https://webpack.github.io/docs/list-of-plugins.html#2-explicit-vendor-chunk
  new webpack.optimize.CommonsChunkPlugin({

    // This name 'vendor' ties into the entry definition
    name: 'vendor',

    // We don't want the default vendor.js name
    filename: 'vendor-bundle.js',

    // Passing Infinity just creates the commons chunk, but moves no modules into it.
    // In other words, we only put what's in the vendor entry definition in vendor-bundle.js
    minChunks: Infinity,

  })
);
config.plugins.push(
  new ExtractTextPlugin({
    filename: '[name]-bundle.css',
    allChunks: true
  })

);
config.plugins.push(
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    Tether: "tether",
    "window.Tether": "tether",
    Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
    Button: "exports-loader?Button!bootstrap/js/dist/button",
    Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
    Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
    Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
    Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
    Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
    Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    Util: "exports-loader?Util!bootstrap/js/dist/util",
  })
);
config.plugins.push(
  new ExtractTextPlugin({
    filename: '[name]-bundle.css',
    allChunks: true
  })
);
config.entry.vendor.unshift(
  // Configures extractStyles to be true if NODE_ENV is production
  'bootstrap-loader/extractStyles'
);
module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
