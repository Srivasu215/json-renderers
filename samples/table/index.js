import render from "../../src/index.js";
import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
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
