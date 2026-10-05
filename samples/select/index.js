
import render from "../../docs/dist/v13/min.js";

import data from "./data.json" with {type: "json"};

const start = () => {
  try {
    render({
      type: "select", data: data.LedgerName,
      targetHtmlId: "dom-render-container"
    });
  } catch (err) {
    console.log("error : ", err);

  };
};

start();
