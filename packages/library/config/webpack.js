const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.ts"),
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "fundamental.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "source-map-loader"
        },
        enforce: "pre"
      }
    ]
  }
}
