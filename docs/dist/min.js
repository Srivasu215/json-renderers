const V = {
  version: "v17.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, M = (e) => {
  const t = e;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof t == "function" ? t : t.render, n = typeof t == "object" ? t.getSpec : void 0;
  globalThis.ks.jsonRenderers = {
    meta: V,
    ...typeof t == "object" ? t : {},
    render: o,
    renderToDom: o,
    domMount: t == null ? void 0 : t.renderToDom,
    ...n ? { getSpec: n } : {}
  };
}, K = "table", z = "", q = [], _ = [], J = "", Y = "replace", U = !1, h = {
  type: K,
  targetHtmlId: z,
  data: q,
  columns: _,
  classToApply: J,
  appendPosition: Y,
  showLog: U
}, X = ({ inConfig: e } = {}) => {
  const t = e;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  for (const o of Object.keys(h)) {
    if (!(o in t) || t[o] === void 0)
      throw console.error(`Missing compulsory key: "${o}"`), new Error(`Missing compulsory key: "${o}"`);
    if (Array.isArray(h[o])) {
      if (!Array.isArray(t[o]))
        throw console.error(`${o} must be an Array`), new TypeError(`${o} must be an Array`);
    } else if (typeof t[o] != typeof h[o])
      throw console.error(`${o} must be of type ${typeof h[o]}`), new TypeError(`${o} must be of type ${typeof h[o]}`);
  }
  if (typeof t.targetHtmlId == "string" && !t.targetHtmlId.trim())
    throw console.error("targetHtmlId must be a non-empty string"), new TypeError("targetHtmlId must be a non-empty string");
  return !0;
}, E = ({
  type: e = "table",
  targetHtmlId: t,
  data: o,
  columns: n,
  classToApply: l = "",
  appendPosition: s = "replace",
  showLog: r = !1
} = {}) => {
  const $ = {
    type: e,
    targetHtmlId: t,
    data: o,
    columns: n,
    classToApply: l,
    appendPosition: s,
    showLog: r
  };
  return X({ inConfig: $ }), $;
}, S = () => ({ ...h });
Object.assign(S, h);
const Q = {
  version: "1.15.0",
  name: "json-renderers-build"
}, W = (e) => {
  const t = e;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof t == "function" ? t : t.render, n = typeof t == "object" ? t.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: Q,
    renderToDom: o,
    render: o,
    ...n ? { getSpec: n } : {},
    ...typeof t == "object" ? t : {}
  };
}, T = ["table", "tableFromSpec", "select", "selectOptionsOnly", "dataList", "datalist"], Z = ["table", "tableFromSpec"], F = ({ inConfig: e } = {}) => {
  const t = e;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof t.type != "string" || !T.includes(t.type))
    throw console.error(`type must be one of: ${T.join(", ")}`), new Error(`type must be one of: ${T.join(", ")}`);
  if (t.showLog !== void 0 && typeof t.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  if (!Array.isArray(t.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (Z.includes(t.type)) {
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
      const o = t.columns.map((s) => s.columnName), n = Object.keys(t.data[0]);
      if (!o.some((s) => n.includes(s))) {
        const s = `Data alignment error: None of the columns [${o.join(", ")}] match any keys in data rows [${n.join(", ")}]`;
        throw console.error(s), new Error(s);
      }
    }
  }
  return !0;
}, tt = "table", et = [], ot = [], nt = {}, lt = !1, b = {
  type: tt,
  columns: et,
  data: ot,
  options: nt,
  showLog: lt
}, st = [
  {
    columnName: "Name",
    width: "150px"
  },
  {
    columnName: "Designation",
    width: "100px"
  }
], rt = [
  {
    Name: "Keshav",
    Designation: "Founder"
  }
], at = {
  columns: st,
  data: rt
}, f = {
  ...b,
  ...at
}, x = ({
  type: e = f.type,
  data: t = f.data,
  columns: o = f.columns,
  options: n = f.options,
  showLog: l = f.showLog
} = {}) => {
  const a = {
    type: e,
    data: t,
    columns: o,
    options: n,
    showLog: l
  };
  return F({ inConfig: a }), a;
};
Object.assign(x, f);
x.toJSON = () => structuredClone(f);
const ct = (e) => typeof e == "object" && e !== null && !Array.isArray(e), it = (e, t) => {
  if (!ct(e)) return;
  let o = {};
  for (const [n, l] of Object.entries(e))
    o[n] = N(l, t);
  return o;
}, ut = (e, t) => {
  const o = structuredClone(e);
  return Array.isArray(o) ? o.map((l) => N(l, t)) : void 0;
}, O = (e, t) => e.replace(/\$\{(\w+)\}/g, (o, n) => t[n] !== void 0 ? t[n] : o), dt = (e, t) => O(e, t), N = (e, t) => {
  const o = structuredClone(e);
  return typeof o == "string" ? O(o, t) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = dt(o == null ? void 0 : o.textContent, t)), "attributes" in o && (o.attributes = it(o == null ? void 0 : o.attributes, t)), "children" in o && (o.children = ut(o == null ? void 0 : o.children, t))), o);
}, w = (e, t) => {
  const o = e, n = t;
  return o.map((l) => N(n, l));
}, k = (e, t, o) => {
  const n = o, l = t;
  let s = [];
  return n.forEach((r) => {
    var i;
    const c = e[(i = r == null ? void 0 : r.template) == null ? void 0 : i.bodyCell];
    if (c) {
      let u = structuredClone(c);
      u.textContent = l[r.columnName], s.push(u);
    }
  }), s;
}, D = (e, t, o) => {
  e.forEach((n, l) => {
    const s = t == null ? void 0 : t.data[l], r = k(o, s, t == null ? void 0 : t.columns);
    n.children = r;
  });
}, ft = (e, t) => {
  const o = structuredClone(t);
  o.attributes.width = "50px", e.unshift(o);
}, ht = (e, t) => {
  const o = structuredClone(t);
  o.textContent = "#", e.unshift(o);
}, bt = (e, t) => {
  e.forEach((o, n) => {
    const l = structuredClone(t);
    l.textContent = n + 1, o.children.unshift(l);
  });
}, pt = (e, t) => {
  const o = structuredClone(t);
  delete o.children, e.unshift(o);
}, mt = (e, t) => {
  ft(e == null ? void 0 : e.children[0].children, t == null ? void 0 : t.buildColGroup), ht(e == null ? void 0 : e.children[1].children[0].children, t == null ? void 0 : t.buildHeader), bt(e == null ? void 0 : e.children[2].children, t == null ? void 0 : t.buildBodyCell), pt(e == null ? void 0 : e.children[3].children[0].children, t == null ? void 0 : t.buildFooter);
}, wt = (e, t) => {
  const o = structuredClone(t);
  o.attributes.width = "100px", e.push(o);
}, yt = (e, t) => {
  const o = structuredClone(t);
  o.textContent = "options", e.push(o);
}, gt = (e, t) => {
  e.forEach((o, n) => {
    const l = structuredClone(t);
    l.textContent = "show", o.children.push(l);
  });
}, Ct = (e, t) => {
  const o = structuredClone(t);
  o.textContent = "save", e.push(o);
}, Tt = (e, t) => {
  wt(e == null ? void 0 : e.children[0].children, t == null ? void 0 : t.buildColGroup), yt(e == null ? void 0 : e.children[1].children[0].children, t == null ? void 0 : t.buildHeader), gt(e == null ? void 0 : e.children[2].children, t == null ? void 0 : t.button), Ct(e == null ? void 0 : e.children[3].children[0].children, t == null ? void 0 : t.button);
}, y = (e, t) => {
  var o;
  if (((o = e == null ? void 0 : e.attributes) == null ? void 0 : o["data-role"]) === t) return e;
  for (const n of (e == null ? void 0 : e.children) ?? []) {
    const l = y(n, t);
    if (l) return l;
  }
  return null;
}, At = (e, t) => {
  const o = e[t.fileName], n = t.dataRole ? y(o, t.dataRole) : o;
  return (t.filePath ?? []).reduce((l, s) => l[s], n);
}, xt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Nt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, $t = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, jt = {
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
}, Lt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Pt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Et = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, St = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Ft = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, d = {
  buildBodyTr: xt,
  buildColGroup: Nt,
  buildHeader: $t,
  buildFooter: jt,
  buildBodyCell: Lt,
  button: Pt,
  buildOption: Et,
  buildSelect: St,
  buildDataList: Ft
}, Ot = "table", kt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Dt = [
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
], p = {
  tagName: Ot,
  attributes: kt,
  children: Dt
}, It = [
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
    narration: "Build the table header row from the column metadata.",
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
  },
  {
    narration: "Build the table footer row from the column metadata.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
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
    templateKey: "buildFooter",
    func: "fromCollection"
  }
], Ht = [
  {
    narration: "Create one table row for each record and place it into the table body container.",
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
        "data"
      ]
    },
    templateKey: "buildBodyTr",
    func: "fromCollection"
  }
], m = { data: {}, base: p, spec: d }, vt = { fromCollection: w, tableBody: k, buildBody: D }, Rt = (e, t) => {
  const o = e.dataRole ? y(m[e.fileName], e.dataRole) : m[e.fileName], n = [...e.filePath ?? []], l = n.pop(), s = n.reduce((r, c) => r[c], o);
  s[l] = t;
}, j = (e) => {
  e.forEach((t) => {
    const o = At(m, t.sourcePath);
    if (o) {
      const n = vt[t.func](o, d[t.templateKey]);
      Rt(t.destinationPath, n);
    } else
      console.log("   !instruction : ", t), console.log("   !source : ", o);
  });
}, Bt = (e) => (m.data = e, j(Ht), j(It), D(y(p, "table-body").children, e, d), mt(p, d), Tt(p, d), p), L = ({
  inData: e,
  inColumns: t,
  footer: o = [],
  options: n
} = {}) => Bt({
  columns: t,
  data: e
}), Gt = ({ inData: e = [] } = {}) => {
  const t = (e ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), o = structuredClone(d.buildSelect);
  return o.children = w(t, d.buildOption), o;
}, Vt = ({ inData: e = [] } = {}) => {
  const t = (e ?? []).map(
    (o) => typeof o == "object" && o !== null ? o : { rowValue: o }
  );
  return w(t, d.buildOption);
}, P = ({ inData: e = [] } = {}) => {
  const t = (e ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), o = structuredClone(d.buildDataList);
  return o.children = w(t, d.buildOption), o;
}, Mt = {
  table: L,
  tableFromSpec: L,
  select: Gt,
  selectOptionsOnly: Vt,
  dataList: P,
  datalist: P
}, I = ({
  type: e = b.type,
  data: t = b.data,
  columns: o = b.columns,
  options: n = b.options,
  showLog: l = b.showLog
} = {}) => {
  const a = {
    type: e,
    data: t,
    columns: o,
    options: n,
    showLog: l
  };
  F({ inConfig: a });
  const g = Mt[a.type];
  if (!g)
    throw new Error(`Renderer for type "${a.type}" not found.`);
  const C = g({
    inColumns: a.columns,
    inData: a.data,
    options: a.options
  });
  return a.showLog && console.log("json-renderers-build output:", C), C;
};
W({ render: I, getSpec: x, spec: f });
const H = ({
  inColumns: e,
  inType: t = "table",
  inData: o,
  inShowLog: n = !1
} = {}) => I({
  type: t,
  data: o ?? [],
  columns: e,
  showLog: n
}), Kt = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, zt = ({ inFuncDefinition: e, inReviewSpec: t } = {}) => {
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: Kt,
    buildSpecElement: e,
    reviewSpec: t
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, qt = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : typeof e == "object" && (e.nodeType === 3 || e.tagName === "#text" || !e.tagName && (e.textContent !== void 0 || e.text !== void 0)) ? document.createTextNode(e.textContent ?? e.text ?? "") : R(e), v = (e) => Array.isArray(e) ? e.map(qt).flat(1 / 0).filter(Boolean) : [], _t = (e) => (e == null, e), Jt = "http://www.w3.org/2000/svg", Yt = /* @__PURE__ */ new Set([
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
]), Ut = ({ inTagName: e }) => {
  const t = e == null ? void 0 : e.toLowerCase();
  if (!t) return null;
  if (t === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return Yt.has(t) ? document.createElementNS(Jt, t) : document.createElement(t);
}, Xt = ({ inElement: e, inTextContent: t }) => (!e || t === void 0 || t === null || (e.textContent = t), e), Qt = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), Wt = "http://www.w3.org/1999/xlink", Zt = ({ inElement: e, inAttributes: t }) => {
  const o = e, n = t;
  if (!o || !n || typeof n != "object")
    return o;
  const l = typeof SVGElement < "u" ? o instanceof SVGElement : o.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(n).forEach(([s, r]) => {
    if (s === "class") {
      l ? o.setAttribute("class", String(r)) : o.className = r;
      return;
    }
    if (s === "xlink:href" || s === "href") {
      if (r != null) {
        const c = String(r);
        if (l)
          try {
            o.setAttributeNS(Wt, "href", c);
          } catch {
          }
        o.setAttribute("href", c), o.setAttribute("xlink:href", c);
      }
      return;
    }
    if (typeof r == "boolean") {
      r ? o.setAttribute(s, "") : o.removeAttribute(s);
      return;
    }
    r != null && o.setAttribute(s, String(r));
  }), o;
}, te = ({ inElement: e, inClassList: t }) => {
  if (!e || !t) return e;
  const o = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && e.classList.add(...o), e;
}, ee = (e) => {
  if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
  const t = Ut({ inTagName: e.tagName });
  if (!t) return null;
  if (Xt({
    inElement: t,
    inTextContent: _t(e.textContent),
    inTagName: e.tagName
  }), Qt({
    inElement: t,
    inProperties: e.properties
  }), Zt({
    inElement: t,
    inAttributes: e.attributes
  }), te({
    inElement: t,
    inClassList: e.classList
  }), Array.isArray(e.children)) {
    const o = v(e.children);
    o.length && t.append(...o);
  }
  return t;
}, R = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : Array.isArray(e) ? v(e) : typeof e == "object" ? ee(e) : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : null, oe = "./tags.schema.json", ne = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, le = {
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
}, se = {
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
}, re = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, ae = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, ce = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, ie = {
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
}, ue = {
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
}, de = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, fe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, he = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, be = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, pe = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, me = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, we = {
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
}, ye = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, ge = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Ce = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Te = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, Ae = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, xe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Ne = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, $e = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, je = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Le = {
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
}, Ee = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Se = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Fe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Oe = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, ke = {
  $schema: oe,
  div: ne,
  input: le,
  checkbox: se,
  colgroup: re,
  col: ae,
  label: ce,
  form: ie,
  select: ue,
  p: de,
  h1: fe,
  h2: he,
  span: be,
  img: pe,
  button: me,
  table: we,
  thead: ye,
  tbody: ge,
  tfoot: Ce,
  tr: Te,
  th: Ae,
  td: xe,
  datalist: Ne,
  option: $e,
  header: je,
  a: Le,
  i: Pe,
  small: Ee,
  ul: Se,
  li: Fe,
  hr: Oe
}, A = ({ inSpec: e }) => {
  const t = e;
  if (!t) return [];
  if (Array.isArray(t))
    return t.flatMap((n) => A({ inSpec: n }));
  if (typeof t != "object") return [];
  const o = [];
  return typeof t.tagName == "string" && t.tagName.trim().length > 0 && o.push(t.tagName.toLowerCase()), Array.isArray(t.children) && t.children.length > 0 && t.children.forEach((n) => {
    const l = A({ inSpec: n });
    o.push(...l);
  }), o;
}, De = ({ inTagsFound: e, inAllowedTags: t }) => {
  const o = e ?? [], n = t ?? {}, l = new Set(
    Object.keys(n).filter((a) => a !== "$schema").map((a) => a.toLowerCase())
  ), s = {}, r = [], c = [];
  o.forEach((a) => {
    s[a] = (s[a] || 0) + 1, l.has(a) ? r.includes(a) || r.push(a) : c.includes(a) || c.push(a);
  });
  const i = o.length, u = c.length === 0;
  return {
    totalTags: i,
    tagCounts: s,
    uniqueTags: Object.keys(s),
    recognizedTags: r,
    unrecognizedTags: c,
    areAllTagsPresent: u
  };
}, Ie = ({ inSpec: e, inTags: t = ke } = {}) => {
  const o = e, n = t, l = A({ inSpec: o }), s = De({
    inTagsFound: l,
    inAllowedTags: n
  });
  return {
    areAllTagsPresent: s.areAllTagsPresent,
    totalTags: s.totalTags,
    tagCounts: s.tagCounts,
    uniqueTags: s.uniqueTags,
    recognizedTags: s.recognizedTags,
    unrecognizedTags: s.unrecognizedTags
  };
}, B = (e = {}) => {
  const t = (e == null ? void 0 : e.spec) ?? (e == null ? void 0 : e.inSpec) ?? e;
  return R(t);
};
zt({
  inFuncDefinition: B,
  inReviewSpec: Ie
});
const G = ({
  inSpec: e,
  inTargetHtmlId: t,
  inAppendPosition: o,
  inShowLog: n = !1
} = {}) => {
  const l = e, s = t, r = o, c = n, i = B(l);
  c && console.log("renderToDom 1 (content):", i);
  const u = document.getElementById(s);
  return u ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? r === "prepend" ? u.prepend(...i) : u.append(...i) : r === "prepend" ? u.prepend(i) : (u.innerHTML = "", u.append(i)), c && console.log("renderToDom 2 (mounted):", u), u) : null;
}, He = (e = {}) => {
  const t = E(e), o = H({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog
  });
  return G({
    inSpec: o,
    inTargetHtmlId: t.targetHtmlId,
    inAppendPosition: t.appendPosition,
    inShowLog: t.showLog
  });
};
M({ render: He, getSpec: S, validateConfig: E, buildSpec: H, renderToDom: G });
export {
  H as buildSpec,
  He as default,
  S as getSpec,
  He as render,
  G as renderToDom,
  E as validateConfig
};
