const E = {
  version: "v15.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, k = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: E,
    renderToDom: t
  }));
}, B = ({ intype: t, indata: e }) => {
  if (typeof t != "string" || t.trim() === "")
    throw console.error("type must be a string"), new Error("type must be a string");
  if (!Array.isArray(e))
    throw console.error("data must be an Array"), new Error("data must be an Array");
  return !0;
}, U = {
  version: "v10.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, j = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: U,
    renderToDom: t
  }));
}, v = "table", O = {
  class: "table table-hover table-striped mb-0"
}, W = [], I = {
  tagName: v,
  attributes: O,
  children: W
}, F = "thead", J = [], D = {
  tagName: F,
  children: J
}, V = "tr", R = [], H = {
  tagName: V,
  children: R
}, M = "th", K = {
  value: ""
}, q = "", G = {
  tagName: M,
  attributes: K,
  textContent: q
}, z = ({ inColumn: t } = {}) => {
  const e = structuredClone(G);
  return e.attributes.value = t, e.textContent = t, e;
}, L = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(H), o = t.map((n) => z({ inColumn: n }));
  return e.children = o, e;
}, P = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(D), o = [
    L({ inColumns: t })
  ];
  return e.children = o, e;
}, _ = "tbody", X = [], Q = {
  tagName: _,
  children: X
}, Y = "tr", Z = [], tt = {
  tagName: Y,
  children: Z
}, et = "td", nt = {
  value: ""
}, ot = "", rt = {
  tagName: et,
  attributes: nt,
  textContent: ot
}, st = ({ inValue: t } = {}) => {
  const e = structuredClone(rt);
  return e.attributes.value = t, e.textContent = t, e;
}, lt = ({ inRow: t, inColumns: e = [] } = {}) => {
  const o = structuredClone(tt), n = e.map((r) => {
    const s = Array.isArray(t) ? t[r] : t == null ? void 0 : t[r];
    return st({ inValue: s });
  });
  return o.children = n, o;
}, at = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const o = structuredClone(Q), n = t.map((r) => lt({
    inRow: r,
    inColumns: e
  }));
  return o.children = n, o;
}, ct = "tfoot", it = {
  class: "table-light"
}, ut = [], dt = {
  tagName: ct,
  attributes: it,
  children: ut
}, bt = "tr", mt = {
  class: "align-middle"
}, ht = [], pt = {
  tagName: bt,
  attributes: mt,
  children: ht
}, ft = "td", gt = {
  class: "align-middle py-2"
}, yt = [], wt = {
  tagName: ft,
  attributes: gt,
  children: yt
}, Ct = "input", $t = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Nt = {
  tagName: Ct,
  attributes: $t
}, At = ({ inColumn: t } = {}) => {
  const e = structuredClone(wt), o = structuredClone(Nt);
  return o.attributes.name = t, o.attributes.placeholder = t, e.children.push(o), e;
}, St = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(pt);
  return e.children = t.map((o) => At({ inColumn: o })), e;
}, Tt = ({ inColumns: t = [] } = {}) => St({ inColumns: t }), xt = "tr", Et = {
  class: "align-middle"
}, kt = [], Bt = {
  tagName: xt,
  attributes: Et,
  children: kt
}, Ut = "td", jt = {
  class: "align-middle py-2"
}, vt = [], Ot = {
  tagName: Ut,
  attributes: jt,
  children: vt
}, Wt = "input", It = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Ft = {
  tagName: Wt,
  attributes: It
}, Jt = "button", Dt = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, Vt = "Save", Rt = {
  tagName: Jt,
  attributes: Dt,
  textContent: Vt
}, Ht = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const o = structuredClone(Ot), n = structuredClone(Ft);
  return n.attributes.name = t, n.attributes.placeholder = t, o.children.push(n), e && o.children.push(structuredClone(Rt)), o;
}, Mt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Bt);
  return e.children = t.map((o, n) => Ht({
    inColumn: o,
    inSave: n === t.length - 1
  })), e;
}, Kt = ({ inColumns: t = [] } = {}) => Mt({ inColumns: t }), qt = "tr", Gt = {
  class: "fw-semibold align-middle"
}, zt = [], Lt = {
  tagName: qt,
  attributes: Gt,
  children: zt
}, Pt = "td", _t = {
  class: "align-middle py-2"
}, Xt = "", Qt = {
  tagName: Pt,
  attributes: _t,
  textContent: Xt
}, Yt = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], Zt = ({ inColumn: t, inIndex: e, inData: o = [] } = {}) => {
  const n = structuredClone(Qt), r = o.map((s) => Yt(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return n.textContent = r.length ? String(r.reduce((s, l) => s + l, 0)) : e === 0 ? "Total" : "", n;
}, te = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const o = structuredClone(Lt);
  return o.children = t.map(
    (n, r) => Zt({ inColumn: n, inIndex: r, inData: e })
  ), o;
}, ee = ({ inColumns: t = [], inData: e = [] } = {}) => te({ inColumns: t, inData: e }), ne = "tr", oe = {
  class: "align-middle"
}, re = [], se = {
  tagName: ne,
  attributes: oe,
  children: re
}, le = "td", ae = {
  class: "align-middle py-2"
}, ce = {
  tagName: le,
  attributes: ae
}, ie = () => structuredClone(ce), ue = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(se);
  return e.children = t.map(() => ie()), e;
}, de = ({ inColumns: t = [] } = {}) => ue({ inColumns: t }), f = {
  inputs: Tt,
  inputsWithSave: Kt,
  totals: ee,
  empty: de
}, be = ({ inFooter: t = [], inColumns: e = [], inData: o = [] } = {}) => {
  const n = structuredClone(dt);
  return n.children = t.map((r) => {
    if (!Object.hasOwn(f, r))
      throw new Error(`Unknown footer "${r}".`);
    return f[r]({ inColumns: e, inData: o });
  }), n;
}, me = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: o = []
} = {}) => {
  const n = structuredClone(I), r = [
    P({ inColumns: t }),
    at({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(o))
    throw new TypeError("The footer property must be an array of footer names.");
  return o.length > 0 && r.push(be({
    inFooter: o,
    inColumns: t,
    inData: e
  })), n.children = r, n;
}, he = (t) => {
  const [e, o] = t.children;
  e.children[0].children.unshift({
    tagName: "th",
    textContent: "#"
  }), o.children.forEach((n, r) => {
    n.children.unshift({
      tagName: "td",
      textContent: String(r + 1)
    });
  });
}, pe = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], fe = (t, e) => {
  const o = pe(e);
  if (o.length === 0) return;
  const [n, r] = t.children;
  n.children[0].children.push({
    tagName: "th",
    textContent: "Actions"
  }), r.children.forEach((s) => {
    s.children.push({
      tagName: "td",
      children: o.map((l) => ({
        tagName: "button",
        attributes: { type: l.type || "button" },
        textContent: l.label
      }))
    });
  });
}, ge = (t, e = {}) => (e.showSerial && he(t), e.showOptions && fe(t, e.showOptions), t), ye = {
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
}, we = {
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
    showOptions: !0
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
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
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
}, Te = {
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
}, xe = {
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
}, Ee = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, ke = {
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
}, Be = {
  table: ye,
  tableWithSerial: we,
  tableWithDefaultAction: Ce,
  tableWithCustomActions: $e,
  tableWithSerialAndActions: Ne,
  tableWithFooter: Ae,
  tableWithFooterSave: Se,
  tableWithTotals: Te,
  tableWithMultipleFooters: xe,
  tableHead: Ee,
  tableBody: ke
}, g = ({
  type: t = "table",
  inData: e,
  inColumns: o,
  footer: n = [],
  options: r = {}
} = {}) => {
  if (t === "table") {
    const s = me({
      inColumns: o,
      inData: e,
      inFooter: n
    });
    return ge(s, r);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
g.requests = Be;
const y = ({ inItems: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return n.map((l) => p({
    inSource: l,
    inRecipe: r,
    inExecute: s
  })).flat(1 / 0).filter(Boolean);
}, Ue = ({ inSource: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  let l = n;
  typeof s == "function" && (l = s({
    inSource: n,
    inRecipe: r
  }));
  for (const [a, d] of Object.entries(l))
    Array.isArray(d) && r && a in r && (l[a] = y({
      inItems: d,
      inRecipe: r[a],
      inExecute: s
    }));
  return l;
}, p = ({ inSource: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return Array.isArray(n) ? y({
    inItems: n,
    inRecipe: r,
    inExecute: s
  }) : typeof n == "object" && n !== null ? Ue({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, je = ({ inKey: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.alterKey) || o;
}, ve = ({ inValue: t, inDirective: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return r && "transform" in r ? p({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, Oe = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(o) ? [o] : o;
}, We = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return n != null && n.valueKey && o && typeof o == "object" ? o[n.valueKey] : o;
}, Ie = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = t, r = e, s = o, l = {};
  for (const [a, d] of Object.entries(n)) {
    if (!(a in r))
      continue;
    const u = r[a], c = je({ inKey: a, inDirective: u });
    let i = d;
    i = ve({
      inValue: i,
      inDirective: u,
      inExecute: s
    }), i = Oe({ inValue: i, inDirective: u }), i = We({ inValue: i, inDirective: u }), l[c] = i;
  }
  return l;
};
function w(t, e) {
  for (const o in t)
    typeof t[o] == "object" && t[o] !== null ? w(t[o], e) : typeof t[o] == "string" && t[o] === "${}" && (t[o] = e);
  return t;
}
const Fe = ({ inSource: t, inOperation: e, inExecute: o }) => {
  const n = t, r = e;
  for (const [s, l] of Object.entries(r))
    if ("operationType" in l && l.operationType === "loopArray" && s in n) {
      const a = n[s].map((d) => {
        const u = structuredClone(l == null ? void 0 : l.template);
        return w(u, d), u;
      });
      n[s] = a;
    }
  return n;
}, Je = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, De = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Je({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, Ve = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Re({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Re = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, He = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Ve({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, Me = ({ inSource: t, inTemplate: e }) => t.map((r) => {
  const s = structuredClone(e);
  return s.textContent = r == null ? void 0 : r.columnName, s;
}), Ke = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Me({
      inSource: n[s],
      inTemplate: l == null ? void 0 : l.cell
    });
    n[s] = l == null ? void 0 : l.row, n[s].children = a;
  }
  return n;
}, qe = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Ge({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Ge = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, ze = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = qe({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, Le = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Pe({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Pe = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, _e = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Le({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, Xe = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = e, r = {};
  for (let [s, l] of Object.entries(n))
    console.log("aaaaaaaaa : ", s);
  return r;
}, m = ({ inSource: t, inRecipe: e }) => {
  let o = t;
  const n = e;
  return n && typeof n == "object" && "transform" in n && (o = Ie({
    inSource: o,
    inTransform: n.transform,
    inExecute: m
  })), n && typeof n == "object" && "operation" in n && (o = Fe({
    inSource: o,
    inOperation: n.operation,
    inExecute: m
  })), n && typeof n == "object" && "build" in n && (o = De({
    inSource: o,
    inBuild: n == null ? void 0 : n.build,
    inExecute: m
  })), n && typeof n == "object" && "buildCollection" in n && (o = He({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildCollection,
    inExecute: m
  })), n && typeof n == "object" && "buildArray" in n && (o = Ke({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildArray,
    inExecute: m
  })), n && typeof n == "object" && "buildBody" in n && (o = ze({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildBody,
    inExecute: m
  })), n && typeof n == "object" && "objectToArray" in n && (o = _e({
    inSource: o,
    inBuild: n == null ? void 0 : n.objectToArray,
    inExecute: m
  })), n && typeof n == "object" && "spec" in n && (o = Xe({
    inSource: o,
    inTransform: n == null ? void 0 : n.spec,
    inExecute: m
  })), o;
}, C = (t, e) => p({
  inSource: t,
  inRecipe: e,
  inExecute: m
}), Qe = {
  children: ""
}, Ye = {
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
}, Ze = {
  transform: Qe,
  operation: Ye
}, $ = ({
  inData: t
}) => {
  let o = C({
    children: t
  }, Ze);
  return o == null ? void 0 : o.children;
}, tn = "select", en = {
  id: "LedgerName"
}, nn = [], on = {
  tagName: tn,
  attributes: en,
  children: nn
}, rn = ({
  inData: t
}) => {
  let o = $({
    inData: t
  });
  const n = structuredClone(on);
  return n.children = o, n;
}, sn = "table", ln = {
  class: "table table-hover table-striped align-middle border mb-0"
}, an = [
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
], cn = {
  tagName: sn,
  attributes: ln,
  children: an
}, un = {
  columns: {
    row: {
      tagName: "tr"
    },
    cell: {
      tagName: "th",
      textContent: "${}"
    }
  }
}, dn = {
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
}, bn = {
  buildArray: un,
  buildBody: dn
}, mn = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: o = []
} = {}) => {
  const n = structuredClone(cn), r = t.map((l) => ({
    columnName: l
  })), s = C({ columns: r, rows: e }, bn);
  return n.children[0].children = [s == null ? void 0 : s.columns], n.children[1] = s == null ? void 0 : s.rows, n;
}, hn = (t) => {
  const [e, o] = t.children;
  console.log("aaaaaaa--", e.children[0]), e.children[0].children.unshift({
    tagName: "th",
    textContent: "#"
  }), o.children.forEach((n, r) => {
    n.children.unshift({
      tagName: "td",
      textContent: String(r + 1)
    });
  });
}, pn = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], fn = (t, e) => {
  const o = pn(e);
  if (o.length === 0) return;
  const [n, r] = t.children;
  n.children[0].children.push({
    tagName: "th",
    textContent: "Actions"
  }), r.children.forEach((s) => {
    s.children.push({
      tagName: "td",
      children: o.map((l) => ({
        tagName: "button",
        attributes: { type: l.type || "button" },
        textContent: l.label
      }))
    });
  });
}, gn = (t, e = {}) => (e.showSerial && hn(t), e.showOptions && fn(t, e.showOptions), t), yn = {
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
}, wn = {
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
}, Cn = {
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
}, $n = {
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
}, Nn = {
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
}, An = {
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
}, Sn = {
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
}, Tn = {
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
}, xn = {
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
}, En = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, kn = {
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
}, Bn = {
  table: yn,
  tableWithSerial: wn,
  tableWithDefaultAction: Cn,
  tableWithCustomActions: $n,
  tableWithSerialAndActions: Nn,
  tableWithFooter: An,
  tableWithFooterSave: Sn,
  tableWithTotals: Tn,
  tableWithMultipleFooters: xn,
  tableHead: En,
  tableBody: kn
}, N = ({
  inData: t,
  inColumns: e,
  footer: o = [],
  options: n
} = {}) => {
  const r = mn({
    inColumns: e,
    inData: t,
    inFooter: o
  });
  return n ? gn(r, n) : r;
};
N.requests = Bn;
const Un = {
  table: g,
  select: rn,
  selectOptionsOnly: $,
  tableFromSpec: N
}, A = ({
  type: t = "table",
  data: e,
  columns: o,
  options: n
}) => {
  const s = Un[t];
  return s({
    inColumns: o,
    inData: e,
    options: n
  });
};
j(A);
const jn = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, vn = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: jn,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, On = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : T(t), S = (t) => Array.isArray(t) ? t.map(On).flat(1 / 0).filter(Boolean) : [], Wn = (t) => (t == null, t), In = "http://www.w3.org/2000/svg", Fn = /* @__PURE__ */ new Set([
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
]), Jn = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return Fn.has(e) ? document.createElementNS(In, e) : document.createElement(e);
}, Dn = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), Vn = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Rn = "http://www.w3.org/1999/xlink", Hn = ({ inElement: t, inAttributes: e }) => {
  const o = t, n = e;
  if (!o || !n || typeof n != "object")
    return o;
  const r = typeof SVGElement < "u" ? o instanceof SVGElement : o.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(n).forEach(([s, l]) => {
    if (s === "class") {
      r ? o.setAttribute("class", String(l)) : o.className = l;
      return;
    }
    if (s === "xlink:href" || s === "href") {
      if (l != null) {
        const a = String(l);
        if (r)
          try {
            o.setAttributeNS(Rn, "href", a);
          } catch {
          }
        o.setAttribute("href", a), o.setAttribute("xlink:href", a);
      }
      return;
    }
    if (typeof l == "boolean") {
      l ? o.setAttribute(s, "") : o.removeAttribute(s);
      return;
    }
    l != null && o.setAttribute(s, String(l));
  }), o;
}, Mn = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const o = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && t.classList.add(...o), t;
}, Kn = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = Jn({ inTagName: t.tagName });
  if (!e) return null;
  if (Dn({
    inElement: e,
    inTextContent: Wn(t.textContent),
    inTagName: t.tagName
  }), Vn({
    inElement: e,
    inProperties: t.properties
  }), Hn({
    inElement: e,
    inAttributes: t.attributes
  }), Mn({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const o = S(t.children);
    o.length && e.append(...o);
  }
  return e;
}, T = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? S(t) : typeof t == "object" ? Kn(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, qn = "./tags.schema.json", Gn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, zn = {
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
}, Ln = {
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
}, Pn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, _n = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Xn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Qn = {
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
}, Yn = {
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
}, Zn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, to = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, eo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, no = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, oo = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, ro = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, so = {
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
}, lo = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, ao = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, co = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, io = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, uo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, bo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, mo = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, ho = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, po = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, fo = {
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
}, go = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, yo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, wo = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Co = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, $o = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, No = {
  $schema: qn,
  div: Gn,
  input: zn,
  checkbox: Ln,
  colgroup: Pn,
  col: _n,
  label: Xn,
  form: Qn,
  select: Yn,
  p: Zn,
  h1: to,
  h2: eo,
  span: no,
  img: oo,
  button: ro,
  table: so,
  thead: lo,
  tbody: ao,
  tfoot: co,
  tr: io,
  th: uo,
  td: bo,
  datalist: mo,
  option: ho,
  header: po,
  a: fo,
  i: go,
  small: yo,
  ul: wo,
  li: Co,
  hr: $o
}, h = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((n) => h({ inSpec: n }));
  if (typeof e != "object") return [];
  const o = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && o.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((n) => {
    const r = h({ inSpec: n });
    o.push(...r);
  }), o;
}, Ao = ({ inTagsFound: t, inAllowedTags: e }) => {
  const o = t ?? [], n = e ?? {}, r = new Set(
    Object.keys(n).filter((c) => c !== "$schema").map((c) => c.toLowerCase())
  ), s = {}, l = [], a = [];
  o.forEach((c) => {
    s[c] = (s[c] || 0) + 1, r.has(c) ? l.includes(c) || l.push(c) : a.includes(c) || a.push(c);
  });
  const d = o.length, u = a.length === 0;
  return {
    totalTags: d,
    tagCounts: s,
    uniqueTags: Object.keys(s),
    recognizedTags: l,
    unrecognizedTags: a,
    areAllTagsPresent: u
  };
}, So = ({ inSpec: t, inTags: e = No } = {}) => {
  const o = t, n = e, r = h({ inSpec: o }), s = Ao({
    inTagsFound: r,
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
}, x = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return T(e);
};
vn({
  inFuncDefinition: x,
  inReviewSpec: So
});
const To = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: o,
  inData: n,
  showLog: r
} = {}) => {
  const s = t, l = n ?? [], a = e;
  r && console.log("buildSpec 1 :", s, l.localColumns);
  let u = A({
    type: o,
    data: l,
    columns: a
  });
  const c = x(u);
  return console.log("buildSpec 2 :", u, c), r && console.log("buildSpec 3 :", c), c;
}, xo = ({
  type: t = "table",
  targetHtmlId: e,
  data: o,
  classToApply: n,
  columns: r,
  appendPosition: s,
  showLog: l = !1
} = {}) => {
  const a = t, d = e, u = o, c = r;
  B({ intype: a, indata: u }), l && console.log("showLog 1 :", a, e, o, n, r, s);
  const i = To({
    inTargetHtmlId: d,
    inColumns: c,
    showLog: l,
    inData: u,
    type: a
  });
  l && console.log("showLog 2 :", i);
  const b = document.getElementById(d);
  return l && console.log("showLog 3 :", b), Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? s === "prepend" ? b.prepend(...i) : b.append(...i) : s === "prepend" ? b.prepend(i) : (b && (b.innerHTML = ""), b.append(i)), l && console.log("showLog 5 :", b), b;
};
k(xo);
export {
  xo as default
};
