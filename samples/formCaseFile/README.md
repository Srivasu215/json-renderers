# Case file form from columns and records

This sample follows the table builder's input shape: `columns.json` describes the fields, and `data.json` is a separate collection of records.

- Each column supplies its input `id` and `dataListId`, plus label, type, and validation details.
- Each data list is built from the values found under that column's `columnName` in `data.json`.
- The public `json-renderers-build@1.21.1` data-list renderer creates the `<datalist>` and its options.
- The field's `list` attribute uses the same `dataListId` as that datalist's `id`, linking suggestions to the input.
- `buildSpec.js` assembles those pieces into one vertical Bootstrap form specification; `index.js` passes it to JSON-to-tag to create the DOM.

The visible summary under the form exposes the generated data lists, while the JSON panel shows the connected form and datalist specs. No case record is prefilled into the form; records are suggestion sources only.
