const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: this.mode === "production" ? true : false },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/i, 
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebPackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", '.json', ".html"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
