
import render from "../../docs/dist/v13/min.js";

import data from "./data.json" with { type: "json" };

const start = () => {
  try {
    render({
      type: "selectOptionsOnly", data: data.LedgerName,
      targetHtmlId: "selectId"
    });
  } catch (err) {
    console.log("error : ", err);

  };
};

start();
