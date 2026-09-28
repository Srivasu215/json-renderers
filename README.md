# JSON Renderers

A lightweight JavaScript library for rendering browser UI from JSON-driven specs. It turns structured data into DOM elements using JSON-based schema definitions and is designed for quick UI generation without hand-writing repetitive HTML.

This repo is centered around a small dispatcher that chooses a renderer by `type` and then uses the matching spec-to-DOM pipeline.

## Features

- Config-driven rendering using JSON specs
- Built on top of `json-to-spec` and `@keshavsoft/json-to-tag`
- Supports renderers such as:
  - `datalist`
  - `select`
- Legacy renderer layers for table/navTabs/form patterns are present in older source folders
- Simple browser-based demos and sample apps included in the repo

## Project structure

```text
json-renderers/
├── src/                  # main public entry and renderer implementations
│   ├── index.js          # package entry point
│   └── v4/              # current renderer implementation set
├── samples/              # runnable browser examples
├── examples/             # additional demo usage
├── docs/                 # docs/static assets
├── json-to-spec/         # bundled spec engine / related tooling
├── package.json          # package metadata and scripts
├── vite.config.js        # Vite config for local dev/build
├── LICENSE               # package license (if present in your checkout)
└── README.md             # project documentation
```

## Installation

Install from npm:

```bash
npm install json-renderers
```

For local development in this repo:

```bash
npm install
```

## Usage

### Basic select renderer

```js
import render from "json-renderers";

const data = {
  LedgerName: [
    "Apex Industries",
    "Blue Valley Foods",
    "Crown Logistics"
  ]
};

render({
  type: "select",
  data,
  targetHtmlId: "dom-render-container"
});
```

### Basic datalist renderer

```js
import render from "json-renderers";

const data = {
  LedgerName: [
    "Apex Industries",
    "Blue Valley Foods",
    "Crown Logistics"
  ]
};

render({
  type: "datalist",
  data,
  targetHtmlId: "dom-render-container"
});
```

The renderer resolves the type, looks up the matching implementation, and appends the resulting DOM into the target element.

## Running examples locally

Start the Vite dev server:

```bash
npm run dev
```

Build the package for production:

```bash
npm run build
```

## Example apps included

The repo includes example and sample pages under:

- `samples/`
- `examples/`
- `docs/`

These demonstrate how to use the renderers in the browser with JSON input.

## Notes

- The public package entry is `src/index.js`.
- The main dispatcher currently registers `datalist` and `select` renderers in the `v4` renderer layer.
- Older versions under `src/v1` through `src/v3` and related folders hint at a broader evolution of table, nav-tab, and form renderers.

## License

This project is licensed under the MIT License.

## Maintainer

KeshavSoft
