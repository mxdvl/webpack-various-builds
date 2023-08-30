import { resolve } from "node:path";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

/** @type {(name: string) => import("webpack").Configuration} */
export const baseConfig = (name) => ({
  name,
  entry: "./src/index.js",
  mode: process.env.ENV === "production" ? "production" : "development",
  output: {
    filename: "[name].[chunkhash].js",
    path: resolve("./dist"),
    publicPath: "/dist",
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: `manifest.${name}.json`,
    }),
  ],
});
