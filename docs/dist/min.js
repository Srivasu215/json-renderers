const k = {
  version: "v13.1.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, O = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: k,
    renderToDom: t
  }));
}, D = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, F = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: D,
    renderToDom: t
  }));
}, R = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, S = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: R,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, V = (t, e) => p(t, e), w = (t, e) => Array.isArray(t) ? t.map((r) => V(r, e)).flat(1 / 0).filter(Boolean) : [], I = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((o) => {
        const l = t == null ? void 0 : t.template;
        if (l)
          return p(l, o);
      });
  }
}, G = (t, e) => {
  let r = [];
  for (const [n, o] of Object.entries(e)) {
    const l = t == null ? void 0 : t.template;
    if (l) {
      const a = p(l, {
        key: n,
        value: o
      });
      r.push(a);
    }
  }
  return r;
}, z = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((o) => {
        const l = t == null ? void 0 : t.template;
        if (l)
          return p(l, o);
      });
  }
}, M = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return I(t, e);
    if (t.operation === "loopObject")
      return G(t, e);
    if (t.operation === "loopCollection")
      return z(t, e);
  }
}, T = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const r = t.match(/^\$\{(.+?)\}$/);
  if (r) {
    const n = r[1];
    return (e == null ? void 0 : e[n]) ?? "";
  }
  return t;
}, K = (t, e) => {
  let r = {};
  for (const [n, o] of Object.entries(t)) {
    const l = T(o, e);
    r[n] = l;
  }
  return r;
}, q = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const r = T(t.textContent, e);
      t.textContent = r;
    }
    if ("attributes" in t) {
      const r = K(t.attributes, e);
      t.attributes = r;
    }
  }
}, B = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const r = structuredClone(t);
  if (!r) return null;
  if ("tagName" in r && q(r, e), "jsonToSpec" in r) {
    const n = r == null ? void 0 : r.jsonToSpec, o = M(n, e);
    Array.isArray(o) ? r.children = o : r.children = [o], delete r.jsonToSpec;
  }
  if (Array.isArray(r == null ? void 0 : r.children)) {
    const n = w(r == null ? void 0 : r.children, e);
    r.children = n;
  }
  return r;
}, p = (t, e) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? w(t, e) : typeof t == "object" ? B(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t, A = (t, e) => p(t, e);
S({
  inFuncDefinition: A
});
const L = {
  default: {
    tagName: "table",
    attributes: {
      class: "table table-hover table-striped mb-0"
    },
    children: [
      {
        tagName: "thead",
        children: [
          {
            tagName: "tr",
            jsonToSpec: {
              operation: "loopCollection",
              source: "columns",
              template: {
                tagName: "th",
                textContent: "${title}"
              }
            },
            children: []
          }
        ]
      },
      {
        tagName: "tbody",
        jsonToSpec: {
          operation: "loopCollection",
          source: "data",
          template: {
            tagName: "tr",
            jsonToSpec: {
              operation: "loopObject",
              source: "data",
              template: {
                tagName: "td",
                textContent: "${value}"
              }
            },
            children: []
          }
        },
        children: []
      }
    ]
  }
}, P = ({
  inColumns: t,
  inData: e
} = {}) => {
  const r = e ?? [], n = t;
  return A(L.default, {
    columns: n,
    data: r
  });
}, C = ({ inItems: t, inRecipe: e, inExecute: r }) => {
  const n = t, o = e, l = r;
  return n.map((a) => b({
    inSource: a,
    inRecipe: o,
    inExecute: l
  })).flat(1 / 0).filter(Boolean);
}, _ = ({ inSource: t, inRecipe: e, inExecute: r }) => {
  const n = t, o = e, l = r;
  let a = n;
  typeof l == "function" && (a = l({
    inSource: n,
    inRecipe: o
  }));
  for (const [s, u] of Object.entries(a))
    Array.isArray(u) && o && s in o && (a[s] = C({
      inItems: u,
      inRecipe: o[s],
      inExecute: l
    }));
  return a;
}, b = ({ inSource: t, inRecipe: e, inExecute: r }) => {
  const n = t, o = e, l = r;
  return Array.isArray(n) ? C({
    inItems: n,
    inRecipe: o,
    inExecute: l
  }) : typeof n == "object" && n !== null ? _({
    inSource: n,
    inRecipe: o,
    inExecute: l
  }) : n;
}, H = ({ inKey: t, inDirective: e }) => {
  const r = t, n = e;
  return (n == null ? void 0 : n.alterKey) || r;
}, U = ({ inValue: t, inDirective: e, inExecute: r }) => {
  const n = t, o = e, l = r;
  return o && "transform" in o ? b({
    inSource: n,
    inRecipe: o,
    inExecute: l
  }) : n;
}, X = ({ inValue: t, inDirective: e }) => {
  const r = t, n = e;
  return (n == null ? void 0 : n.valueType) === "array" && !Array.isArray(r) ? [r] : r;
}, Q = ({ inValue: t, inDirective: e }) => {
  const r = t, n = e;
  return n != null && n.valueKey && r && typeof r == "object" ? r[n.valueKey] : r;
}, W = ({ inSource: t, inTransform: e, inExecute: r }) => {
  const n = t, o = e, l = r, a = {};
  for (const [s, u] of Object.entries(n)) {
    if (!(s in o))
      continue;
    const c = o[s], i = H({ inKey: s, inDirective: c });
    let d = u;
    d = U({
      inValue: d,
      inDirective: c,
      inExecute: l
    }), d = X({ inValue: d, inDirective: c }), d = Q({ inValue: d, inDirective: c }), a[i] = d;
  }
  return a;
};
function x(t, e) {
  for (const r in t)
    typeof t[r] == "object" && t[r] !== null ? x(t[r], e) : typeof t[r] == "string" && t[r] === "${}" && (t[r] = e);
  return t;
}
const Y = ({ inSource: t, inOperation: e, inExecute: r }) => {
  const n = t, o = e;
  for (const [l, a] of Object.entries(o))
    if ("operationType" in a && a.operationType === "loopArray" && l in n) {
      const s = n[l].map((u) => {
        const c = { ...a == null ? void 0 : a.template };
        return x(c, u), c;
      });
      n[l] = s;
    }
  return n;
}, h = ({ inSource: t, inRecipe: e }) => {
  let r = t;
  const n = e;
  return n && typeof n == "object" && "transform" in n && (r = W({
    inSource: r,
    inTransform: n.transform,
    inExecute: h
  })), n && typeof n == "object" && "operation" in n && (r = Y({
    inSource: r,
    inOperation: n.operation,
    inExecute: h
  })), r;
}, Z = (t, e) => b({
  inSource: t,
  inRecipe: e,
  inExecute: h
}), J = {
  children: ""
}, tt = {
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
}, et = {
  transform: J,
  operation: tt
}, $ = ({
  inData: t
} = {}) => Z({
  children: t ?? []
}, et), rt = "select", nt = {
  id: "LedgerName"
}, lt = [], g = {
  tagName: rt,
  attributes: nt,
  children: lt
}, ot = ({
  inData: t
} = {}) => {
  let r = $({
    inData: t ?? []
  });
  return g.children = r == null ? void 0 : r.children, console.log("skeletonJson: ", g), g;
}, y = {
  table: P,
  select: ot,
  selectOptionsOnly: $
}, v = ({
  type: t = "table",
  data: e,
  columns: r
} = {}) => {
  const n = t, o = y[n];
  return o ? o({
    inColumns: r,
    inData: e
  }) : (console.error(
    `[Renderer] Unknown renderer type "${n}". Available types: ${Object.keys(y).join(", ")}`
  ), null);
};
F(v);
const at = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, st = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = {
    meta: at,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, it = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : N(t), j = (t) => Array.isArray(t) ? t.map(it).flat(1 / 0).filter(Boolean) : [], ct = (t) => (t == null, t), ut = "http://www.w3.org/2000/svg", dt = /* @__PURE__ */ new Set([
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
]), ft = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const r = document.createElement("input");
    return r.type = "checkbox", r;
  }
  return dt.has(e) ? document.createElementNS(ut, e) : document.createElement(e);
}, pt = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), gt = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), ht = "http://www.w3.org/1999/xlink", mt = ({ inElement: t, inAttributes: e }) => {
  const r = t, n = e;
  if (!r || !n || typeof n != "object")
    return r;
  const o = typeof SVGElement < "u" ? r instanceof SVGElement : r.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(n).forEach(([l, a]) => {
    if (l === "class") {
      o ? r.setAttribute("class", String(a)) : r.className = a;
      return;
    }
    if (l === "xlink:href" || l === "href") {
      if (a != null) {
        const s = String(a);
        if (o)
          try {
            r.setAttributeNS(ht, "href", s);
          } catch {
          }
        r.setAttribute("href", s), r.setAttribute("xlink:href", s);
      }
      return;
    }
    if (typeof a == "boolean") {
      a ? r.setAttribute(l, "") : r.removeAttribute(l);
      return;
    }
    a != null && r.setAttribute(l, String(a));
  }), r;
}, bt = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const r = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((n) => typeof n == "string" && n.trim()) : [];
  return r.length && t.classList.add(...r), t;
}, yt = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = ft({ inTagName: t.tagName });
  if (!e) return null;
  if (pt({
    inElement: e,
    inTextContent: ct(t.textContent),
    inTagName: t.tagName
  }), gt({
    inElement: e,
    inProperties: t.properties
  }), mt({
    inElement: e,
    inAttributes: t.attributes
  }), bt({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const r = j(t.children);
    r.length && e.append(...r);
  }
  return e;
}, N = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? j(t) : typeof t == "object" ? yt(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, wt = "./tags.schema.json", Tt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, At = {
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
}, Ct = {
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
}, xt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, $t = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, vt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, jt = {
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
}, Nt = {
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
}, Et = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, kt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ot = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Dt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ft = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Rt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, St = {
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
}, Vt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, It = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Gt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, zt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, Mt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Kt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, qt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Bt = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Lt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Pt = {
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
}, _t = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Ht = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ut = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Xt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Qt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Wt = {
  $schema: wt,
  div: Tt,
  input: At,
  checkbox: Ct,
  colgroup: xt,
  col: $t,
  label: vt,
  form: jt,
  select: Nt,
  p: Et,
  h1: kt,
  h2: Ot,
  span: Dt,
  img: Ft,
  button: Rt,
  table: St,
  thead: Vt,
  tbody: It,
  tfoot: Gt,
  tr: zt,
  th: Mt,
  td: Kt,
  datalist: qt,
  option: Bt,
  header: Lt,
  a: Pt,
  i: _t,
  small: Ht,
  ul: Ut,
  li: Xt,
  hr: Qt
}, m = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((n) => m({ inSpec: n }));
  if (typeof e != "object") return [];
  const r = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && r.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((n) => {
    const o = m({ inSpec: n });
    r.push(...o);
  }), r;
}, Yt = ({ inTagsFound: t, inAllowedTags: e }) => {
  const r = t ?? [], n = e ?? {}, o = new Set(
    Object.keys(n).filter((i) => i !== "$schema").map((i) => i.toLowerCase())
  ), l = {}, a = [], s = [];
  r.forEach((i) => {
    l[i] = (l[i] || 0) + 1, o.has(i) ? a.includes(i) || a.push(i) : s.includes(i) || s.push(i);
  });
  const u = r.length, c = s.length === 0;
  return {
    totalTags: u,
    tagCounts: l,
    uniqueTags: Object.keys(l),
    recognizedTags: a,
    unrecognizedTags: s,
    areAllTagsPresent: c
  };
}, Zt = ({ inSpec: t, inTags: e = Wt } = {}) => {
  const r = t, n = e, o = m({ inSpec: r }), l = Yt({
    inTagsFound: o,
    inAllowedTags: n
  });
  return {
    areAllTagsPresent: l.areAllTagsPresent,
    totalTags: l.totalTags,
    tagCounts: l.tagCounts,
    uniqueTags: l.uniqueTags,
    recognizedTags: l.recognizedTags,
    unrecognizedTags: l.unrecognizedTags
  };
}, E = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return N(e);
};
st({
  inFuncDefinition: E,
  inReviewSpec: Zt
});
const Jt = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: r,
  inData: n,
  showLog: o
} = {}) => {
  const l = t, a = n ?? [], s = e;
  o && console.log("buildSpec 1 :", l, a.localColumns);
  let c = v({
    type: r,
    data: a,
    columns: s
  });
  const i = E(c);
  return console.log("buildSpec 2 :", c, i), o && console.log("buildSpec 3 :", i), i;
}, te = ({
  type: t = "table",
  targetHtmlId: e,
  data: r,
  classToApply: n,
  columns: o,
  appendPosition: l,
  showLog: a = !1
} = {}) => {
  const s = t, u = e, c = r, i = o;
  a && console.log("showLog 1 :", s, e, r, n, o, l);
  const d = Jt({
    inTargetHtmlId: u,
    inColumns: i,
    showLog: a,
    inData: c,
    type: s
  });
  a && console.log("showLog 2 :", d);
  const f = document.getElementById(u);
  return a && console.log("showLog 3 :", f), l === "prepend" ? f.prepend(d) : (f && (f.innerHTML = ""), console.log("showLog 5 :", f, d), f.append(d)), a && console.log("showLog 5 :", f), f;
};
O(te);
export {
  te as default
};
