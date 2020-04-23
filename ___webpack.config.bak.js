const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const prod = process.env.NODE_ENV === 'production'

module.exports = {

  /* BASE CONFIG */

  mode: prod
    ? 'production'
    : 'development',

  stats: 'normal',

  devtool: prod
    ? 'source-map'
    : 'cheap-module-eval-source-map',

  entry: path.resolve(__dirname, './src/app.main.ts'),

  output:
  {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      // 'vue': '@vue/runtime-dom'
    },
    extensions: ['.js', '.json', '.ts', 'vue'],
  },


  /* DEV SERVER */

  devServer: {

    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true,
    historyApiFallback: {
      index: 'public/index.html'
    },
  },


  /* PLUGINS */

  plugins: [

    // Generate dist/index.html
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),

    // Bundle styles in separate *.css files
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    // Apply *.ext rules to the relevant blocks in *.vue files
    new VueLoaderPlugin(),

  ],


  /* RULES */

  module: {

    rules: [

      // *.css
      {
        test: /\.css$/,
        use: [
          {
            loader: prod
              ? MiniCssExtractPlugin.loader
              : 'vue-style-loader',
            options: {
              hmr: !prod,
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },

      // *.png
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      },

      // *.ts
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },

      // *.vue
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ]
  }
}
