import { buildCaseFileSpec } from "./buildSpec.js";
import "https://cdn.jsdelivr.net/npm/json-renderers-build@1.21.1/docs/dist/v20/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const loadJson = async path => {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path} (${response.status})`);
  return response.json();
};

const start = async () => {
  const [columns, data] = await Promise.all([
    loadJson("./columns.json"),
    loadJson("./data.json")
  ]);

  const buildDataList = values => window.ks.jsonRenderersBuild.render({
    type: "dataList",
    data: values
  });
  const { form: spec, dataLists } = buildCaseFileSpec({ columns, data, buildDataList });
  document.getElementById("spec-output").textContent = JSON.stringify(spec, null, 2);

  const form = window.ks.jsonToTag.buildSpecElement(spec);
  document.getElementById("form-container").replaceChildren(form);

  const dataListSummary = document.getElementById("data-list-summary");
  dataListSummary.replaceChildren(...dataLists.map(dataList => {
    const item = document.createElement("li");
    item.className = "mb-2";
    item.textContent = `${dataList.label} (${dataList.id}) → ${dataList.options.join(", ")}`;
    return item;
  }));

  form.addEventListener("submit", event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form));
    const result = document.getElementById("submit-result");
    result.textContent = `Saved locally for this demo: ${JSON.stringify(values)}`;
    result.classList.remove("d-none");
  });
};

start().catch(error => {
  document.getElementById("form-container").textContent = `Unable to build the sample: ${error.message}`;
  console.error(error);
});
