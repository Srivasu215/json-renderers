const O = {
  version: "v13.1.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, F = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: O,
    renderToDom: t
  }));
}, R = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, S = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderersBuild ?? (e.jsonRenderersBuild = {
    meta: R,
    renderToDom: t
  }));
}, D = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, V = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: D,
    buildSpecElement: t
  };
  globalThis.ks.jsonToSpec = e;
}, I = (t, e) => p(t, e), T = (t, e) => Array.isArray(t) ? t.map((r) => I(r, e)).flat(1 / 0).filter(Boolean) : [], G = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const r = e[t == null ? void 0 : t.source];
    if (Array.isArray(r))
      return r.map((o) => {
        const n = t == null ? void 0 : t.template;
        if (n)
          return p(n, o);
      });
  }
}, M = (t, e) => {
  let r = [];
  for (const [l, o] of Object.entries(e)) {
    const n = t == null ? void 0 : t.template;
    if (n) {
      const a = p(n, {
        key: l,
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
        const n = t == null ? void 0 : t.template;
        if (n)
          return p(n, o);
      });
  }
}, K = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return G(t, e);
    if (t.operation === "loopObject")
      return M(t, e);
    if (t.operation === "loopCollection")
      return z(t, e);
  }
}, A = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const r = t.match(/^\$\{(.+?)\}$/);
  if (r) {
    const l = r[1];
    return (e == null ? void 0 : e[l]) ?? "";
  }
  return t;
}, L = (t, e) => {
  let r = {};
  for (const [l, o] of Object.entries(t)) {
    const n = A(o, e);
    r[l] = n;
  }
  return r;
}, q = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const r = A(t.textContent, e);
      t.textContent = r;
    }
    if ("attributes" in t) {
      const r = L(t.attributes, e);
      t.attributes = r;
    }
  }
}, B = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const r = structuredClone(t);
  if (!r) return null;
  if ("tagName" in r && q(r, e), "jsonToSpec" in r) {
    const l = r == null ? void 0 : r.jsonToSpec, o = K(l, e);
    Array.isArray(o) ? r.children = o : r.children = [o], delete r.jsonToSpec;
  }
  if (Array.isArray(r == null ? void 0 : r.children)) {
    const l = T(r == null ? void 0 : r.children, e);
    r.children = l;
  }
  return r;
}, p = (t, e) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? T(t, e) : typeof t == "object" ? B(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t, C = (t, e) => p(t, e);
V({
  inFuncDefinition: C
});
const H = {
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
  const r = e ?? [], l = t;
  return C(H.default, {
    columns: l,
    data: r
  });
}, x = ({ inItems: t, inRecipe: e, inExecute: r }) => {
  const l = t, o = e, n = r;
  return l.map((a) => b({
    inSource: a,
    inRecipe: o,
    inExecute: n
  })).flat(1 / 0).filter(Boolean);
}, _ = ({ inSource: t, inRecipe: e, inExecute: r }) => {
  const l = t, o = e, n = r;
  let a = l;
  typeof n == "function" && (a = n({
    inSource: l,
    inRecipe: o
  }));
  for (const [s, d] of Object.entries(a))
    Array.isArray(d) && o && s in o && (a[s] = x({
      inItems: d,
      inRecipe: o[s],
      inExecute: n
    }));
  return a;
}, b = ({ inSource: t, inRecipe: e, inExecute: r }) => {
  const l = t, o = e, n = r;
  return Array.isArray(l) ? x({
    inItems: l,
    inRecipe: o,
    inExecute: n
  }) : typeof l == "object" && l !== null ? _({
    inSource: l,
    inRecipe: o,
    inExecute: n
  }) : l;
}, U = ({ inKey: t, inDirective: e }) => {
  const r = t, l = e;
  return (l == null ? void 0 : l.alterKey) || r;
}, X = ({ inValue: t, inDirective: e, inExecute: r }) => {
  const l = t, o = e, n = r;
  return o && "transform" in o ? b({
    inSource: l,
    inRecipe: o,
    inExecute: n
  }) : l;
}, Q = ({ inValue: t, inDirective: e }) => {
  const r = t, l = e;
  return (l == null ? void 0 : l.valueType) === "array" && !Array.isArray(r) ? [r] : r;
}, W = ({ inValue: t, inDirective: e }) => {
  const r = t, l = e;
  return l != null && l.valueKey && r && typeof r == "object" ? r[l.valueKey] : r;
}, Y = ({ inSource: t, inTransform: e, inExecute: r }) => {
  const l = t, o = e, n = r, a = {};
  for (const [s, d] of Object.entries(l)) {
    if (!(s in o))
      continue;
    const u = o[s], i = U({ inKey: s, inDirective: u });
    let c = d;
    c = X({
      inValue: c,
      inDirective: u,
      inExecute: n
    }), c = Q({ inValue: c, inDirective: u }), c = W({ inValue: c, inDirective: u }), a[i] = c;
  }
  return a;
};
function $(t, e) {
  for (const r in t)
    typeof t[r] == "object" && t[r] !== null ? $(t[r], e) : typeof t[r] == "string" && t[r] === "${}" && (t[r] = e);
  return t;
}
const Z = ({ inSource: t, inOperation: e, inExecute: r }) => {
  const l = t, o = e;
  for (const [n, a] of Object.entries(o))
    if ("operationType" in a && a.operationType === "loopArray" && n in l) {
      const s = l[n].map((d) => {
        const u = { ...a == null ? void 0 : a.template };
        return $(u, d), u;
      });
      l[n] = s;
    }
  return l;
}, g = ({ inSource: t, inRecipe: e }) => {
  let r = t;
  const l = e;
  return l && typeof l == "object" && "transform" in l && (r = Y({
    inSource: r,
    inTransform: l.transform,
    inExecute: g
  })), l && typeof l == "object" && "operation" in l && (r = Z({
    inSource: r,
    inOperation: l.operation,
    inExecute: g
  })), r;
}, J = (t, e) => b({
  inSource: t,
  inRecipe: e,
  inExecute: g
}), tt = {
  children: ""
}, et = {
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
}, rt = {
  transform: tt,
  operation: et
}, v = ({
  inData: t
} = {}) => {
  let r = J({
    children: t ?? []
  }, rt);
  return r == null ? void 0 : r.children;
}, lt = "select", nt = {
  id: "LedgerName"
}, ot = [], h = {
  tagName: lt,
  attributes: nt,
  children: ot
}, at = ({
  inData: t
} = {}) => {
  let r = v({
    inData: t ?? []
  });
  return h.children = r, console.log("skeletonJson: ", r, h), h;
}, w = {
  table: P,
  select: at,
  selectOptionsOnly: v
}, j = ({
  type: t = "table",
  data: e,
  columns: r
} = {}) => {
  const l = t, o = w[l];
  return o ? o({
    inColumns: r,
    inData: e
  }) : (console.error(
    `[Renderer] Unknown renderer type "${l}". Available types: ${Object.keys(w).join(", ")}`
  ), null);
};
S(j);
const st = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, it = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = {
    meta: st,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, ct = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : E(t), N = (t) => Array.isArray(t) ? t.map(ct).flat(1 / 0).filter(Boolean) : [], ut = (t) => (t == null, t), dt = "http://www.w3.org/2000/svg", ft = /* @__PURE__ */ new Set([
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
]), pt = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const r = document.createElement("input");
    return r.type = "checkbox", r;
  }
  return ft.has(e) ? document.createElementNS(dt, e) : document.createElement(e);
}, ht = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), gt = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), mt = "http://www.w3.org/1999/xlink", bt = ({ inElement: t, inAttributes: e }) => {
  const r = t, l = e;
  if (!r || !l || typeof l != "object")
    return r;
  const o = typeof SVGElement < "u" ? r instanceof SVGElement : r.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(l).forEach(([n, a]) => {
    if (n === "class") {
      o ? r.setAttribute("class", String(a)) : r.className = a;
      return;
    }
    if (n === "xlink:href" || n === "href") {
      if (a != null) {
        const s = String(a);
        if (o)
          try {
            r.setAttributeNS(mt, "href", s);
          } catch {
          }
        r.setAttribute("href", s), r.setAttribute("xlink:href", s);
      }
      return;
    }
    if (typeof a == "boolean") {
      a ? r.setAttribute(n, "") : r.removeAttribute(n);
      return;
    }
    a != null && r.setAttribute(n, String(a));
  }), r;
}, yt = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const r = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((l) => typeof l == "string" && l.trim()) : [];
  return r.length && t.classList.add(...r), t;
}, wt = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = pt({ inTagName: t.tagName });
  if (!e) return null;
  if (ht({
    inElement: e,
    inTextContent: ut(t.textContent),
    inTagName: t.tagName
  }), gt({
    inElement: e,
    inProperties: t.properties
  }), bt({
    inElement: e,
    inAttributes: t.attributes
  }), yt({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const r = N(t.children);
    r.length && e.append(...r);
  }
  return e;
}, E = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? N(t) : typeof t == "object" ? wt(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, Tt = "./tags.schema.json", At = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Ct = {
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
}, xt = {
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
}, $t = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, vt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, jt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Nt = {
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
}, Et = {
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
}, Ft = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Rt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, St = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Dt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Vt = {
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
}, Mt = {
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
}, Kt = {
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
}, Ht = {
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
}, Ut = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Xt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Qt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Wt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Yt = {
  $schema: Tt,
  div: At,
  input: Ct,
  checkbox: xt,
  colgroup: $t,
  col: vt,
  label: jt,
  form: Nt,
  select: Et,
  p: kt,
  h1: Ot,
  h2: Ft,
  span: Rt,
  img: St,
  button: Dt,
  table: Vt,
  thead: It,
  tbody: Gt,
  tfoot: Mt,
  tr: zt,
  th: Kt,
  td: Lt,
  datalist: qt,
  option: Bt,
  header: Ht,
  a: Pt,
  i: _t,
  small: Ut,
  ul: Xt,
  li: Qt,
  hr: Wt
}, m = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((l) => m({ inSpec: l }));
  if (typeof e != "object") return [];
  const r = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && r.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((l) => {
    const o = m({ inSpec: l });
    r.push(...o);
  }), r;
}, Zt = ({ inTagsFound: t, inAllowedTags: e }) => {
  const r = t ?? [], l = e ?? {}, o = new Set(
    Object.keys(l).filter((i) => i !== "$schema").map((i) => i.toLowerCase())
  ), n = {}, a = [], s = [];
  r.forEach((i) => {
    n[i] = (n[i] || 0) + 1, o.has(i) ? a.includes(i) || a.push(i) : s.includes(i) || s.push(i);
  });
  const d = r.length, u = s.length === 0;
  return {
    totalTags: d,
    tagCounts: n,
    uniqueTags: Object.keys(n),
    recognizedTags: a,
    unrecognizedTags: s,
    areAllTagsPresent: u
  };
}, Jt = ({ inSpec: t, inTags: e = Yt } = {}) => {
  const r = t, l = e, o = m({ inSpec: r }), n = Zt({
    inTagsFound: o,
    inAllowedTags: l
  });
  return {
    areAllTagsPresent: n.areAllTagsPresent,
    totalTags: n.totalTags,
    tagCounts: n.tagCounts,
    uniqueTags: n.uniqueTags,
    recognizedTags: n.recognizedTags,
    unrecognizedTags: n.unrecognizedTags
  };
}, k = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return E(e);
};
it({
  inFuncDefinition: k,
  inReviewSpec: Jt
});
const te = ({
  inTargetHtmlId: t,
  inColumns: e,
  type: r,
  inData: l,
  showLog: o
} = {}) => {
  const n = t, a = l ?? [], s = e;
  o && console.log("buildSpec 1 :", n, a.localColumns);
  let u = j({
    type: r,
    data: a,
    columns: s
  });
  const i = k(u);
  return console.log("buildSpec 2 :", u, i), o && console.log("buildSpec 3 :", i), i;
}, ee = ({
  type: t = "table",
  targetHtmlId: e,
  data: r,
  classToApply: l,
  columns: o,
  appendPosition: n,
  showLog: a = !1
} = {}) => {
  const s = t, d = e, u = r, i = o;
  a && console.log("showLog 1 :", s, e, r, l, o, n);
  const c = te({
    inTargetHtmlId: d,
    inColumns: i,
    showLog: a,
    inData: u,
    type: s
  });
  a && console.log("showLog 2 :", c);
  const f = document.getElementById(d);
  a && console.log("showLog 3 :", f);
  const y = Array.isArray(c) || c instanceof NodeList || c instanceof HTMLCollection;
  return console.log("prepend ---------:", s, y, f, c, u), y ? n === "prepend" ? f.prepend(...c) : f.append(...c) : n === "prepend" ? f.prepend(c) : (f && (f.innerHTML = ""), f.append(c)), a && console.log("showLog 5 :", f), f;
};
F(ee);
export {
  ee as default
};
