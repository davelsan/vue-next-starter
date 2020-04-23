import {
  join    as pathJoin,
  resolve as pathResolve
} from 'path';
//
import HtmlWebpackPlugin    from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import VueLoaderPlugin      from 'vue-loader/dist/plugin';
//
import { Configuration } from 'webpack';


const prod = process.env.NODE_ENV === 'production';

const config: Configuration = {

  /* BASE CONFIG */

  mode: prod
    ? 'production'
    : 'development',

  stats: 'normal',

  devtool: prod
    ? 'source-map'
    : 'cheap-eval-source-map',

  entry: pathResolve(__dirname, './src/app.main.ts'),

  output:
  {
    path: pathResolve(__dirname, './dist'),
    // publicPath: 'dist'
  },

  resolve: {

    alias: {
      '@': pathResolve(__dirname, 'src/'),
      // 'vue': '@vue/runtime-dom'
    },

    extensions: ['.js', '.json', '.ts', 'vue'],
  },

  /* DEV SERVER */

  devServer: {

    inline: true,
    hot: true,
    stats: 'minimal',
    // contentBase: pathJoin(__dirname, 'public'),
    // contentBasePublicPath: pathJoin(__dirname, 'public'),
    overlay: true,
    historyApiFallback: {
      index: 'public/index.html'
    },
  },

  /* PLUGINS */

  plugins: [

    // Generate dist/index.html
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      template: pathJoin(__dirname, 'public/index.html'),
      title: 'webpack',
    }),

    // Bundle styles in separate *.css files
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // Apply *.ext rules to the relevant blocks in *.vue files
    // @ts-ignore
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

export default config;