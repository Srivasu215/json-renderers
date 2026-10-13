// import "https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v16/min.js";
import "../../../docs/dist/v17/min.js";

import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
    window.ks.jsonRenderers.renderToDom({
      type: "tableFromSpec",
      data: data.slice(0, 50),
      targetHtmlId: "dom-render-container",
      columns: [{ columnName: "itemName", width: "200px" },
      { columnName: "baseUnit", width: "150px" }],
      showLog: true
    });

  } catch (err) {
    console.log("error : ", err);
  }
};

// start();