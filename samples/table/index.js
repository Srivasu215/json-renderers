// import render from "../../src/index.js";
import render from "../../docs/dist/v14/min.js";

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
      data: data.slice(0, 50),
      targetHtmlId: "dom-render-container",
      columns: ["itemName"],
      showLog: true
    });

  } catch (err) {
    console.log("error : ", err);
  }
};

start();