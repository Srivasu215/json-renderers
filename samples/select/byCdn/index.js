
import render from "https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v14/min.js";

import data from "./data.json" with {type: "json"};

const start = () => {
  try {
    render({
      type: "select", data: data.LedgerName,
      targetHtmlId: "dom-render-container", showLog: false
    });
  } catch (err) {
    console.log("error : ", err);

  };
};

start();
