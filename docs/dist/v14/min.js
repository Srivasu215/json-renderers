const E = {
  version: "v13.1.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, D = (t) => {
  var n;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (n = globalThis.ks).jsonRenderers ?? (n.jsonRenderers = {
    meta: E,
    renderToDom: t
  }));
}, j = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, v = (t) => {
  var n;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (n = globalThis.ks).jsonRenderersBuild ?? (n.jsonRenderersBuild = {
    meta: j,
    renderToDom: t
  }));
}, y = ({ inItems: t, inRecipe: n, inExecute: e }) => {
  const o = t, l = n, r = e;
  return o.map((s) => g({
    inSource: s,
    inRecipe: l,
    inExecute: r
  })).flat(1 / 0).filter(Boolean);
}, O = ({ inSource: t, inRecipe: n, inExecute: e }) => {
  const o = t, l = n, r = e;
  let s = o;
  typeof r == "function" && (s = r({
    inSource: o,
    inRecipe: l
  }));
  for (const [a, u] of Object.entries(s))
    Array.isArray(u) && l && a in l && (s[a] = y({
      inItems: u,
      inRecipe: l[a],
      inExecute: r
    }));
  return s;
}, g = ({ inSource: t, inRecipe: n, inExecute: e }) => {
  const o = t, l = n, r = e;
  return Array.isArray(o) ? y({
    inItems: o,
    inRecipe: l,
    inExecute: r
  }) : typeof o == "object" && o !== null ? O({
    inSource: o,
    inRecipe: l,
    inExecute: r
  }) : o;
}, F = ({ inKey: t, inDirective: n }) => {
  const e = t, o = n;
  return (o == null ? void 0 : o.alterKey) || e;
}, R = ({ inValue: t, inDirective: n, inExecute: e }) => {
  const o = t, l = n, r = e;
  return l && "transform" in l ? g({
    inSource: o,
    inRecipe: l,
    inExecute: r
  }) : o;
}, V = ({ inValue: t, inDirective: n }) => {
  const e = t, o = n;
  return (o == null ? void 0 : o.valueType) === "array" && !Array.isArray(e) ? [e] : e;
}, J = ({ inValue: t, inDirective: n }) => {
  const e = t, o = n;
  return o != null && o.valueKey && e && typeof e == "object" ? e[o.valueKey] : e;
}, I = ({ inSource: t, inTransform: n, inExecute: e }) => {
  const o = t, l = n, r = e, s = {};
  for (const [a, u] of Object.entries(o)) {
    if (!(a in l))
      continue;
    const d = l[a], c = F({ inKey: a, inDirective: d });
    let i = u;
    i = R({
      inValue: i,
      inDirective: d,
      inExecute: r
    }), i = V({ inValue: i, inDirective: d }), i = J({ inValue: i, inDirective: d }), s[c] = i;
  }
  return s;
};
function T(t, n) {
  for (const e in t)
    typeof t[e] == "object" && t[e] !== null ? T(t[e], n) : typeof t[e] == "string" && t[e] === "${}" && (t[e] = n);
  return t;
}
const G = ({ inSource: t, inOperation: n, inExecute: e }) => {
  const o = t, l = n;
  for (const [r, s] of Object.entries(l))
    if ("operationType" in s && s.operationType === "loopArray" && r in o) {
      const a = o[r].map((u) => {
        const d = { ...s == null ? void 0 : s.template };
        return T(d, u), d;
      });
      o[r] = a;
    }
  return o;
}, p = ({ inSource: t, inRecipe: n }) => {
  let e = t;
  const o = n;
  return o && typeof o == "object" && "transform" in o && (e = I({
    inSource: e,
    inTransform: o.transform,
    inExecute: p
  })), o && typeof o == "object" && "operation" in o && (e = G({
    inSource: e,
    inOperation: o.operation,
    inExecute: p
  })), e;
}, b = (t, n) => g({
  inSource: t,
  inRecipe: n,
  inExecute: p
}), M = {
  children: ""
}, z = {
  children: {
    operationType: "loopArray",
    template: {
      tagName: "th",
      attributes: {
        value: "${}"
      },
      textContent: "${}"
    }
  }
}, K = {
  transform: M,
  operation: z
}, L = ({
  inData: t
} = {}) => {
  const e = (t ?? []).map((l) => typeof l == "object" && l !== null ? l.title || l.name || l.key || "" : String(l)), o = b({
    children: e
  }, K);
  return (o == null ? void 0 : o.children) ?? [];
}, q = "tr", B = [], H = {
  tagName: q,
  children: B
}, P = ({
  inData: t
} = {}) => {
  const n = t ?? [], e = structuredClone(H);
  return e.children = L({ inData: n }), e;
}, _ = "thead", U = [], X = {
  tagName: _,
  children: U
}, C = ({
  inData: t
} = {}) => {
  const n = t ?? [], e = structuredClone(X);
  return e.children = [P({ inData: n })], e;
}, Q = {
  children: ""
}, W = {
  children: {
    operationType: "loopArray",
    template: {
      tagName: "td",
      attributes: {
        value: "${}"
      },
      textContent: "${}"
    }
  }
}, Y = {
  transform: Q,
  operation: W
}, Z = ({
  inData: t
} = {}) => {
  const e = (t ?? []).map((l) => typeof l == "object" && l !== null ? JSON.stringify(l) : String(l ?? "")), o = b({
    children: e
  }, Y);
  return (o == null ? void 0 : o.children) ?? [];
}, tt = "tr", et = [], nt = {
  tagName: tt,
  children: et
}, ot = ({
  inData: t,
  inColumns: n
} = {}) => {
  const e = t ?? [], o = n;
  return e.map((l) => {
    let r;
    Array.isArray(l) ? r = l : typeof l == "object" && l !== null ? Array.isArray(o) && o.length > 0 ? r = o.map((a) => {
      const u = typeof a == "object" ? a.key || a.dataKey || a.title || a.name : a;
      return l[u] ?? "";
    }) : r = Object.values(l) : r = [l];
    const s = structuredClone(nt);
    return s.children = Z({ inData: r }), s;
  });
}, lt = "tbody", rt = [], st = {
  tagName: lt,
  children: rt
}, x = ({
  inData: t,
  inColumns: n
} = {}) => {
  const e = structuredClone(st);
  return e.children = ot({ inData: t, inColumns: n }), e;
}, at = "table", ct = {
  class: "table table-hover table-striped mb-0"
}, it = [], ut = {
  tagName: at,
  attributes: ct,
  children: it
}, dt = ({
  inColumns: t,
  inData: n
} = {}) => {
  const e = t ?? [], o = n ?? [], l = structuredClone(ut);
  return l.children = [
    C({ inData: e }),
    x({ inData: o, inColumns: e })
  ], l;
}, ft = {
  children: ""
}, pt = {
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
}, ht = {
  transform: ft,
  operation: pt
}, A = ({
  inData: t
} = {}) => {
  let e = b({
    children: t ?? []
  }, ht);
  return (e == null ? void 0 : e.children) ?? [];
}, gt = "select", bt = {
  id: "LedgerName"
}, mt = [], wt = {
  tagName: gt,
  attributes: bt,
  children: mt
}, yt = ({
  inData: t
} = {}) => {
  let e = A({
    inData: t ?? []
  });
  const o = structuredClone(wt);
  return o.children = e, o;
}, w = {
  table: dt,
  select: yt,
  selectOptionsOnly: A,
  tableHead: C,
  tableBody: x
}, $ = ({
  type: t = "table",
  data: n,
  columns: e
} = {}) => {
  const o = t, l = w[o];
  return l ? l({
    inColumns: e,
    inData: n
  }) : (console.error(
    `[Renderer] Unknown renderer type "${o}". Available types: ${Object.keys(w).join(", ")}`
  ), null);
};
v($);
const Tt = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Ct = ({ inFuncDefinition: t, inReviewSpec: n } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: Tt,
    buildSpecElement: t,
    reviewSpec: n
  };
  globalThis.ks["json-to-tag"] = e, globalThis.ks.jsonToTag = e;
}, xt = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : N(t), S = (t) => Array.isArray(t) ? t.map(xt).flat(1 / 0).filter(Boolean) : [], At = (t) => (t == null, t), $t = "http://www.w3.org/2000/svg", St = /* @__PURE__ */ new Set([
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
]), Nt = ({ inTagName: t }) => {
  const n = t == null ? void 0 : t.toLowerCase();
  if (!n) return null;
  if (n === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return St.has(n) ? document.createElementNS($t, n) : document.createElement(n);
}, kt = ({ inElement: t, inTextContent: n }) => (!t || n === void 0 || n === null || (t.textContent = n), t), Et = ({ inElement: t, inProperties: n }) => (t && n && typeof n == "object" && Object.assign(t, n), t), Dt = "http://www.w3.org/1999/xlink", jt = ({ inElement: t, inAttributes: n }) => {
  const e = t, o = n;
  if (!e || !o || typeof o != "object")
    return e;
  const l = typeof SVGElement < "u" ? e instanceof SVGElement : e.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([r, s]) => {
    if (r === "class") {
      l ? e.setAttribute("class", String(s)) : e.className = s;
      return;
    }
    if (r === "xlink:href" || r === "href") {
      if (s != null) {
        const a = String(s);
        if (l)
          try {
            e.setAttributeNS(Dt, "href", a);
          } catch {
          }
        e.setAttribute("href", a), e.setAttribute("xlink:href", a);
      }
      return;
    }
    if (typeof s == "boolean") {
      s ? e.setAttribute(r, "") : e.removeAttribute(r);
      return;
    }
    s != null && e.setAttribute(r, String(s));
  }), e;
}, vt = ({ inElement: t, inClassList: n }) => {
  if (!t || !n) return t;
  const e = typeof n == "string" ? n.split(/\s+/).filter(Boolean) : Array.isArray(n) ? n.filter((o) => typeof o == "string" && o.trim()) : [];
  return e.length && t.classList.add(...e), t;
}, Ot = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const n = Nt({ inTagName: t.tagName });
  if (!n) return null;
  if (kt({
    inElement: n,
    inTextContent: At(t.textContent),
    inTagName: t.tagName
  }), Et({
    inElement: n,
    inProperties: t.properties
  }), jt({
    inElement: n,
    inAttributes: t.attributes
  }), vt({
    inElement: n,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const e = S(t.children);
    e.length && n.append(...e);
  }
  return n;
}, N = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? S(t) : typeof t == "object" ? Ot(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, Ft = "./tags.schema.json", Rt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Vt = {
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
}, Jt = {
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
}, It = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Gt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Mt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, zt = {
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
}, Kt = {
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
}, Lt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, qt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Bt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ht = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Pt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, _t = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Ut = {
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
}, Xt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Qt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Wt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Yt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, Zt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, te = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, ee = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, ne = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, oe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, le = {
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
}, re = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, se = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ae = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, ce = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, ie = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, ue = {
  $schema: Ft,
  div: Rt,
  input: Vt,
  checkbox: Jt,
  colgroup: It,
  col: Gt,
  label: Mt,
  form: zt,
  select: Kt,
  p: Lt,
  h1: qt,
  h2: Bt,
  span: Ht,
  img: Pt,
  button: _t,
  table: Ut,
  thead: Xt,
  tbody: Qt,
  tfoot: Wt,
  tr: Yt,
  th: Zt,
  td: te,
  datalist: ee,
  option: ne,
  header: oe,
  a: le,
  i: re,
  small: se,
  ul: ae,
  li: ce,
  hr: ie
}, h = ({ inSpec: t }) => {
  const n = t;
  if (!n) return [];
  if (Array.isArray(n))
    return n.flatMap((o) => h({ inSpec: o }));
  if (typeof n != "object") return [];
  const e = [];
  return typeof n.tagName == "string" && n.tagName.trim().length > 0 && e.push(n.tagName.toLowerCase()), Array.isArray(n.children) && n.children.length > 0 && n.children.forEach((o) => {
    const l = h({ inSpec: o });
    e.push(...l);
  }), e;
}, de = ({ inTagsFound: t, inAllowedTags: n }) => {
  const e = t ?? [], o = n ?? {}, l = new Set(
    Object.keys(o).filter((c) => c !== "$schema").map((c) => c.toLowerCase())
  ), r = {}, s = [], a = [];
  e.forEach((c) => {
    r[c] = (r[c] || 0) + 1, l.has(c) ? s.includes(c) || s.push(c) : a.includes(c) || a.push(c);
  });
  const u = e.length, d = a.length === 0;
  return {
    totalTags: u,
    tagCounts: r,
    uniqueTags: Object.keys(r),
    recognizedTags: s,
    unrecognizedTags: a,
    areAllTagsPresent: d
  };
}, fe = ({ inSpec: t, inTags: n = ue } = {}) => {
  const e = t, o = n, l = h({ inSpec: e }), r = de({
    inTagsFound: l,
    inAllowedTags: o
  });
  return {
    areAllTagsPresent: r.areAllTagsPresent,
    totalTags: r.totalTags,
    tagCounts: r.tagCounts,
    uniqueTags: r.uniqueTags,
    recognizedTags: r.recognizedTags,
    unrecognizedTags: r.unrecognizedTags
  };
}, k = (t = {}) => {
  const n = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return N(n);
};
Ct({
  inFuncDefinition: k,
  inReviewSpec: fe
});
const pe = ({
  inTargetHtmlId: t,
  inColumns: n,
  type: e,
  inData: o,
  showLog: l
} = {}) => {
  const r = t, s = o ?? [], a = n;
  l && console.log("buildSpec 1 :", r, s.localColumns);
  let d = $({
    type: e,
    data: s,
    columns: a
  });
  const c = k(d);
  return console.log("buildSpec 2 :", d, c), l && console.log("buildSpec 3 :", c), c;
}, he = ({
  type: t = "table",
  targetHtmlId: n,
  data: e,
  classToApply: o,
  columns: l,
  appendPosition: r,
  showLog: s = !1
} = {}) => {
  const a = t, u = n, d = e, c = l;
  s && console.log("showLog 1 :", a, n, e, o, l, r);
  const i = pe({
    inTargetHtmlId: u,
    inColumns: c,
    showLog: s,
    inData: d,
    type: a
  });
  s && console.log("showLog 2 :", i);
  const f = document.getElementById(u);
  s && console.log("showLog 3 :", f);
  const m = Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection;
  return console.log("prepend ---------:", a, m, f, i, d), m ? r === "prepend" ? f.prepend(...i) : f.append(...i) : r === "prepend" ? f.prepend(i) : (f && (f.innerHTML = ""), f.append(i)), s && console.log("showLog 5 :", f), f;
};
D(he);
export {
  he as default
};
