const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: "./js/index.js"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
     
    module: {
      rules: [{
        test: /\.(scss|css)$/,
          exclude: /node_modules/,
          use: [
            {
                loader: miniCss.loader,
                // options: {
                //     reloadAll: true
                // }
            },
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
      }]
    },

    plugins: [
        new miniCss({
            filename: '[name].css'
        }),
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        watchFiles: ["./src/*.html"]
    }
  };