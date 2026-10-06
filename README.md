# json-renderers

> **Browser DOM Component Renderer for JSON-Driven UIs**  
> Consumes declarative component specifications from `json-renderers-build` and mounts real DOM elements into target containers using `@keshavsoft/json-to-tag`.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.13.6-emerald.svg)](package.json)
[![Layer: DOM Runtime](https://img.shields.io/badge/Layer-DOM%20Mounting%20Runtime-indigo.svg)](#the-story-of-json-renderers)

---

## The Story of `json-renderers`

`json-renderers` is the **DOM Mounting & Runtime Renderer** of the KeshavSoft JSON-to-DOM ecosystem.

While its sister library [`json-renderers-build`](https://github.com/keshavsoft/json-renderers-build) handles **headless specification compilation** (pure data ➔ JSON AST), `json-renderers` is responsible for the **browser lifecycle**: resolving the target container, compiling the spec through `json-renderers-build`, instantiating concrete HTML elements via `@keshavsoft/json-to-tag`, and mounting them into the document.

---

## The 3-Tier Declarative Pipeline & The "In-Between" Story

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Application Layer: Raw Data & Configurations                       │
│    data: [{ id: 101, name: "Alpha" }], columns: ["Name"]              │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Calls: render({ type, data, columns, targetHtmlId })
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 2. Spec Compiler: json-renderers-build (Headless AST Builder)         │
│    • Skeletons for table, select, selectOptionsOnly                    │
│    • Compiled via json-to-spec engine                                  │
│    • Output: Deterministic JSON-to-DOM AST (specAsJsonToDom)           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ In-Between Handoff: specAsJsonToDom
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 3. DOM Mounting Runtime: json-renderers (THIS REPO)                    │
│    • Passes spec to @keshavsoft/json-to-tag                            │
│    • Creates real HTML elements (HTMLTableElement, HTMLSelectElement)  │
│    • Resolves document.getElementById(targetHtmlId)                   │
│    • Handles append / prepend / replacement mount strategies          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Mounts into DOM
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 4. Live Browser DOM Container                                          │
│    <div id="targetHtmlId"> <table>...</table> </div>                   │
└────────────────────────────────────────────────────────────────────────┘
```

### The "In-Between": How `json-renderers` and `json-renderers-build` Connect

When you call `render({ type, targetHtmlId, data, columns, appendPosition })`:

1. **Spec Request:** `json-renderers` calls `json-renderers-build({ type, data, columns })`.
2. **Headless AST:** `json-renderers-build` merges the inputs with its internal component blueprints (`skeleton.json`) via `json-to-spec` and returns a pure specification tree (`specAsJsonToDom`).
3. **Fragment Unwrapping:** If the component is a fragment (such as `selectOptionsOnly` which has `{ children: [...] }` without a root `tagName`), `json-renderers` unwraps the `children` array.
4. **DOM Instantiation:** The specification is passed to `@keshavsoft/json-to-tag(jsonToSend)`, creating real browser `Node` or `NodeList` instances.
5. **DOM Mounting:** `json-renderers` locates `document.getElementById(targetHtmlId)`:
   - If `appendPosition === "prepend"`, it executes `container.prepend(content)`.
   - Otherwise, it clears `container.innerHTML = ""` and mounts `container.append(content)`.
   - Returns the updated container element.

---

## Features

- **End-to-End JSON to DOM:** One function call turns your business data into fully rendered, styled UI controls.
- **Built on `json-renderers-build` (v13):**
  - **`table`:** Complete responsive table with Bootstrap classes (`table table-hover table-striped mb-0`), headers, and rows.
  - **`select`:** Standalone `<select id="LedgerName">` populated with dynamic options.
  - **`selectOptionsOnly`:** Option fragments injected directly into pre-existing `<select>` elements.
- **Flexible Mounting Modes:** Replace container content (default) or `prepend` to existing content.
- **Global & ESM Distribution:** Usable via npm or directly in the browser via CDN script (`window.ks.jsonRenderers`).

---

## Installation

### NPM

```bash
npm install json-renderers
```

### Browser (CDN / ES Module)

```html
<!-- Load ES module bundle directly from CDN -->
<script type="module" src="https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v13/min.js"></script>
```

When loaded via `<script type="module">`, it automatically registers globally on:
```javascript
window.ks.jsonRenderers = {
  meta: {
    version: "v13.1.0",
    description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
  },
  renderToDom: [Function: render]
};
```

---

## Quick Start & Usage

### 1. Rendering a Table into the DOM (`table`)

HTML:
```html
<div id="table-container"></div>
```

JavaScript:
```javascript
import render from "json-renderers";

const records = [
  { id: 101, name: "Alpha Enterprise", city: "Hyderabad" },
  { id: 102, name: "Beta Logistics", city: "Bengaluru" }
];

render({
  type: "table",
  targetHtmlId: "table-container",
  data: records,
  columns: ["Name", "City"]
});
```

*Result:* The table is rendered directly into `#table-container` with clean Bootstrap table classes.

---

### 2. Rendering a Select Dropdown (`select`)

HTML:
```html
<div id="dropdown-container"></div>
```

JavaScript:
```javascript
import render from "json-renderers";

render({
  type: "select",
  targetHtmlId: "dropdown-container",
  data: ["Account Receivable", "Account Payable", "Sales Revenue"]
});
```

*Result:* Generates `<select id="LedgerName">` with three `<option>` children and mounts it into `#dropdown-container`.

---

### 3. Populating an Existing Select Element (`selectOptionsOnly`)

When your page already contains a `<select>` element and you only want to dynamically populate its options:

HTML:
```html
<select id="user-role-select" class="form-select">
  <option value="" disabled selected>Select Role...</option>
</select>
```

JavaScript:
```javascript
import render from "json-renderers";

render({
  type: "selectOptionsOnly",
  targetHtmlId: "user-role-select",
  data: ["Administrator", "Editor", "Viewer"]
});
```

*Result:* The `<option>` elements are appended directly into `#user-role-select`.

---

## API Reference

### `render(options)` / `default export`

The entry point exported by `json-renderers` accepts a single configuration object:

```javascript
render({
  type = "table",
  targetHtmlId,
  data,
  columns,
  appendPosition,
  showLog = false
})
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | `"table"` | The component renderer to invoke: `"table"`, `"select"`, or `"selectOptionsOnly"`. |
| `targetHtmlId` | `string` | `undefined` | The ID of the DOM element (`document.getElementById(targetHtmlId)`) to mount into. |
| `data` | `Array` | `[]` | Data array. For `table`: array of row objects. For `select` / `selectOptionsOnly`: array of strings. |
| `columns` | `Array` | `undefined` | Column headers for `table`. Accepts an array of strings (e.g. `["Name"]`) or objects (e.g. `[{ title: "Name" }]`). |
| `appendPosition` | `string` | `undefined` | If set to `"prepend"`, prepends to the container. Otherwise replaces (`container.innerHTML = ""`). |
| `showLog` | `boolean` | `false` | Enables debug console logging during render execution. |

**Returns:** `HTMLElement` — The mounted DOM container.

---

## Comparison: `json-renderers` vs `json-renderers-build`

| Aspect | `json-renderers-build` | `json-renderers` (THIS REPO) |
|---|---|---|
| **Role** | Specification Builder / Compiler | DOM Mounting Runtime |
| **Output** | Declarative JSON AST (`specAsJsonToDom`) | Real HTML DOM Elements inserted into page |
| **DOM Dependency** | Zero (100% Headless & Isomorphic) | Browser DOM (`document.getElementById`) |
| **Environments** | Browser, Node.js, SSR, Web Workers | Browser runtime |
| **Core Dependency** | `json-to-spec` | `json-renderers-build`, `@keshavsoft/json-to-tag` |
| **Typical Caller** | `json-renderers`, Custom build pipelines | Web Applications, Dashboards, UI Views |

---

## Project Structure

```text
json-renderers/
├── docs/                     # Documentation portal & distribution
│   ├── dist/                 # Production bundles (Vite build)
│   │   ├── min.js            # Latest bundle
│   │   └── v13/min.js        # v13 production bundle
│   └── index.html            # Interactive Documentation & Live DOM Workbench
├── samples/                  # Runnable browser verification samples
│   ├── table/                # Table DOM mounting sample
│   ├── select/               # Select dropdown DOM mounting sample
│   └── selectOptionsOnly/    # Existing select options population sample
├── src/                      # Source code
│   ├── index.js              # Entry router (exports ./v13/index.js)
│   └── v13/                  # CURRENT: Runtime DOM renderer
│       ├── buildSpec/        # In-between handoff: calls json-renderers-build & json-to-tag
│       ├── meta.js           # Version & metadata descriptor
│       ├── registerGlobal.js # Global window.ks namespace attachment
│       └── index.js          # DOM resolver and mounter
├── package.json              # Package definition & scripts
├── vite.config.js            # Vite build configuration
└── README.md                 # Complete repository guide
```

---

## Development & Build

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build production bundle (into docs/dist/v13/min.js and docs/dist/min.js)
npm run build
```

---

## License

MIT © [KeshavSoft](https://github.com/keshavsoft)
