const k = {
  version: "v15.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, B = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: k,
    renderToDom: t
  }));
}, U = ({
  type: t,
  intype: e = t,
  data: n,
  indata: o = n,
  targetHtmlId: r,
  intargetHtmlId: s = r,
  columns: l,
  incoumns: a = l,
  showLog: i,
  inshowLog: u = i
} = {}) => ({
  type: "table",
  data: [],
  targetHtmlId: "dom-render-container",
  columns: ["itemName"],
  showLog: !0
}), j = ({ intype: t, indata: e, intargetHtmlId: n, incoumns: o, inshowLog: r }) => {
  if (typeof t != "string" || t.trim() === "")
    throw console.error("type must be a string"), console.log("structureFunc : ", U({ intype: t, indata: e, intargetHtmlId: n, incoumns: o, inshowLog: r })), new Error("type must be a string");
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
}, v = {
  version: "v10.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, O = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: v,
    renderToDom: t
  }));
}, I = "table", W = {
  class: "table table-hover table-striped mb-0"
}, F = [], J = {
  tagName: I,
  attributes: W,
  children: F
}, D = "thead", V = [], R = {
  tagName: D,
  children: V
}, H = "tr", L = [], M = {
  tagName: H,
  children: L
}, K = "th", q = {
  value: ""
}, G = "", z = {
  tagName: K,
  attributes: q,
  textContent: G
}, P = ({ inColumn: t } = {}) => {
  const e = structuredClone(z);
  return e.attributes.value = t, e.textContent = t, e;
}, _ = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(M), n = t.map((o) => P({ inColumn: o }));
  return e.children = n, e;
}, X = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(R), n = [
    _({ inColumns: t })
  ];
  return e.children = n, e;
}, Q = "tbody", Y = [], Z = {
  tagName: Q,
  children: Y
}, tt = "tr", et = [], ot = {
  tagName: tt,
  children: et
}, nt = "td", rt = {
  value: ""
}, st = "", lt = {
  tagName: nt,
  attributes: rt,
  textContent: st
}, at = ({ inValue: t } = {}) => {
  const e = structuredClone(lt);
  return e.attributes.value = t, e.textContent = t, e;
}, ct = ({ inRow: t, inColumns: e = [] } = {}) => {
  const n = structuredClone(ot), o = e.map((r) => {
    const s = Array.isArray(t) ? t[r] : t == null ? void 0 : t[r];
    return at({ inValue: s });
  });
  return n.children = o, n;
}, it = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const n = structuredClone(Z), o = t.map((r) => ct({
    inRow: r,
    inColumns: e
  }));
  return n.children = o, n;
}, ut = "tfoot", dt = {
  class: "table-light"
}, bt = [], mt = {
  tagName: ut,
  attributes: dt,
  children: bt
}, ht = "tr", pt = {
  class: "align-middle"
}, ft = [], gt = {
  tagName: ht,
  attributes: pt,
  children: ft
}, yt = "td", wt = {
  class: "align-middle py-2"
}, Ct = [], $t = {
  tagName: yt,
  attributes: wt,
  children: Ct
}, Nt = "input", At = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Tt = {
  tagName: Nt,
  attributes: At
}, St = ({ inColumn: t } = {}) => {
  const e = structuredClone($t), n = structuredClone(Tt);
  return n.attributes.name = t, n.attributes.placeholder = t, e.children.push(n), e;
}, xt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(gt);
  return e.children = t.map((n) => St({ inColumn: n })), e;
}, Et = ({ inColumns: t = [] } = {}) => xt({ inColumns: t }), kt = "tr", Bt = {
  class: "align-middle"
}, Ut = [], jt = {
  tagName: kt,
  attributes: Bt,
  children: Ut
}, vt = "td", Ot = {
  class: "align-middle py-2"
}, It = [], Wt = {
  tagName: vt,
  attributes: Ot,
  children: It
}, Ft = "input", Jt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Dt = {
  tagName: Ft,
  attributes: Jt
}, Vt = "button", Rt = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, Ht = "Save", Lt = {
  tagName: Vt,
  attributes: Rt,
  textContent: Ht
}, Mt = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const n = structuredClone(Wt), o = structuredClone(Dt);
  return o.attributes.name = t, o.attributes.placeholder = t, n.children.push(o), e && n.children.push(structuredClone(Lt)), n;
}, Kt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(jt);
  return e.children = t.map((n, o) => Mt({
    inColumn: n,
    inSave: o === t.length - 1
  })), e;
}, qt = ({ inColumns: t = [] } = {}) => Kt({ inColumns: t }), Gt = "tr", zt = {
  class: "fw-semibold align-middle"
}, Pt = [], _t = {
  tagName: Gt,
  attributes: zt,
  children: Pt
}, Xt = "td", Qt = {
  class: "align-middle py-2"
}, Yt = "", Zt = {
  tagName: Xt,
  attributes: Qt,
  textContent: Yt
}, te = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], ee = ({ inColumn: t, inIndex: e, inData: n = [] } = {}) => {
  const o = structuredClone(Zt), r = n.map((s) => te(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return o.textContent = r.length ? String(r.reduce((s, l) => s + l, 0)) : e === 0 ? "Total" : "", o;
}, oe = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const n = structuredClone(_t);
  return n.children = t.map(
    (o, r) => ee({ inColumn: o, inIndex: r, inData: e })
  ), n;
}, ne = ({ inColumns: t = [], inData: e = [] } = {}) => oe({ inColumns: t, inData: e }), re = "tr", se = {
  class: "align-middle"
}, le = [], ae = {
  tagName: re,
  attributes: se,
  children: le
}, ce = "td", ie = {
  class: "align-middle py-2"
}, ue = {
  tagName: ce,
  attributes: ie
}, de = () => structuredClone(ue), be = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(ae);
  return e.children = t.map(() => de()), e;
}, me = ({ inColumns: t = [] } = {}) => be({ inColumns: t }), g = {
  inputs: Et,
  inputsWithSave: qt,
  totals: ne,
  empty: me
}, he = ({ inFooter: t = [], inColumns: e = [], inData: n = [] } = {}) => {
  const o = structuredClone(mt);
  return o.children = t.map((r) => {
    if (!Object.hasOwn(g, r))
      throw new Error(`Unknown footer "${r}".`);
    return g[r]({ inColumns: e, inData: n });
  }), o;
}, pe = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: n = []
} = {}) => {
  const o = structuredClone(J), r = [
    X({ inColumns: t }),
    it({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(n))
    throw new TypeError("The footer property must be an array of footer names.");
  return n.length > 0 && r.push(he({
    inFooter: n,
    inColumns: t,
    inData: e
  })), o.children = r, o;
}, fe = (t) => {
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
}, ge = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], ye = (t, e) => {
  const n = ge(e);
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
}, we = (t, e = {}) => (e.showSerial && fe(t), e.showOptions && ye(t, e.showOptions), t), Ce = {
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
    showSerial: !0
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
    showOptions: !0
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
  options: {
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
        type: "button"
      }
    ]
  }
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
    "inputs"
  ],
  options: {}
}, xe = {
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
}, Ee = {
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
}, ke = {
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
}, Be = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Ue = {
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
}, je = {
  table: Ce,
  tableWithSerial: $e,
  tableWithDefaultAction: Ne,
  tableWithCustomActions: Ae,
  tableWithSerialAndActions: Te,
  tableWithFooter: Se,
  tableWithFooterSave: xe,
  tableWithTotals: Ee,
  tableWithMultipleFooters: ke,
  tableHead: Be,
  tableBody: Ue
}, y = ({
  type: t = "table",
  inData: e,
  inColumns: n,
  footer: o = [],
  options: r = {}
} = {}) => {
  if (t === "table") {
    const s = pe({
      inColumns: n,
      inData: e,
      inFooter: o
    });
    return we(s, r);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
y.requests = je;
const w = ({ inItems: t, inRecipe: e, inExecute: n }) => {
  const o = t, r = e, s = n;
  return o.map((l) => f({
    inSource: l,
    inRecipe: r,
    inExecute: s
  })).flat(1 / 0).filter(Boolean);
}, ve = ({ inSource: t, inRecipe: e, inExecute: n }) => {
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
  }) : typeof o == "object" && o !== null ? ve({
    inSource: o,
    inRecipe: r,
    inExecute: s
  }) : o;
}, Oe = ({ inKey: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.alterKey) || n;
}, Ie = ({ inValue: t, inDirective: e, inExecute: n }) => {
  const o = t, r = e, s = n;
  return r && "transform" in r ? f({
    inSource: o,
    inRecipe: r,
    inExecute: s
  }) : o;
}, We = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.valueType) === "array" && !Array.isArray(n) ? [n] : n;
}, Fe = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return o != null && o.valueKey && n && typeof n == "object" ? n[o.valueKey] : n;
}, Je = ({ inSource: t, inTransform: e, inExecute: n }) => {
  const o = t, r = e, s = n, l = {};
  for (const [a, i] of Object.entries(o)) {
    if (!(a in r))
      continue;
    const u = r[a], c = Oe({ inKey: a, inDirective: u });
    let m = i;
    m = Ie({
      inValue: m,
      inDirective: u,
      inExecute: s
    }), m = We({ inValue: m, inDirective: u }), m = Fe({ inValue: m, inDirective: u }), l[c] = m;
  }
  return l;
};
function C(t, e) {
  for (const n in t)
    typeof t[n] == "object" && t[n] !== null ? C(t[n], e) : typeof t[n] == "string" && t[n] === "${}" && (t[n] = e);
  return t;
}
const De = ({ inSource: t, inOperation: e, inExecute: n }) => {
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
}, Ve = ({ inSource: t, inTemplate: e }) => {
  const n = t;
  let o = [];
  for (const [r, s] of Object.entries(n)) {
    const l = structuredClone(e);
    l.textContent = s, o.push(l);
  }
  return o;
}, Re = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Ve({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = a;
  }
  return o;
}, He = ({ inSource: t, inTemplate: e }) => t.map((o) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Le({
    inSource: o,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Le = ({ inSource: t, inTemplate: e }) => {
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
    const a = He({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = a;
  }
  return o;
}, Ke = ({ inSource: t, inTemplate: e }) => t.map((r) => {
  const s = structuredClone(e);
  return s.textContent = r == null ? void 0 : r.columnName, s;
}), qe = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Ke({
      inSource: o[s],
      inTemplate: l == null ? void 0 : l.cell
    });
    o[s] = l == null ? void 0 : l.row, o[s].children = a;
  }
  return o;
}, Ge = ({ inSource: t, inTemplate: e }) => t.map((o) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = ze({
    inSource: o,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), ze = ({ inSource: t, inTemplate: e }) => {
  const n = t;
  let o = [];
  for (const [r, s] of Object.entries(n)) {
    const l = structuredClone(e);
    l.textContent = s, o.push(l);
  }
  return o;
}, Pe = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Ge({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = l == null ? void 0 : l.body, o[s].children = a;
  }
  return o;
}, _e = ({ inSource: t, inTemplate: e }) => t.map((o) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Xe({
    inSource: o,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Xe = ({ inSource: t, inTemplate: e }) => {
  const n = t;
  let o = [];
  for (const [r, s] of Object.entries(n)) {
    const l = structuredClone(e);
    l.textContent = s, o.push(l);
  }
  return o;
}, Qe = ({ inSource: t, inBuild: e, inExecute: n }) => {
  const o = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = _e({
      inSource: o[s],
      inTemplate: l
    });
    o[s] = l == null ? void 0 : l.body, o[s].children = a;
  }
  return o;
}, Ye = ({ inSource: t, inTransform: e, inExecute: n }) => {
  const o = e, r = {};
  for (let [s, l] of Object.entries(o))
    console.log("aaaaaaaaa : ", s);
  return r;
}, b = ({ inSource: t, inRecipe: e }) => {
  let n = t;
  const o = e;
  return o && typeof o == "object" && "transform" in o && (n = Je({
    inSource: n,
    inTransform: o.transform,
    inExecute: b
  })), o && typeof o == "object" && "operation" in o && (n = De({
    inSource: n,
    inOperation: o.operation,
    inExecute: b
  })), o && typeof o == "object" && "build" in o && (n = Re({
    inSource: n,
    inBuild: o == null ? void 0 : o.build,
    inExecute: b
  })), o && typeof o == "object" && "buildCollection" in o && (n = Me({
    inSource: n,
    inBuild: o == null ? void 0 : o.buildCollection,
    inExecute: b
  })), o && typeof o == "object" && "buildArray" in o && (n = qe({
    inSource: n,
    inBuild: o == null ? void 0 : o.buildArray,
    inExecute: b
  })), o && typeof o == "object" && "buildBody" in o && (n = Pe({
    inSource: n,
    inBuild: o == null ? void 0 : o.buildBody,
    inExecute: b
  })), o && typeof o == "object" && "objectToArray" in o && (n = Qe({
    inSource: n,
    inBuild: o == null ? void 0 : o.objectToArray,
    inExecute: b
  })), o && typeof o == "object" && "spec" in o && (n = Ye({
    inSource: n,
    inTransform: o == null ? void 0 : o.spec,
    inExecute: b
  })), n;
}, $ = (t, e) => f({
  inSource: t,
  inRecipe: e,
  inExecute: b
}), Ze = {
  children: ""
}, to = {
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
}, eo = {
  transform: Ze,
  operation: to
}, N = ({
  inData: t
}) => {
  let n = $({
    children: t
  }, eo);
  return n == null ? void 0 : n.children;
}, oo = "select", no = {
  id: "LedgerName"
}, ro = [], so = {
  tagName: oo,
  attributes: no,
  children: ro
}, lo = ({
  inData: t
}) => {
  let n = N({
    inData: t
  });
  const o = structuredClone(so);
  return o.children = n, o;
}, ao = "table", co = {
  class: "table table-hover table-striped align-middle border mb-0"
}, io = [
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
], uo = {
  tagName: ao,
  attributes: co,
  children: io
}, bo = {
  columns: {
    row: {
      tagName: "tr"
    },
    cell: {
      tagName: "th",
      textContent: "${}"
    }
  }
}, mo = {
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
}, ho = {
  buildArray: bo,
  buildBody: mo
}, po = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: n = []
} = {}) => {
  const o = structuredClone(uo), r = t.map((l) => ({
    columnName: l
  })), s = $({ columns: r, rows: e }, ho);
  return o.children[0].children = [s == null ? void 0 : s.columns], o.children[1] = s == null ? void 0 : s.rows, o;
}, fo = (t) => {
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
}, go = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], yo = (t, e) => {
  const n = go(e);
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
}, wo = (t, e = {}) => (e.showSerial && fo(t), e.showOptions && yo(t, e.showOptions), t), Co = {
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
    showSerial: !0
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
    showOptions: !0
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
  options: {
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
        type: "button"
      }
    ]
  }
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
    "inputs"
  ],
  options: {}
}, xo = {
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
}, Eo = {
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
}, ko = {
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
}, Bo = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Uo = {
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
}, jo = {
  table: Co,
  tableWithSerial: $o,
  tableWithDefaultAction: No,
  tableWithCustomActions: Ao,
  tableWithSerialAndActions: To,
  tableWithFooter: So,
  tableWithFooterSave: xo,
  tableWithTotals: Eo,
  tableWithMultipleFooters: ko,
  tableHead: Bo,
  tableBody: Uo
}, A = ({
  inData: t,
  inColumns: e,
  footer: n = [],
  options: o
} = {}) => {
  const r = po({
    inColumns: e,
    inData: t,
    inFooter: n
  });
  return o ? wo(r, o) : r;
};
A.requests = jo;
const vo = {
  table: y,
  select: lo,
  selectOptionsOnly: N,
  tableFromSpec: A
}, T = ({
  type: t = "table",
  data: e,
  columns: n,
  options: o
}) => {
  const s = vo[t];
  return s({
    inColumns: n,
    inData: e,
    options: o
  });
};
O(T);
const Oo = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Io = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const n = {
    meta: Oo,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = n, globalThis.ks.jsonToTag = n;
}, Wo = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : x(t), S = (t) => Array.isArray(t) ? t.map(Wo).flat(1 / 0).filter(Boolean) : [], Fo = (t) => (t == null, t), Jo = "http://www.w3.org/2000/svg", Do = /* @__PURE__ */ new Set([
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
]), Vo = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const n = document.createElement("input");
    return n.type = "checkbox", n;
  }
  return Do.has(e) ? document.createElementNS(Jo, e) : document.createElement(e);
}, Ro = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), Ho = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Lo = "http://www.w3.org/1999/xlink", Mo = ({ inElement: t, inAttributes: e }) => {
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
            n.setAttributeNS(Lo, "href", a);
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
}, Ko = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const n = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return n.length && t.classList.add(...n), t;
}, qo = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = Vo({ inTagName: t.tagName });
  if (!e) return null;
  if (Ro({
    inElement: e,
    inTextContent: Fo(t.textContent),
    inTagName: t.tagName
  }), Ho({
    inElement: e,
    inProperties: t.properties
  }), Mo({
    inElement: e,
    inAttributes: t.attributes
  }), Ko({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const n = S(t.children);
    n.length && e.append(...n);
  }
  return e;
}, x = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? S(t) : typeof t == "object" ? qo(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, Go = "./tags.schema.json", zo = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Po = {
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
}, _o = {
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
}, Xo = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Qo = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Yo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Zo = {
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
}, tn = {
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
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, sn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, ln = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, an = {
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
    "tr"
  ]
}, bn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, mn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, hn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, pn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, fn = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, gn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, yn = {
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
}, wn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Cn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, $n = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Nn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, An = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Tn = {
  $schema: Go,
  div: zo,
  input: Po,
  checkbox: _o,
  colgroup: Xo,
  col: Qo,
  label: Yo,
  form: Zo,
  select: tn,
  p: en,
  h1: on,
  h2: nn,
  span: rn,
  img: sn,
  button: ln,
  table: an,
  thead: cn,
  tbody: un,
  tfoot: dn,
  tr: bn,
  th: mn,
  td: hn,
  datalist: pn,
  option: fn,
  header: gn,
  a: yn,
  i: wn,
  small: Cn,
  ul: $n,
  li: Nn,
  hr: An
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
}, Sn = ({ inTagsFound: t, inAllowedTags: e }) => {
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
}, xn = ({ inSpec: t, inTags: e = Tn } = {}) => {
  const n = t, o = e, r = p({ inSpec: n }), s = Sn({
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
Io({
  inFuncDefinition: E,
  inReviewSpec: xn
});
const En = ({
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
}, kn = ({
  type: t = "table",
  targetHtmlId: e,
  data: n,
  classToApply: o,
  columns: r,
  appendPosition: s,
  showLog: l = !1
} = {}) => {
  const a = t, i = e, u = n, c = r;
  j({
    intype: a,
    indata: u,
    intargetHtmlId: i,
    incoumns: c,
    inshowLog: l
  });
  const h = En({
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
B(kn);
export {
  kn as default
};
