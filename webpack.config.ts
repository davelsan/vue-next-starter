import {
  basename as pathBasename,
  join     as pathJoin,
  resolve  as pathResolve
} from 'path';
//
import HtmlWebpackPlugin    from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import SpriteLoaderPlugin   from 'svg-sprite-loader/plugin';
import { VueLoaderPlugin }  from 'vue-loader';
//
import { Configuration, EnvironmentPlugin } from 'webpack';


const prod = process.env.NODE_ENV === 'production';

const config: Configuration = {

  /* BASE CONFIG */

  mode: prod
    ? 'production'
    : 'development',

  stats: {
    children: false,
    entrypoints: false,
    modules: false,
  },

  devtool: prod
    ? false
    : 'cheap-eval-source-map',

  entry: pathResolve(__dirname, './src/app.main.ts'),

  output:
  {
    filename: prod
      ? '[name].[contenthash].js'
      : '[name].[hash].js',

    path: pathResolve(__dirname, './dist'),
    publicPath: process.env.NODE_ENV,
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

    clientLogLevel: 'warn',
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,
    stats: 'minimal',
  },

  /* PLUGINS */

  plugins: [

    // Safe environment variables
    new EnvironmentPlugin({
      'NODE_ENV': 'development',
      'BASE_URL': '/',
    }),

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

    // Bundle SVG sprites in separate module files
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),

    // Apply *.ext rules to the relevant blocks in *.vue files
    new VueLoaderPlugin(),

  ],

  /* RULES */

  module: {

    rules: [

      // *.css
      {
        test: /\.(css|postcss)$/,
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

      // *.svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              symbolId: '[name]',
              spriteFilename: (svgPath: string) => `${pathBasename(svgPath)}`
            }
          },
        ],
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
  },

  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

export default config;