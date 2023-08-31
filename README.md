# webpack-various-builds

Minimal reproduction repo to explore how we can create various distinct bundles
automatically, safely and explicitly.

## Principles

- There is a one-to-one mapping between config files and generated bundles (e.g.
  `bundle.web.js`, `bundle.web.scheduled.js`, etc.)
- The existence of a bundle is automatically picked up by the TypeScript
  compiler (e.g. for use in HTML templates, etc.)

## How to test

```
npm install
npm run build
npm start
```

## Key files & structure

Webpack config files starting with `bundle.*` automatically produce bundles in
`dist`.

- [`webpack.config.js`](webpack.config.js) – default config that picks up
  individual bundle configs, builds them and creates the `manifest.bundles.js`,
  which exposes the bundles to the compiler.
- [`configs/webpack`](configs/webpack/) – where the configs live
  - [`base.js`](configs/webpack/base.js) – bundles extend from this
  - [`bundle.web.variant.1.js`](configs/webpack/bundle.web.variant.1.js)
  - [`bundle.web.variant.2.js`](configs/webpack/bundle.web.variant.2.js)
  - [`bundle.web.variant.3.js`](configs/webpack/bundle.web.variant.3.js)
- [`src`](src/) – source files to bundle up
- `dist` – generated by running `npm run build`
  - `manifest.bundles.js` – contains a manifest containing bundles
  - `manifest.*.json` – bundle-specific manifest
  - `main.*.js` – bundle-specific entry point
- [`server.js`](server.js) – an example of how to consume bundles
