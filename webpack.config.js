/* global __dirname, require, module */

const webpack = require("webpack");
const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2
const pkg = require("./package.json");

const libraryName = pkg.name;

let plugins = [],
  outputFile,
  mode;

plugins.push(
  new webpack.DefinePlugin({
    "global.GENTLY": false
  })
);

if (env === "dev") {
  mode = "development";
  outputFile = `${libraryName}.js`;
} else {
  mode = "production";
  outputFile = `${libraryName}.min.js`;
}

const config = {
  entry: `${__dirname}/src/squishMenu.js`,
  devtool: "source-map",
  mode,
  target: "node",
  output: {
    path: `${__dirname}/dist`,
    globalObject: "this",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".js", ".json"]
  },
  plugins
};

module.exports = config;
