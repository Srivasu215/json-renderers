// import "https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v16/min.js";
import "../../../docs/dist/v17/min.js";

import data from "./data.json" with { type: "json" };
import columns from "./columns.json" with { type: "json" };

const start = () => {
  try {
    window.ks.jsonRenderers.renderToDom({
      type: "tableFromSpec",
      data: data.slice(0, 50),
      targetHtmlId: "dom-render-container",
      columns,
      showLog: false
    });

  } catch (err) {
    console.log("error : ", err);
  }
};

start();