const R = {
  version: "v16.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, H = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof e == "function" ? e : e.render, n = typeof e == "object" ? e.getSpec : void 0;
  globalThis.ks.jsonRenderers = {
    meta: R,
    renderToDom: o,
    render: o,
    ...n ? { getSpec: n } : {},
    ...typeof e == "object" ? e : {}
  };
}, U = ({ inConfig: t } = {}) => {
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
}, V = {
  version: "v11.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, W = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof e == "function" ? e : e.render, n = typeof e == "object" ? e.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: V,
    renderToDom: o,
    render: o,
    ...n ? { getSpec: n } : {},
    ...typeof e == "object" ? e : {}
  };
}, g = ["table", "select", "selectOptionsOnly", "tableFromSpec"], D = ({ inConfig: t } = {}) => {
  const e = t;
  if (!e || typeof e != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof e.type != "string" || !g.includes(e.type))
    throw console.error(`type must be one of: ${g.join(", ")}`), new Error(`type must be one of: ${g.join(", ")}`);
  if (!Array.isArray(e.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (!Array.isArray(e.columns))
    throw console.error("columns must be an array"), new TypeError("columns must be an array");
  if (e.showLog !== void 0 && typeof e.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  return !0;
}, G = "table", K = {
  class: "table table-hover table-striped mb-0"
}, M = [], q = {
  tagName: G,
  attributes: K,
  children: M
}, z = "thead", _ = [], X = {
  tagName: z,
  children: _
}, Y = "tr", Q = [], Z = {
  tagName: Y,
  children: Q
}, tt = "th", et = {
  value: ""
}, ot = "", nt = {
  tagName: tt,
  attributes: et,
  textContent: ot
}, rt = ({ inColumn: t } = {}) => {
  const e = structuredClone(nt);
  return e.attributes.value = t, e.textContent = t, e;
}, st = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Z), o = t.map((n) => rt({ inColumn: n }));
  return e.children = o, e;
}, lt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(X), o = [
    st({ inColumns: t })
  ];
  return e.children = o, e;
}, at = "tbody", ct = [], it = {
  tagName: at,
  children: ct
}, ut = "tr", dt = [], bt = {
  tagName: ut,
  children: dt
}, ft = "td", ht = {
  value: ""
}, mt = "", pt = {
  tagName: ft,
  attributes: ht,
  textContent: mt
}, yt = ({ inValue: t } = {}) => {
  const e = structuredClone(pt);
  return e.attributes.value = t, e.textContent = t, e;
}, gt = ({ inRow: t, inColumns: e = [] } = {}) => {
  const o = structuredClone(bt), n = e.map((r) => {
    const s = Array.isArray(t) ? t[r] : t == null ? void 0 : t[r];
    return yt({ inValue: s });
  });
  return o.children = n, o;
}, wt = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const o = structuredClone(it), n = t.map((r) => gt({
    inRow: r,
    inColumns: e
  }));
  return o.children = n, o;
}, Ct = "tfoot", $t = {
  class: "table-light"
}, Nt = [], xt = {
  tagName: Ct,
  attributes: $t,
  children: Nt
}, At = "tr", Tt = {
  class: "align-middle"
}, St = [], Et = {
  tagName: At,
  attributes: Tt,
  children: St
}, jt = "td", Ft = {
  class: "align-middle py-2"
}, Bt = [], It = {
  tagName: jt,
  attributes: Ft,
  children: Bt
}, Ot = "input", kt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, vt = {
  tagName: Ot,
  attributes: kt
}, Lt = ({ inColumn: t } = {}) => {
  const e = structuredClone(It), o = structuredClone(vt);
  return o.attributes.name = t, o.attributes.placeholder = t, e.children.push(o), e;
}, Pt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Et);
  return e.children = t.map((o) => Lt({ inColumn: o })), e;
}, Jt = ({ inColumns: t = [] } = {}) => Pt({ inColumns: t }), Rt = "tr", Ht = {
  class: "align-middle"
}, Ut = [], Vt = {
  tagName: Rt,
  attributes: Ht,
  children: Ut
}, Wt = "td", Dt = {
  class: "align-middle py-2"
}, Gt = [], Kt = {
  tagName: Wt,
  attributes: Dt,
  children: Gt
}, Mt = "input", qt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, zt = {
  tagName: Mt,
  attributes: qt
}, _t = "button", Xt = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, Yt = "Save", Qt = {
  tagName: _t,
  attributes: Xt,
  textContent: Yt
}, Zt = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const o = structuredClone(Kt), n = structuredClone(zt);
  return n.attributes.name = t, n.attributes.placeholder = t, o.children.push(n), e && o.children.push(structuredClone(Qt)), o;
}, te = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Vt);
  return e.children = t.map((o, n) => Zt({
    inColumn: o,
    inSave: n === t.length - 1
  })), e;
}, ee = ({ inColumns: t = [] } = {}) => te({ inColumns: t }), oe = "tr", ne = {
  class: "fw-semibold align-middle"
}, re = [], se = {
  tagName: oe,
  attributes: ne,
  children: re
}, le = "td", ae = {
  class: "align-middle py-2"
}, ce = "", ie = {
  tagName: le,
  attributes: ae,
  textContent: ce
}, ue = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], de = ({ inColumn: t, inIndex: e, inData: o = [] } = {}) => {
  const n = structuredClone(ie), r = o.map((s) => ue(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return n.textContent = r.length ? String(r.reduce((s, l) => s + l, 0)) : e === 0 ? "Total" : "", n;
}, be = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const o = structuredClone(se);
  return o.children = t.map(
    (n, r) => de({ inColumn: n, inIndex: r, inData: e })
  ), o;
}, fe = ({ inColumns: t = [], inData: e = [] } = {}) => be({ inColumns: t, inData: e }), he = "tr", me = {
  class: "align-middle"
}, pe = [], ye = {
  tagName: he,
  attributes: me,
  children: pe
}, ge = "td", we = {
  class: "align-middle py-2"
}, Ce = {
  tagName: ge,
  attributes: we
}, $e = () => structuredClone(Ce), Ne = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(ye);
  return e.children = t.map(() => $e()), e;
}, xe = ({ inColumns: t = [] } = {}) => Ne({ inColumns: t }), x = {
  inputs: Jt,
  inputsWithSave: ee,
  totals: fe,
  empty: xe
}, Ae = ({ inFooter: t = [], inColumns: e = [], inData: o = [] } = {}) => {
  const n = structuredClone(xt);
  return n.children = t.map((r) => {
    if (!Object.hasOwn(x, r))
      throw new Error(`Unknown footer "${r}".`);
    return x[r]({ inColumns: e, inData: o });
  }), n;
}, Te = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: o = []
} = {}) => {
  const n = structuredClone(q), r = [
    lt({ inColumns: t }),
    wt({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(o))
    throw new TypeError("The footer property must be an array of footer names.");
  return o.length > 0 && r.push(Ae({
    inFooter: o,
    inColumns: t,
    inData: e
  })), n.children = r, n;
}, Se = (t) => {
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
}, Ee = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], je = (t, e) => {
  const o = Ee(e);
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
}, Fe = (t, e = {}) => (e.showSerial && Se(t), e.showOptions && je(t, e.showOptions), t), Be = {
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
}, Ie = {
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
    showOptions: !0
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
  footer: [
    "inputsWithSave"
  ],
  options: {}
}, Je = {
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
}, Re = {
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
}, He = {
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
}, Ve = {
  table: Be,
  tableWithSerial: Ie,
  tableWithDefaultAction: Oe,
  tableWithCustomActions: ke,
  tableWithSerialAndActions: ve,
  tableWithFooter: Le,
  tableWithFooterSave: Pe,
  tableWithTotals: Je,
  tableWithMultipleFooters: Re,
  tableHead: He,
  tableBody: Ue
}, T = ({
  type: t = "table",
  inData: e,
  inColumns: o,
  footer: n = [],
  options: r = {}
} = {}) => {
  if (t === "table") {
    const s = Te({
      inColumns: o,
      inData: e,
      inFooter: n
    });
    return Fe(s, r);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
T.requests = Ve;
const S = ({ inItems: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return n.map((l) => C({
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
  for (const [a, i] of Object.entries(l))
    Array.isArray(i) && r && a in r && (l[a] = S({
      inItems: i,
      inRecipe: r[a],
      inExecute: s
    }));
  return l;
}, C = ({ inSource: t, inRecipe: e, inExecute: o }) => {
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
}, De = ({ inKey: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.alterKey) || o;
}, Ge = ({ inValue: t, inDirective: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return r && "transform" in r ? C({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, Ke = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(o) ? [o] : o;
}, Me = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return n != null && n.valueKey && o && typeof o == "object" ? o[n.valueKey] : o;
}, qe = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = t, r = e, s = o, l = {};
  for (const [a, i] of Object.entries(n)) {
    if (!(a in r))
      continue;
    const c = r[a], u = De({ inKey: a, inDirective: c });
    let d = i;
    d = Ge({
      inValue: d,
      inDirective: c,
      inExecute: s
    }), d = Ke({ inValue: d, inDirective: c }), d = Me({ inValue: d, inDirective: c }), l[u] = d;
  }
  return l;
};
function E(t, e) {
  for (const o in t)
    typeof t[o] == "object" && t[o] !== null ? E(t[o], e) : typeof t[o] == "string" && t[o] === "${}" && (t[o] = e);
  return t;
}
const ze = ({ inSource: t, inOperation: e, inExecute: o }) => {
  const n = t, r = e;
  for (const [s, l] of Object.entries(r))
    if ("operationType" in l && l.operationType === "loopArray" && s in n) {
      const a = n[s].map((i) => {
        const c = structuredClone(l == null ? void 0 : l.template);
        return E(c, i), c;
      });
      n[s] = a;
    }
  return n;
}, _e = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, Xe = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = _e({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, Ye = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = Qe({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), Qe = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, Ze = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = Ye({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, to = ({ inSource: t, inTemplate: e }) => t.map((r) => {
  const s = structuredClone(e);
  return s.textContent = r == null ? void 0 : r.columnName, s;
}), eo = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = to({
      inSource: n[s],
      inTemplate: l == null ? void 0 : l.cell
    });
    n[s] = l == null ? void 0 : l.row, n[s].children = a;
  }
  return n;
}, oo = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = no({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), no = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, ro = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = oo({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, so = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = lo({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), lo = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, ao = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = so({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, co = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = e, r = {};
  for (let [s, l] of Object.entries(n))
    console.log("aaaaaaaaa : ", s);
  return r;
}, b = ({ inSource: t, inRecipe: e }) => {
  let o = t;
  const n = e;
  return n && typeof n == "object" && "transform" in n && (o = qe({
    inSource: o,
    inTransform: n.transform,
    inExecute: b
  })), n && typeof n == "object" && "operation" in n && (o = ze({
    inSource: o,
    inOperation: n.operation,
    inExecute: b
  })), n && typeof n == "object" && "build" in n && (o = Xe({
    inSource: o,
    inBuild: n == null ? void 0 : n.build,
    inExecute: b
  })), n && typeof n == "object" && "buildCollection" in n && (o = Ze({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildCollection,
    inExecute: b
  })), n && typeof n == "object" && "buildArray" in n && (o = eo({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildArray,
    inExecute: b
  })), n && typeof n == "object" && "buildBody" in n && (o = ro({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildBody,
    inExecute: b
  })), n && typeof n == "object" && "objectToArray" in n && (o = ao({
    inSource: o,
    inBuild: n == null ? void 0 : n.objectToArray,
    inExecute: b
  })), n && typeof n == "object" && "spec" in n && (o = co({
    inSource: o,
    inTransform: n == null ? void 0 : n.spec,
    inExecute: b
  })), o;
}, io = (t, e) => C({
  inSource: t,
  inRecipe: e,
  inExecute: b
}), uo = {
  children: ""
}, bo = {
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
}, fo = {
  transform: uo,
  operation: bo
}, j = ({
  inData: t
}) => {
  let o = io({
    children: t
  }, fo);
  return o == null ? void 0 : o.children;
}, ho = "select", mo = {
  id: "LedgerName"
}, po = [], yo = {
  tagName: ho,
  attributes: mo,
  children: po
}, go = ({
  inData: t
}) => {
  let o = j({
    inData: t
  });
  const n = structuredClone(yo);
  return n.children = o, n;
}, wo = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Co = (t, e) => {
  if (!wo(t)) return;
  let o = {};
  for (const [n, r] of Object.entries(t))
    o[n] = $(r, e);
  return o;
}, $o = (t, e) => {
  const o = structuredClone(t);
  return Array.isArray(o) ? o.map((r) => $(r, e)) : void 0;
}, F = (t, e) => t.replace(/\$\{(\w+)\}/g, (o, n) => e[n] !== void 0 ? e[n] : o), No = (t, e) => F(t, e), $ = (t, e) => {
  const o = structuredClone(t);
  return typeof o == "string" ? F(o, e) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = No(o == null ? void 0 : o.textContent, e)), "attributes" in o && (o.attributes = Co(o == null ? void 0 : o.attributes, e)), "children" in o && (o.children = $o(o == null ? void 0 : o.children, e))), o);
}, xo = (t, e) => {
  const o = t, n = e;
  return o.map((r) => $(n, r));
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
}, Ao = (t, e) => {
  const o = structuredClone(e);
  o.attributes.width = "50px", t.unshift(o);
}, To = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "#", t.unshift(o);
}, So = (t, e) => {
  t.forEach((o, n) => {
    const r = structuredClone(e);
    r.textContent = n + 1, o.children.unshift(r);
  });
}, Eo = (t, e) => {
  const o = structuredClone(e);
  delete o.children, t.unshift(o);
}, jo = (t, e) => {
  Ao(t == null ? void 0 : t.children[0].children, e == null ? void 0 : e.buildColGroup), To(t == null ? void 0 : t.children[1].children[0].children, e == null ? void 0 : e.buildHeader), So(t == null ? void 0 : t.children[2].children, e == null ? void 0 : e.buildBodyCell), Eo(t == null ? void 0 : t.children[3].children[0].children, e == null ? void 0 : e.buildFooter);
}, Fo = (t, e) => {
  const o = structuredClone(e);
  o.attributes.width = "100px", t.push(o);
}, Bo = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "options", t.push(o);
}, Io = (t, e) => {
  t.forEach((o, n) => {
    const r = structuredClone(e);
    r.textContent = "show", o.children.push(r);
  });
}, Oo = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "save", t.push(o);
}, ko = (t, e) => {
  Fo(t == null ? void 0 : t.children[0].children, e == null ? void 0 : e.buildColGroup), Bo(t == null ? void 0 : t.children[1].children[0].children, e == null ? void 0 : e.buildHeader), Io(t == null ? void 0 : t.children[2].children, e == null ? void 0 : e.button), Oo(t == null ? void 0 : t.children[3].children[0].children, e == null ? void 0 : e.button);
}, y = (t, e) => {
  var o;
  if (((o = t == null ? void 0 : t.attributes) == null ? void 0 : o["data-role"]) === e) return t;
  for (const n of (t == null ? void 0 : t.children) ?? []) {
    const r = y(n, e);
    if (r) return r;
  }
  return null;
}, vo = (t, e) => {
  const o = t[e.fileName], n = e.dataRole ? y(o, e.dataRole) : o;
  return (e.filePath ?? []).reduce((r, s) => r[s], n);
}, Lo = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Po = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Jo = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Ro = {
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
}, Ho = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Uo = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Vo = {
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
}, Do = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, h = {
  buildBodyTr: Lo,
  buildColGroup: Po,
  buildHeader: Jo,
  buildFooter: Ro,
  buildBodyCell: Ho,
  button: Uo,
  buildOption: Vo,
  buildSelect: Wo,
  buildDataList: Do
}, Go = "table", Ko = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Mo = [
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
  tagName: Go,
  attributes: Ko,
  children: Mo
}, qo = [
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
], zo = [
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
], p = { data: {}, base: f, spec: h }, _o = { fromCollection: xo, tableBody: B, buildBody: I }, Xo = (t, e) => {
  const o = t.dataRole ? y(p[t.fileName], t.dataRole) : p[t.fileName], n = [...t.filePath ?? []], r = n.pop(), s = n.reduce((l, a) => l[a], o);
  s[r] = e;
}, A = (t) => {
  t.forEach((e) => {
    const o = vo(p, e.sourcePath);
    if (o) {
      const n = _o[e.func](o, h[e.templateKey]);
      Xo(e.destinationPath, n);
    } else
      console.log("   !instruction : ", e), console.log("   !source : ", o);
  });
}, Yo = (t) => (p.data = t, A(zo), A(qo), I(y(f, "table-body").children, t, h.buildBodyCell), jo(f, h), ko(f, h), f), Qo = ({
  inData: t,
  inColumns: e,
  footer: o = [],
  options: n
} = {}) => Yo({
  columns: e,
  data: t
}), Zo = {
  table: T,
  select: go,
  selectOptionsOnly: j,
  tableFromSpec: Qo
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
  return D({ inConfig: u }), u;
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
  }), l = Zo[s.type];
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
const tn = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, en = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: tn,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, on = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : L(t), v = (t) => Array.isArray(t) ? t.map(on).flat(1 / 0).filter(Boolean) : [], nn = (t) => (t == null, t), rn = "http://www.w3.org/2000/svg", sn = /* @__PURE__ */ new Set([
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
]), ln = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return sn.has(e) ? document.createElementNS(rn, e) : document.createElement(e);
}, an = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), cn = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), un = "http://www.w3.org/1999/xlink", dn = ({ inElement: t, inAttributes: e }) => {
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
            o.setAttributeNS(un, "href", a);
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
}, bn = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const o = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && t.classList.add(...o), t;
}, fn = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = ln({ inTagName: t.tagName });
  if (!e) return null;
  if (an({
    inElement: e,
    inTextContent: nn(t.textContent),
    inTagName: t.tagName
  }), cn({
    inElement: e,
    inProperties: t.properties
  }), dn({
    inElement: e,
    inAttributes: t.attributes
  }), bn({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const o = v(t.children);
    o.length && e.append(...o);
  }
  return e;
}, L = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? v(t) : typeof t == "object" ? fn(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, hn = "./tags.schema.json", mn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, pn = {
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
}, yn = {
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
}, gn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, wn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Cn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, $n = {
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
}, An = {
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
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, jn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Fn = {
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
}, Bn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
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
    "td",
    "th"
  ]
}, vn = {
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
}, Pn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Jn = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Rn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Hn = {
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
}, Un = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Vn = {
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
}, Dn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Gn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Kn = {
  $schema: hn,
  div: mn,
  input: pn,
  checkbox: yn,
  colgroup: gn,
  col: wn,
  label: Cn,
  form: $n,
  select: Nn,
  p: xn,
  h1: An,
  h2: Tn,
  span: Sn,
  img: En,
  button: jn,
  table: Fn,
  thead: Bn,
  tbody: In,
  tfoot: On,
  tr: kn,
  th: vn,
  td: Ln,
  datalist: Pn,
  option: Jn,
  header: Rn,
  a: Hn,
  i: Un,
  small: Vn,
  ul: Wn,
  li: Dn,
  hr: Gn
}, w = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((n) => w({ inSpec: n }));
  if (typeof e != "object") return [];
  const o = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && o.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((n) => {
    const r = w({ inSpec: n });
    o.push(...r);
  }), o;
}, Mn = ({ inTagsFound: t, inAllowedTags: e }) => {
  const o = t ?? [], n = e ?? {}, r = new Set(
    Object.keys(n).filter((u) => u !== "$schema").map((u) => u.toLowerCase())
  ), s = {}, l = [], a = [];
  o.forEach((u) => {
    s[u] = (s[u] || 0) + 1, r.has(u) ? l.includes(u) || l.push(u) : a.includes(u) || a.push(u);
  });
  const i = o.length, c = a.length === 0;
  return {
    totalTags: i,
    tagCounts: s,
    uniqueTags: Object.keys(s),
    recognizedTags: l,
    unrecognizedTags: a,
    areAllTagsPresent: c
  };
}, qn = ({ inSpec: t, inTags: e = Kn } = {}) => {
  const o = t, n = e, r = w({ inSpec: o }), s = Mn({
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
}, P = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return L(e);
};
en({
  inFuncDefinition: P,
  inReviewSpec: qn
});
const zn = ({
  inTargetHtmlId: t,
  inColumns: e,
  inType: o = "table",
  inData: n,
  inShowLog: r = !1
} = {}) => {
  const s = t, l = n ?? [], a = e, i = o, c = r;
  c && console.log("buildSpec 1 :", s, l, a);
  let d = k({
    type: i,
    data: l,
    columns: a
  });
  const m = P(d);
  return c && (console.log("buildSpec 2 :", d, m), console.log("buildSpec 3 :", m)), m;
}, J = ({
  type: t = "table",
  targetHtmlId: e,
  data: o,
  columns: n,
  classToApply: r,
  appendPosition: s,
  showLog: l = !1
} = {}) => {
  const N = {
    type: t,
    targetHtmlId: e,
    data: o,
    columns: n,
    classToApply: r,
    appendPosition: s,
    showLog: l
  };
  return U({ inConfig: N }), N;
}, _n = ({
  type: t = "table",
  targetHtmlId: e,
  data: o,
  columns: n,
  classToApply: r,
  appendPosition: s,
  showLog: l = !1
} = {}) => {
  const a = J({
    type: t,
    targetHtmlId: e,
    data: o,
    columns: n,
    classToApply: r,
    appendPosition: s,
    showLog: l
  });
  a.showLog && console.log("showLog 1 (spec):", a);
  const i = zn({
    inTargetHtmlId: a.targetHtmlId,
    inColumns: a.columns,
    inData: a.data,
    inType: a.type,
    inShowLog: a.showLog
  });
  a.showLog && console.log("showLog 2 (content):", i);
  const c = document.getElementById(a.targetHtmlId);
  return a.showLog && console.log("showLog 3 (container):", c), c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? a.appendPosition === "prepend" ? c.prepend(...i) : c.append(...i) : a.appendPosition === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), a.showLog && console.log("showLog 4 (mounted):", c), c) : null;
};
H({ render: _n, getSpec: J });
export {
  zn as buildSpec,
  _n as default,
  J as getSpec,
  U as guardFunc,
  _n as render
};
