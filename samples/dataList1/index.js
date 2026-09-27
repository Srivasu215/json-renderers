import render from "../../src/index.js";
import data from "./input/data.json" with {type: "json"};

const start = () => {
  try {
    console.log("render : ", render);

    render({ type: "datalist", data, targetHtmlId: "dom-render-container" });
  } catch (err) {
    console.log("error : ", err);

  };
};

start();
