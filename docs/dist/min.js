const H = {
  version: "v17.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, U = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof e == "function" ? e : e.render, n = typeof e == "object" ? e.getSpec : void 0;
  globalThis.ks.jsonRenderers = {
    meta: H,
    ...typeof e == "object" ? e : {},
    render: o,
    renderToDom: o,
    domMount: e == null ? void 0 : e.renderToDom,
    ...n ? { getSpec: n } : {}
  };
}, V = ({ inConfig: t } = {}) => {
  const e = t;
  if (!e || typeof e != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof (e == null ? void 0 : e.type) != "string")
    throw console.error("type must be string only"), new Error("type must be string only");
  if (!Array.isArray(e.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (typeof e.targetHtmlId != "string" || !e.targetHtmlId.trim())
    throw console.error("targetHtmlId must be a non-empty string"), new TypeError("targetHtmlId must be a non-empty string");
  if (!Array.isArray(e.columns))
    throw console.error("columns must be an array"), new TypeError("columns must be an array");
  if (e.showLog !== void 0 && typeof e.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  return !0;
}, x = ({
  type: t = "table",
  targetHtmlId: e,
  data: o,
  columns: n,
  classToApply: r,
  appendPosition: s,
  showLog: l = !1
} = {}) => {
  const $ = {
    type: t,
    targetHtmlId: e,
    data: o,
    columns: n,
    classToApply: r,
    appendPosition: s,
    showLog: l
  };
  return V({ inConfig: $ }), $;
}, D = {
  version: "v11.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, W = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof e == "function" ? e : e.render, n = typeof e == "object" ? e.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: D,
    renderToDom: o,
    render: o,
    ...n ? { getSpec: n } : {},
    ...typeof e == "object" ? e : {}
  };
}, y = ["table", "select", "selectOptionsOnly", "tableFromSpec"], G = ({ inConfig: t } = {}) => {
  const e = t;
  if (!e || typeof e != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof e.type != "string" || !y.includes(e.type))
    throw console.error(`type must be one of: ${y.join(", ")}`), new Error(`type must be one of: ${y.join(", ")}`);
  if (!Array.isArray(e.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (!Array.isArray(e.columns))
    throw console.error("columns must be an array"), new TypeError("columns must be an array");
  if (e.showLog !== void 0 && typeof e.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  return !0;
}, K = "table", M = {
  class: "table table-hover table-striped mb-0"
}, q = [], z = {
  tagName: K,
  attributes: M,
  children: q
}, _ = "thead", X = [], Y = {
  tagName: _,
  children: X
}, Q = "tr", Z = [], tt = {
  tagName: Q,
  children: Z
}, et = "th", ot = {
  value: ""
}, nt = "", rt = {
  tagName: et,
  attributes: ot,
  textContent: nt
}, st = ({ inColumn: t } = {}) => {
  const e = structuredClone(rt);
  return e.attributes.value = t, e.textContent = t, e;
}, lt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(tt), o = t.map((n) => st({ inColumn: n }));
  return e.children = o, e;
}, at = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Y), o = [
    lt({ inColumns: t })
  ];
  return e.children = o, e;
}, ct = "tbody", it = [], ut = {
  tagName: ct,
  children: it
}, dt = "tr", bt = [], ft = {
  tagName: dt,
  children: bt
}, ht = "td", mt = {
  value: ""
}, pt = "", yt = {
  tagName: ht,
  attributes: mt,
  textContent: pt
}, gt = ({ inValue: t } = {}) => {
  const e = structuredClone(yt);
  return e.attributes.value = t, e.textContent = t, e;
}, wt = ({ inRow: t, inColumns: e = [] } = {}) => {
  const o = structuredClone(ft), n = e.map((r) => {
    const s = Array.isArray(t) ? t[r] : t == null ? void 0 : t[r];
    return gt({ inValue: s });
  });
  return o.children = n, o;
}, Ct = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const o = structuredClone(ut), n = t.map((r) => wt({
    inRow: r,
    inColumns: e
  }));
  return o.children = n, o;
}, $t = "tfoot", At = {
  class: "table-light"
}, Nt = [], xt = {
  tagName: $t,
  attributes: At,
  children: Nt
}, Tt = "tr", St = {
  class: "align-middle"
}, Et = [], jt = {
  tagName: Tt,
  attributes: St,
  children: Et
}, Ft = "td", Bt = {
  class: "align-middle py-2"
}, It = [], Ot = {
  tagName: Ft,
  attributes: Bt,
  children: It
}, kt = "input", vt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Pt = {
  tagName: kt,
  attributes: vt
}, Lt = ({ inColumn: t } = {}) => {
  const e = structuredClone(Ot), o = structuredClone(Pt);
  return o.attributes.name = t, o.attributes.placeholder = t, e.children.push(o), e;
}, Jt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(jt);
  return e.children = t.map((o) => Lt({ inColumn: o })), e;
}, Rt = ({ inColumns: t = [] } = {}) => Jt({ inColumns: t }), Ht = "tr", Ut = {
  class: "align-middle"
}, Vt = [], Dt = {
  tagName: Ht,
  attributes: Ut,
  children: Vt
}, Wt = "td", Gt = {
  class: "align-middle py-2"
}, Kt = [], Mt = {
  tagName: Wt,
  attributes: Gt,
  children: Kt
}, qt = "input", zt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, _t = {
  tagName: qt,
  attributes: zt
}, Xt = "button", Yt = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, Qt = "Save", Zt = {
  tagName: Xt,
  attributes: Yt,
  textContent: Qt
}, te = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const o = structuredClone(Mt), n = structuredClone(_t);
  return n.attributes.name = t, n.attributes.placeholder = t, o.children.push(n), e && o.children.push(structuredClone(Zt)), o;
}, ee = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Dt);
  return e.children = t.map((o, n) => te({
    inColumn: o,
    inSave: n === t.length - 1
  })), e;
}, oe = ({ inColumns: t = [] } = {}) => ee({ inColumns: t }), ne = "tr", re = {
  class: "fw-semibold align-middle"
}, se = [], le = {
  tagName: ne,
  attributes: re,
  children: se
}, ae = "td", ce = {
  class: "align-middle py-2"
}, ie = "", ue = {
  tagName: ae,
  attributes: ce,
  textContent: ie
}, de = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], be = ({ inColumn: t, inIndex: e, inData: o = [] } = {}) => {
  const n = structuredClone(ue), r = o.map((s) => de(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return n.textContent = r.length ? String(r.reduce((s, l) => s + l, 0)) : e === 0 ? "Total" : "", n;
}, fe = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const o = structuredClone(le);
  return o.children = t.map(
    (n, r) => be({ inColumn: n, inIndex: r, inData: e })
  ), o;
}, he = ({ inColumns: t = [], inData: e = [] } = {}) => fe({ inColumns: t, inData: e }), me = "tr", pe = {
  class: "align-middle"
}, ye = [], ge = {
  tagName: me,
  attributes: pe,
  children: ye
}, we = "td", Ce = {
  class: "align-middle py-2"
}, $e = {
  tagName: we,
  attributes: Ce
}, Ae = () => structuredClone($e), Ne = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(ge);
  return e.children = t.map(() => Ae()), e;
}, xe = ({ inColumns: t = [] } = {}) => Ne({ inColumns: t }), A = {
  inputs: Rt,
  inputsWithSave: oe,
  totals: he,
  empty: xe
}, Te = ({ inFooter: t = [], inColumns: e = [], inData: o = [] } = {}) => {
  const n = structuredClone(xt);
  return n.children = t.map((r) => {
    if (!Object.hasOwn(A, r))
      throw new Error(`Unknown footer "${r}".`);
    return A[r]({ inColumns: e, inData: o });
  }), n;
}, Se = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: o = []
} = {}) => {
  const n = structuredClone(z), r = [
    at({ inColumns: t }),
    Ct({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(o))
    throw new TypeError("The footer property must be an array of footer names.");
  return o.length > 0 && r.push(Te({
    inFooter: o,
    inColumns: t,
    inData: e
  })), n.children = r, n;
}, Ee = (t) => {
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
}, je = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], Fe = (t, e) => {
  const o = je(e);
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
}, Be = (t, e = {}) => (e.showSerial && Ee(t), e.showOptions && Fe(t, e.showOptions), t), Ie = {
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
}, Oe = {
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
}, ke = {
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
}, ve = {
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
}, Pe = {
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
}, Le = {
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
}, Je = {
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
}, Re = {
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
}, He = {
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
}, Ue = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Ve = {
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
}, De = {
  table: Ie,
  tableWithSerial: Oe,
  tableWithDefaultAction: ke,
  tableWithCustomActions: ve,
  tableWithSerialAndActions: Pe,
  tableWithFooter: Le,
  tableWithFooterSave: Je,
  tableWithTotals: Re,
  tableWithMultipleFooters: He,
  tableHead: Ue,
  tableBody: Ve
}, T = ({
  type: t = "table",
  inData: e,
  inColumns: o,
  footer: n = [],
  options: r = {}
} = {}) => {
  if (t === "table") {
    const s = Se({
      inColumns: o,
      inData: e,
      inFooter: n
    });
    return Be(s, r);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
T.requests = De;
const S = ({ inItems: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return n.map((l) => w({
    inSource: l,
    inRecipe: r,
    inExecute: s
  })).flat(1 / 0).filter(Boolean);
}, We = ({ inSource: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  let l = n;
  typeof s == "function" && (l = s({
    inSource: n,
    inRecipe: r
  }));
  for (const [a, c] of Object.entries(l))
    Array.isArray(c) && r && a in r && (l[a] = S({
      inItems: c,
      inRecipe: r[a],
      inExecute: s
    }));
  return l;
}, w = ({ inSource: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return Array.isArray(n) ? S({
    inItems: n,
    inRecipe: r,
    inExecute: s
  }) : typeof n == "object" && n !== null ? We({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, Ge = ({ inKey: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.alterKey) || o;
}, Ke = ({ inValue: t, inDirective: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return r && "transform" in r ? w({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, Me = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(o) ? [o] : o;
}, qe = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return n != null && n.valueKey && o && typeof o == "object" ? o[n.valueKey] : o;
}, ze = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = t, r = e, s = o, l = {};
  for (const [a, c] of Object.entries(n)) {
    if (!(a in r))
      continue;
    const i = r[a], u = Ge({ inKey: a, inDirective: i });
    let b = c;
    b = Ke({
      inValue: b,
      inDirective: i,
      inExecute: s
    }), b = Me({ inValue: b, inDirective: i }), b = qe({ inValue: b, inDirective: i }), l[u] = b;
  }
  return l;
};
function E(t, e) {
  for (const o in t)
    typeof t[o] == "object" && t[o] !== null ? E(t[o], e) : typeof t[o] == "string" && t[o] === "${}" && (t[o] = e);
  return t;
}
const _e = ({ inSource: t, inOperation: e, inExecute: o }) => {
  const n = t, r = e;
  for (const [s, l] of Object.entries(r))
    if ("operationType" in l && l.operationType === "loopArray" && s in n) {
      const a = n[s].map((c) => {
        const i = structuredClone(l == null ? void 0 : l.template);
        return E(i, c), i;
      });
      n[s] = a;
    }
  return n;
}, Xe = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, Ye = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Xe({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, Qe = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Ze({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Ze = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, to = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Qe({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, eo = ({ inSource: t, inTemplate: e }) => t.map((r) => {
  const s = structuredClone(e);
  return s.textContent = r == null ? void 0 : r.columnName, s;
}), oo = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = eo({
      inSource: n[s],
      inTemplate: l == null ? void 0 : l.cell
    });
    n[s] = l == null ? void 0 : l.row, n[s].children = a;
  }
  return n;
}, no = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = ro({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), ro = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, so = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = no({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, lo = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = ao({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), ao = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, co = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = lo({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, io = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = e, r = {};
  for (let [s, l] of Object.entries(n))
    console.log("aaaaaaaaa : ", s);
  return r;
}, d = ({ inSource: t, inRecipe: e }) => {
  let o = t;
  const n = e;
  return n && typeof n == "object" && "transform" in n && (o = ze({
    inSource: o,
    inTransform: n.transform,
    inExecute: d
  })), n && typeof n == "object" && "operation" in n && (o = _e({
    inSource: o,
    inOperation: n.operation,
    inExecute: d
  })), n && typeof n == "object" && "build" in n && (o = Ye({
    inSource: o,
    inBuild: n == null ? void 0 : n.build,
    inExecute: d
  })), n && typeof n == "object" && "buildCollection" in n && (o = to({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildCollection,
    inExecute: d
  })), n && typeof n == "object" && "buildArray" in n && (o = oo({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildArray,
    inExecute: d
  })), n && typeof n == "object" && "buildBody" in n && (o = so({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildBody,
    inExecute: d
  })), n && typeof n == "object" && "objectToArray" in n && (o = co({
    inSource: o,
    inBuild: n == null ? void 0 : n.objectToArray,
    inExecute: d
  })), n && typeof n == "object" && "spec" in n && (o = io({
    inSource: o,
    inTransform: n == null ? void 0 : n.spec,
    inExecute: d
  })), o;
}, uo = (t, e) => w({
  inSource: t,
  inRecipe: e,
  inExecute: d
}), bo = {
  children: ""
}, fo = {
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
}, ho = {
  transform: bo,
  operation: fo
}, j = ({
  inData: t
}) => {
  let o = uo({
    children: t
  }, ho);
  return o == null ? void 0 : o.children;
}, mo = "select", po = {
  id: "LedgerName"
}, yo = [], go = {
  tagName: mo,
  attributes: po,
  children: yo
}, wo = ({
  inData: t
}) => {
  let o = j({
    inData: t
  });
  const n = structuredClone(go);
  return n.children = o, n;
}, Co = (t) => typeof t == "object" && t !== null && !Array.isArray(t), $o = (t, e) => {
  if (!Co(t)) return;
  let o = {};
  for (const [n, r] of Object.entries(t))
    o[n] = C(r, e);
  return o;
}, Ao = (t, e) => {
  const o = structuredClone(t);
  return Array.isArray(o) ? o.map((r) => C(r, e)) : void 0;
}, F = (t, e) => t.replace(/\$\{(\w+)\}/g, (o, n) => e[n] !== void 0 ? e[n] : o), No = (t, e) => F(t, e), C = (t, e) => {
  const o = structuredClone(t);
  return typeof o == "string" ? F(o, e) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = No(o == null ? void 0 : o.textContent, e)), "attributes" in o && (o.attributes = $o(o == null ? void 0 : o.attributes, e)), "children" in o && (o.children = Ao(o == null ? void 0 : o.children, e))), o);
}, xo = (t, e) => {
  const o = t, n = e;
  return o.map((r) => C(n, r));
}, B = (t, e, o) => {
  const n = o, r = e;
  let s = [];
  return n.map((l) => {
    let a = structuredClone(t);
    a.textContent = r[l.columnName], s.push(a);
  }), s;
}, I = (t, e, o) => {
  t.forEach((n, r) => {
    const s = e == null ? void 0 : e.data[r], l = B(o, s, e == null ? void 0 : e.columns);
    n.children = l;
  });
}, To = (t, e) => {
  const o = structuredClone(e);
  o.attributes.width = "50px", t.unshift(o);
}, So = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "#", t.unshift(o);
}, Eo = (t, e) => {
  t.forEach((o, n) => {
    const r = structuredClone(e);
    r.textContent = n + 1, o.children.unshift(r);
  });
}, jo = (t, e) => {
  const o = structuredClone(e);
  delete o.children, t.unshift(o);
}, Fo = (t, e) => {
  To(t == null ? void 0 : t.children[0].children, e == null ? void 0 : e.buildColGroup), So(t == null ? void 0 : t.children[1].children[0].children, e == null ? void 0 : e.buildHeader), Eo(t == null ? void 0 : t.children[2].children, e == null ? void 0 : e.buildBodyCell), jo(t == null ? void 0 : t.children[3].children[0].children, e == null ? void 0 : e.buildFooter);
}, Bo = (t, e) => {
  const o = structuredClone(e);
  o.attributes.width = "100px", t.push(o);
}, Io = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "options", t.push(o);
}, Oo = (t, e) => {
  t.forEach((o, n) => {
    const r = structuredClone(e);
    r.textContent = "show", o.children.push(r);
  });
}, ko = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "save", t.push(o);
}, vo = (t, e) => {
  Bo(t == null ? void 0 : t.children[0].children, e == null ? void 0 : e.buildColGroup), Io(t == null ? void 0 : t.children[1].children[0].children, e == null ? void 0 : e.buildHeader), Oo(t == null ? void 0 : t.children[2].children, e == null ? void 0 : e.button), ko(t == null ? void 0 : t.children[3].children[0].children, e == null ? void 0 : e.button);
}, p = (t, e) => {
  var o;
  if (((o = t == null ? void 0 : t.attributes) == null ? void 0 : o["data-role"]) === e) return t;
  for (const n of (t == null ? void 0 : t.children) ?? []) {
    const r = p(n, e);
    if (r) return r;
  }
  return null;
}, Po = (t, e) => {
  const o = t[e.fileName], n = e.dataRole ? p(o, e.dataRole) : o;
  return (e.filePath ?? []).reduce((r, s) => r[s], n);
}, Lo = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Jo = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Ro = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Ho = {
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
}, Uo = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Vo = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Do = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Wo = {
  tagName: "select",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Go = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, h = {
  buildBodyTr: Lo,
  buildColGroup: Jo,
  buildHeader: Ro,
  buildFooter: Ho,
  buildBodyCell: Uo,
  button: Vo,
  buildOption: Do,
  buildSelect: Wo,
  buildDataList: Go
}, Ko = "table", Mo = {
  class: "table table-hover table-striped align-middle border mb-0"
}, qo = [
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
], f = {
  tagName: Ko,
  attributes: Mo,
  children: qo
}, zo = [
  {
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
        "colGroup"
      ]
    },
    templateKey: "buildColGroup",
    func: "fromCollection"
  },
  {
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
], _o = [
  {
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
], m = { data: {}, base: f, spec: h }, Xo = { fromCollection: xo, tableBody: B, buildBody: I }, Yo = (t, e) => {
  const o = t.dataRole ? p(m[t.fileName], t.dataRole) : m[t.fileName], n = [...t.filePath ?? []], r = n.pop(), s = n.reduce((l, a) => l[a], o);
  s[r] = e;
}, N = (t) => {
  t.forEach((e) => {
    const o = Po(m, e.sourcePath);
    if (o) {
      const n = Xo[e.func](o, h[e.templateKey]);
      Yo(e.destinationPath, n);
    } else
      console.log("   !instruction : ", e), console.log("   !source : ", o);
  });
}, Qo = (t) => (m.data = t, N(_o), N(zo), I(p(f, "table-body").children, t, h.buildBodyCell), Fo(f, h), vo(f, h), f), Zo = ({
  inData: t,
  inColumns: e,
  footer: o = [],
  options: n
} = {}) => Qo({
  columns: e,
  data: t
}), tn = {
  table: T,
  select: wo,
  selectOptionsOnly: j,
  tableFromSpec: Zo
}, O = ({
  type: t = "table",
  data: e,
  columns: o,
  options: n,
  showLog: r = !1
} = {}) => {
  const u = {
    type: t,
    data: e,
    columns: o,
    options: n,
    showLog: r
  };
  return G({ inConfig: u }), u;
}, k = ({
  type: t = "table",
  data: e,
  columns: o,
  options: n,
  showLog: r = !1
} = {}) => {
  const s = O({
    type: t,
    data: e,
    columns: o,
    options: n,
    showLog: r
  }), l = tn[s.type];
  if (!l)
    throw new Error(`Renderer for type "${s.type}" not found.`);
  const a = l({
    inColumns: s.columns,
    inData: s.data,
    options: s.options
  });
  return s.showLog && console.log("json-renderers-build output:", a), a;
};
W({ render: k, getSpec: O });
const v = ({
  inColumns: t,
  inType: e = "table",
  inData: o,
  inShowLog: n = !1
} = {}) => k({
  type: e,
  data: o ?? [],
  columns: t,
  showLog: n
}), en = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, on = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: en,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, nn = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : L(t), P = (t) => Array.isArray(t) ? t.map(nn).flat(1 / 0).filter(Boolean) : [], rn = (t) => (t == null, t), sn = "http://www.w3.org/2000/svg", ln = /* @__PURE__ */ new Set([
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
]), an = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return ln.has(e) ? document.createElementNS(sn, e) : document.createElement(e);
}, cn = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), un = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), dn = "http://www.w3.org/1999/xlink", bn = ({ inElement: t, inAttributes: e }) => {
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
            o.setAttributeNS(dn, "href", a);
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
}, fn = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const o = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && t.classList.add(...o), t;
}, hn = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = an({ inTagName: t.tagName });
  if (!e) return null;
  if (cn({
    inElement: e,
    inTextContent: rn(t.textContent),
    inTagName: t.tagName
  }), un({
    inElement: e,
    inProperties: t.properties
  }), bn({
    inElement: e,
    inAttributes: t.attributes
  }), fn({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const o = P(t.children);
    o.length && e.append(...o);
  }
  return e;
}, L = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? P(t) : typeof t == "object" ? hn(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, mn = "./tags.schema.json", pn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, yn = {
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
}, gn = {
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
}, wn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Cn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, $n = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, An = {
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
}, Nn = {
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
}, xn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Tn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Sn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, En = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, jn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Fn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Bn = {
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
}, In = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, On = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, kn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, vn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, Pn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Ln = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Jn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Rn = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Hn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Un = {
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
}, Vn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Dn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Wn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Gn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Kn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Mn = {
  $schema: mn,
  div: pn,
  input: yn,
  checkbox: gn,
  colgroup: wn,
  col: Cn,
  label: $n,
  form: An,
  select: Nn,
  p: xn,
  h1: Tn,
  h2: Sn,
  span: En,
  img: jn,
  button: Fn,
  table: Bn,
  thead: In,
  tbody: On,
  tfoot: kn,
  tr: vn,
  th: Pn,
  td: Ln,
  datalist: Jn,
  option: Rn,
  header: Hn,
  a: Un,
  i: Vn,
  small: Dn,
  ul: Wn,
  li: Gn,
  hr: Kn
}, g = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((n) => g({ inSpec: n }));
  if (typeof e != "object") return [];
  const o = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && o.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((n) => {
    const r = g({ inSpec: n });
    o.push(...r);
  }), o;
}, qn = ({ inTagsFound: t, inAllowedTags: e }) => {
  const o = t ?? [], n = e ?? {}, r = new Set(
    Object.keys(n).filter((u) => u !== "$schema").map((u) => u.toLowerCase())
  ), s = {}, l = [], a = [];
  o.forEach((u) => {
    s[u] = (s[u] || 0) + 1, r.has(u) ? l.includes(u) || l.push(u) : a.includes(u) || a.push(u);
  });
  const c = o.length, i = a.length === 0;
  return {
    totalTags: c,
    tagCounts: s,
    uniqueTags: Object.keys(s),
    recognizedTags: l,
    unrecognizedTags: a,
    areAllTagsPresent: i
  };
}, zn = ({ inSpec: t, inTags: e = Mn } = {}) => {
  const o = t, n = e, r = g({ inSpec: o }), s = qn({
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
}, J = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return L(e);
};
on({
  inFuncDefinition: J,
  inReviewSpec: zn
});
const R = ({
  inSpec: t,
  inTargetHtmlId: e,
  inAppendPosition: o,
  inShowLog: n = !1
} = {}) => {
  const r = t, s = e, l = o, a = n, c = J(r);
  a && console.log("renderToDom 1 (content):", c);
  const i = document.getElementById(s);
  return i ? (Array.isArray(c) || c instanceof NodeList || c instanceof HTMLCollection ? l === "prepend" ? i.prepend(...c) : i.append(...c) : l === "prepend" ? i.prepend(c) : (i.innerHTML = "", i.append(c)), a && console.log("renderToDom 2 (mounted):", i), i) : null;
}, _n = (t = {}) => {
  const e = x(t), o = v({
    inColumns: e.columns,
    inData: e.data,
    inType: e.type,
    inShowLog: e.showLog
  });
  return R({
    inSpec: o,
    inTargetHtmlId: e.targetHtmlId,
    inAppendPosition: e.appendPosition,
    inShowLog: e.showLog
  });
};
U({ render: _n, getSpec: x, buildSpec: v, renderToDom: R });
export {
  v as buildSpec,
  _n as default,
  x as getSpec,
  _n as render,
  R as renderToDom
};
