const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/images/",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".html"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
