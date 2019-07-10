const path = require("path");

module.exports = {
  entry: "./src/squishMenu.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
