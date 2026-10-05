const A = {
  version: "v13.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, x = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: A,
    renderToDom: t
  }));
}, v = {
  version: "v3.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, j = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: v,
    renderToDom: t
  }));
}, N = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, $ = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: N,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, k = (t, e) => c(t, e), w = (t, e) => Array.isArray(t) ? t.map((l) => k(l, e)).flat(1 / 0).filter(Boolean) : [], D = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((n) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return c(o, n);
      });
  }
}, E = (t, e) => {
  let l = [];
  for (const [r, n] of Object.entries(e)) {
    const o = t == null ? void 0 : t.template;
    if (o) {
      const a = c(o, {
        key: r,
        value: n
      });
      l.push(a);
    }
  }
  return l;
}, O = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((n) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return c(o, n);
      });
  }
}, F = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return D(t, e);
    if (t.operation === "loopObject")
      return E(t, e);
    if (t.operation === "loopCollection")
      return O(t, e);
  }
}, m = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const l = t.match(/^\$\{(.+?)\}$/);
  if (l) {
    const r = l[1];
    return (e == null ? void 0 : e[r]) ?? "";
  }
  return t;
}, G = (t, e) => {
  let l = {};
  for (const [r, n] of Object.entries(t)) {
    const o = m(n, e);
    l[r] = o;
  }
  return l;
}, R = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const l = m(t.textContent, e);
      t.textContent = l;
    }
    if ("attributes" in t) {
      const l = G(t.attributes, e);
      t.attributes = l;
    }
  }
}, z = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const l = structuredClone(t);
  if (!l) return null;
  if ("tagName" in l && R(l, e), "jsonToSpec" in l) {
    const r = l == null ? void 0 : l.jsonToSpec, n = F(r, e);
    Array.isArray(n) ? l.children = n : l.children = [n], delete l.jsonToSpec;
  }
  if (Array.isArray(l == null ? void 0 : l.children)) {
    const r = w(l == null ? void 0 : l.children, e);
    l.children = r;
  }
  return l;
}, c = (t, e) => {
  if (t == null) return null;
  debugger;
  return typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? w(t, e) : typeof t == "object" ? z(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t;
}, g = (t, e) => c(t, e);
$({
  inFuncDefinition: g
});
const M = {
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
}, S = ({
  inColumns: t,
  inData: e
} = {}) => {
  const l = e ?? [], r = t;
  return g(M.default, {
    columns: r,
    data: l
  });
}, I = "select", L = {
  id: "LedgerName"
}, V = {
  operation: "loopArray",
  source: "arrayOfStrings",
  template: {
    tagName: "option",
    attributes: {
      value: "${}"
    },
    textContent: "${}"
  }
}, q = [], P = {
  tagName: I,
  attributes: L,
  jsonToSpec: V,
  children: q
}, B = ({
  inData: t
} = {}) => g(P, {
  arrayOfStrings: t ?? []
}), b = {
  table: S,
  select: B
}, p = ({
  type: t = "table",
  data: e,
  columns: l
} = {}) => {
  const r = t, n = typeof r == "string" ? r.toLowerCase() : "table", o = b[n];
  return o ? o({
    inColumns: l,
    inData: e
  }) : (console.error(
    `[Renderer] Unknown renderer type "${r}". Available types: ${Object.keys(b).join(", ")}`
  ), null);
};
j(p);
const H = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, _ = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const l = {
    meta: H,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = l, globalThis.ks.jsonToTag = l;
}, U = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : T(t), y = (t) => Array.isArray(t) ? t.map(U).flat(1 / 0).filter(Boolean) : [], K = (t) => (t == null, t), X = "http://www.w3.org/2000/svg", Q = /* @__PURE__ */ new Set([
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
]), W = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const l = document.createElement("input");
    return l.type = "checkbox", l;
  }
  return Q.has(e) ? document.createElementNS(X, e) : document.createElement(e);
}, Y = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), Z = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), J = "http://www.w3.org/1999/xlink", tt = ({ inElement: t, inAttributes: e }) => {
  const l = t, r = e;
  if (!l || !r || typeof r != "object")
    return l;
  const n = typeof SVGElement < "u" ? l instanceof SVGElement : l.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(r).forEach(([o, a]) => {
    if (o === "class") {
      n ? l.setAttribute("class", String(a)) : l.className = a;
      return;
    }
    if (o === "xlink:href" || o === "href") {
      if (a != null) {
        const i = String(a);
        if (n)
          try {
            l.setAttributeNS(J, "href", i);
          } catch {
          }
        l.setAttribute("href", i), l.setAttribute("xlink:href", i);
      }
      return;
    }
    if (typeof a == "boolean") {
      a ? l.setAttribute(o, "") : l.removeAttribute(o);
      return;
    }
    a != null && l.setAttribute(o, String(a));
  }), l;
}, et = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const l = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((r) => typeof r == "string" && r.trim()) : [];
  return l.length && t.classList.add(...l), t;
}, lt = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = W({ inTagName: t.tagName });
  if (!e) return null;
  if (Y({
    inElement: e,
    inTextContent: K(t.textContent),
    inTagName: t.tagName
  }), Z({
    inElement: e,
    inProperties: t.properties
  }), tt({
    inElement: e,
    inAttributes: t.attributes
  }), et({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const l = y(t.children);
    l.length && e.append(...l);
  }
  return e;
}, T = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? y(t) : typeof t == "object" ? lt(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, rt = "./tags.schema.json", ot = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, nt = {
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
}, at = {
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
}, st = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, it = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, ut = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, ct = {
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
}, dt = {
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
}, ft = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, gt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ht = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, bt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, wt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, mt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, pt = {
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
}, yt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Tt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Ct = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, At = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, xt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, vt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, jt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Nt = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, $t = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, kt = {
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
}, Dt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Et = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ot = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Ft = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Gt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Rt = {
  $schema: rt,
  div: ot,
  input: nt,
  checkbox: at,
  colgroup: st,
  col: it,
  label: ut,
  form: ct,
  select: dt,
  p: ft,
  h1: gt,
  h2: ht,
  span: bt,
  img: wt,
  button: mt,
  table: pt,
  thead: yt,
  tbody: Tt,
  tfoot: Ct,
  tr: At,
  th: xt,
  td: vt,
  datalist: jt,
  option: Nt,
  header: $t,
  a: kt,
  i: Dt,
  small: Et,
  ul: Ot,
  li: Ft,
  hr: Gt
}, f = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((r) => f({ inSpec: r }));
  if (typeof e != "object") return [];
  const l = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && l.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((r) => {
    const n = f({ inSpec: r });
    l.push(...n);
  }), l;
}, zt = ({ inTagsFound: t, inAllowedTags: e }) => {
  const l = t ?? [], r = e ?? {}, n = new Set(
    Object.keys(r).filter((s) => s !== "$schema").map((s) => s.toLowerCase())
  ), o = {}, a = [], i = [];
  l.forEach((s) => {
    o[s] = (o[s] || 0) + 1, n.has(s) ? a.includes(s) || a.push(s) : i.includes(s) || i.push(s);
  });
  const d = l.length, h = i.length === 0;
  return {
    totalTags: d,
    tagCounts: o,
    uniqueTags: Object.keys(o),
    recognizedTags: a,
    unrecognizedTags: i,
    areAllTagsPresent: h
  };
}, Mt = ({ inSpec: t, inTags: e = Rt } = {}) => {
  const l = t, r = e, n = f({ inSpec: l }), o = zt({
    inTagsFound: n,
    inAllowedTags: r
  });
  return {
    areAllTagsPresent: o.areAllTagsPresent,
    totalTags: o.totalTags,
    tagCounts: o.tagCounts,
    uniqueTags: o.uniqueTags,
    recognizedTags: o.recognizedTags,
    unrecognizedTags: o.unrecognizedTags
  };
}, C = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return T(e);
};
_({
  inFuncDefinition: C,
  inReviewSpec: Mt
});
const St = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: l,
  inData: r
} = {}) => {
  let a = p({
    type: l,
    data: r ?? [],
    columns: e
  });
  return C(a);
}, It = ({
  type: t = "table",
  targetHtmlId: e,
  data: l,
  classToApply: r,
  columns: n,
  appendPosition: o
} = {}) => {
  const a = t, i = e, s = St({
    inTargetHtmlId: i,
    inColumns: n,
    inData: l,
    type: a
  }), u = document.getElementById(i);
  return o === "prepend" ? u.prepend(s) : (u && (u.innerHTML = ""), u.append(s)), u;
};
x(It);
export {
  It as default
};
