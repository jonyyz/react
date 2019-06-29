const path = require("path");
const webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const isDev = options.mode === "development";

  let config = {
    output: {
      publicPath: "/",
    },
    performance: {
      hints: !isDev && "error",
      maxAssetSize: 750000,
      maxEntrypointSize: 1500000,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: [/\.jsx?$/, /\.tsx?$/],
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: !isDev }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
          ]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        SERVICE_URL: JSON.stringify("https://jsonplaceholder.typicode.com")
      }),
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({ template: "./src/index.html" }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    ],
    devServer: {
      host: "0.0.0.0",
      disableHostCheck: true,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
  };

  if (isDev) {
    config.devtool = "cheap-module-source-map";
    config.plugins = [
      new ErrorOverlayPlugin(),
      ...config.plugins
    ];
  }

  return config;
};
