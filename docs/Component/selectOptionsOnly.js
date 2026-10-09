import render from "../dist/v13/min.js";
import data from "./selectOptionsOnly.json" with { type: "json" };

const start = () => {
  try {
    render({
      type: "selectOptionsOnly",
      data,
      targetHtmlId: "selectId"
    });
  } catch (err) {
    console.log("error : ", err);
  }
};

start();
