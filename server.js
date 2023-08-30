import { createServer } from "node:http";
import { configs } from "./configs.generated.js";
import { readFileSync } from "node:fs";

const host = "localhost";
const port = 8000;

/**
 * @param {string} name
 * @param {typeof configs[number]} build
 */
const assetMap = Object.fromEntries(
  configs.map((name) => [
    name,
    JSON.parse(readFileSync(`./dist/manifest.${name}.json`, "utf-8")),
  ])
);

console.log(assetMap);

/**
 * @param {string} name
 * @param {typeof configs[number]} build
 */
const getFile = (name, build) =>
  configs.map((name) =>
    JSON.parse(readFileSync(`./dist/manifest.${name}.json`, "utf-8"))
  );

/** @type {import("node:http").RequestListener} */
const requestListener = async (request, response) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const build = url.searchParams.get("build");

  response.end(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Various Webpack configs</title>
  <style>
  body {
      font-family: IBM Plex Mono, Menlo, monospace;
  }
  </style>
  <script type="module" src="${assetMap[build ?? "web"]?.["main.js"]}"></script>
</head>
<body>
	<h1>Various Webpack configs</h1>

  <p>Let’s check how various builds are generated…</p>

  <pre></pre>

	<ul>
    <li><a href="?build=web"><code>web</code> build</a></li>
  <ul>
</body>
</html>`);
};

const server = createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
