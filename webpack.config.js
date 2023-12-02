// webpack config
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');


const publicPath = '/';

module.exports = (env = {}) => ({
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    filename: "[name].[hash:6].bundle.js",
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
  
        
          {
           test: /\.svg$/,
           loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
          },
      
    
      {
        test: /\.css$/,
        use: ['style-loader', 'vue-style-loader', 'css-loader'],
     },
      { // config for sass compilation
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              
            },
          },
        ],
      },
    {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000',
      use: 'file-loader'
     },
      
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      'vue': '@vue/runtime-dom',
      'bootstrap-vue$': 'bootstrap-vue/src/index.js',
      Assets: path.resolve(__dirname, 'src/assets/'),
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/public'),
    publicPath: process.env.BASE_URL,
    index: './index.html',
    hot: true,
    stats: 'minimal',
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true,
  }
});
