
import render from "../../docs/dist/v17/min.js";

import data from "./data.json" with { type: "json" };
// if (appendPosition === "prepend") {
const start = () => {
  try {
    const spec = render({
      appendPosition: "prepend",
      type: "selectOptionsOnly", data: data.LedgerType,
      columns: [{ columnName: "name" }],
      targetHtmlId: "selectId"
    });
    console.log("spec : ", spec);
  } catch (err) {
    console.log("error : ", err);

  };
};

start();
