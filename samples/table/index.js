// import render from "../../src/index.js";
import render from "../../docs/dist/v13/min.js";

// import "https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v12/min.js";

import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
    // window.ks.jsonRenderers.renderToDom({
    //   type: "table",
    //   data,
    //   targetHtmlId: "dom-render-container"
    // });

    render({
      type: "table",
      data,
      targetHtmlId: "dom-render-container"
    });

  } catch (err) {
    console.log("error : ", err);
  }
};

start();