const x = {
  version: "v13.1.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, j = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: x,
    renderToDom: t
  }));
}, v = {
  version: "v3.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, N = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: v,
    renderToDom: t
  }));
}, $ = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, k = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: $,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, D = (t, e) => g(t, e), m = (t, e) => Array.isArray(t) ? t.map((l) => D(l, e)).flat(1 / 0).filter(Boolean) : [], O = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((n) => {
        const r = t == null ? void 0 : t.template;
        if (r)
          return g(r, n);
      });
  }
}, E = (t, e) => {
  let l = [];
  for (const [o, n] of Object.entries(e)) {
    const r = t == null ? void 0 : t.template;
    if (r) {
      const a = g(r, {
        key: o,
        value: n
      });
      l.push(a);
    }
  }
  return l;
}, S = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((n) => {
        const r = t == null ? void 0 : t.template;
        if (r)
          return g(r, n);
      });
  }
}, L = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return O(t, e);
    if (t.operation === "loopObject")
      return E(t, e);
    if (t.operation === "loopCollection")
      return S(t, e);
  }
}, p = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const l = t.match(/^\$\{(.+?)\}$/);
  if (l) {
    const o = l[1];
    return (e == null ? void 0 : e[o]) ?? "";
  }
  return t;
}, F = (t, e) => {
  let l = {};
  for (const [o, n] of Object.entries(t)) {
    const r = p(n, e);
    l[o] = r;
  }
  return l;
}, G = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const l = p(t.textContent, e);
      t.textContent = l;
    }
    if ("attributes" in t) {
      const l = F(t.attributes, e);
      t.attributes = l;
    }
  }
}, M = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const l = structuredClone(t);
  if (!l) return null;
  if ("tagName" in l && G(l, e), "jsonToSpec" in l) {
    const o = l == null ? void 0 : l.jsonToSpec, n = L(o, e);
    Array.isArray(n) ? l.children = n : l.children = [n], delete l.jsonToSpec;
  }
  if (Array.isArray(l == null ? void 0 : l.children)) {
    const o = m(l == null ? void 0 : l.children, e);
    l.children = o;
  }
  return l;
}, g = (t, e) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? m(t, e) : typeof t == "object" ? M(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t, h = (t, e) => g(t, e);
k({
  inFuncDefinition: h
});
const R = {
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
}, z = ({
  inColumns: t,
  inData: e
} = {}) => {
  const l = e ?? [], o = t;
  return h(R.default, {
    columns: o,
    data: l
  });
}, I = "select", V = {
  id: "LedgerName"
}, q = {
  operation: "loopArray",
  source: "arrayOfStrings",
  template: {
    tagName: "option",
    attributes: {
      value: "${}"
    },
    textContent: "${}"
  }
}, B = [], P = {
  tagName: I,
  attributes: V,
  jsonToSpec: q,
  children: B
}, H = ({
  inData: t
} = {}) => h(P, {
  arrayOfStrings: t ?? []
}), _ = {
  operation: "loopArray",
  source: "arrayOfStrings",
  template: {
    tagName: "option",
    attributes: {
      value: "${}"
    },
    textContent: "${}"
  }
}, U = [], K = {
  jsonToSpec: _,
  children: U
}, X = ({
  inData: t
} = {}) => h(K, {
  arrayOfStrings: t ?? []
}), w = {
  table: z,
  select: H,
  selectOptionsOnly: X
}, y = ({
  type: t = "table",
  data: e,
  columns: l
} = {}) => {
  const o = t, n = w[o];
  return n ? n({
    inColumns: l,
    inData: e
  }) : (console.error(
    `[Renderer] Unknown renderer type "${o}". Available types: ${Object.keys(w).join(", ")}`
  ), null);
};
N(y);
const Q = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, W = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const l = {
    meta: Q,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = l, globalThis.ks.jsonToTag = l;
}, Y = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : C(t), T = (t) => Array.isArray(t) ? t.map(Y).flat(1 / 0).filter(Boolean) : [], Z = (t) => (t == null, t), J = "http://www.w3.org/2000/svg", tt = /* @__PURE__ */ new Set([
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
]), et = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const l = document.createElement("input");
    return l.type = "checkbox", l;
  }
  return tt.has(e) ? document.createElementNS(J, e) : document.createElement(e);
}, lt = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), ot = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), rt = "http://www.w3.org/1999/xlink", nt = ({ inElement: t, inAttributes: e }) => {
  const l = t, o = e;
  if (!l || !o || typeof o != "object")
    return l;
  const n = typeof SVGElement < "u" ? l instanceof SVGElement : l.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([r, a]) => {
    if (r === "class") {
      n ? l.setAttribute("class", String(a)) : l.className = a;
      return;
    }
    if (r === "xlink:href" || r === "href") {
      if (a != null) {
        const i = String(a);
        if (n)
          try {
            l.setAttributeNS(rt, "href", i);
          } catch {
          }
        l.setAttribute("href", i), l.setAttribute("xlink:href", i);
      }
      return;
    }
    if (typeof a == "boolean") {
      a ? l.setAttribute(r, "") : l.removeAttribute(r);
      return;
    }
    a != null && l.setAttribute(r, String(a));
  }), l;
}, at = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const l = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return l.length && t.classList.add(...l), t;
}, st = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = et({ inTagName: t.tagName });
  if (!e) return null;
  if (lt({
    inElement: e,
    inTextContent: Z(t.textContent),
    inTagName: t.tagName
  }), ot({
    inElement: e,
    inProperties: t.properties
  }), nt({
    inElement: e,
    inAttributes: t.attributes
  }), at({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const l = T(t.children);
    l.length && e.append(...l);
  }
  return e;
}, C = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? T(t) : typeof t == "object" ? st(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, it = "./tags.schema.json", ct = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, ut = {
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
}, dt = {
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
}, ft = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, gt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, ht = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, bt = {
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
}, wt = {
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
}, mt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, pt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, yt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Tt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ct = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, At = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, xt = {
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
}, jt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, vt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Nt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, $t = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, kt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Dt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Ot = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Et = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, St = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Lt = {
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
}, Ft = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Gt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Mt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Rt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, zt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, It = {
  $schema: it,
  div: ct,
  input: ut,
  checkbox: dt,
  colgroup: ft,
  col: gt,
  label: ht,
  form: bt,
  select: wt,
  p: mt,
  h1: pt,
  h2: yt,
  span: Tt,
  img: Ct,
  button: At,
  table: xt,
  thead: jt,
  tbody: vt,
  tfoot: Nt,
  tr: $t,
  th: kt,
  td: Dt,
  datalist: Ot,
  option: Et,
  header: St,
  a: Lt,
  i: Ft,
  small: Gt,
  ul: Mt,
  li: Rt,
  hr: zt
}, b = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((o) => b({ inSpec: o }));
  if (typeof e != "object") return [];
  const l = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && l.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((o) => {
    const n = b({ inSpec: o });
    l.push(...n);
  }), l;
}, Vt = ({ inTagsFound: t, inAllowedTags: e }) => {
  const l = t ?? [], o = e ?? {}, n = new Set(
    Object.keys(o).filter((s) => s !== "$schema").map((s) => s.toLowerCase())
  ), r = {}, a = [], i = [];
  l.forEach((s) => {
    r[s] = (r[s] || 0) + 1, n.has(s) ? a.includes(s) || a.push(s) : i.includes(s) || i.push(s);
  });
  const c = l.length, f = i.length === 0;
  return {
    totalTags: c,
    tagCounts: r,
    uniqueTags: Object.keys(r),
    recognizedTags: a,
    unrecognizedTags: i,
    areAllTagsPresent: f
  };
}, qt = ({ inSpec: t, inTags: e = It } = {}) => {
  const l = t, o = e, n = b({ inSpec: l }), r = Vt({
    inTagsFound: n,
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
}, A = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return C(e);
};
W({
  inFuncDefinition: A,
  inReviewSpec: qt
});
const Bt = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: l,
  inData: o,
  showLog: n
} = {}) => {
  const r = t, a = o ?? [], i = e;
  console.log("buildSpec 1 :", r, a.localColumns);
  let c = y({
    type: l,
    data: a,
    columns: i
  }), f = c;
  !("tagName" in c) && "children" in c && (f = c.children);
  const s = A(f);
  return console.log("buildSpec 3 :", s), s;
}, Pt = ({
  type: t = "table",
  targetHtmlId: e,
  data: l,
  classToApply: o,
  columns: n,
  appendPosition: r,
  showLog: a = !1
} = {}) => {
  const i = t, c = e, f = l, s = n;
  console.log("showLog 1 :", i, e, l, o, n, r);
  const u = Bt({
    inTargetHtmlId: c,
    inColumns: s,
    showLog: a,
    inData: f,
    type: i
  });
  console.log("showLog 2 :", u);
  const d = document.getElementById(c);
  return console.log("showLog 3 :", d), r === "prepend" ? d.prepend(u) : (d && (d.innerHTML = ""), console.log("showLog 4:1 :", u instanceof Node), console.log("showLog 4:2 :", u instanceof NodeList), console.log("showLog 4:3 :", u instanceof HTMLCollection), u != null && typeof u[Symbol.iterator] == "function" ? d.append(...u) : d.append(u)), console.log("showLog 5 :", d), d;
};
j(Pt);
export {
  Pt as default
};
