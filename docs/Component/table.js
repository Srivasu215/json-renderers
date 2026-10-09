import render from "../dist/v13/min.js";
import data from "./table.json" with { type: "json" };

const start = () => {
  try {
    render({
      type: "table",
      data,
      targetHtmlId: "tableContainer",
      columns: ["id", "name", "category", "status"]
    });
  } catch (err) {
    console.log("error : ", err);
  }
};

start();
