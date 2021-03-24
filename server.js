"use strict";

const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");

new webpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
}).listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Listening on http://localhost:8080");
});
