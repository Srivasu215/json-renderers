const k = {
  version: "v15.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, B = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: k,
    renderToDom: t
  }));
}, U = ({ intype: t, indata: e, intargetHtmlId: n, incoumns: o, inshowLog: r }) => {
  if (typeof t != "string" || t.trim() === "")
    throw console.error("type must be a string"), new Error("type must be a string");
  if (!Array.isArray(e))
    throw console.error("data must be an Array"), new Error("data must be an Array");
  if (typeof n != "string" || !n.trim())
    throw console.error("targetHtmlId must be a non-empty string"), new TypeError("targetHtmlId must be a non-empty string");
  if (!Array.isArray(o))
    throw console.error("columns must be an array"), new TypeError("columns must be an array");
  if (typeof r != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  if (r !== !0)
    throw console.error("showLog must be true"), new TypeError("showLog must be true");
  return !0;
}, j = {
  version: "v10.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, v = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: j,
    renderToDom: t
  }));
}, O = "table", I = {
  class: "table table-hover table-striped mb-0"
}, W = [], F = {
  tagName: O,
  attributes: I,
  children: W
}, J = "thead", D = [], V = {
  tagName: J,
  children: D
}, R = "tr", H = [], M = {
  tagName: R,
  children: H
}, L = "th", K = {
  value: ""
}, q = "", G = {
  tagName: L,
  attributes: K,
  textContent: q
}, z = ({ inColumn: t } = {}) => {
  const e = structuredClone(G);
  return e.attributes.value = t, e.textContent = t, e;
}, P = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(M), n = t.map((o) => z({ inColumn: o }));
  return e.children = n, e;
}, _ = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(V), n = [
    P({ inColumns: t })
  ];
  return e.children = n, e;
}, X = "tbody", Q = [], Y = {
  tagName: X,
  children: Q
}, Z = "tr", tt = [], et = {
  tagName: Z,
  children: tt
}, ot = "td", nt = {
  value: ""
}, rt = "", st = {
  tagName: ot,
  attributes: nt,
  textContent: rt
}, lt = ({ inValue: t } = {}) => {
  const e = structuredClone(st);
  return e.attributes.value = t, e.textContent = t, e;
}, at = ({ inRow: t, inColumns: e = [] } = {}) => {
  const n = structuredClone(et), o = e.map((r) => {
    const s = Array.isArray(t) ? t[r] : t == null ? void 0 : t[r];
    return lt({ inValue: s });
  });
  return n.children = o, n;
}, ct = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const n = structuredClone(Y), o = t.map((r) => at({
    inRow: r,
    inColumns: e
  }));
  return n.children = o, n;
}, it = "tfoot", ut = {
  class: "table-light"
}, dt = [], bt = {
  tagName: it,
  attributes: ut,
  children: dt
}, mt = "tr", ht = {
  class: "align-middle"
}, pt = [], ft = {
  tagName: mt,
  attributes: ht,
  children: pt
}, gt = "td", yt = {
  class: "align-middle py-2"
}, wt = [], Ct = {
  tagName: gt,
  attributes: yt,
  children: wt
}, $t = "input", Nt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, At = {
  tagName: $t,
  attributes: Nt
}, Tt = ({ inColumn: t } = {}) => {
  const e = structuredClone(Ct), n = structuredClone(At);
  return n.attributes.name = t, n.attributes.placeholder = t, e.children.push(n), e;
}, St = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(ft);
  return e.children = t.map((n) => Tt({ inColumn: n })), e;
}, xt = ({ inColumns: t = [] } = {}) => St({ inColumns: t }), Et = "tr", kt = {
  class: "align-middle"
}, Bt = [], Ut = {
  tagName: Et,
  attributes: kt,
  children: Bt
}, jt = "td", vt = {
  class: "align-middle py-2"
}, Ot = [], It = {
  tagName: jt,
  attributes: vt,
  children: Ot
}, Wt = "input", Ft = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Jt = {
  tagName: Wt,
  attributes: Ft
}, Dt = "button", Vt = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, Rt = "Save", Ht = {
  tagName: Dt,
  attributes: Vt,
  textContent: Rt
}, Mt = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const n = structuredClone(It), o = structuredClone(Jt);
  return o.attributes.name = t, o.attributes.placeholder = t, n.children.push(o), e && n.children.push(structuredClone(Ht)), n;
}, Lt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Ut);
  return e.children = t.map((n, o) => Mt({
    inColumn: n,
    inSave: o === t.length - 1
  })), e;
}, Kt = ({ inColumns: t = [] } = {}) => Lt({ inColumns: t }), qt = "tr", Gt = {
  class: "fw-semibold align-middle"
}, zt = [], Pt = {
  tagName: qt,
  attributes: Gt,
  children: zt
}, _t = "td", Xt = {
  class: "align-middle py-2"
}, Qt = "", Yt = {
  tagName: _t,
  attributes: Xt,
  textContent: Qt
}, Zt = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], te = ({ inColumn: t, inIndex: e, inData: n = [] } = {}) => {
  const o = structuredClone(Yt), r = n.map((s) => Zt(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return o.textContent = r.length ? String(r.reduce((s, l) => s + l, 0)) : e === 0 ? "Total" : "", o;
}, ee = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const n = structuredClone(Pt);
  return n.children = t.map(
    (o, r) => te({ inColumn: o, inIndex: r, inData: e })
  ), n;
}, oe = ({ inColumns: t = [], inData: e = [] } = {}) => ee({ inColumns: t, inData: e }), ne = "tr", re = {
  class: "align-middle"
}, se = [], le = {
  tagName: ne,
  attributes: re,
  children: se
}, ae = "td", ce = {
  class: "align-middle py-2"
}, ie = {
  tagName: ae,
  attributes: ce
}, ue = () => structuredClone(ie), de = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(le);
  return e.children = t.map(() => ue()), e;
}, be = ({ inColumns: t = [] } = {}) => de({ inColumns: t }), g = {
  inputs: xt,
  inputsWithSave: Kt,
  totals: oe,
  empty: be
}, me = ({ inFooter: t = [], inColumns: e = [], inData: n = [] } = {}) => {
  const o = structuredClone(bt);
  return o.children = t.map((r) => {
    if (!Object.hasOwn(g, r))
      throw new Error(`Unknown footer "${r}".`);
    return g[r]({ inColumns: e, inData: n });
  }), o;
}, he = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: n = []
} = {}) => {
  const o = structuredClone(F), r = [
    _({ inColumns: t }),
    ct({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(n))
    throw new TypeError("The footer property must be an array of footer names.");
  return n.length > 0 && r.push(me({
    inFooter: n,
    inColumns: t,
    inData: e
  })), o.children = r, o;
}, pe = (t) => {
  const [e, n] = t.children;
  e.children[0].children.unshift({
    tagName: "th",
    textContent: "#"
  }), n.children.forEach((o, r) => {
    o.children.unshift({
      tagName: "td",
      textContent: String(r + 1)
    });
  });
}, fe = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], ge = (t, e) => {
  const n = fe(e);
  if (n.length === 0) return;
  const [o, r] = t.children;
  o.children[0].children.push({
    tagName: "th",
    textContent: "Actions"
  }), r.children.forEach((s) => {
    s.children.push({
      tagName: "td",
      children: n.map((l) => ({
        tagName: "button",
        attributes: { type: l.type || "button" },
        textContent: l.label
      }))
    });
  });
}, ye = (t, e = {}) => (e.showSerial && pe(t), e.showOptions && ge(t, e.showOptions), t), we = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Ce = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showSerial: !0
  }
}, $e = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showOptions: !0
  }
}, Ne = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showOptions: [
      {
        label: "Show",
        type: "button"
      },
      {
        label: "Edit",
        type: "button"
      }
    ]
  }
}, Ae = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
        type: "button"
      }
    ]
  }
}, Te = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputs"
  ],
  options: {}
}, Se = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputsWithSave"
  ],
  options: {}
}, xe = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "2"
    },
    {
      itemName: "0.11-25",
      baseUnit: "3"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "totals"
  ],
  options: {}
}, Ee = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "2"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputs",
    "totals",
    "inputsWithSave",
    "empty"
  ],
  options: {}
}, ke = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Be = {
  type: "tableBody",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Ue = {
  table: we,
  tableWithSerial: Ce,
  tableWithDefaultAction: $e,
  tableWithCustomActions: Ne,
  tableWithSerialAndActions: Ae,
  tableWithFooter: Te,
  tableWithFooterSave: Se,
  tableWithTotals: xe,
  tableWithMultipleFooters: Ee,
  tableHead: ke,
  tableBody: Be
}, y = ({
  type: t = "table",
  inData: e,
  inColumns: n,
  footer: o = [],
  options: r = {}
} = {}) => {
  if (t === "table") {
    const s = he({
      inColumns: n,
      inData: e,
      inFooter: o
    });
    return ye(s, r);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
y.requests = Ue;
const w = ({ inItems: t, inRecipe: e, inExecute: n }) => {
  const o = t, r = e, s = n;
  return o.map((l) => f({
    inSource: l,
    inRecipe: r,
    inExecute: s
  })).flat(1 / 0).filter(Boolean);
}, je = ({ inSource: t, inRecipe: e, inExecute: n }) => {
  const o = t, r = e, s = n;
  let l = o;
  typeof s == "function" && (l = s({
    inSource: o,
    inRecipe: r
  }));
  for (const [a, i] of Object.entries(l))
    Array.isArray(i) && r && a in r && (l[a] = w({
      inItems: i,
      inRecipe: r[a],
      inExecute: s
    }));
  return l;
}, f = ({ inSource: t, inRecipe: e, inExecute: n }) => {
  const o = t, r = e, s = n;
  return Array.isArray(o) ? w({
    inItems: o,
    inRecipe: r,
    inExecute: s
  }) : typeof o == "object" && o !== null ? je({
    inSource: o,
    inRecipe: r,
    inExecute: s
  }) : o;
}, ve = ({ inKey: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.alterKey) || n;
}, Oe = ({ inValue: t, inDirective: e, inExecute: n }) => {
  const o = t, r = e, s = n;
  return r && "transform" in r ? f({
    inSource: o,
    inRecipe: r,
    inExecute: s
  }) : o;
}, Ie = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.valueType) === "array" && !Array.isArray(n) ? [n] : n;
}, We = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return o != null && o.valueKey && n && typeof n == "object" ? n[o.valueKey] : n;
}, Fe = ({ inSource: t, inTransform: e, inExecute: n }) => {
  const o = t, r = e, s = n, l = {};
  for (const [a, i] of Object.entries(o)) {
    if (!(a in r))
      continue;
    const u = r[a], c = ve({ inKey: a, inDirective: u });
    let m = i;
    m = Oe({
      inValue: m,
      inDirective: u,
      inExecute: s
    }), m = Ie({ inValue: m, inDirective: u }), m = We({ inValue: m, inDirective: u }), l[c] = m;
  }
  return l;
};
function C(t, e) {
  for (const n in t)
    typeof t[n] == "object" && t[n] !== null ? C(t[n], e) : typeof t[n] == "string" && t[n] === "${}" && (t[n] = e);
  return t;
}
const Je = ({ inSource: t, inOperation: e, inExecute: n }) => {
  const o = t, r = e;
  for (const [s, l] of Object.entries(r))
    if ("operationType" in l && l.operationType === "loopArray" && s in o) {
      const a = o[s].map((i) => {
        const u = structuredClone(l == null ? void 0 : l.template);
        return C(u, i), u;
      });
      o[s] = a;
    }
  return o;
}, De = ({ inSource: t, inTemplate: e }) => {
  const n = t;
  let o = [];
  for (const [r, s] of Object.entries(n)) {
    const l = structuredClone(e);
    l.textContent = s, o.push(l);
  }
  return o;
}, Ve = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = De({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = a;
  }
  return o;
}, Re = ({ inSource: t, inTemplate: e }) => t.map((o) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = He({
    inSource: o,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), He = ({ inSource: t, inTemplate: e }) => {
  const n = t;
  let o = [];
  for (const [r, s] of Object.entries(n)) {
    const l = structuredClone(e);
    l.textContent = s, o.push(l);
  }
  return o;
}, Me = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Re({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = a;
  }
  return o;
}, Le = ({ inSource: t, inTemplate: e }) => t.map((r) => {
  const s = structuredClone(e);
  return s.textContent = r == null ? void 0 : r.columnName, s;
}), Ke = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Le({
      inSource: o[s],
      inTemplate: l == null ? void 0 : l.cell
    });
    o[s] = l == null ? void 0 : l.row, o[s].children = a;
  }
  return o;
}, qe = ({ inSource: t, inTemplate: e }) => t.map((o) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Ge({
    inSource: o,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Ge = ({ inSource: t, inTemplate: e }) => {
  const n = t;
  let o = [];
  for (const [r, s] of Object.entries(n)) {
    const l = structuredClone(e);
    l.textContent = s, o.push(l);
  }
  return o;
}, ze = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = qe({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = l == null ? void 0 : l.body, o[s].children = a;
  }
  return o;
}, Pe = ({ inSource: t, inTemplate: e }) => t.map((o) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = _e({
    inSource: o,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), _e = ({ inSource: t, inTemplate: e }) => {
  const n = t;
  let o = [];
  for (const [r, s] of Object.entries(n)) {
    const l = structuredClone(e);
    l.textContent = s, o.push(l);
  }
  return o;
}, Xe = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Pe({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = l == null ? void 0 : l.body, o[s].children = a;
  }
  return o;
}, Qe = ({ inSource: t, inTransform: e, inExecute: n }) => {
  const o = e, r = {};
  for (let [s, l] of Object.entries(o))
    console.log("aaaaaaaaa : ", s);
  return r;
}, b = ({ inSource: t, inRecipe: e }) => {
  let n = t;
  const o = e;
  return o && typeof o == "object" && "transform" in o && (n = Fe({
    inSource: n,
    inTransform: o.transform,
    inExecute: b
  })), o && typeof o == "object" && "operation" in o && (n = Je({
    inSource: n,
    inOperation: o.operation,
    inExecute: b
  })), o && typeof o == "object" && "build" in o && (n = Ve({
    inSource: n,
    inBuild: o == null ? void 0 : o.build,
    inExecute: b
  })), o && typeof o == "object" && "buildCollection" in o && (n = Me({
    inSource: n,
    inBuild: o == null ? void 0 : o.buildCollection,
    inExecute: b
  })), o && typeof o == "object" && "buildArray" in o && (n = Ke({
    inSource: n,
    inBuild: o == null ? void 0 : o.buildArray,
    inExecute: b
  })), o && typeof o == "object" && "buildBody" in o && (n = ze({
    inSource: n,
    inBuild: o == null ? void 0 : o.buildBody,
    inExecute: b
  })), o && typeof o == "object" && "objectToArray" in o && (n = Xe({
    inSource: n,
    inBuild: o == null ? void 0 : o.objectToArray,
    inExecute: b
  })), o && typeof o == "object" && "spec" in o && (n = Qe({
    inSource: n,
    inTransform: o == null ? void 0 : o.spec,
    inExecute: b
  })), n;
}, $ = (t, e) => f({
  inSource: t,
  inRecipe: e,
  inExecute: b
}), Ye = {
  children: ""
}, Ze = {
  children: {
    operationType: "loopArray",
    template: {
      tagName: "option",
      attributes: {
        value: "${}"
      },
      textContent: "${}"
    }
  }
}, to = {
  transform: Ye,
  operation: Ze
}, N = ({
  inData: t
}) => {
  let n = $({
    children: t
  }, to);
  return n == null ? void 0 : n.children;
}, eo = "select", oo = {
  id: "LedgerName"
}, no = [], ro = {
  tagName: eo,
  attributes: oo,
  children: no
}, so = ({
  inData: t
}) => {
  let n = N({
    inData: t
  });
  const o = structuredClone(ro);
  return o.children = n, o;
}, lo = "table", ao = {
  class: "table table-hover table-striped align-middle border mb-0"
}, co = [
  {
    tagName: "thead",
    attributes: {
      class: "table-dark"
    },
    children: [
      {
        tagName: "tr",
        children: []
      }
    ]
  },
  {
    tagName: "tbody",
    children: []
  }
], io = {
  tagName: lo,
  attributes: ao,
  children: co
}, uo = {
  columns: {
    row: {
      tagName: "tr"
    },
    cell: {
      tagName: "th",
      textContent: "${}"
    }
  }
}, bo = {
  rows: {
    body: {
      tagName: "tbody"
    },
    row: {
      tagName: "tr"
    },
    cell: {
      tagName: "td",
      textContent: "${}"
    }
  }
}, mo = {
  buildArray: uo,
  buildBody: bo
}, ho = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: n = []
} = {}) => {
  const o = structuredClone(io), r = t.map((l) => ({
    columnName: l
  })), s = $({ columns: r, rows: e }, mo);
  return o.children[0].children = [s == null ? void 0 : s.columns], o.children[1] = s == null ? void 0 : s.rows, o;
}, po = (t) => {
  const [e, n] = t.children;
  console.log("aaaaaaa--", e.children[0]), e.children[0].children.unshift({
    tagName: "th",
    textContent: "#"
  }), n.children.forEach((o, r) => {
    o.children.unshift({
      tagName: "td",
      textContent: String(r + 1)
    });
  });
}, fo = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], go = (t, e) => {
  const n = fo(e);
  if (n.length === 0) return;
  const [o, r] = t.children;
  o.children[0].children.push({
    tagName: "th",
    textContent: "Actions"
  }), r.children.forEach((s) => {
    s.children.push({
      tagName: "td",
      children: n.map((l) => ({
        tagName: "button",
        attributes: { type: l.type || "button" },
        textContent: l.label
      }))
    });
  });
}, yo = (t, e = {}) => (e.showSerial && po(t), e.showOptions && go(t, e.showOptions), t), wo = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Co = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showSerial: !0
  }
}, $o = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showOptions: !0
  }
}, No = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showOptions: [
      {
        label: "Show",
        type: "button"
      },
      {
        label: "Edit",
        type: "button"
      }
    ]
  }
}, Ao = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
        type: "button"
      }
    ]
  }
}, To = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputs"
  ],
  options: {}
}, So = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputsWithSave"
  ],
  options: {}
}, xo = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "2"
    },
    {
      itemName: "0.11-25",
      baseUnit: "3"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "totals"
  ],
  options: {}
}, Eo = {
  type: "table",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "2"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  footer: [
    "inputs",
    "totals",
    "inputsWithSave",
    "empty"
  ],
  options: {}
}, ko = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Bo = {
  type: "tableBody",
  data: [
    {
      itemName: "0.09/30mm",
      baseUnit: "kgs"
    }
  ],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Uo = {
  table: wo,
  tableWithSerial: Co,
  tableWithDefaultAction: $o,
  tableWithCustomActions: No,
  tableWithSerialAndActions: Ao,
  tableWithFooter: To,
  tableWithFooterSave: So,
  tableWithTotals: xo,
  tableWithMultipleFooters: Eo,
  tableHead: ko,
  tableBody: Bo
}, A = ({
  inData: t,
  inColumns: e,
  footer: n = [],
  options: o
} = {}) => {
  const r = ho({
    inColumns: e,
    inData: t,
    inFooter: n
  });
  return o ? yo(r, o) : r;
};
A.requests = Uo;
const jo = {
  table: y,
  select: so,
  selectOptionsOnly: N,
  tableFromSpec: A
}, T = ({
  type: t = "table",
  data: e,
  columns: n,
  options: o
}) => {
  const s = jo[t];
  return s({
    inColumns: n,
    inData: e,
    options: o
  });
};
v(T);
const vo = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Oo = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const n = {
    meta: vo,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = n, globalThis.ks.jsonToTag = n;
}, Io = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : x(t), S = (t) => Array.isArray(t) ? t.map(Io).flat(1 / 0).filter(Boolean) : [], Wo = (t) => (t == null, t), Fo = "http://www.w3.org/2000/svg", Jo = /* @__PURE__ */ new Set([
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
]), Do = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const n = document.createElement("input");
    return n.type = "checkbox", n;
  }
  return Jo.has(e) ? document.createElementNS(Fo, e) : document.createElement(e);
}, Vo = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), Ro = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Ho = "http://www.w3.org/1999/xlink", Mo = ({ inElement: t, inAttributes: e }) => {
  const n = t, o = e;
  if (!n || !o || typeof o != "object")
    return n;
  const r = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([s, l]) => {
    if (s === "class") {
      r ? n.setAttribute("class", String(l)) : n.className = l;
      return;
    }
    if (s === "xlink:href" || s === "href") {
      if (l != null) {
        const a = String(l);
        if (r)
          try {
            n.setAttributeNS(Ho, "href", a);
          } catch {
          }
        n.setAttribute("href", a), n.setAttribute("xlink:href", a);
      }
      return;
    }
    if (typeof l == "boolean") {
      l ? n.setAttribute(s, "") : n.removeAttribute(s);
      return;
    }
    l != null && n.setAttribute(s, String(l));
  }), n;
}, Lo = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const n = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return n.length && t.classList.add(...n), t;
}, Ko = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = Do({ inTagName: t.tagName });
  if (!e) return null;
  if (Vo({
    inElement: e,
    inTextContent: Wo(t.textContent),
    inTagName: t.tagName
  }), Ro({
    inElement: e,
    inProperties: t.properties
  }), Mo({
    inElement: e,
    inAttributes: t.attributes
  }), Lo({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const n = S(t.children);
    n.length && e.append(...n);
  }
  return e;
}, x = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? S(t) : typeof t == "object" ? Ko(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, qo = "./tags.schema.json", Go = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, zo = {
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
}, Po = {
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
}, _o = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Xo = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Qo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Yo = {
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
}, Zo = {
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
}, tn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, en = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, on = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, nn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, rn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, sn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, ln = {
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
}, an = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, cn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, un = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, dn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, bn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, mn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, hn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, pn = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, fn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, gn = {
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
}, yn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, wn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Cn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, $n = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Nn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, An = {
  $schema: qo,
  div: Go,
  input: zo,
  checkbox: Po,
  colgroup: _o,
  col: Xo,
  label: Qo,
  form: Yo,
  select: Zo,
  p: tn,
  h1: en,
  h2: on,
  span: nn,
  img: rn,
  button: sn,
  table: ln,
  thead: an,
  tbody: cn,
  tfoot: un,
  tr: dn,
  th: bn,
  td: mn,
  datalist: hn,
  option: pn,
  header: fn,
  a: gn,
  i: yn,
  small: wn,
  ul: Cn,
  li: $n,
  hr: Nn
}, p = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((o) => p({ inSpec: o }));
  if (typeof e != "object") return [];
  const n = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && n.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((o) => {
    const r = p({ inSpec: o });
    n.push(...r);
  }), n;
}, Tn = ({ inTagsFound: t, inAllowedTags: e }) => {
  const n = t ?? [], o = e ?? {}, r = new Set(
    Object.keys(o).filter((c) => c !== "$schema").map((c) => c.toLowerCase())
  ), s = {}, l = [], a = [];
  n.forEach((c) => {
    s[c] = (s[c] || 0) + 1, r.has(c) ? l.includes(c) || l.push(c) : a.includes(c) || a.push(c);
  });
  const i = n.length, u = a.length === 0;
  return {
    totalTags: i,
    tagCounts: s,
    uniqueTags: Object.keys(s),
    recognizedTags: l,
    unrecognizedTags: a,
    areAllTagsPresent: u
  };
}, Sn = ({ inSpec: t, inTags: e = An } = {}) => {
  const n = t, o = e, r = p({ inSpec: n }), s = Tn({
    inTagsFound: r,
    inAllowedTags: o
  });
  return {
    areAllTagsPresent: s.areAllTagsPresent,
    totalTags: s.totalTags,
    tagCounts: s.tagCounts,
    uniqueTags: s.uniqueTags,
    recognizedTags: s.recognizedTags,
    unrecognizedTags: s.unrecognizedTags
  };
}, E = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return x(e);
};
Oo({
  inFuncDefinition: E,
  inReviewSpec: Sn
});
const xn = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: n,
  inData: o,
  showLog: r
} = {}) => {
  const s = t, l = o ?? [], a = e;
  r && console.log("buildSpec 1 :", s, l.localColumns);
  let u = T({
    type: n,
    data: l,
    columns: a
  });
  const c = E(u);
  return console.log("buildSpec 2 :", u, c), r && console.log("buildSpec 3 :", c), c;
}, En = ({
  type: t = "table",
  targetHtmlId: e,
  data: n,
  classToApply: o,
  columns: r,
  appendPosition: s,
  showLog: l = !1
} = {}) => {
  const a = t, i = e, u = n, c = r;
  U({
    intype: a,
    indata: u,
    intargetHtmlId: i,
    incoumns: c,
    inshowLog: l
  });
  const h = xn({
    inTargetHtmlId: i,
    inColumns: c,
    showLog: l,
    inData: u,
    type: a
  });
  l && console.log("showLog 2 :", h);
  const d = document.getElementById(i);
  return l && console.log("showLog 3 :", d), Array.isArray(h) || h instanceof NodeList || h instanceof HTMLCollection ? s === "prepend" ? d.prepend(...h) : d.append(...h) : s === "prepend" ? d.prepend(h) : (d && (d.innerHTML = ""), d.append(h)), l && console.log("showLog 5 :", d), d;
};
B(En);
export {
  En as default
};
