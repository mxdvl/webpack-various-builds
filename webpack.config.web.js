import webpack from "webpack";

/** @type {webpack.Configuration} */
const config = {
  output: {
    filename: "[name].[chunkhash].js",
  },
};

export default config;
