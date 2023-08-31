import { merge } from "webpack-merge";
import { baseConfig } from "./base.js";
import { basename } from "node:path";

const name = basename(import.meta.url);

export default merge(baseConfig(name), {
  entry: "./src/index.moment.js",
  resolve: {
    alias: { moment: "dayjs" },
  },
});
