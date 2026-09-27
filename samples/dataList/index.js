// import "../../src/index.js";
// import * as domEngine from "./json-to-dom.v27.min.js";

// import { specToDom } from "https://keshavsoft.github.io/json-to-dom/dist/v31/min.js";
import "https://keshavsoft.github.io/json-to-spec/dist/v25/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v4/min.js";

const folder = "input";

const loadInput = async () => {
  const [structure, data] = await Promise.all([
    fetch(`./${folder}/structure.json`).then((r) => r.json()),
    fetch(`./${folder}/data.json`).then((r) => r.json())
  ]);

  return {
    structure,
    data
  };
};

const render = (structure, data) => {
  const specAsJsonToDom = window.ks.jsonToSpec.buildSpecElement({
    specJson: structure,
    dataJson: data
  });

  const container = document.getElementById("dom-render-container");
  if (container) container.innerHTML = "";

  const createdElement = window.ks.jsonToTag.buildSpecElement(specAsJsonToDom);

  if (Array.isArray(createdElement)) {
    // container.appendChild(createdElement)
    createdElement.forEach(element => container.append(element));
  } else {
    container.append(createdElement);
  };
};

const start = async () => {
  try {
    const {
      structure,
      data
    } = await loadInput();

    render(structure, data);
  } catch (err) {
    const container = document.getElementById("dom-render-container");
    if (container) container.innerHTML = `<div style="color:#b91c1c">Error: ${err.message}</div>`;
  }
};

start();
