// import "https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v16/min.js";
import "../../../docs/dist/v17/min.js";

import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
    window.ks.jsonRenderers.renderToDom({
      type: "tableFromSpec",
      data: data.slice(0, 50),
      targetHtmlId: "dom-render-container",
      columns: [
        {
          columnName: "itemName", width: "300px", template: {
            bodyCell: "buildBodyCell"
          }
        },
        {
          columnName: "baseUnit", width: "200px", template: {
            bodyCell: "buildBodyCell"
          }
        },
        {
          columnName: "batches", width: "100px", template: {
            bodyCell: "button"
          }
        }
      ],
      showLog: false
    });

  } catch (err) {
    console.log("error : ", err);
  }
};

start();