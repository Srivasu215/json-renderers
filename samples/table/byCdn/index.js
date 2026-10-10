import render from "https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v14/min.js";
import data from "./batches.json" with { type: "json" };

const start = () => {
  try {

    render({
      type: "table",
      data: data.slice(0, 50),
      targetHtmlId: "dom-render-container",
      columns: ["itemName", "baseUnit"],
      showLog: true
    });

  } catch (err) {
    console.log("error : ", err);
  }
};

start();