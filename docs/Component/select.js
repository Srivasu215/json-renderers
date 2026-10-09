import render from "../dist/v13/min.js";
import data from "./select.json" with { type: "json" };

const start = () => {
  try {
    render({
      type: "select",
      data,
      targetHtmlId: "selectContainer"
    });
  } catch (err) {
    console.log("error : ", err);
  }
};

start();
