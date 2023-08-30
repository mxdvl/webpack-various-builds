import webpack from "webpack";

/** @type {webpack.Configuration} */
const config = {
  entry: "./src/index.moment.js",
  output: {
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    alias: { moment: "dayjs" },
  },
};

export default config;
