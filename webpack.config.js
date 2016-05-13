var webpack = require("webpack");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var assets  = require('postcss-assets');

module.exports = {
  cache: true,
  entry: {
    guide: './app/scripts/guide.js'
  },
  output: {
    path: './public/assets/scripts',
    publicPath: './public',
    filename: '[name].js'
  },
  debug: true,
  devtool: "inline-source-map",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons'
    }),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=../images/[name].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.js$|\.tag$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {modules: 'common'}
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
    extensions: ['','.js','.json'],
    alias: {
      '$': '/jquery/dist/jquery',
      'jQuery': '/jquery/dist/jquery'
    }
  },
  postcss: function () {
    return [
      precss,
      autoprefixer,
      assets({
        basePath: 'public/',
        loadPaths: ['assets/', 'assets/images']
      })
    ];
  },
  devServer: {
    contentBase: './public'
  }
};
