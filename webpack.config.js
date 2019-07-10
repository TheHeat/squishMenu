const path = require("path");

module.exports = {
  entry: "./src/squishMenu.js",
  mode: "production",
  output: {
    filename: "squishMenu.js",
    path: path.resolve(__dirname, "dist")
  }
};
