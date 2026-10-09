import render from "../dist/v13/min.js";
import data from "./sidebar.json" with { type: "json" };

const start = () => {
  try {
    render({
      type: "sidebar",
      data,
      targetHtmlId: "sidebarContainer"
    });
  } catch (err) {
    console.log("error : ", err);
  }
};

start();
