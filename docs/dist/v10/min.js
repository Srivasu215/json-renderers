const B = {
  version: "v10.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, _ = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: B,
    renderToDom: t
  }));
}, U = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, K = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: U,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = e, globalThis.ks.jsonToTag = e;
}, X = (t, e) => y(t, e), x = (t, e) => Array.isArray(t) ? t.map((l) => X(l, e)).flat(1 / 0).filter(Boolean) : [], Q = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((a) => {
        const r = t == null ? void 0 : t.template;
        if (r)
          return y(r, a);
      });
  }
}, W = (t, e) => {
  let l = [];
  for (const [n, a] of Object.entries(e)) {
    const r = t == null ? void 0 : t.template;
    if (r) {
      const o = y(r, {
        key: n,
        value: a
      });
      l.push(o);
    }
  }
  return l;
}, Y = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const l = e[t == null ? void 0 : t.source];
    if (Array.isArray(l))
      return l.map((a) => {
        const r = t == null ? void 0 : t.template;
        if (r)
          return y(r, a);
      });
  }
}, Z = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return Q(t, e);
    if (t.operation === "loopObject")
      return W(t, e);
    if (t.operation === "loopCollection")
      return Y(t, e);
  }
}, v = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const l = t.match(/^\$\{(.+?)\}$/);
  if (l) {
    const n = l[1];
    return (e == null ? void 0 : e[n]) ?? "";
  }
  return t;
}, P = (t, e) => {
  let l = {};
  for (const [n, a] of Object.entries(t)) {
    const r = v(a, e);
    l[n] = r;
  }
  return l;
}, J = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const l = v(t.textContent, e);
      t.textContent = l;
    }
    if ("attributes" in t) {
      const l = P(t.attributes, e);
      t.attributes = l;
    }
  }
}, tt = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const l = structuredClone(t);
  if (!l) return null;
  if ("tagName" in l && J(l, e), "jsonToSpec" in l) {
    const n = l == null ? void 0 : l.jsonToSpec, a = Z(n, e);
    Array.isArray(a) ? l.children = a : l.children = [a], delete l.jsonToSpec;
  }
  if (Array.isArray(l == null ? void 0 : l.children)) {
    const n = x(l == null ? void 0 : l.children, e);
    l.children = n;
  }
  return l;
}, y = (t, e) => {
  if (t == null) return null;
  debugger;
  return typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? x(t, e) : typeof t == "object" ? tt(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t;
}, N = (t, e) => y(t, e);
K({
  inFuncDefinition: N
});
const et = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, lt = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const l = {
    meta: et,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = l, globalThis.ks.jsonToTag = l;
}, rt = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : k(t), j = (t) => Array.isArray(t) ? t.map(rt).flat(1 / 0).filter(Boolean) : [], nt = (t) => (t == null, t), at = "http://www.w3.org/2000/svg", ot = /* @__PURE__ */ new Set([
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
]), st = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const l = document.createElement("input");
    return l.type = "checkbox", l;
  }
  return ot.has(e) ? document.createElementNS(at, e) : document.createElement(e);
}, it = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), ut = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), dt = "http://www.w3.org/1999/xlink", ct = ({ inElement: t, inAttributes: e }) => {
  const l = t, n = e;
  if (!l || !n || typeof n != "object")
    return l;
  const a = typeof SVGElement < "u" ? l instanceof SVGElement : l.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(n).forEach(([r, o]) => {
    if (r === "class") {
      a ? l.setAttribute("class", String(o)) : l.className = o;
      return;
    }
    if (r === "xlink:href" || r === "href") {
      if (o != null) {
        const s = String(o);
        if (a)
          try {
            l.setAttributeNS(dt, "href", s);
          } catch {
          }
        l.setAttribute("href", s), l.setAttribute("xlink:href", s);
      }
      return;
    }
    if (typeof o == "boolean") {
      o ? l.setAttribute(r, "") : l.removeAttribute(r);
      return;
    }
    o != null && l.setAttribute(r, String(o));
  }), l;
}, ft = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const l = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((n) => typeof n == "string" && n.trim()) : [];
  return l.length && t.classList.add(...l), t;
}, gt = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = st({ inTagName: t.tagName });
  if (!e) return null;
  if (it({
    inElement: e,
    inTextContent: nt(t.textContent),
    inTagName: t.tagName
  }), ut({
    inElement: e,
    inProperties: t.properties
  }), ct({
    inElement: e,
    inAttributes: t.attributes
  }), ft({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const l = j(t.children);
    l.length && e.append(...l);
  }
  return e;
}, k = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? j(t) : typeof t == "object" ? gt(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, ht = "./tags.schema.json", wt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, bt = {
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
}, mt = {
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
}, yt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Tt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, pt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Ct = {
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
}, At = {
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
}, xt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, vt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Nt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, jt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, kt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, $t = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Et = {
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
}, St = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Ft = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Ot = {
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
    "td",
    "th"
  ]
}, Dt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Lt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Gt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, zt = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Rt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Vt = {
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
}, Ht = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Mt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, qt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Bt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, _t = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Ut = {
  $schema: ht,
  div: wt,
  input: bt,
  checkbox: mt,
  colgroup: yt,
  col: Tt,
  label: pt,
  form: Ct,
  select: At,
  p: xt,
  h1: vt,
  h2: Nt,
  span: jt,
  img: kt,
  button: $t,
  table: Et,
  thead: St,
  tbody: Ft,
  tfoot: Ot,
  tr: It,
  th: Dt,
  td: Lt,
  datalist: Gt,
  option: zt,
  header: Rt,
  a: Vt,
  i: Ht,
  small: Mt,
  ul: qt,
  li: Bt,
  hr: _t
}, p = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((n) => p({ inSpec: n }));
  if (typeof e != "object") return [];
  const l = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && l.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((n) => {
    const a = p({ inSpec: n });
    l.push(...a);
  }), l;
}, Kt = ({ inTagsFound: t, inAllowedTags: e }) => {
  const l = t ?? [], n = e ?? {}, a = new Set(
    Object.keys(n).filter((i) => i !== "$schema").map((i) => i.toLowerCase())
  ), r = {}, o = [], s = [];
  l.forEach((i) => {
    r[i] = (r[i] || 0) + 1, a.has(i) ? o.includes(i) || o.push(i) : s.includes(i) || s.push(i);
  });
  const d = l.length, h = s.length === 0;
  return {
    totalTags: d,
    tagCounts: r,
    uniqueTags: Object.keys(r),
    recognizedTags: o,
    unrecognizedTags: s,
    areAllTagsPresent: h
  };
}, Xt = ({ inSpec: t, inTags: e = Ut } = {}) => {
  const l = t, n = e, a = p({ inSpec: l }), r = Kt({
    inTagsFound: a,
    inAllowedTags: n
  });
  return {
    areAllTagsPresent: r.areAllTagsPresent,
    totalTags: r.totalTags,
    tagCounts: r.tagCounts,
    uniqueTags: r.uniqueTags,
    recognizedTags: r.recognizedTags,
    unrecognizedTags: r.unrecognizedTags
  };
}, $ = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return k(e);
};
lt({
  inFuncDefinition: $,
  inReviewSpec: Xt
});
const Qt = {
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
}, Wt = ({
  targetHtmlId: t,
  inTargetHtmlId: e,
  inColumns: l,
  inData: n
} = {}) => {
  const a = e ?? t, r = n ?? [], o = l;
  let s = N(Qt.default, {
    columns: o,
    data: r
  });
  "tagName" in s || (s = s.children);
  const d = document.getElementById(a);
  d && (d.innerHTML = "");
  const h = $(s);
  d.append(h);
}, A = {
  table: Wt
}, Yt = ({
  type: t = "table",
  targetHtmlId: e,
  data: l,
  classToApply: n,
  inTargetHtmlId: a,
  inData: r,
  columns: o,
  inColumns: s,
  fields: d,
  inFields: h,
  tabs: i,
  inTabs: E,
  options: Zt,
  inOptions: Pt,
  datalistId: Jt,
  inDatalistId: te,
  listId: ee,
  inListId: le,
  id: re,
  valueField: ne,
  inValueField: ae,
  labelField: oe,
  inLabelField: se,
  colGroup: S,
  inColGroup: F,
  footerData: O,
  inFooterData: I,
  config: D,
  inConfig: L,
  variant: G,
  skeletonType: z,
  inSkeletonType: R,
  showLog: V = !1,
  inShowLog: H,
  ...u
} = {}) => {
  const T = t, c = typeof T == "string" ? T.toLowerCase() : "table", f = A[c];
  if (!f)
    return console.error(
      `[Renderer] Unknown renderer type "${T}". Available types: ${Object.keys(A).join(", ")}`
    ), null;
  const w = a ?? e, b = r ?? l, C = s ?? o, M = h ?? d, q = E ?? i, g = R ?? z ?? G ?? "default", m = H ?? V ?? !1;
  return f(c === "form" ? {
    targetHtmlId: w,
    inFields: M,
    inData: b,
    inColumns: C,
    inVariant: g,
    inSkeletonType: g,
    inShowLog: m,
    onSave: u == null ? void 0 : u.onSave,
    afterSave: u == null ? void 0 : u.afterSave,
    onNew: u == null ? void 0 : u.onNew
  } : c === "navtabs" || c === "nav" || c === "tabs" ? {
    targetHtmlId: w,
    inTabs: q,
    inData: b,
    inSkeletonType: g,
    inShowLog: m
  } : c === "datalist" || c === "data-list" ? {
    targetHtmlId: w,
    inData: b,
    inSkeletonType: g,
    inShowLog: m
  } : c === "select" ? {
    targetHtmlId: w,
    inData: b,
    inSkeletonType: g,
    inShowLog: m,
    inClassToApply: n
  } : {
    targetHtmlId: w,
    inColumns: C,
    inData: b,
    inColGroup: F ?? S,
    inFooterData: I ?? O ?? [],
    inConfig: L ?? D ?? {},
    inSkeletonType: g,
    inShowLog: m
  });
};
_(Yt);
export {
  Yt as default
};
