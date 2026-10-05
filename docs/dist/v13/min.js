const I = {
  version: "v12.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, F = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: I,
    renderToDom: t
  }));
}, G = {
  version: "v2.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, H = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: G,
    renderToDom: t
  }));
}, S = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, R = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: S,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, z = (t, e) => f(t, e), T = (t, e) => Array.isArray(t) ? t.map((l) => z(l, e)).flat(1 / 0).filter(Boolean) : [], L = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((n) => {
        const r = t == null ? void 0 : t.template;
        if (r)
          return f(r, n);
      });
  }
}, M = (t, e) => {
  let l = [];
  for (const [o, n] of Object.entries(e)) {
    const r = t == null ? void 0 : t.template;
    if (r) {
      const a = f(r, {
        key: o,
        value: n
      });
      l.push(a);
    }
  }
  return l;
}, V = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((n) => {
        const r = t == null ? void 0 : t.template;
        if (r)
          return f(r, n);
      });
  }
}, q = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return L(t, e);
    if (t.operation === "loopObject")
      return M(t, e);
    if (t.operation === "loopCollection")
      return V(t, e);
  }
}, C = (t, e) => {
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
}, P = (t, e) => {
  let l = {};
  for (const [o, n] of Object.entries(t)) {
    const r = C(n, e);
    l[o] = r;
  }
  return l;
}, B = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const l = C(t.textContent, e);
      t.textContent = l;
    }
    if ("attributes" in t) {
      const l = P(t.attributes, e);
      t.attributes = l;
    }
  }
}, _ = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const l = structuredClone(t);
  if (!l) return null;
  if ("tagName" in l && B(l, e), "jsonToSpec" in l) {
    const o = l == null ? void 0 : l.jsonToSpec, n = q(o, e);
    Array.isArray(n) ? l.children = n : l.children = [n], delete l.jsonToSpec;
  }
  if (Array.isArray(l == null ? void 0 : l.children)) {
    const o = T(l == null ? void 0 : l.children, e);
    l.children = o;
  }
  return l;
}, f = (t, e) => {
  if (t == null) return null;
  debugger;
  return typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? T(t, e) : typeof t == "object" ? _(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t;
}, A = (t, e) => f(t, e);
R({
  inFuncDefinition: A
});
const U = {
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
}, K = ({
  targetHtmlId: t,
  inTargetHtmlId: e,
  inColumns: l,
  inData: o
} = {}) => {
  const n = o ?? [], r = l;
  return A(U.default, {
    columns: r,
    data: n
  });
}, y = {
  table: K
}, x = ({
  type: t = "table",
  targetHtmlId: e,
  data: l,
  classToApply: o,
  inTargetHtmlId: n,
  inData: r,
  columns: a,
  inColumns: i,
  colGroup: u,
  inColGroup: d,
  footerData: s,
  inFooterData: w,
  config: m,
  inConfig: g,
  variant: c,
  skeletonType: k,
  inSkeletonType: $,
  showLog: E = !1,
  inShowLog: D
} = {}) => {
  const h = t, O = typeof h == "string" ? h.toLowerCase() : "table", p = y[O];
  return p ? p({
    targetHtmlId: n ?? e,
    inColumns: i ?? a,
    inData: r ?? l,
    inColGroup: d ?? u,
    inFooterData: w ?? s ?? [],
    inConfig: g ?? m ?? {},
    inSkeletonType: $ ?? k ?? c ?? "default",
    inShowLog: D ?? E ?? !1
  }) : (console.error(
    `[Renderer] Unknown renderer type "${h}". Available types: ${Object.keys(y).join(", ")}`
  ), null);
};
H(x);
const X = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Q = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const l = {
    meta: X,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = l, globalThis.ks.jsonToTag = l;
}, W = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : j(t), v = (t) => Array.isArray(t) ? t.map(W).flat(1 / 0).filter(Boolean) : [], Y = (t) => (t == null, t), Z = "http://www.w3.org/2000/svg", J = /* @__PURE__ */ new Set([
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
]), tt = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const l = document.createElement("input");
    return l.type = "checkbox", l;
  }
  return J.has(e) ? document.createElementNS(Z, e) : document.createElement(e);
}, et = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), lt = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), rt = "http://www.w3.org/1999/xlink", ot = ({ inElement: t, inAttributes: e }) => {
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
}, nt = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const l = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return l.length && t.classList.add(...l), t;
}, at = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = tt({ inTagName: t.tagName });
  if (!e) return null;
  if (et({
    inElement: e,
    inTextContent: Y(t.textContent),
    inTagName: t.tagName
  }), lt({
    inElement: e,
    inProperties: t.properties
  }), ot({
    inElement: e,
    inAttributes: t.attributes
  }), nt({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const l = v(t.children);
    l.length && e.append(...l);
  }
  return e;
}, j = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? v(t) : typeof t == "object" ? at(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, st = "./tags.schema.json", it = {
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
}, ct = {
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
}, dt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, ft = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, gt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, ht = {
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
}, bt = {
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
}, wt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
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
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Ct = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, At = {
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
}, xt = {
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
}, jt = {
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
}, $t = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Et = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Dt = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Ot = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, It = {
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
}, Ht = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, St = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Rt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, zt = {
  $schema: st,
  div: it,
  input: ut,
  checkbox: ct,
  colgroup: dt,
  col: ft,
  label: gt,
  form: ht,
  select: bt,
  p: wt,
  h1: mt,
  h2: pt,
  span: yt,
  img: Tt,
  button: Ct,
  table: At,
  thead: xt,
  tbody: vt,
  tfoot: jt,
  tr: Nt,
  th: kt,
  td: $t,
  datalist: Et,
  option: Dt,
  header: Ot,
  a: It,
  i: Ft,
  small: Gt,
  ul: Ht,
  li: St,
  hr: Rt
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
}, Lt = ({ inTagsFound: t, inAllowedTags: e }) => {
  const l = t ?? [], o = e ?? {}, n = new Set(
    Object.keys(o).filter((s) => s !== "$schema").map((s) => s.toLowerCase())
  ), r = {}, a = [], i = [];
  l.forEach((s) => {
    r[s] = (r[s] || 0) + 1, n.has(s) ? a.includes(s) || a.push(s) : i.includes(s) || i.push(s);
  });
  const u = l.length, d = i.length === 0;
  return {
    totalTags: u,
    tagCounts: r,
    uniqueTags: Object.keys(r),
    recognizedTags: a,
    unrecognizedTags: i,
    areAllTagsPresent: d
  };
}, Mt = ({ inSpec: t, inTags: e = zt } = {}) => {
  const l = t, o = e, n = b({ inSpec: l }), r = Lt({
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
}, N = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return j(e);
};
Q({
  inFuncDefinition: N,
  inReviewSpec: Mt
});
const Vt = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: l,
  inData: o
} = {}) => {
  debugger;
  let i = x({
    type: "table",
    targetHtmlId: t,
    data: o ?? [],
    columns: e
  });
  return N(i);
}, qt = ({
  type: t = "table",
  targetHtmlId: e,
  data: l,
  classToApply: o,
  inTargetHtmlId: n,
  inData: r,
  columns: a,
  inColumns: i,
  appendPosition: u
} = {}) => {
  const d = t, s = n ?? e, g = Vt({
    inTargetHtmlId: s,
    inColumns: i ?? a,
    inData: r ?? l,
    type: d
  }), c = document.getElementById(s);
  return u === "prepend" ? c.prepend(g) : (c && (c.innerHTML = ""), c.append(g)), c;
};
F(qt);
export {
  qt as default
};
