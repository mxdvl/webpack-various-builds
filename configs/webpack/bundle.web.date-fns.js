import { merge } from "webpack-merge";
import { baseConfig } from "./base.js";
import { basename } from "node:path";

const name = basename(import.meta.url);

export default merge(baseConfig(name), {
  resolve: {
    alias: { "./day.js": "date-fns" },
  },
});
