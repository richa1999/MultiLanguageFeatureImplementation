const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clears old files in dist
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true,
    open: true, // Opens browser automatically
    historyApiFallback: true, // Enables React Router support
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Handles JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Handles Tailwind CSS files
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handles image files
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/, // Handles fonts
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Enables importing without specifying extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Uses custom HTML template
      filename: "index.html",
    }),
  ],
};
