const E = {
  version: "v14.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, k = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: E,
    renderToDom: t
  }));
}, B = {
  version: "v10.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, U = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: B,
    renderToDom: t
  }));
}, j = "table", v = {
  class: "table table-hover table-striped mb-0"
}, O = [], W = {
  tagName: j,
  attributes: v,
  children: O
}, I = "thead", F = [], J = {
  tagName: I,
  children: F
}, D = "tr", V = [], R = {
  tagName: D,
  children: V
}, H = "th", M = {
  value: ""
}, K = "", q = {
  tagName: H,
  attributes: M,
  textContent: K
}, G = ({ inColumn: t } = {}) => {
  const e = structuredClone(q);
  return e.attributes.value = t, e.textContent = t, e;
}, z = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(R), o = t.map((n) => G({ inColumn: n }));
  return e.children = o, e;
}, L = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(J), o = [
    z({ inColumns: t })
  ];
  return e.children = o, e;
}, P = "tbody", _ = [], X = {
  tagName: P,
  children: _
}, Q = "tr", Y = [], Z = {
  tagName: Q,
  children: Y
}, tt = "td", et = {
  value: ""
}, nt = "", ot = {
  tagName: tt,
  attributes: et,
  textContent: nt
}, rt = ({ inValue: t } = {}) => {
  const e = structuredClone(ot);
  return e.attributes.value = t, e.textContent = t, e;
}, st = ({ inRow: t, inColumns: e = [] } = {}) => {
  const o = structuredClone(Z), n = e.map((r) => {
    const s = Array.isArray(t) ? t[r] : t == null ? void 0 : t[r];
    return rt({ inValue: s });
  });
  return o.children = n, o;
}, lt = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const o = structuredClone(X), n = t.map((r) => st({
    inRow: r,
    inColumns: e
  }));
  return o.children = n, o;
}, at = "tfoot", ct = {
  class: "table-light"
}, it = [], ut = {
  tagName: at,
  attributes: ct,
  children: it
}, dt = "tr", bt = {
  class: "align-middle"
}, mt = [], ht = {
  tagName: dt,
  attributes: bt,
  children: mt
}, pt = "td", ft = {
  class: "align-middle py-2"
}, gt = [], yt = {
  tagName: pt,
  attributes: ft,
  children: gt
}, wt = "input", Ct = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, $t = {
  tagName: wt,
  attributes: Ct
}, Nt = ({ inColumn: t } = {}) => {
  const e = structuredClone(yt), o = structuredClone($t);
  return o.attributes.name = t, o.attributes.placeholder = t, e.children.push(o), e;
}, At = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(ht);
  return e.children = t.map((o) => Nt({ inColumn: o })), e;
}, St = ({ inColumns: t = [] } = {}) => At({ inColumns: t }), Tt = "tr", xt = {
  class: "align-middle"
}, Et = [], kt = {
  tagName: Tt,
  attributes: xt,
  children: Et
}, Bt = "td", Ut = {
  class: "align-middle py-2"
}, jt = [], vt = {
  tagName: Bt,
  attributes: Ut,
  children: jt
}, Ot = "input", Wt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, It = {
  tagName: Ot,
  attributes: Wt
}, Ft = "button", Jt = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, Dt = "Save", Vt = {
  tagName: Ft,
  attributes: Jt,
  textContent: Dt
}, Rt = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const o = structuredClone(vt), n = structuredClone(It);
  return n.attributes.name = t, n.attributes.placeholder = t, o.children.push(n), e && o.children.push(structuredClone(Vt)), o;
}, Ht = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(kt);
  return e.children = t.map((o, n) => Rt({
    inColumn: o,
    inSave: n === t.length - 1
  })), e;
}, Mt = ({ inColumns: t = [] } = {}) => Ht({ inColumns: t }), Kt = "tr", qt = {
  class: "fw-semibold align-middle"
}, Gt = [], zt = {
  tagName: Kt,
  attributes: qt,
  children: Gt
}, Lt = "td", Pt = {
  class: "align-middle py-2"
}, _t = "", Xt = {
  tagName: Lt,
  attributes: Pt,
  textContent: _t
}, Qt = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], Yt = ({ inColumn: t, inIndex: e, inData: o = [] } = {}) => {
  const n = structuredClone(Xt), r = o.map((s) => Qt(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return n.textContent = r.length ? String(r.reduce((s, l) => s + l, 0)) : e === 0 ? "Total" : "", n;
}, Zt = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const o = structuredClone(zt);
  return o.children = t.map(
    (n, r) => Yt({ inColumn: n, inIndex: r, inData: e })
  ), o;
}, te = ({ inColumns: t = [], inData: e = [] } = {}) => Zt({ inColumns: t, inData: e }), ee = "tr", ne = {
  class: "align-middle"
}, oe = [], re = {
  tagName: ee,
  attributes: ne,
  children: oe
}, se = "td", le = {
  class: "align-middle py-2"
}, ae = {
  tagName: se,
  attributes: le
}, ce = () => structuredClone(ae), ie = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(re);
  return e.children = t.map(() => ce()), e;
}, ue = ({ inColumns: t = [] } = {}) => ie({ inColumns: t }), f = {
  inputs: St,
  inputsWithSave: Mt,
  totals: te,
  empty: ue
}, de = ({ inFooter: t = [], inColumns: e = [], inData: o = [] } = {}) => {
  const n = structuredClone(ut);
  return n.children = t.map((r) => {
    if (!Object.hasOwn(f, r))
      throw new Error(`Unknown footer "${r}".`);
    return f[r]({ inColumns: e, inData: o });
  }), n;
}, be = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: o = []
} = {}) => {
  const n = structuredClone(W), r = [
    L({ inColumns: t }),
    lt({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(o))
    throw new TypeError("The footer property must be an array of footer names.");
  return o.length > 0 && r.push(de({
    inFooter: o,
    inColumns: t,
    inData: e
  })), n.children = r, n;
}, me = (t) => {
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
}, he = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], pe = (t, e) => {
  const o = he(e);
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
}, fe = (t, e = {}) => (e.showSerial && me(t), e.showOptions && pe(t, e.showOptions), t), ge = {
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
}, ye = {
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
    showOptions: !0
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
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
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
  footer: [
    "inputs"
  ],
  options: {}
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
    "inputsWithSave"
  ],
  options: {}
}, Se = {
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
}, Te = {
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
}, xe = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Ee = {
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
}, ke = {
  table: ge,
  tableWithSerial: ye,
  tableWithDefaultAction: we,
  tableWithCustomActions: Ce,
  tableWithSerialAndActions: $e,
  tableWithFooter: Ne,
  tableWithFooterSave: Ae,
  tableWithTotals: Se,
  tableWithMultipleFooters: Te,
  tableHead: xe,
  tableBody: Ee
}, g = ({
  type: t = "table",
  inData: e,
  inColumns: o,
  footer: n = [],
  options: r = {}
} = {}) => {
  if (t === "table") {
    const s = be({
      inColumns: o,
      inData: e,
      inFooter: n
    });
    return fe(s, r);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
g.requests = ke;
const y = ({ inItems: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return n.map((l) => p({
    inSource: l,
    inRecipe: r,
    inExecute: s
  })).flat(1 / 0).filter(Boolean);
}, Be = ({ inSource: t, inRecipe: e, inExecute: o }) => {
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
  }) : typeof n == "object" && n !== null ? Be({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, Ue = ({ inKey: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.alterKey) || o;
}, je = ({ inValue: t, inDirective: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return r && "transform" in r ? p({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, ve = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(o) ? [o] : o;
}, Oe = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return n != null && n.valueKey && o && typeof o == "object" ? o[n.valueKey] : o;
}, We = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = t, r = e, s = o, l = {};
  for (const [a, d] of Object.entries(n)) {
    if (!(a in r))
      continue;
    const i = r[a], c = Ue({ inKey: a, inDirective: i });
    let u = d;
    u = je({
      inValue: u,
      inDirective: i,
      inExecute: s
    }), u = ve({ inValue: u, inDirective: i }), u = Oe({ inValue: u, inDirective: i }), l[c] = u;
  }
  return l;
};
function w(t, e) {
  for (const o in t)
    typeof t[o] == "object" && t[o] !== null ? w(t[o], e) : typeof t[o] == "string" && t[o] === "${}" && (t[o] = e);
  return t;
}
const Ie = ({ inSource: t, inOperation: e, inExecute: o }) => {
  const n = t, r = e;
  for (const [s, l] of Object.entries(r))
    if ("operationType" in l && l.operationType === "loopArray" && s in n) {
      const a = n[s].map((d) => {
        const i = structuredClone(l == null ? void 0 : l.template);
        return w(i, d), i;
      });
      n[s] = a;
    }
  return n;
}, Fe = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, Je = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Fe({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, De = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Ve({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Ve = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, Re = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = De({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, He = ({ inSource: t, inTemplate: e }) => t.map((r) => {
  const s = structuredClone(e);
  return s.textContent = r == null ? void 0 : r.columnName, s;
}), Me = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = He({
      inSource: n[s],
      inTemplate: l == null ? void 0 : l.cell
    });
    n[s] = l == null ? void 0 : l.row, n[s].children = a;
  }
  return n;
}, Ke = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = qe({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), qe = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, Ge = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Ke({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, ze = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Le({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Le = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, Pe = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = ze({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, _e = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = e, r = {};
  for (let [s, l] of Object.entries(n))
    console.log("aaaaaaaaa : ", s);
  return r;
}, b = ({ inSource: t, inRecipe: e }) => {
  let o = t;
  const n = e;
  return n && typeof n == "object" && "transform" in n && (o = We({
    inSource: o,
    inTransform: n.transform,
    inExecute: b
  })), n && typeof n == "object" && "operation" in n && (o = Ie({
    inSource: o,
    inOperation: n.operation,
    inExecute: b
  })), n && typeof n == "object" && "build" in n && (o = Je({
    inSource: o,
    inBuild: n == null ? void 0 : n.build,
    inExecute: b
  })), n && typeof n == "object" && "buildCollection" in n && (o = Re({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildCollection,
    inExecute: b
  })), n && typeof n == "object" && "buildArray" in n && (o = Me({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildArray,
    inExecute: b
  })), n && typeof n == "object" && "buildBody" in n && (o = Ge({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildBody,
    inExecute: b
  })), n && typeof n == "object" && "objectToArray" in n && (o = Pe({
    inSource: o,
    inBuild: n == null ? void 0 : n.objectToArray,
    inExecute: b
  })), n && typeof n == "object" && "spec" in n && (o = _e({
    inSource: o,
    inTransform: n == null ? void 0 : n.spec,
    inExecute: b
  })), o;
}, C = (t, e) => p({
  inSource: t,
  inRecipe: e,
  inExecute: b
}), Xe = {
  children: ""
}, Qe = {
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
}, Ye = {
  transform: Xe,
  operation: Qe
}, $ = ({
  inData: t
}) => {
  let o = C({
    children: t
  }, Ye);
  return o == null ? void 0 : o.children;
}, Ze = "select", tn = {
  id: "LedgerName"
}, en = [], nn = {
  tagName: Ze,
  attributes: tn,
  children: en
}, on = ({
  inData: t
}) => {
  let o = $({
    inData: t
  });
  const n = structuredClone(nn);
  return n.children = o, n;
}, rn = "table", sn = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ln = [
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
], an = {
  tagName: rn,
  attributes: sn,
  children: ln
}, cn = {
  columns: {
    row: {
      tagName: "tr"
    },
    cell: {
      tagName: "th",
      textContent: "${}"
    }
  }
}, un = {
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
}, dn = {
  buildArray: cn,
  buildBody: un
}, bn = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: o = []
} = {}) => {
  const n = structuredClone(an), r = t.map((l) => ({
    columnName: l
  })), s = C({ columns: r, rows: e }, dn);
  return n.children[0].children = [s == null ? void 0 : s.columns], n.children[1] = s == null ? void 0 : s.rows, n;
}, mn = (t) => {
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
}, hn = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], pn = (t, e) => {
  const o = hn(e);
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
}, fn = (t, e = {}) => (e.showSerial && mn(t), e.showOptions && pn(t, e.showOptions), t), gn = {
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
}, yn = {
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
    showOptions: !0
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
    showSerial: !0,
    showOptions: [
      {
        label: "Show",
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
  footer: [
    "inputs"
  ],
  options: {}
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
    "inputsWithSave"
  ],
  options: {}
}, Sn = {
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
}, Tn = {
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
}, xn = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, En = {
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
}, kn = {
  table: gn,
  tableWithSerial: yn,
  tableWithDefaultAction: wn,
  tableWithCustomActions: Cn,
  tableWithSerialAndActions: $n,
  tableWithFooter: Nn,
  tableWithFooterSave: An,
  tableWithTotals: Sn,
  tableWithMultipleFooters: Tn,
  tableHead: xn,
  tableBody: En
}, N = ({
  inData: t,
  inColumns: e,
  footer: o = [],
  options: n
} = {}) => {
  const r = bn({
    inColumns: e,
    inData: t,
    inFooter: o
  });
  return n ? fn(r, n) : r;
};
N.requests = kn;
const Bn = {
  table: g,
  select: on,
  selectOptionsOnly: $,
  tableFromSpec: N
}, A = ({
  type: t = "table",
  data: e,
  columns: o,
  options: n
}) => {
  const s = Bn[t];
  return s({
    inColumns: o,
    inData: e,
    options: n
  });
};
U(A);
const Un = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, jn = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: Un,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, vn = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : T(t), S = (t) => Array.isArray(t) ? t.map(vn).flat(1 / 0).filter(Boolean) : [], On = (t) => (t == null, t), Wn = "http://www.w3.org/2000/svg", In = /* @__PURE__ */ new Set([
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
]), Fn = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return In.has(e) ? document.createElementNS(Wn, e) : document.createElement(e);
}, Jn = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), Dn = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Vn = "http://www.w3.org/1999/xlink", Rn = ({ inElement: t, inAttributes: e }) => {
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
            o.setAttributeNS(Vn, "href", a);
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
}, Hn = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const o = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && t.classList.add(...o), t;
}, Mn = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = Fn({ inTagName: t.tagName });
  if (!e) return null;
  if (Jn({
    inElement: e,
    inTextContent: On(t.textContent),
    inTagName: t.tagName
  }), Dn({
    inElement: e,
    inProperties: t.properties
  }), Rn({
    inElement: e,
    inAttributes: t.attributes
  }), Hn({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const o = S(t.children);
    o.length && e.append(...o);
  }
  return e;
}, T = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? S(t) : typeof t == "object" ? Mn(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, Kn = "./tags.schema.json", qn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Gn = {
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
}, zn = {
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
}, Ln = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Pn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, _n = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Xn = {
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
}, Qn = {
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
}, Yn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
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
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, oo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, ro = {
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
}, so = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
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
    "td",
    "th"
  ]
}, io = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, uo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, bo = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, mo = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, ho = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, po = {
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
}, fo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, go = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, yo = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, wo = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Co = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, $o = {
  $schema: Kn,
  div: qn,
  input: Gn,
  checkbox: zn,
  colgroup: Ln,
  col: Pn,
  label: _n,
  form: Xn,
  select: Qn,
  p: Yn,
  h1: Zn,
  h2: to,
  span: eo,
  img: no,
  button: oo,
  table: ro,
  thead: so,
  tbody: lo,
  tfoot: ao,
  tr: co,
  th: io,
  td: uo,
  datalist: bo,
  option: mo,
  header: ho,
  a: po,
  i: fo,
  small: go,
  ul: yo,
  li: wo,
  hr: Co
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
}, No = ({ inTagsFound: t, inAllowedTags: e }) => {
  const o = t ?? [], n = e ?? {}, r = new Set(
    Object.keys(n).filter((c) => c !== "$schema").map((c) => c.toLowerCase())
  ), s = {}, l = [], a = [];
  o.forEach((c) => {
    s[c] = (s[c] || 0) + 1, r.has(c) ? l.includes(c) || l.push(c) : a.includes(c) || a.push(c);
  });
  const d = o.length, i = a.length === 0;
  return {
    totalTags: d,
    tagCounts: s,
    uniqueTags: Object.keys(s),
    recognizedTags: l,
    unrecognizedTags: a,
    areAllTagsPresent: i
  };
}, Ao = ({ inSpec: t, inTags: e = $o } = {}) => {
  const o = t, n = e, r = h({ inSpec: o }), s = No({
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
jn({
  inFuncDefinition: x,
  inReviewSpec: Ao
});
const So = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: o,
  inData: n,
  showLog: r
} = {}) => {
  const s = t, l = n ?? [], a = e;
  r && console.log("buildSpec 1 :", s, l.localColumns);
  let i = A({
    type: o,
    data: l,
    columns: a
  });
  const c = x(i);
  return console.log("buildSpec 2 :", i, c), r && console.log("buildSpec 3 :", c), c;
}, To = ({ intype: t, indata: e }) => {
  if (typeof t != "string" || t.trim() === "")
    throw console.error("type must be a string"), new Error("type must be a string");
  if (!Array.isArray(e))
    throw console.error("data must be an Array"), new Error("data must be an Array");
  return !0;
}, xo = ({
  type: t = "table",
  targetHtmlId: e,
  data: o,
  classToApply: n,
  columns: r,
  appendPosition: s,
  showLog: l = !1
} = {}) => {
  const a = t, d = e, i = o, c = r;
  To({ intype: a, indata: i });
  const u = So({
    inTargetHtmlId: d,
    inColumns: c,
    showLog: l,
    inData: i,
    type: a
  }), m = document.getElementById(d);
  return Array.isArray(u) || u instanceof NodeList || u instanceof HTMLCollection ? s === "prepend" ? m.prepend(...u) : m.append(...u) : s === "prepend" ? m.prepend(u) : (m && (m.innerHTML = ""), m.append(u)), m;
};
k(xo);
export {
  xo as default
};
