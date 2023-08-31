import { bundles } from "./dist/manifest.bundles.js";
import { readFileSync } from "node:fs";

/**
 * @param {string} name
 * @param {typeof bundles[number]} build
 */
const assetMap = Object.fromEntries(
  bundles.map((name) => [
    name,
    JSON.parse(readFileSync(`./dist/manifest.${name}.json`, "utf-8")),
  ])
);

/** @param {typeof bundles[number]} bundle */
const html = (bundle) => `<!DOCTYPE html>
<html lang="en">
<head>
  <script type="module" src="${assetMap[bundle]?.["main.js"]}"></script>
</head>
<body>
	<!-- you get the point -->
</body>
</html>`;

console.log(assetMap);

console.log(html("bundle.web.variant.1.js"));
