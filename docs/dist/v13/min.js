const R = {
  version: "v12.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, F = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: R,
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
}, L = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: S,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, M = (t, e) => d(t, e), C = (t, e) => Array.isArray(t) ? t.map((l) => M(l, e)).flat(1 / 0).filter(Boolean) : [], z = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((n) => {
        const r = t == null ? void 0 : t.template;
        if (r)
          return d(r, n);
      });
  }
}, P = (t, e) => {
  let l = [];
  for (const [o, n] of Object.entries(e)) {
    const r = t == null ? void 0 : t.template;
    if (r) {
      const a = d(r, {
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
          return d(r, n);
      });
  }
}, q = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return z(t, e);
    if (t.operation === "loopObject")
      return P(t, e);
    if (t.operation === "loopCollection")
      return V(t, e);
  }
}, A = (t, e) => {
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
}, B = (t, e) => {
  let l = {};
  for (const [o, n] of Object.entries(t)) {
    const r = A(n, e);
    l[o] = r;
  }
  return l;
}, _ = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const l = A(t.textContent, e);
      t.textContent = l;
    }
    if ("attributes" in t) {
      const l = B(t.attributes, e);
      t.attributes = l;
    }
  }
}, U = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const l = structuredClone(t);
  if (!l) return null;
  if ("tagName" in l && _(l, e), "jsonToSpec" in l) {
    const o = l == null ? void 0 : l.jsonToSpec, n = q(o, e);
    Array.isArray(n) ? l.children = n : l.children = [n], delete l.jsonToSpec;
  }
  if (Array.isArray(l == null ? void 0 : l.children)) {
    const o = C(l == null ? void 0 : l.children, e);
    l.children = o;
  }
  return l;
}, d = (t, e) => {
  if (t == null) return null;
  debugger;
  return typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? C(t, e) : typeof t == "object" ? U(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t;
}, x = (t, e) => d(t, e);
L({
  inFuncDefinition: x
});
const K = {
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
}, X = ({
  targetHtmlId: t,
  inTargetHtmlId: e,
  inColumns: l,
  inData: o
} = {}) => {
  const n = o ?? [], r = l;
  return x(K.default, {
    columns: r,
    data: n
  });
}, y = {
  table: X
}, v = ({
  type: t = "table",
  targetHtmlId: e,
  data: l,
  classToApply: o,
  inTargetHtmlId: n,
  inData: r,
  columns: a,
  inColumns: s,
  colGroup: u,
  inColGroup: c,
  footerData: i,
  inFooterData: f,
  config: b,
  inConfig: w,
  variant: m,
  skeletonType: $,
  inSkeletonType: E,
  showLog: D = !1,
  inShowLog: O
} = {}) => {
  const g = t, I = typeof g == "string" ? g.toLowerCase() : "table", p = y[I];
  return p ? p({
    targetHtmlId: n ?? e,
    inColumns: s ?? a,
    inData: r ?? l,
    inColGroup: c ?? u,
    inFooterData: f ?? i ?? [],
    inConfig: w ?? b ?? {},
    inSkeletonType: E ?? $ ?? m ?? "default",
    inShowLog: O ?? D ?? !1
  }) : (console.error(
    `[Renderer] Unknown renderer type "${g}". Available types: ${Object.keys(y).join(", ")}`
  ), null);
};
H(v);
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
}, Y = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : N(t), j = (t) => Array.isArray(t) ? t.map(Y).flat(1 / 0).filter(Boolean) : [], Z = (t) => (t == null, t), J = "http://www.w3.org/2000/svg", tt = /* @__PURE__ */ new Set([
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
}, lt = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), rt = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), ot = "http://www.w3.org/1999/xlink", nt = ({ inElement: t, inAttributes: e }) => {
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
        const s = String(a);
        if (n)
          try {
            l.setAttributeNS(ot, "href", s);
          } catch {
          }
        l.setAttribute("href", s), l.setAttribute("xlink:href", s);
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
  }), rt({
    inElement: e,
    inProperties: t.properties
  }), nt({
    inElement: e,
    inAttributes: t.attributes
  }), at({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const l = j(t.children);
    l.length && e.append(...l);
  }
  return e;
}, N = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? j(t) : typeof t == "object" ? st(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, it = "./tags.schema.json", ut = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, ct = {
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
    "tr"
  ]
}, kt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, $t = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Et = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Dt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Ot = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, It = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Rt = {
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
}, Lt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Mt = {
  $schema: it,
  div: ut,
  input: ct,
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
  thead: vt,
  tbody: jt,
  tfoot: Nt,
  tr: kt,
  th: $t,
  td: Et,
  datalist: Dt,
  option: Ot,
  header: It,
  a: Rt,
  i: Ft,
  small: Gt,
  ul: Ht,
  li: St,
  hr: Lt
}, h = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((o) => h({ inSpec: o }));
  if (typeof e != "object") return [];
  const l = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && l.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((o) => {
    const n = h({ inSpec: o });
    l.push(...n);
  }), l;
}, zt = ({ inTagsFound: t, inAllowedTags: e }) => {
  const l = t ?? [], o = e ?? {}, n = new Set(
    Object.keys(o).filter((i) => i !== "$schema").map((i) => i.toLowerCase())
  ), r = {}, a = [], s = [];
  l.forEach((i) => {
    r[i] = (r[i] || 0) + 1, n.has(i) ? a.includes(i) || a.push(i) : s.includes(i) || s.push(i);
  });
  const u = l.length, c = s.length === 0;
  return {
    totalTags: u,
    tagCounts: r,
    uniqueTags: Object.keys(r),
    recognizedTags: a,
    unrecognizedTags: s,
    areAllTagsPresent: c
  };
}, Pt = ({ inSpec: t, inTags: e = Mt } = {}) => {
  const l = t, o = e, n = h({ inSpec: l }), r = zt({
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
}, k = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return N(e);
};
W({
  inFuncDefinition: k,
  inReviewSpec: Pt
});
const Vt = ({
  inTargetHtmlId: t,
  inColumns: e,
  inData: l,
  inAppendPosition: o
} = {}) => {
  debugger;
  const n = t;
  let s = v({
    type: "table",
    targetHtmlId: n,
    data: l ?? [],
    columns: e
  });
  console.log("specAsJsonToDom : ", o, s);
  const u = document.getElementById(n), c = k(s);
  o === "prepend" ? u.prepend(c) : (u && (u.innerHTML = ""), u.append(c));
}, T = {
  table: Vt
}, qt = ({
  type: t = "table",
  targetHtmlId: e,
  data: l,
  classToApply: o,
  inTargetHtmlId: n,
  inData: r,
  columns: a,
  inColumns: s,
  appendPosition: u
} = {}) => {
  const c = t, i = typeof c == "string" ? c.toLowerCase() : "table", f = T[i];
  return f ? f({
    inTargetHtmlId: n ?? e,
    inColumns: s ?? a,
    inData: r ?? l,
    inAppendPosition: u
  }) : (console.error(
    `[Renderer] Unknown renderer type "${c}". Available types: ${Object.keys(T).join(", ")}`
  ), null);
};
F(qt);
export {
  qt as default
};
