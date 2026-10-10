const A = {
  version: "v14.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, S = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: A,
    renderToDom: t
  }));
}, E = {
  version: "v9.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, v = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: E,
    renderToDom: t
  }));
}, k = "table", j = {
  class: "table table-hover table-striped mb-0"
}, O = [], U = {
  tagName: k,
  attributes: j,
  children: O
}, J = "thead", R = [], F = {
  tagName: J,
  children: R
}, W = "tr", D = [], V = {
  tagName: W,
  children: D
}, B = "th", I = {
  value: ""
}, M = "", H = {
  tagName: B,
  attributes: I,
  textContent: M
}, G = ({ inColumn: t } = {}) => {
  const e = structuredClone(H);
  return e.attributes.value = t, e.textContent = t, e;
}, q = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(V), n = t.map((o) => G({ inColumn: o }));
  return e.children = n, e;
}, z = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(F), n = [
    q({ inColumns: t })
  ];
  return e.children = n, e;
}, K = "tbody", L = [], P = {
  tagName: K,
  children: L
}, _ = "tr", X = [], Q = {
  tagName: _,
  children: X
}, Y = "td", Z = {
  value: ""
}, tt = "", et = {
  tagName: Y,
  attributes: Z,
  textContent: tt
}, nt = ({ inValue: t } = {}) => {
  const e = structuredClone(et);
  return e.attributes.value = t, e.textContent = t, e;
}, ot = ({ inRow: t, inColumns: e = [] } = {}) => {
  const n = structuredClone(Q), o = e.map((s) => {
    const l = Array.isArray(t) ? t[s] : t == null ? void 0 : t[s];
    return nt({ inValue: l });
  });
  return n.children = o, n;
}, st = ({ inData: t = [], inColumns: e = [] } = {}) => {
  const n = structuredClone(P), o = t.map((s) => ot({
    inRow: s,
    inColumns: e
  }));
  return n.children = o, n;
}, lt = "tfoot", rt = {
  class: "table-light"
}, at = [], ct = {
  tagName: lt,
  attributes: rt,
  children: at
}, it = "tr", ut = {
  class: "align-middle"
}, dt = [], mt = {
  tagName: it,
  attributes: ut,
  children: dt
}, bt = "td", ht = {
  class: "align-middle py-2"
}, pt = [], ft = {
  tagName: bt,
  attributes: ht,
  children: pt
}, gt = "input", yt = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, wt = {
  tagName: gt,
  attributes: yt
}, Tt = ({ inColumn: t } = {}) => {
  const e = structuredClone(ft), n = structuredClone(wt);
  return n.attributes.name = t, n.attributes.placeholder = t, e.children.push(n), e;
}, Ct = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(mt);
  return e.children = t.map((n) => Tt({ inColumn: n })), e;
}, $t = ({ inColumns: t = [] } = {}) => Ct({ inColumns: t }), Nt = "tr", xt = {
  class: "align-middle"
}, At = [], St = {
  tagName: Nt,
  attributes: xt,
  children: At
}, Et = "td", vt = {
  class: "align-middle py-2"
}, kt = [], jt = {
  tagName: Et,
  attributes: vt,
  children: kt
}, Ot = "input", Ut = {
  type: "text",
  name: "",
  placeholder: "",
  class: "form-control form-control-sm"
}, Jt = {
  tagName: Ot,
  attributes: Ut
}, Rt = "button", Ft = {
  type: "button",
  class: "btn btn-primary btn-sm ms-2"
}, Wt = "Save", Dt = {
  tagName: Rt,
  attributes: Ft,
  textContent: Wt
}, Vt = ({ inColumn: t, inSave: e = !1 } = {}) => {
  const n = structuredClone(jt), o = structuredClone(Jt);
  return o.attributes.name = t, o.attributes.placeholder = t, n.children.push(o), e && n.children.push(structuredClone(Dt)), n;
}, Bt = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(St);
  return e.children = t.map((n, o) => Vt({
    inColumn: n,
    inSave: o === t.length - 1
  })), e;
}, It = ({ inColumns: t = [] } = {}) => Bt({ inColumns: t }), Mt = "tr", Ht = {
  class: "fw-semibold align-middle"
}, Gt = [], qt = {
  tagName: Mt,
  attributes: Ht,
  children: Gt
}, zt = "td", Kt = {
  class: "align-middle py-2"
}, Lt = "", Pt = {
  tagName: zt,
  attributes: Kt,
  textContent: Lt
}, _t = (t, e) => Array.isArray(t) ? t[e] : t == null ? void 0 : t[e], Xt = ({ inColumn: t, inIndex: e, inData: n = [] } = {}) => {
  const o = structuredClone(Pt), s = n.map((l) => _t(l, t)).filter((l) => l != null && String(l).trim() !== "").map(Number).filter(Number.isFinite);
  return o.textContent = s.length ? String(s.reduce((l, r) => l + r, 0)) : e === 0 ? "Total" : "", o;
}, Qt = ({ inColumns: t = [], inData: e = [] } = {}) => {
  const n = structuredClone(qt);
  return n.children = t.map(
    (o, s) => Xt({ inColumn: o, inIndex: s, inData: e })
  ), n;
}, Yt = ({ inColumns: t = [], inData: e = [] } = {}) => Qt({ inColumns: t, inData: e }), Zt = "tr", te = {
  class: "align-middle"
}, ee = [], ne = {
  tagName: Zt,
  attributes: te,
  children: ee
}, oe = "td", se = {
  class: "align-middle py-2"
}, le = {
  tagName: oe,
  attributes: se
}, re = () => structuredClone(le), ae = ({ inColumns: t = [] } = {}) => {
  const e = structuredClone(ne);
  return e.children = t.map(() => re()), e;
}, ce = ({ inColumns: t = [] } = {}) => ae({ inColumns: t }), f = {
  inputs: $t,
  inputsWithSave: It,
  totals: Yt,
  empty: ce
}, ie = ({ inFooter: t = [], inColumns: e = [], inData: n = [] } = {}) => {
  const o = structuredClone(ct);
  return o.children = t.map((s) => {
    if (!Object.hasOwn(f, s))
      throw new Error(`Unknown footer "${s}".`);
    return f[s]({ inColumns: e, inData: n });
  }), o;
}, ue = ({
  inColumns: t = [],
  inData: e = [],
  inFooter: n = []
} = {}) => {
  const o = structuredClone(U), s = [
    z({ inColumns: t }),
    st({ inData: e, inColumns: t })
  ];
  if (!Array.isArray(n))
    throw new TypeError("The footer property must be an array of footer names.");
  return n.length > 0 && s.push(ie({
    inFooter: n,
    inColumns: t,
    inData: e
  })), o.children = s, o;
}, de = (t) => {
  const [e, n] = t.children;
  e.children[0].children.unshift({
    tagName: "th",
    textContent: "#"
  }), n.children.forEach((o, s) => {
    o.children.unshift({
      tagName: "td",
      textContent: String(s + 1)
    });
  });
}, me = (t) => t === !0 ? [{ label: "Apply", type: "button" }] : Array.isArray(t) ? t : [], be = (t, e) => {
  const n = me(e);
  if (n.length === 0) return;
  const [o, s] = t.children;
  o.children[0].children.push({
    tagName: "th",
    textContent: "Actions"
  }), s.children.forEach((l) => {
    l.children.push({
      tagName: "td",
      children: n.map((r) => ({
        tagName: "button",
        attributes: { type: r.type || "button" },
        textContent: r.label
      }))
    });
  });
}, he = (t, e = {}) => (e.showSerial && de(t), e.showOptions && be(t, e.showOptions), t), pe = {
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
}, fe = {
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
}, ge = {
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
  footer: [
    "inputsWithSave"
  ],
  options: {}
}, $e = {
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
}, Ne = {
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
}, Ae = {
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
}, Se = {
  table: pe,
  tableWithSerial: fe,
  tableWithDefaultAction: ge,
  tableWithCustomActions: ye,
  tableWithSerialAndActions: we,
  tableWithFooter: Te,
  tableWithFooterSave: Ce,
  tableWithTotals: $e,
  tableWithMultipleFooters: Ne,
  tableHead: xe,
  tableBody: Ae
}, g = ({
  type: t = "table",
  inData: e,
  inColumns: n,
  footer: o = [],
  options: s = {}
} = {}) => {
  if (t === "table") {
    const l = ue({
      inColumns: n,
      inData: e,
      inFooter: o
    });
    return he(l, s);
  }
  throw new Error(`Unknown table renderer type "${t}".`);
};
g.requests = Se;
const y = ({ inItems: t, inRecipe: e, inExecute: n }) => {
  const o = t, s = e, l = n;
  return o.map((r) => p({
    inSource: r,
    inRecipe: s,
    inExecute: l
  })).flat(1 / 0).filter(Boolean);
}, Ee = ({ inSource: t, inRecipe: e, inExecute: n }) => {
  const o = t, s = e, l = n;
  let r = o;
  typeof l == "function" && (r = l({
    inSource: o,
    inRecipe: s
  }));
  for (const [a, d] of Object.entries(r))
    Array.isArray(d) && s && a in s && (r[a] = y({
      inItems: d,
      inRecipe: s[a],
      inExecute: l
    }));
  return r;
}, p = ({ inSource: t, inRecipe: e, inExecute: n }) => {
  const o = t, s = e, l = n;
  return Array.isArray(o) ? y({
    inItems: o,
    inRecipe: s,
    inExecute: l
  }) : typeof o == "object" && o !== null ? Ee({
    inSource: o,
    inRecipe: s,
    inExecute: l
  }) : o;
}, ve = ({ inKey: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.alterKey) || n;
}, ke = ({ inValue: t, inDirective: e, inExecute: n }) => {
  const o = t, s = e, l = n;
  return s && "transform" in s ? p({
    inSource: o,
    inRecipe: s,
    inExecute: l
  }) : o;
}, je = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return (o == null ? void 0 : o.valueType) === "array" && !Array.isArray(n) ? [n] : n;
}, Oe = ({ inValue: t, inDirective: e }) => {
  const n = t, o = e;
  return o != null && o.valueKey && n && typeof n == "object" ? n[o.valueKey] : n;
}, Ue = ({ inSource: t, inTransform: e, inExecute: n }) => {
  const o = t, s = e, l = n, r = {};
  for (const [a, d] of Object.entries(o)) {
    if (!(a in s))
      continue;
    const u = s[a], c = ve({ inKey: a, inDirective: u });
    let i = d;
    i = ke({
      inValue: i,
      inDirective: u,
      inExecute: l
    }), i = je({ inValue: i, inDirective: u }), i = Oe({ inValue: i, inDirective: u }), r[c] = i;
  }
  return r;
};
function w(t, e) {
  for (const n in t)
    typeof t[n] == "object" && t[n] !== null ? w(t[n], e) : typeof t[n] == "string" && t[n] === "${}" && (t[n] = e);
  return t;
}
const Je = ({ inSource: t, inOperation: e, inExecute: n }) => {
  const o = t, s = e;
  for (const [l, r] of Object.entries(s))
    if ("operationType" in r && r.operationType === "loopArray" && l in o) {
      const a = o[l].map((d) => {
        const u = structuredClone(r == null ? void 0 : r.template);
        return w(u, d), u;
      });
      o[l] = a;
    }
  return o;
}, b = ({ inSource: t, inRecipe: e }) => {
  let n = t;
  const o = e;
  return o && typeof o == "object" && "transform" in o && (n = Ue({
    inSource: n,
    inTransform: o.transform,
    inExecute: b
  })), o && typeof o == "object" && "operation" in o && (n = Je({
    inSource: n,
    inOperation: o.operation,
    inExecute: b
  })), n;
}, Re = (t, e) => p({
  inSource: t,
  inRecipe: e,
  inExecute: b
}), Fe = {
  children: ""
}, We = {
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
}, De = {
  transform: Fe,
  operation: We
}, T = ({
  inData: t
}) => {
  let n = Re({
    children: t
  }, De);
  return n == null ? void 0 : n.children;
}, Ve = "select", Be = {
  id: "LedgerName"
}, Ie = [], Me = {
  tagName: Ve,
  attributes: Be,
  children: Ie
}, He = ({
  inData: t
}) => {
  let n = T({
    inData: t
  });
  const o = structuredClone(Me);
  return o.children = n, o;
}, Ge = {
  table: g,
  select: He,
  selectOptionsOnly: T
}, C = ({
  type: t = "table",
  data: e,
  columns: n
}) => {
  const s = Ge[t];
  return s({
    inColumns: n,
    inData: e
  });
};
v(C);
const qe = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, ze = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const n = {
    meta: qe,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = n, globalThis.ks.jsonToTag = n;
}, Ke = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : N(t), $ = (t) => Array.isArray(t) ? t.map(Ke).flat(1 / 0).filter(Boolean) : [], Le = (t) => (t == null, t), Pe = "http://www.w3.org/2000/svg", _e = /* @__PURE__ */ new Set([
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
]), Xe = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const n = document.createElement("input");
    return n.type = "checkbox", n;
  }
  return _e.has(e) ? document.createElementNS(Pe, e) : document.createElement(e);
}, Qe = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), Ye = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Ze = "http://www.w3.org/1999/xlink", tn = ({ inElement: t, inAttributes: e }) => {
  const n = t, o = e;
  if (!n || !o || typeof o != "object")
    return n;
  const s = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([l, r]) => {
    if (l === "class") {
      s ? n.setAttribute("class", String(r)) : n.className = r;
      return;
    }
    if (l === "xlink:href" || l === "href") {
      if (r != null) {
        const a = String(r);
        if (s)
          try {
            n.setAttributeNS(Ze, "href", a);
          } catch {
          }
        n.setAttribute("href", a), n.setAttribute("xlink:href", a);
      }
      return;
    }
    if (typeof r == "boolean") {
      r ? n.setAttribute(l, "") : n.removeAttribute(l);
      return;
    }
    r != null && n.setAttribute(l, String(r));
  }), n;
}, en = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const n = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return n.length && t.classList.add(...n), t;
}, nn = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = Xe({ inTagName: t.tagName });
  if (!e) return null;
  if (Qe({
    inElement: e,
    inTextContent: Le(t.textContent),
    inTagName: t.tagName
  }), Ye({
    inElement: e,
    inProperties: t.properties
  }), tn({
    inElement: e,
    inAttributes: t.attributes
  }), en({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const n = $(t.children);
    n.length && e.append(...n);
  }
  return e;
}, N = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? $(t) : typeof t == "object" ? nn(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, on = "./tags.schema.json", sn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, ln = {
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
}, rn = {
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
}, an = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, cn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, un = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, dn = {
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
}, mn = {
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
}, bn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, hn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, pn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, fn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, gn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, yn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, wn = {
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
}, Tn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Cn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, $n = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Nn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, xn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, An = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Sn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, En = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, vn = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, kn = {
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
}, jn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, On = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Un = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Jn = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Rn = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Fn = {
  $schema: on,
  div: sn,
  input: ln,
  checkbox: rn,
  colgroup: an,
  col: cn,
  label: un,
  form: dn,
  select: mn,
  p: bn,
  h1: hn,
  h2: pn,
  span: fn,
  img: gn,
  button: yn,
  table: wn,
  thead: Tn,
  tbody: Cn,
  tfoot: $n,
  tr: Nn,
  th: xn,
  td: An,
  datalist: Sn,
  option: En,
  header: vn,
  a: kn,
  i: jn,
  small: On,
  ul: Un,
  li: Jn,
  hr: Rn
}, h = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((o) => h({ inSpec: o }));
  if (typeof e != "object") return [];
  const n = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && n.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((o) => {
    const s = h({ inSpec: o });
    n.push(...s);
  }), n;
}, Wn = ({ inTagsFound: t, inAllowedTags: e }) => {
  const n = t ?? [], o = e ?? {}, s = new Set(
    Object.keys(o).filter((c) => c !== "$schema").map((c) => c.toLowerCase())
  ), l = {}, r = [], a = [];
  n.forEach((c) => {
    l[c] = (l[c] || 0) + 1, s.has(c) ? r.includes(c) || r.push(c) : a.includes(c) || a.push(c);
  });
  const d = n.length, u = a.length === 0;
  return {
    totalTags: d,
    tagCounts: l,
    uniqueTags: Object.keys(l),
    recognizedTags: r,
    unrecognizedTags: a,
    areAllTagsPresent: u
  };
}, Dn = ({ inSpec: t, inTags: e = Fn } = {}) => {
  const n = t, o = e, s = h({ inSpec: n }), l = Wn({
    inTagsFound: s,
    inAllowedTags: o
  });
  return {
    areAllTagsPresent: l.areAllTagsPresent,
    totalTags: l.totalTags,
    tagCounts: l.tagCounts,
    uniqueTags: l.uniqueTags,
    recognizedTags: l.recognizedTags,
    unrecognizedTags: l.unrecognizedTags
  };
}, x = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return N(e);
};
ze({
  inFuncDefinition: x,
  inReviewSpec: Dn
});
const Vn = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: n,
  inData: o,
  showLog: s
} = {}) => {
  const l = t, r = o ?? [], a = e;
  s && console.log("buildSpec 1 :", l, r.localColumns);
  let u = C({
    type: n,
    data: r,
    columns: a
  });
  const c = x(u);
  return console.log("buildSpec 2 :", u, c), s && console.log("buildSpec 3 :", c), c;
}, Bn = ({
  type: t = "table",
  targetHtmlId: e,
  data: n,
  classToApply: o,
  columns: s,
  appendPosition: l,
  showLog: r = !1
} = {}) => {
  const a = t, d = e, u = n, c = s;
  r && console.log("showLog 1 :", a, e, n, o, s, l);
  const i = Vn({
    inTargetHtmlId: d,
    inColumns: c,
    showLog: r,
    inData: u,
    type: a
  });
  r && console.log("showLog 2 :", i);
  const m = document.getElementById(d);
  return r && console.log("showLog 3 :", m), Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? l === "prepend" ? m.prepend(...i) : m.append(...i) : l === "prepend" ? m.prepend(i) : (m && (m.innerHTML = ""), m.append(i)), r && console.log("showLog 5 :", m), m;
};
S(Bn);
export {
  Bn as default
};
