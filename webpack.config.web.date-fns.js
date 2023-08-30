import webpack from "webpack";

/** @type {webpack.Configuration} */
const config = {
  output: {
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    alias: { "./day.js": "date-fns" },
  },
};

export default config;
