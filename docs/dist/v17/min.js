const q = {
  version: "v17.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, _ = (e) => {
  const t = e;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof t == "function" ? t : t.render, n = typeof t == "object" ? t.getSpec : void 0;
  globalThis.ks.jsonRenderers = {
    meta: q,
    ...typeof t == "object" ? t : {},
    render: o,
    renderToDom: o,
    domMount: t == null ? void 0 : t.renderToDom,
    ...n ? { getSpec: n } : {}
  };
}, J = "table", Y = "", U = [], X = [], Q = "", W = "replace", Z = !1, b = {
  type: J,
  targetHtmlId: Y,
  data: U,
  columns: X,
  classToApply: Q,
  appendPosition: W,
  showLog: Z
}, tt = ({ inConfig: e } = {}) => {
  const t = e;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  for (const o of Object.keys(b)) {
    if (!(o in t) || t[o] === void 0)
      throw console.error(`Missing compulsory key: "${o}"`), new Error(`Missing compulsory key: "${o}"`);
    if (Array.isArray(b[o])) {
      if (!Array.isArray(t[o]))
        throw console.error(`${o} must be an Array`), new TypeError(`${o} must be an Array`);
    } else if (typeof t[o] != typeof b[o])
      throw console.error(`${o} must be of type ${typeof b[o]}`), new TypeError(`${o} must be of type ${typeof b[o]}`);
  }
  if (typeof t.targetHtmlId == "string" && !t.targetHtmlId.trim())
    throw console.error("targetHtmlId must be a non-empty string"), new TypeError("targetHtmlId must be a non-empty string");
  return !0;
}, O = ({
  type: e = "table",
  targetHtmlId: t,
  data: o,
  columns: n,
  classToApply: a = "",
  appendPosition: r = "replace",
  showLog: s = !1
} = {}) => {
  const y = {
    type: e,
    targetHtmlId: t,
    data: o,
    columns: n,
    classToApply: a,
    appendPosition: r,
    showLog: s
  };
  return tt({ inConfig: y }), y;
}, P = () => ({ ...b });
Object.assign(P, b);
const et = {
  version: "1.15.0",
  name: "json-renderers-build"
}, ot = (e) => {
  const t = e;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof t == "function" ? t : t.render, n = typeof t == "object" ? t.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: et,
    renderToDom: o,
    render: o,
    ...n ? { getSpec: n } : {},
    ...typeof t == "object" ? t : {}
  };
}, N = ["table", "tableFromSpec", "select", "selectOptionsOnly", "dataList", "datalist"], nt = ["table", "tableFromSpec"], F = ({ inConfig: e } = {}) => {
  const t = e;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof t.type != "string" || !N.includes(t.type))
    throw console.error(`type must be one of: ${N.join(", ")}`), new Error(`type must be one of: ${N.join(", ")}`);
  if (t.showLog !== void 0 && typeof t.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  if (!Array.isArray(t.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (nt.includes(t.type)) {
    if (!Array.isArray(t.columns))
      throw console.error("columns must be an array for table rendering"), new TypeError("columns must be an array for table rendering");
    for (let o = 0; o < t.columns.length; o++) {
      const n = t.columns[o];
      if (!n || typeof n != "object")
        throw console.error(`columns[${o}] must be an object`), new TypeError(`columns[${o}] must be an object`);
      if (typeof n.columnName != "string" || !n.columnName.trim())
        throw console.error(`columns[${o}].columnName must be a non-empty string`), new TypeError(`columns[${o}].columnName must be a non-empty string`);
    }
    for (let o = 0; o < t.data.length; o++) {
      const n = t.data[o];
      if (!n || typeof n != "object")
        throw console.error(`data[${o}] must be an object`), new TypeError(`data[${o}] must be an object`);
    }
    if (t.columns.length > 0 && t.data.length > 0) {
      const o = t.columns.map((r) => r.columnName), n = Object.keys(t.data[0]);
      if (!o.some((r) => n.includes(r))) {
        const r = `Data alignment error: None of the columns [${o.join(", ")}] match any keys in data rows [${n.join(", ")}]`;
        throw console.error(r), new Error(r);
      }
    }
  }
  return !0;
}, rt = "table", at = [], lt = [], st = {}, ct = !1, h = {
  type: rt,
  columns: at,
  data: lt,
  options: st,
  showLog: ct
}, it = [
  {
    columnName: "Name",
    width: "150px"
  },
  {
    columnName: "Designation",
    width: "100px"
  }
], ut = [
  {
    Name: "Keshav",
    Designation: "Founder"
  }
], dt = {
  columns: it,
  data: ut
}, f = {
  ...h,
  ...dt
}, x = ({
  type: e = f.type,
  data: t = f.data,
  columns: o = f.columns,
  options: n = f.options,
  showLog: a = f.showLog
} = {}) => {
  const l = {
    type: e,
    data: t,
    columns: o,
    options: n,
    showLog: a
  };
  return F({ inConfig: l }), l;
};
Object.assign(x, f);
x.toJSON = () => structuredClone(f);
const pt = (e) => typeof e == "object" && e !== null && !Array.isArray(e), ft = (e, t) => {
  if (!pt(e)) return;
  let o = {};
  for (const [n, a] of Object.entries(e))
    o[n] = w(a, t);
  return o;
}, bt = (e, t) => {
  const o = structuredClone(e);
  return Array.isArray(o) ? o.map((a) => w(t, a)) : void 0;
}, k = (e, t, o) => {
  if (e === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : e.replace(/\$\{(\w+)\}/g, (n, a) => t[a] !== void 0 ? t[a] : n);
}, ht = (e, t) => k(e, t), mt = (e, t, o) => {
  if (e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, w = (e, t, o) => {
  const n = e, a = t;
  mt(n, a);
  const r = structuredClone(a);
  return typeof r == "string" ? k(r, n) : (r === null || typeof r != "object" || ("textContent" in r && (r.textContent = ht(r == null ? void 0 : r.textContent, n)), "attributes" in r && (r.attributes = ft(r == null ? void 0 : r.attributes, n)), "children" in r && (r.children = bt(r == null ? void 0 : r.children, n))), r);
}, gt = (e, t) => {
  if (!Array.isArray(e))
    throw new TypeError("inSource must be an Array");
  if (e.length === 0)
    throw new Error("inSource cannot be empty");
  for (let o = 0; o < e.length; o++)
    if (!e[o] || typeof e[o] != "object")
      throw new TypeError(`inSource[${o}] must be an object`);
  if (!t || typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, C = (e, t) => {
  const o = e, n = t;
  return gt(o, n), o.map((a) => w(a, n));
}, wt = (e, t) => e.map((n) => ({
  ...n,
  rowData: t[n.columnName]
})), yt = (e, t, o) => {
  var a, r, s, c, i, u;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let l = 0; l < e.length; l++) {
    const d = e[l];
    if (!d || typeof d != "object")
      throw new TypeError(`inColumns[${l}] must be an object`);
    if (typeof d.columnName != "string" || !d.columnName.trim())
      throw new TypeError(`inColumns[${l}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(t))
    throw new TypeError("inData must be an Array");
  for (let l = 0; l < t.length; l++) {
    const d = t[l];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${l}] must be an object`);
  }
  if (!o || typeof o != "object" || Array.isArray(o))
    throw new TypeError("inSpec must be an object");
  const n = ((s = (r = (a = e[0]) == null ? void 0 : a.template) == null ? void 0 : r.body) == null ? void 0 : s.tr) || "buildBodyTr";
  if (!(n in o))
    throw new Error(`Row template "${n}" not found in inSpec`);
  for (let l = 0; l < e.length; l++) {
    const d = e[l], p = ((i = (c = d.template) == null ? void 0 : c.body) == null ? void 0 : i.cell) || ((u = d.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(p in o))
      throw new Error(`Cell template "${p}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, Tt = (e, t) => e.map((n) => {
  var c, i, u;
  const a = ((i = (c = n.template) == null ? void 0 : c.body) == null ? void 0 : i.cell) || ((u = n.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", r = t[a];
  return w(n, r);
}), Ct = (e, t, o) => {
  var u, l, d;
  yt(e, t, o);
  const n = e, a = t, r = o, s = ((d = (l = (u = n[0]) == null ? void 0 : u.template) == null ? void 0 : l.body) == null ? void 0 : d.tr) || "buildBodyTr", c = r[s];
  return a.map((p) => {
    const A = w(p, c), y = wt(n, p), z = Tt(y, r);
    return A.children = z, A;
  });
}, S = (e, t) => {
  var o;
  if (((o = e == null ? void 0 : e.attributes) == null ? void 0 : o["data-role"]) === t) return e;
  for (const n of (e == null ? void 0 : e.children) ?? []) {
    const a = S(n, t);
    if (a) return a;
  }
  return null;
}, At = (e, t) => {
  const o = e[t.fileName], n = t.dataRole ? S(o, t.dataRole) : o;
  return (t.filePath ?? []).reduce((a, r) => a[r], n);
}, Nt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, $t = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, xt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, St = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, jt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Lt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Dt = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${agg:count}",
      attributes: {
        class: "btn btn-primary btn-sm"
      }
    }
  ]
}, Et = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Ot = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Pt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, j = {
  buildBodyTr: Nt,
  buildColGroup: $t,
  buildHeader: xt,
  buildFooter: St,
  buildBodyCell: jt,
  button: Lt,
  buttonCell: Dt,
  buildOption: Et,
  buildSelect: Ot,
  buildDataList: Pt
}, Ft = "table", kt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, It = [
  {
    tagName: "colgroup",
    attributes: {
      "data-role": "table-colgroup"
    },
    children: []
  },
  {
    tagName: "thead",
    attributes: {
      class: "table-dark",
      "data-role": "table-header"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-header-row"
        },
        children: []
      }
    ]
  },
  {
    tagName: "tbody",
    attributes: {
      "data-role": "table-body"
    },
    children: []
  },
  {
    tagName: "tfoot",
    attributes: {
      "data-role": "table-footer"
    },
    children: [
      {
        tagName: "tr",
        attributes: {
          "data-role": "table-footer-row"
        },
        children: []
      }
    ]
  }
], I = {
  tagName: Ft,
  attributes: kt,
  children: It
}, Rt = [
  {
    narration: "Build the column widths for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildColGroup",
    func: "fromCollection"
  },
  {
    narration: "Build the header row for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    templateKey: "buildHeader",
    func: "fromCollection"
  }
], vt = [
  {
    narration: "Build the table body rows for the table using the configured columns and data.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ]
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "columns"
      ]
    },
    func: "twoDimensional"
  }
], T = (e) => Array.isArray(e) ? e : [e], L = {
  set: (e, t, o) => {
    e[t] = o;
  },
  push: (e, t, o) => {
    e[t].push(...T(o));
  },
  unshift: (e, t, o) => {
    e[t].unshift(...T(o));
  },
  pushToRows: (e, t, o) => {
    e[t].forEach((n) => {
      n.children.push(...structuredClone(T(o)));
    });
  },
  unshiftToRows: (e, t, o) => {
    e[t].forEach((n) => {
      n.children.unshift(...structuredClone(T(o)));
    });
  },
  unshiftSerialToRows: (e, t, o) => {
    e[t].forEach((n, a) => {
      const r = structuredClone(o);
      r.textContent = a + 1, n.children.unshift(r);
    });
  }
}, R = (e, t, o) => {
  const n = t.dataRole ? S(e[t.fileName], t.dataRole) : e[t.fileName], a = [...t.filePath ?? []], r = a.pop(), s = a.reduce((i, u) => i[u], n);
  (L[t.action] || L.set)(s, r, o);
}, m = { data: {}, base: I, spec: j }, v = {
  fromCollection: C,
  twoDimensional: Ct
}, Ht = (e) => {
  e.forEach((t) => {
    const o = At(m, t.sourcePath);
    if (o) {
      const n = v[t.func](o, j[t.templateKey]);
      R(m, t.destinationPath, n);
    } else
      console.log("   !instruction : ", t), console.log("   !source : ", o);
  });
}, Vt = (e) => {
  e.forEach((t) => {
    const o = v[t.func](
      m.data.columns,
      m.data.data,
      j
    );
    R(m, t.destinationPath, o);
  });
}, Bt = (e) => (m.data = e, Ht(Rt), Vt(vt), I), D = ({
  inData: e,
  inColumns: t,
  footer: o = [],
  options: n
} = {}) => Bt({
  columns: t,
  data: e
}), Mt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Gt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Kt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, g = {
  buildOption: Mt,
  buildSelect: Gt,
  buildDataList: Kt
}, zt = ({ inData: e = [] } = {}) => {
  const t = (e ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), o = structuredClone(g.buildSelect);
  return o.children = C(t, g.buildOption), o;
}, qt = ({ inData: e = [], inColumns: t = [] } = {}) => t.map((n) => {
  const a = structuredClone(g.buildOption);
  return a.textContent = a.textContent.replace("rowValue", n.columnName), a.attributes.value = a.attributes.value.replace("rowValue", n.columnName), C(e, a);
}), E = ({ inData: e = [] } = {}) => {
  const t = (e ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), o = structuredClone(g.buildDataList);
  return o.children = C(t, g.buildOption), o;
}, _t = {
  table: D,
  tableFromSpec: D,
  select: zt,
  selectOptionsOnly: qt,
  dataList: E,
  datalist: E
}, H = ({
  type: e = h.type,
  data: t = h.data,
  columns: o = h.columns,
  options: n = h.options,
  showLog: a = h.showLog
} = {}) => {
  const l = {
    type: e,
    data: t,
    columns: o,
    options: n,
    showLog: a
  };
  F({ inConfig: l });
  const d = _t[l.type];
  if (!d)
    throw new Error(`Renderer for type "${l.type}" not found.`);
  const p = d({
    inColumns: l.columns,
    inData: l.data,
    options: l.options
  });
  return l.showLog && console.log("json-renderers-build output:", p), p;
};
ot({ render: H, getSpec: x, spec: f });
const V = ({
  inColumns: e,
  inType: t = "table",
  inData: o,
  inShowLog: n = !1
} = {}) => H({
  type: t,
  data: o ?? [],
  columns: e,
  showLog: n
}), Jt = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Yt = ({ inFuncDefinition: e, inReviewSpec: t } = {}) => {
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: Jt,
    buildSpecElement: e,
    reviewSpec: t
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, Ut = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : typeof e == "object" && (e.nodeType === 3 || e.tagName === "#text" || !e.tagName && (e.textContent !== void 0 || e.text !== void 0)) ? document.createTextNode(e.textContent ?? e.text ?? "") : M(e), B = (e) => Array.isArray(e) ? e.map(Ut).flat(1 / 0).filter(Boolean) : [], Xt = (e) => (e == null, e), Qt = "http://www.w3.org/2000/svg", Wt = /* @__PURE__ */ new Set([
  "svg",
  "path",
  "symbol",
  "use",
  "g",
  "circle",
  "ellipse",
  "rect",
  "line",
  "polyline",
  "polygon",
  "text",
  "tspan",
  "defs",
  "clippath",
  "mask",
  "pattern",
  "marker",
  "lineargradient",
  "radialgradient",
  "stop",
  "image",
  "filter",
  "fegaussianblur",
  "femerge",
  "femergenode"
]), Zt = ({ inTagName: e }) => {
  const t = e == null ? void 0 : e.toLowerCase();
  if (!t) return null;
  if (t === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return Wt.has(t) ? document.createElementNS(Qt, t) : document.createElement(t);
}, te = ({ inElement: e, inTextContent: t }) => (!e || t === void 0 || t === null || (e.textContent = t), e), ee = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), oe = "http://www.w3.org/1999/xlink", ne = ({ inElement: e, inAttributes: t }) => {
  const o = e, n = t;
  if (!o || !n || typeof n != "object")
    return o;
  const a = typeof SVGElement < "u" ? o instanceof SVGElement : o.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(n).forEach(([r, s]) => {
    if (r === "class") {
      a ? o.setAttribute("class", String(s)) : o.className = s;
      return;
    }
    if (r === "xlink:href" || r === "href") {
      if (s != null) {
        const c = String(s);
        if (a)
          try {
            o.setAttributeNS(oe, "href", c);
          } catch {
          }
        o.setAttribute("href", c), o.setAttribute("xlink:href", c);
      }
      return;
    }
    if (typeof s == "boolean") {
      s ? o.setAttribute(r, "") : o.removeAttribute(r);
      return;
    }
    s != null && o.setAttribute(r, String(s));
  }), o;
}, re = ({ inElement: e, inClassList: t }) => {
  if (!e || !t) return e;
  const o = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && e.classList.add(...o), e;
}, ae = (e) => {
  if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
  const t = Zt({ inTagName: e.tagName });
  if (!t) return null;
  if (te({
    inElement: t,
    inTextContent: Xt(e.textContent),
    inTagName: e.tagName
  }), ee({
    inElement: t,
    inProperties: e.properties
  }), ne({
    inElement: t,
    inAttributes: e.attributes
  }), re({
    inElement: t,
    inClassList: e.classList
  }), Array.isArray(e.children)) {
    const o = B(e.children);
    o.length && t.append(...o);
  }
  return t;
}, M = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : Array.isArray(e) ? B(e) : typeof e == "object" ? ae(e) : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : null, le = "./tags.schema.json", se = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, ce = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "type",
    "placeholder",
    "value",
    "name",
    "disabled",
    "readonly",
    "required",
    "list"
  ]
}, ie = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "type",
    "checked",
    "name",
    "value",
    "disabled",
    "required"
  ]
}, ue = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, de = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, pe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, fe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "action",
    "method",
    "autocomplete",
    "enctype",
    "name",
    "novalidate",
    "target"
  ],
  childTags: []
}, be = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "name",
    "disabled",
    "required",
    "multiple",
    "size"
  ],
  childTags: [
    "option"
  ]
}, he = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, me = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ge = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, we = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ye = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Te = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Ce = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "border",
    "cellpadding",
    "cellspacing"
  ],
  childTags: [
    "caption",
    "colgroup",
    "thead",
    "tbody",
    "tfoot",
    "tr"
  ]
}, Ae = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Ne = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, $e = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, xe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, Se = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, je = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Le = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, De = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Ee = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Oe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "href",
    "target",
    "rel",
    "title",
    "download"
  ],
  childTags: []
}, Pe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Fe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ke = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Ie = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Re = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, ve = {
  $schema: le,
  div: se,
  input: ce,
  checkbox: ie,
  colgroup: ue,
  col: de,
  label: pe,
  form: fe,
  select: be,
  p: he,
  h1: me,
  h2: ge,
  span: we,
  img: ye,
  button: Te,
  table: Ce,
  thead: Ae,
  tbody: Ne,
  tfoot: $e,
  tr: xe,
  th: Se,
  td: je,
  datalist: Le,
  option: De,
  header: Ee,
  a: Oe,
  i: Pe,
  small: Fe,
  ul: ke,
  li: Ie,
  hr: Re
}, $ = ({ inSpec: e }) => {
  const t = e;
  if (!t) return [];
  if (Array.isArray(t))
    return t.flatMap((n) => $({ inSpec: n }));
  if (typeof t != "object") return [];
  const o = [];
  return typeof t.tagName == "string" && t.tagName.trim().length > 0 && o.push(t.tagName.toLowerCase()), Array.isArray(t.children) && t.children.length > 0 && t.children.forEach((n) => {
    const a = $({ inSpec: n });
    o.push(...a);
  }), o;
}, He = ({ inTagsFound: e, inAllowedTags: t }) => {
  const o = e ?? [], n = t ?? {}, a = new Set(
    Object.keys(n).filter((l) => l !== "$schema").map((l) => l.toLowerCase())
  ), r = {}, s = [], c = [];
  o.forEach((l) => {
    r[l] = (r[l] || 0) + 1, a.has(l) ? s.includes(l) || s.push(l) : c.includes(l) || c.push(l);
  });
  const i = o.length, u = c.length === 0;
  return {
    totalTags: i,
    tagCounts: r,
    uniqueTags: Object.keys(r),
    recognizedTags: s,
    unrecognizedTags: c,
    areAllTagsPresent: u
  };
}, Ve = ({ inSpec: e, inTags: t = ve } = {}) => {
  const o = e, n = t, a = $({ inSpec: o }), r = He({
    inTagsFound: a,
    inAllowedTags: n
  });
  return {
    areAllTagsPresent: r.areAllTagsPresent,
    totalTags: r.totalTags,
    tagCounts: r.tagCounts,
    uniqueTags: r.uniqueTags,
    recognizedTags: r.recognizedTags,
    unrecognizedTags: r.unrecognizedTags
  };
}, G = (e = {}) => {
  const t = (e == null ? void 0 : e.spec) ?? (e == null ? void 0 : e.inSpec) ?? e;
  return M(t);
};
Yt({
  inFuncDefinition: G,
  inReviewSpec: Ve
});
const K = ({
  inSpec: e,
  inTargetHtmlId: t,
  inAppendPosition: o,
  inShowLog: n = !1
} = {}) => {
  const a = e, r = t, s = o, c = n, i = G(a);
  c && console.log("renderToDom 1 (content):", i);
  const u = document.getElementById(r);
  return u ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? s === "prepend" ? u.prepend(...i) : u.append(...i) : s === "prepend" ? u.prepend(i) : (u.innerHTML = "", u.append(i)), c && console.log("renderToDom 2 (mounted):", u), u) : null;
}, Be = (e = {}) => {
  const t = O(e);
  (t == null ? void 0 : t.showLog) && console.log("first : ", t == null ? void 0 : t.columns, t == null ? void 0 : t.data);
  const n = V({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog
  });
  return K({
    inSpec: n,
    inTargetHtmlId: t.targetHtmlId,
    inAppendPosition: t.appendPosition,
    inShowLog: t.showLog
  });
};
_({ render: Be, getSpec: P, validateConfig: O, buildSpec: V, renderToDom: K });
export {
  V as buildSpec,
  Be as default,
  P as getSpec,
  Be as render,
  K as renderToDom,
  O as validateConfig
};
