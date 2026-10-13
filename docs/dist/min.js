const V = {
  version: "v17.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, D = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof e == "function" ? e : e.render, n = typeof e == "object" ? e.getSpec : void 0;
  globalThis.ks.jsonRenderers = {
    meta: V,
    ...typeof e == "object" ? e : {},
    render: o,
    renderToDom: o,
    domMount: e == null ? void 0 : e.renderToDom,
    ...n ? { getSpec: n } : {}
  };
}, W = "table", G = "", K = [], M = [], q = "", z = "replace", _ = !1, f = {
  type: W,
  targetHtmlId: G,
  data: K,
  columns: M,
  classToApply: q,
  appendPosition: z,
  showLog: _
}, X = ({ inConfig: t } = {}) => {
  const e = t;
  if (!e || typeof e != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  for (const o of Object.keys(f)) {
    if (!(o in e) || e[o] === void 0)
      throw console.error(`Missing compulsory key: "${o}"`), new Error(`Missing compulsory key: "${o}"`);
    if (Array.isArray(f[o])) {
      if (!Array.isArray(e[o]))
        throw console.error(`${o} must be an Array`), new TypeError(`${o} must be an Array`);
    } else if (typeof e[o] != typeof f[o])
      throw console.error(`${o} must be of type ${typeof f[o]}`), new TypeError(`${o} must be of type ${typeof f[o]}`);
  }
  if (typeof e.targetHtmlId == "string" && !e.targetHtmlId.trim())
    throw console.error("targetHtmlId must be a non-empty string"), new TypeError("targetHtmlId must be a non-empty string");
  return !0;
}, T = ({
  type: t = "table",
  targetHtmlId: e,
  data: o,
  columns: n,
  classToApply: r = "",
  appendPosition: s = "replace",
  showLog: l = !1
} = {}) => {
  const A = {
    type: t,
    targetHtmlId: e,
    data: o,
    columns: n,
    classToApply: r,
    appendPosition: s,
    showLog: l
  };
  return X({ inConfig: A }), A;
}, S = () => ({ ...f });
Object.assign(S, f);
const Y = {
  version: "v11.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, Q = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof e == "function" ? e : e.render, n = typeof e == "object" ? e.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: Y,
    renderToDom: o,
    render: o,
    ...n ? { getSpec: n } : {},
    ...typeof e == "object" ? e : {}
  };
}, g = ["table", "select", "selectOptionsOnly", "tableFromSpec"], Z = ({ inConfig: t } = {}) => {
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
}, tt = "table", et = {
  class: "table table-hover table-striped mb-0"
}, ot = [], nt = {
  tagName: tt,
  attributes: et,
  children: ot
}, rt = "thead", st = [], lt = {
  tagName: rt,
  children: st
}, at = "tr", ct = [], it = {
  tagName: at,
  children: ct
}, ut = "th", dt = {
  value: ""
}, bt = "", ft = {
  tagName: ut,
  attributes: dt,
  textContent: bt
}, ht = ({ inColumn: t } = {}) => {
  const e = structuredClone(ft);
  return e.attributes.value = t, e.textContent = t, e;
}, mt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(it), o = t.map((n) => ht({ inColumn: n }));
  return e.children = o, e;
}, pt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(lt), o = [
    mt({ inColumns: t })
  ];
  return e.children = o, e;
}, yt = "tbody", gt = [], wt = {
  tagName: yt,
  children: gt
}, Ct = "tr", $t = [], At = {
  tagName: Ct,
  children: $t
}, Nt = "td", xt = {
  value: ""
}, Tt = "", St = {
  tagName: Nt,
  attributes: xt,
  textContent: Tt
}, Et = ({ inValue: t } = {}) => {
  const e = structuredClone(St);
  return e.attributes.value = t, e.textContent = t, e;
}, jt = ({ inRow: t, inColumns: e = [] } = {}) => {
  const o = structuredClone(At), n = e.map((r) => {
    const s = Array.isArray(t) ? t[r] : t == null ? void 0 : t[r];
    return Et({ inValue: s });
  });
  return o.children = n, o;
}, Ft = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const o = structuredClone(wt), n = t.map((r) => jt({
    inRow: r,
    inColumns: e
  }));
  return o.children = n, o;
}, Bt = "tfoot", It = {
  class: "table-light"
}, kt = [], Ot = {
  tagName: Bt,
  attributes: It,
  children: kt
}, vt = "tr", Pt = {
  class: "align-middle"
}, Lt = [], Ht = {
  tagName: vt,
  attributes: Pt,
  children: Lt
}, Rt = "td", Jt = {
  class: "align-middle py-2"
}, Ut = [], Vt = {
  tagName: Rt,
  attributes: Jt,
  children: Ut
}, Dt = "input", Wt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Gt = {
  tagName: Dt,
  attributes: Wt
}, Kt = ({ inColumn: t } = {}) => {
  const e = structuredClone(Vt), o = structuredClone(Gt);
  return o.attributes.name = t, o.attributes.placeholder = t, e.children.push(o), e;
}, Mt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Ht);
  return e.children = t.map((o) => Kt({ inColumn: o })), e;
}, qt = ({ inColumns: t = [] } = {}) => Mt({ inColumns: t }), zt = "tr", _t = {
  class: "align-middle"
}, Xt = [], Yt = {
  tagName: zt,
  attributes: _t,
  children: Xt
}, Qt = "td", Zt = {
  class: "align-middle py-2"
}, te = [], ee = {
  tagName: Qt,
  attributes: Zt,
  children: te
}, oe = "input", ne = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, re = {
  tagName: oe,
  attributes: ne
}, se = "button", le = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, ae = "Save", ce = {
  tagName: se,
  attributes: le,
  textContent: ae
}, ie = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const o = structuredClone(ee), n = structuredClone(re);
  return n.attributes.name = t, n.attributes.placeholder = t, o.children.push(n), e && o.children.push(structuredClone(ce)), o;
}, ue = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Yt);
  return e.children = t.map((o, n) => ie({
    inColumn: o,
    inSave: n === t.length - 1
  })), e;
}, de = ({ inColumns: t = [] } = {}) => ue({ inColumns: t }), be = "tr", fe = {
  class: "fw-semibold align-middle"
}, he = [], me = {
  tagName: be,
  attributes: fe,
  children: he
}, pe = "td", ye = {
  class: "align-middle py-2"
}, ge = "", we = {
  tagName: pe,
  attributes: ye,
  textContent: ge
}, Ce = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], $e = ({ inColumn: t, inIndex: e, inData: o = [] } = {}) => {
  const n = structuredClone(we), r = o.map((s) => Ce(s, t)).filter((s) => s != null && String(s).trim() !== "").map(Number).filter(Number.isFinite);
  return n.textContent = r.length ? String(r.reduce((s, l) => s + l, 0)) : e === 0 ? "Total" : "", n;
}, Ae = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const o = structuredClone(me);
  return o.children = t.map(
    (n, r) => $e({ inColumn: n, inIndex: r, inData: e })
  ), o;
}, Ne = ({ inColumns: t = [], inData: e = [] } = {}) => Ae({ inColumns: t, inData: e }), xe = "tr", Te = {
  class: "align-middle"
}, Se = [], Ee = {
  tagName: xe,
  attributes: Te,
  children: Se
}, je = "td", Fe = {
  class: "align-middle py-2"
}, Be = {
  tagName: je,
  attributes: Fe
}, Ie = () => structuredClone(Be), ke = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(Ee);
  return e.children = t.map(() => Ie()), e;
}, Oe = ({ inColumns: t = [] } = {}) => ke({ inColumns: t }), N = {
  inputs: qt,
  inputsWithSave: de,
  totals: Ne,
  empty: Oe
}, ve = ({ inFooter: t = [], inColumns: e = [], inData: o = [] } = {}) => {
  const n = structuredClone(Ot);
  return n.children = t.map((r) => {
    if (!Object.hasOwn(N, r))
      throw new Error(`Unknown footer "${r}".`);
    return N[r]({ inColumns: e, inData: o });
  }), n;
}, Pe = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: o = []
} = {}) => {
  const n = structuredClone(nt), r = [
    pt({ inColumns: t }),
    Ft({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(o))
    throw new TypeError("The footer property must be an array of footer names.");
  return o.length > 0 && r.push(ve({
    inFooter: o,
    inColumns: t,
    inData: e
  })), n.children = r, n;
}, Le = (t) => {
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
}, He = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], Re = (t, e) => {
  const o = He(e);
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
}, Je = (t, e = {}) => (e.showSerial && Le(t), e.showOptions && Re(t, e.showOptions), t), Ue = {
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
}, Ve = {
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
}, De = {
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
}, We = {
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
}, Ge = {
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
}, Ke = {
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
}, Me = {
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
}, qe = {
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
}, ze = {
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
}, _e = {
  type: "tableHead",
  data: [],
  columns: [
    "itemName",
    "baseUnit"
  ],
  options: {}
}, Xe = {
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
}, Ye = {
  table: Ue,
  tableWithSerial: Ve,
  tableWithDefaultAction: De,
  tableWithCustomActions: We,
  tableWithSerialAndActions: Ge,
  tableWithFooter: Ke,
  tableWithFooterSave: Me,
  tableWithTotals: qe,
  tableWithMultipleFooters: ze,
  tableHead: _e,
  tableBody: Xe
}, E = ({
  type: t = "table",
  inData: e,
  inColumns: o,
  footer: n = [],
  options: r = {}
} = {}) => {
  if (t === "table") {
    const s = Pe({
      inColumns: o,
      inData: e,
      inFooter: n
    });
    return Je(s, r);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
E.requests = Ye;
const j = ({ inItems: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return n.map((l) => C({
    inSource: l,
    inRecipe: r,
    inExecute: s
  })).flat(1 / 0).filter(Boolean);
}, Qe = ({ inSource: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  let l = n;
  typeof s == "function" && (l = s({
    inSource: n,
    inRecipe: r
  }));
  for (const [a, c] of Object.entries(l))
    Array.isArray(c) && r && a in r && (l[a] = j({
      inItems: c,
      inRecipe: r[a],
      inExecute: s
    }));
  return l;
}, C = ({ inSource: t, inRecipe: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return Array.isArray(n) ? j({
    inItems: n,
    inRecipe: r,
    inExecute: s
  }) : typeof n == "object" && n !== null ? Qe({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, Ze = ({ inKey: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.alterKey) || o;
}, to = ({ inValue: t, inDirective: e, inExecute: o }) => {
  const n = t, r = e, s = o;
  return r && "transform" in r ? C({
    inSource: n,
    inRecipe: r,
    inExecute: s
  }) : n;
}, eo = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(o) ? [o] : o;
}, oo = ({ inValue: t, inDirective: e }) => {
  const o = t, n = e;
  return n != null && n.valueKey && o && typeof o == "object" ? o[n.valueKey] : o;
}, no = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = t, r = e, s = o, l = {};
  for (const [a, c] of Object.entries(n)) {
    if (!(a in r))
      continue;
    const i = r[a], u = Ze({ inKey: a, inDirective: i });
    let b = c;
    b = to({
      inValue: b,
      inDirective: i,
      inExecute: s
    }), b = eo({ inValue: b, inDirective: i }), b = oo({ inValue: b, inDirective: i }), l[u] = b;
  }
  return l;
};
function F(t, e) {
  for (const o in t)
    typeof t[o] == "object" && t[o] !== null ? F(t[o], e) : typeof t[o] == "string" && t[o] === "${}" && (t[o] = e);
  return t;
}
const ro = ({ inSource: t, inOperation: e, inExecute: o }) => {
  const n = t, r = e;
  for (const [s, l] of Object.entries(r))
    if ("operationType" in l && l.operationType === "loopArray" && s in n) {
      const a = n[s].map((c) => {
        const i = structuredClone(l == null ? void 0 : l.template);
        return F(i, c), i;
      });
      n[s] = a;
    }
  return n;
}, so = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, lo = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = so({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, ao = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = co({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), co = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, io = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = ao({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = a;
  }
  return n;
}, uo = ({ inSource: t, inTemplate: e }) => t.map((r) => {
  const s = structuredClone(e);
  return s.textContent = r == null ? void 0 : r.columnName, s;
}), bo = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = uo({
      inSource: n[s],
      inTemplate: l == null ? void 0 : l.cell
    });
    n[s] = l == null ? void 0 : l.row, n[s].children = a;
  }
  return n;
}, fo = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = ho({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), ho = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, mo = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = fo({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, po = ({ inSource: t, inTemplate: e }) => t.map((n) => {
  const r = structuredClone(e == null ? void 0 : e.row), s = yo({
    inSource: n,
    inTemplate: e == null ? void 0 : e.cell
  });
  return r.children = s, r;
}), yo = ({ inSource: t, inTemplate: e }) => {
  const o = t;
  let n = [];
  for (const [r, s] of Object.entries(o)) {
    const l = structuredClone(e);
    l.textContent = s, n.push(l);
  }
  return n;
}, go = ({ inSource: t, inBuild: e, inExecute: o }) => {
  const n = structuredClone(t), r = structuredClone(e);
  for (const [s, l] of Object.entries(r)) {
    const a = po({
      inSource: n[s],
      inTemplate: l
    });
    n[s] = l == null ? void 0 : l.body, n[s].children = a;
  }
  return n;
}, wo = ({ inSource: t, inTransform: e, inExecute: o }) => {
  const n = e, r = {};
  for (let [s, l] of Object.entries(n))
    console.log("aaaaaaaaa : ", s);
  return r;
}, d = ({ inSource: t, inRecipe: e }) => {
  let o = t;
  const n = e;
  return n && typeof n == "object" && "transform" in n && (o = no({
    inSource: o,
    inTransform: n.transform,
    inExecute: d
  })), n && typeof n == "object" && "operation" in n && (o = ro({
    inSource: o,
    inOperation: n.operation,
    inExecute: d
  })), n && typeof n == "object" && "build" in n && (o = lo({
    inSource: o,
    inBuild: n == null ? void 0 : n.build,
    inExecute: d
  })), n && typeof n == "object" && "buildCollection" in n && (o = io({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildCollection,
    inExecute: d
  })), n && typeof n == "object" && "buildArray" in n && (o = bo({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildArray,
    inExecute: d
  })), n && typeof n == "object" && "buildBody" in n && (o = mo({
    inSource: o,
    inBuild: n == null ? void 0 : n.buildBody,
    inExecute: d
  })), n && typeof n == "object" && "objectToArray" in n && (o = go({
    inSource: o,
    inBuild: n == null ? void 0 : n.objectToArray,
    inExecute: d
  })), n && typeof n == "object" && "spec" in n && (o = wo({
    inSource: o,
    inTransform: n == null ? void 0 : n.spec,
    inExecute: d
  })), o;
}, Co = (t, e) => C({
  inSource: t,
  inRecipe: e,
  inExecute: d
}), $o = {
  children: ""
}, Ao = {
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
}, No = {
  transform: $o,
  operation: Ao
}, B = ({
  inData: t
}) => {
  let o = Co({
    children: t
  }, No);
  return o == null ? void 0 : o.children;
}, xo = "select", To = {
  id: "LedgerName"
}, So = [], Eo = {
  tagName: xo,
  attributes: To,
  children: So
}, jo = ({
  inData: t
}) => {
  let o = B({
    inData: t
  });
  const n = structuredClone(Eo);
  return n.children = o, n;
}, Fo = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Bo = (t, e) => {
  if (!Fo(t)) return;
  let o = {};
  for (const [n, r] of Object.entries(t))
    o[n] = $(r, e);
  return o;
}, Io = (t, e) => {
  const o = structuredClone(t);
  return Array.isArray(o) ? o.map((r) => $(r, e)) : void 0;
}, I = (t, e) => t.replace(/\$\{(\w+)\}/g, (o, n) => e[n] !== void 0 ? e[n] : o), ko = (t, e) => I(t, e), $ = (t, e) => {
  const o = structuredClone(t);
  return typeof o == "string" ? I(o, e) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = ko(o == null ? void 0 : o.textContent, e)), "attributes" in o && (o.attributes = Bo(o == null ? void 0 : o.attributes, e)), "children" in o && (o.children = Io(o == null ? void 0 : o.children, e))), o);
}, Oo = (t, e) => {
  const o = t, n = e;
  return o.map((r) => $(n, r));
}, k = (t, e, o) => {
  const n = o, r = e;
  let s = [];
  return n.map((l) => {
    let a = structuredClone(t);
    a.textContent = r[l.columnName], s.push(a);
  }), s;
}, O = (t, e, o) => {
  t.forEach((n, r) => {
    const s = e == null ? void 0 : e.data[r], l = k(o, s, e == null ? void 0 : e.columns);
    n.children = l;
  });
}, vo = (t, e) => {
  const o = structuredClone(e);
  o.attributes.width = "50px", t.unshift(o);
}, Po = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "#", t.unshift(o);
}, Lo = (t, e) => {
  t.forEach((o, n) => {
    const r = structuredClone(e);
    r.textContent = n + 1, o.children.unshift(r);
  });
}, Ho = (t, e) => {
  const o = structuredClone(e);
  delete o.children, t.unshift(o);
}, Ro = (t, e) => {
  vo(t == null ? void 0 : t.children[0].children, e == null ? void 0 : e.buildColGroup), Po(t == null ? void 0 : t.children[1].children[0].children, e == null ? void 0 : e.buildHeader), Lo(t == null ? void 0 : t.children[2].children, e == null ? void 0 : e.buildBodyCell), Ho(t == null ? void 0 : t.children[3].children[0].children, e == null ? void 0 : e.buildFooter);
}, Jo = (t, e) => {
  const o = structuredClone(e);
  o.attributes.width = "100px", t.push(o);
}, Uo = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "options", t.push(o);
}, Vo = (t, e) => {
  t.forEach((o, n) => {
    const r = structuredClone(e);
    r.textContent = "show", o.children.push(r);
  });
}, Do = (t, e) => {
  const o = structuredClone(e);
  o.textContent = "save", t.push(o);
}, Wo = (t, e) => {
  Jo(t == null ? void 0 : t.children[0].children, e == null ? void 0 : e.buildColGroup), Uo(t == null ? void 0 : t.children[1].children[0].children, e == null ? void 0 : e.buildHeader), Vo(t == null ? void 0 : t.children[2].children, e == null ? void 0 : e.button), Do(t == null ? void 0 : t.children[3].children[0].children, e == null ? void 0 : e.button);
}, y = (t, e) => {
  var o;
  if (((o = t == null ? void 0 : t.attributes) == null ? void 0 : o["data-role"]) === e) return t;
  for (const n of (t == null ? void 0 : t.children) ?? []) {
    const r = y(n, e);
    if (r) return r;
  }
  return null;
}, Go = (t, e) => {
  const o = t[e.fileName], n = e.dataRole ? y(o, e.dataRole) : o;
  return (e.filePath ?? []).reduce((r, s) => r[s], n);
}, Ko = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Mo = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, qo = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, zo = {
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
}, _o = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Xo = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Yo = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Qo = {
  tagName: "select",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Zo = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, m = {
  buildBodyTr: Ko,
  buildColGroup: Mo,
  buildHeader: qo,
  buildFooter: zo,
  buildBodyCell: _o,
  button: Xo,
  buildOption: Yo,
  buildSelect: Qo,
  buildDataList: Zo
}, tn = "table", en = {
  class: "table table-hover table-striped align-middle border mb-0"
}, on = [
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
], h = {
  tagName: tn,
  attributes: en,
  children: on
}, nn = [
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
], rn = [
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
], p = { data: {}, base: h, spec: m }, sn = { fromCollection: Oo, tableBody: k, buildBody: O }, ln = (t, e) => {
  const o = t.dataRole ? y(p[t.fileName], t.dataRole) : p[t.fileName], n = [...t.filePath ?? []], r = n.pop(), s = n.reduce((l, a) => l[a], o);
  s[r] = e;
}, x = (t) => {
  t.forEach((e) => {
    const o = Go(p, e.sourcePath);
    if (o) {
      const n = sn[e.func](o, m[e.templateKey]);
      ln(e.destinationPath, n);
    } else
      console.log("   !instruction : ", e), console.log("   !source : ", o);
  });
}, an = (t) => (p.data = t, x(rn), x(nn), O(y(h, "table-body").children, t, m.buildBodyCell), Ro(h, m), Wo(h, m), h), cn = ({
  inData: t,
  inColumns: e,
  footer: o = [],
  options: n
} = {}) => an({
  columns: e,
  data: t
}), un = {
  table: E,
  select: jo,
  selectOptionsOnly: B,
  tableFromSpec: cn
}, v = ({
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
  return Z({ inConfig: u }), u;
}, P = ({
  type: t = "table",
  data: e,
  columns: o,
  options: n,
  showLog: r = !1
} = {}) => {
  const s = v({
    type: t,
    data: e,
    columns: o,
    options: n,
    showLog: r
  }), l = un[s.type];
  if (!l)
    throw new Error(`Renderer for type "${s.type}" not found.`);
  const a = l({
    inColumns: s.columns,
    inData: s.data,
    options: s.options
  });
  return s.showLog && console.log("json-renderers-build output:", a), a;
};
Q({ render: P, getSpec: v });
const L = ({
  inColumns: t,
  inType: e = "table",
  inData: o,
  inShowLog: n = !1
} = {}) => P({
  type: e,
  data: o ?? [],
  columns: t,
  showLog: n
}), dn = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, bn = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: dn,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, fn = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : R(t), H = (t) => Array.isArray(t) ? t.map(fn).flat(1 / 0).filter(Boolean) : [], hn = (t) => (t == null, t), mn = "http://www.w3.org/2000/svg", pn = /* @__PURE__ */ new Set([
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
]), yn = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return pn.has(e) ? document.createElementNS(mn, e) : document.createElement(e);
}, gn = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), wn = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Cn = "http://www.w3.org/1999/xlink", $n = ({ inElement: t, inAttributes: e }) => {
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
            o.setAttributeNS(Cn, "href", a);
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
}, An = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const o = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && t.classList.add(...o), t;
}, Nn = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = yn({ inTagName: t.tagName });
  if (!e) return null;
  if (gn({
    inElement: e,
    inTextContent: hn(t.textContent),
    inTagName: t.tagName
  }), wn({
    inElement: e,
    inProperties: t.properties
  }), $n({
    inElement: e,
    inAttributes: t.attributes
  }), An({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const o = H(t.children);
    o.length && e.append(...o);
  }
  return e;
}, R = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? H(t) : typeof t == "object" ? Nn(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, xn = "./tags.schema.json", Tn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Sn = {
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
}, En = {
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
}, jn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Fn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Bn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, In = {
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
}, kn = {
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
}, On = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, vn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Pn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ln = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Hn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Rn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Jn = {
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
}, Un = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Vn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Dn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Wn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, Gn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Kn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Mn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, qn = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, zn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, _n = {
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
}, Xn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Yn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Qn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Zn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, tr = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, er = {
  $schema: xn,
  div: Tn,
  input: Sn,
  checkbox: En,
  colgroup: jn,
  col: Fn,
  label: Bn,
  form: In,
  select: kn,
  p: On,
  h1: vn,
  h2: Pn,
  span: Ln,
  img: Hn,
  button: Rn,
  table: Jn,
  thead: Un,
  tbody: Vn,
  tfoot: Dn,
  tr: Wn,
  th: Gn,
  td: Kn,
  datalist: Mn,
  option: qn,
  header: zn,
  a: _n,
  i: Xn,
  small: Yn,
  ul: Qn,
  li: Zn,
  hr: tr
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
}, or = ({ inTagsFound: t, inAllowedTags: e }) => {
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
}, nr = ({ inSpec: t, inTags: e = er } = {}) => {
  const o = t, n = e, r = w({ inSpec: o }), s = or({
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
  return R(e);
};
bn({
  inFuncDefinition: J,
  inReviewSpec: nr
});
const U = ({
  inSpec: t,
  inTargetHtmlId: e,
  inAppendPosition: o,
  inShowLog: n = !1
} = {}) => {
  const r = t, s = e, l = o, a = n, c = J(r);
  a && console.log("renderToDom 1 (content):", c);
  const i = document.getElementById(s);
  return i ? (Array.isArray(c) || c instanceof NodeList || c instanceof HTMLCollection ? l === "prepend" ? i.prepend(...c) : i.append(...c) : l === "prepend" ? i.prepend(c) : (i.innerHTML = "", i.append(c)), a && console.log("renderToDom 2 (mounted):", i), i) : null;
}, rr = (t = {}) => {
  const e = T(t);
  console.log("showLog : ", e == null ? void 0 : e.showLog);
  const o = L({
    inColumns: e.columns,
    inData: e.data,
    inType: e.type,
    inShowLog: e.showLog
  });
  return U({
    inSpec: o,
    inTargetHtmlId: e.targetHtmlId,
    inAppendPosition: e.appendPosition,
    inShowLog: e.showLog
  });
};
D({ render: rr, getSpec: S, validateConfig: T, buildSpec: L, renderToDom: U });
export {
  L as buildSpec,
  rr as default,
  S as getSpec,
  rr as render,
  U as renderToDom,
  T as validateConfig
};
