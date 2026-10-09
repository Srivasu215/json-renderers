
import render from "../../docs/dist/v13/min.js";

import data from "./data.json" with { type: "json" };
// if (appendPosition === "prepend") {
const start = () => {
  try {
    render({
      appendPosition: "prepend",
      type: "selectOptionsOnly", data: data.LedgerName,
      targetHtmlId: "selectId"
    });
  } catch (err) {
    console.log("error : ", err);

  };
};

start();
