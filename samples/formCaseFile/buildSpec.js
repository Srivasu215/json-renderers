const DATALIST_INPUT_TYPES = new Set([
  "text", "email", "number", "tel", "url", "search",
  "date", "datetime-local", "time", "month", "week"
]);

const slugify = value => value
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "") || "field";

const getColumnValues = (records, columnName) => {
  const seen = new Set();

  return records.flatMap(record => {
    const rawValue = record?.[columnName];
    if (rawValue == null) return [];

    const value = String(rawValue).trim();
    const key = value.toLocaleLowerCase();
    if (!value || seen.has(key)) return [];

    seen.add(key);
    return [value];
  });
};

const buildField = ({ column, index, values }) => {
  const name = column.columnName;
  const type = column.type ?? "text";
  const id = column.id ?? `case-field-${index}-${slugify(name)}`;
  const listId = values.length && column.dataListId ? column.dataListId : undefined;
  const label = {
    tagName: "label",
    textContent: column.label ?? name,
    attributes: { class: "form-label", for: id }
  };
  const commonAttributes = {
    id,
    name,
    ...(column.required ? { required: true } : {}),
    ...(column.placeholder ? { placeholder: column.placeholder } : {})
  };

  let control;
  if (type === "textarea") {
    control = {
      tagName: "textarea",
      attributes: { ...commonAttributes, rows: column.rows ?? 3, class: "form-control" }
    };
  } else {
    const inputType = DATALIST_INPUT_TYPES.has(type) ? type : "text";
    control = {
      tagName: "input",
      attributes: {
        ...commonAttributes,
        type: inputType,
        class: "form-control",
        ...(listId ? { list: listId } : {})
      }
    };
  }

  return {
    tagName: "div",
    attributes: { class: "mb-3" },
    children: [label, control]
  };
};

const buildCaseFileSpec = ({ columns = [], data = [], buildDataList } = {}) => {
  if (typeof buildDataList !== "function") {
    throw new TypeError("buildDataList must be the json-renderers-build dataList renderer");
  }

  const records = Array.isArray(data) ? data : [];
  const dataLists = [];
  const fields = columns.map((column, index) => {
    const type = column.type ?? "text";
    const canUseDataList = type !== "textarea" && DATALIST_INPUT_TYPES.has(type);
    const values = canUseDataList ? getColumnValues(records, column.columnName) : [];

    if (values.length && column.dataListId) {
      const spec = buildDataList(values);
      spec.attributes = {
        id: column.dataListId,
        "data-column": column.columnName
      };
      dataLists.push({
        columnName: column.columnName,
        label: column.label ?? column.columnName,
        id: column.dataListId,
        options: values,
        spec
      });
    }

    return buildField({ column, index, values });
  });

  const form = {
    tagName: "form",
    attributes: { id: "case-file-form", class: "vstack gap-1" },
    children: [
      ...fields,
      ...dataLists.map(dataList => dataList.spec),
      {
        tagName: "button",
        textContent: "Save case",
        attributes: { type: "submit", class: "btn btn-primary align-self-start" }
      }
    ]
  };

  return { form, dataLists };
};

export { buildCaseFileSpec };
