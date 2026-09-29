import render from "../../src/index.js";
import data from "./data.json" with {type: "json"};

const start = () => {
  try {
    render({
      type: "select", data,
      targetHtmlId: "dom-render-container",
      classToApply: "kkkkkkkkk"
    });
  } catch (err) {
    console.log("error : ", err);

  };
};

start();
