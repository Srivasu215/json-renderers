const meta$2 = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, registerGlobal$2 = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: meta$2,
    renderToDom: t
  }));
}, meta$1 = {
  version: "v32",
  description: "JSON-to-DOM engine with centralized traversal and responsibility-focused construction"
}, registerGlobal$1 = ({ inFuncDefinition: t } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: meta$1,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = e, globalThis.ks.jsonToTag = e;
}, resolveChild = (t, e) => traverse$1(t, e), traverseArray = (t, e) => Array.isArray(t) ? t.map((n) => resolveChild(n, e)).flat(1 / 0).filter(Boolean) : [], startFunc$i = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const n = e[t == null ? void 0 : t.source];
    if (Array.isArray(n))
      return n.map((l) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return traverse$1(o, l);
      });
  }
}, startFunc$h = (t, e) => {
  let n = [];
  for (const [r, l] of Object.entries(e)) {
    const o = t == null ? void 0 : t.template;
    if (o) {
      const s = traverse$1(o, {
        key: r,
        value: l
      });
      n.push(s);
    }
  }
  return n;
}, startFunc$g = (t, e) => {
  if ("source" in t && (t == null ? void 0 : t.source) in e) {
    const n = e[t == null ? void 0 : t.source];
    if (Array.isArray(n))
      return n.map((l) => {
        const o = t == null ? void 0 : t.template;
        if (o)
          return traverse$1(o, l);
      });
  }
}, startFunc$f = (t, e) => {
  if ("operation" in t) {
    if (t.operation === "loopArray")
      return startFunc$i(t, e);
    if (t.operation === "loopObject")
      return startFunc$h(t, e);
    if (t.operation === "loopCollection")
      return startFunc$g(t, e);
  }
}, startFunc$e = (t, e) => {
  if (typeof e == "string") return e;
  if (typeof t != "string") return t;
  if (t === "${value}")
    return e.value;
  const n = t.match(/^\$\{(.+?)\}$/);
  if (n) {
    const r = n[1];
    return (e == null ? void 0 : e[r]) ?? "";
  }
  return t;
}, startFunc$d = (t, e) => {
  let n = {};
  for (const [r, l] of Object.entries(t)) {
    const o = startFunc$e(l, e);
    n[r] = o;
  }
  return n;
}, startFunc$c = (t, e) => {
  if ("tagName" in t) {
    if ("textContent" in t) {
      const n = startFunc$e(t.textContent, e);
      t.textContent = n;
    }
    if ("attributes" in t) {
      const n = startFunc$d(t.attributes, e);
      t.attributes = n;
    }
  }
}, traverseObject = (t, e) => {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const n = structuredClone(t);
  if (!n) return null;
  if ("tagName" in n && startFunc$c(n, e), "jsonToSpec" in n) {
    const r = n == null ? void 0 : n.jsonToSpec, l = startFunc$f(r, e);
    Array.isArray(l) ? n.children = l : n.children = [l], delete n.jsonToSpec;
  }
  if (Array.isArray(n == null ? void 0 : n.children)) {
    const r = traverseArray(n == null ? void 0 : n.children, e);
    n.children = r;
  }
  return n;
}, traverse$1 = (t, e) => {
  if (t == null) return null;
  debugger;
  return typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? traverseArray(t, e) : typeof t == "object" ? traverseObject(t, e) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : t;
}, buildSpecElement$1 = (t, e) => traverse$1(t, e);
registerGlobal$1({
  inFuncDefinition: buildSpecElement$1
});
const meta = {
  version: "v3.0",
  description: "Pure DOM engine with JSON review and tags.json catalog verification"
}, registerGlobal = (t) => {
  const e = t, n = typeof e == "function" ? e : e == null ? void 0 : e.inFuncDefinition, r = e == null ? void 0 : e.inReviewSpec;
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks["json-to-tag"] = {
    meta,
    buildSpecElement: n,
    reviewSpec: r
  }, globalThis.ks.jsonToTag = {
    meta,
    buildSpecElement: n,
    reviewSpec: r
  });
}, isNullOrUndefined = ({ inSpec: t }) => {
  const e = t;
  return e == null;
}, isDomNode = ({ inSpec: t }) => typeof Node < "u" && t instanceof Node, isSpecArray = ({ inSpec: t }) => {
  const e = t;
  return Array.isArray(e);
}, buildSpecArray = ({ inSpec: t, inShowLog: e = !1 }) => {
  const n = t, r = e;
  return Array.isArray(n) ? n.map((l) => dispatchSpec({
    inSpec: l,
    inShowLog: r
  })).flat().filter(Boolean) : [];
}, createElement = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const n = document.createElement("input");
    return n.type = "checkbox", n;
  }
  return document.createElement(e);
}, applyTextContent = ({ inElement: t, inTextContent: e, inAllowsTextContent: n = !0, inTagName: r, inShowLog: l = !1 }) => {
  const o = t, s = e, c = n, u = r, g = l;
  return !o || s === void 0 || s === null ? o : c ? (o.textContent = s, o) : (g && console.warn(`[json-to-tag v3] textContent is not allowed on <${u}>; discarded "${s}"`), o);
}, applyProperties = ({ inElement: t, inProperties: e }) => {
  const n = t, r = e;
  return n && r && typeof r == "object" && Object.assign(n, r), n;
}, applyAttributes = ({ inElement: t, inAttributes: e }) => {
  const n = t, r = e;
  return !n || !r || typeof r != "object" || Object.entries(r).forEach(([l, o]) => {
    l === "class" ? n.className = o : typeof o == "boolean" ? o ? n.setAttribute(l, "") : n.removeAttribute(l) : o != null && n.setAttribute(l, String(o));
  }), n;
}, applyClassList = ({ inElement: t, inClassList: e }) => {
  const n = t, r = e;
  if (!n || !r) return n;
  let l = [];
  return typeof r == "string" ? l = r.split(/\s+/).filter(Boolean) : Array.isArray(r) && (l = r.filter((o) => typeof o == "string" && o.trim().length > 0)), l.length > 0 && n.classList.add(...l), n;
}, appendChildren = ({ inElement: t, inChildren: e, inAllowsChildren: n = !0, inTagName: r, inShowLog: l = !1 }) => {
  const o = t, s = e, c = n, u = r, g = l;
  return !o || !Array.isArray(s) || s.length === 0 ? o : c ? (s.forEach((d) => {
    typeof Node < "u" && d instanceof Node ? o.appendChild(d) : (typeof d == "string" || typeof d == "number") && o.appendChild(document.createTextNode(String(d)));
  }), o) : (g && console.warn(`[json-to-tag v3] Children are not allowed on void tag <${u}>; discarded ${s.length} child nodes.`), o);
}, domElementBuilder = ({ inSpec: t, inClassList: e }) => {
  const n = t, r = e || (n == null ? void 0 : n.classList);
  if (!n || !n.tagName) return null;
  const l = createElement({ inTagName: n.tagName });
  return l ? (applyTextContent({
    inElement: l,
    inTextContent: n.textContent,
    inTagName: n.tagName
  }), applyProperties({
    inElement: l,
    inProperties: n.properties
  }), applyAttributes({
    inElement: l,
    inAttributes: n.attributes
  }), applyClassList({
    inElement: l,
    inClassList: r
  }), appendChildren({
    inElement: l,
    inChildren: n.children,
    inTagName: n.tagName
  }), l) : null;
}, buildChildrenNodes = ({ inChildren: t, inShowLog: e = !1 }) => {
  const n = t, r = e;
  return Array.isArray(n) ? n.map((o) => dispatchSpec({
    inSpec: o,
    inShowLog: r
  })).flat().filter(Boolean) : [];
}, buildSingleElement = ({ inSpec: t, inShowLog: e = !1 }) => {
  const n = t, r = e, l = domElementBuilder({ inSpec: n });
  let o = [];
  return "children" in n && (o = Array.isArray(n.children) && n.children.length > 0 ? buildChildrenNodes({
    inChildren: n.children,
    inShowLog: r
  }) : [], l.append(...o)), l;
}, dispatchSpec = ({ inSpec: t, inShowLog: e = !1 } = {}) => {
  const n = t, r = e;
  return isNullOrUndefined({ inSpec: n }) ? null : isDomNode({ inSpec: n }) ? n : isSpecArray({ inSpec: n }) ? buildSpecArray({
    inSpec: n,
    inShowLog: r
  }) : buildSingleElement({
    inSpec: n,
    inShowLog: r
  });
}, $schema = "./tags.schema.json", div = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, input = {
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
}, checkbox = {
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
}, colgroup = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, col = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, label = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, form = {
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
}, select = {
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
}, p = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, h1 = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, h2 = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, span = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, img = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, button = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, table = {
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
}, thead = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, tbody = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, tfoot = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, tr = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, th = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, td = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, datalist = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, option = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, header = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, a = {
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
}, i = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, small = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ul = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, li = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, hr = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, defaultTags = {
  $schema,
  div,
  input,
  checkbox,
  colgroup,
  col,
  label,
  form,
  select,
  p,
  h1,
  h2,
  span,
  img,
  button,
  table,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td,
  datalist,
  option,
  header,
  a,
  i,
  small,
  ul,
  li,
  hr
}, extractTags = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((r) => extractTags({ inSpec: r }));
  if (typeof e != "object") return [];
  const n = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && n.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((r) => {
    const l = extractTags({ inSpec: r });
    n.push(...l);
  }), n;
}, checkTags = ({ inTagsFound: t, inAllowedTags: e }) => {
  const n = t ?? [], r = e ?? {}, l = new Set(
    Object.keys(r).filter((d) => d !== "$schema").map((d) => d.toLowerCase())
  ), o = {}, s = [], c = [];
  n.forEach((d) => {
    o[d] = (o[d] || 0) + 1, l.has(d) ? s.includes(d) || s.push(d) : c.includes(d) || c.push(d);
  });
  const u = n.length, g = c.length === 0;
  return {
    totalTags: u,
    tagCounts: o,
    uniqueTags: Object.keys(o),
    recognizedTags: s,
    unrecognizedTags: c,
    areAllTagsPresent: g
  };
}, reviewSpec = ({ inSpec: t, inTags: e = defaultTags } = {}) => {
  const n = t, r = e, l = extractTags({ inSpec: n }), o = checkTags({
    inTagsFound: l,
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
}, buildSpecElement = (t = {}) => {
  try {
    const e = t, n = (e == null ? void 0 : e.spec) ?? (e == null ? void 0 : e.inSpec) ?? e;
    return dispatchSpec({
      inSpec: n
    });
  } catch (e) {
    throw console.error("error : ", e), e;
  }
};
registerGlobal({
  inFuncDefinition: buildSpecElement,
  inReviewSpec: reviewSpec
});
const deriveColumnsFromData = ({ inData: t = [] } = {}) => {
  const e = t;
  if (!Array.isArray(e) || e.length === 0)
    return [];
  const n = e[0];
  return !n || typeof n != "object" ? [] : Object.keys(n).map((r) => ({
    key: r,
    label: r
  }));
}, skeletonJson$2 = {
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
}, startFunc$b = ({
  targetHtmlId: t,
  inTargetHtmlId: e,
  inColumns: n,
  inData: r
} = {}) => {
  const l = e ?? t;
  n ?? deriveColumnsFromData({ inData: r ?? [] });
  let s = buildSpecElement$1(skeletonJson$2.default, {
    columns: [{
      title: "Name"
    }],
    data: r
  });
  console.log("specAsJsonToDom : ", s), "tagName" in s || (s = s.children);
  const c = document.getElementById(l);
  c && (c.innerHTML = "");
  const u = buildSpecElement(s);
  c.append(u);
}, IDENTIFIERS = {
  HARD_CODED: "$",
  PARENT: "^",
  TYPE_START: "(",
  TYPE_END: ")",
  ACTION_START: "{",
  ACTION_END: "}",
  ARRAY_INDEX: "#eq(",
  ARRAY_START: "#eq(",
  ARRAY_END: ")"
}, VALUES = {
  DEFAULT: void 0
}, resolvePath = (t, e) => {
  if (t === "")
    return e;
  const r = t.replace(/\[(\w+)\]/g, ". $1".replace(" ", "")).replace(/^\./, "").split(".");
  for (let l = 0; l < r.length; ) {
    if (Array.isArray(e)) {
      const c = r.slice(l).join(".");
      return e.map((u) => resolvePath(c, u));
    }
    if (typeof e != "object" || e === null)
      return VALUES.DEFAULT;
    let o, s = 0;
    for (let c = r.length; c > l; c -= 1) {
      const u = r.slice(l, c).join(".");
      if (Object.prototype.hasOwnProperty.call(e, u)) {
        o = u, s = c - l;
        break;
      }
    }
    if (o === void 0)
      return VALUES.DEFAULT;
    e = e[o], l += s;
  }
  return e;
}, isNonEmptyArray = (t) => t && Array.isArray(t) && t.length > 0, isNumber = (t) => !isNaN(t), operators = ["+", "-", "*", "/", "%"], convertToString = (t) => t ? String(t) : "", convertToNumber = (t) => t ? Number(t) : 0, convertToUpperCase = (t) => t ? t.toUpperCase() : "", convertToDate = (t) => {
  if (!t) return t;
  try {
    return new Date(t).getTime();
  } catch {
    return t;
  }
}, deleteKey = () => {
}, deleteIfNotPresent = (t) => typeof t > "u" ? void 0 : t, typeToFn = {
  STRING: convertToString,
  NUMBER: convertToNumber,
  DATE: convertToDate,
  UPPER: convertToUpperCase
}, extractSpecial = (t) => {
  const e = t.indexOf(IDENTIFIERS.TYPE_START) > -1 ? IDENTIFIERS.TYPE_START : t.indexOf(IDENTIFIERS.ACTION_START) > -1 ? IDENTIFIERS.ACTION_START : null;
  if (!e) return null;
  const n = e === IDENTIFIERS.TYPE_START ? IDENTIFIERS.TYPE_END : IDENTIFIERS.ACTION_END;
  return {
    kind: e,
    type: t.substring(t.indexOf(e) + 1, t.lastIndexOf(n)),
    path: t.substring(0, t.indexOf(e))
  };
}, evaluateExpression = (value, key, source, config) => {
  const resolvedKey = resolvePath(key, source);
  if (!config[resolvedKey]) return resolvedKey;
  const { operator, value: expressionValue } = config[resolvedKey];
  return !operators.includes(operator) || !isNumber(expressionValue) ? resolvedKey : eval(`${value}${operator}${expressionValue}`);
}, createActionMap = ({ convertValue: t }) => ({
  APPEND: (e, n, r, l) => {
    const o = l == null ? void 0 : l.appendMap;
    if (!o || typeof o[n] > "u") return e;
    const { path: s, separator: c } = o[n];
    return e + (c || "") + t(s, r);
  },
  DELETE: deleteKey,
  DELETE_IF_NOT_PRESENT: deleteIfNotPresent,
  DEPENDS: (e, n, r, l) => {
    if (typeof n > "u") return l.dependentMap[e];
    const o = extractSpecial(n);
    return o && actionMap[o.type] ? actionMap[o.type](e, o.path, r, l) : n;
  },
  EVAL: evaluateExpression
});
let actionMap = {};
const convertType = (t, e) => typeToFn[t] ? typeToFn[t](e) : e, performAction = (t, e, n, r, l, o) => {
  actionMap = createActionMap({ convertValue: o });
  const s = extractSpecial(t);
  return s && actionMap[s.type] ? actionMap[s.type](e, s.path, r, l) : actionMap[t] ? actionMap[t](e, void 0, r, l) : e;
}, resolveValue = (t, e, n, r) => {
  if (t.startsWith(IDENTIFIERS.HARD_CODED))
    return t.substring(1);
  if (t.startsWith(IDENTIFIERS.PARENT))
    return resolvePath(t.substring(1), n);
  const l = extractSpecial(t);
  if (!l)
    return resolvePath(t, e);
  const o = resolvePath(l.path, e);
  return typeof o > "u" ? VALUES.DEFAULT : l.kind === IDENTIFIERS.TYPE_START ? convertType(l.type, o) : performAction(
    l.type,
    o,
    l.path,
    e,
    r,
    (s, c) => resolveValue(s, c, n, r)
  );
}, startFunc$a = (t, e, n) => {
  const r = {};
  return Object.keys(t).forEach((l) => {
    const o = t[l];
    if (typeof o == "string") {
      r[l] = resolveValue(
        o,
        e,
        n.rootSource,
        n.configuration
      );
      return;
    }
    if (Array.isArray(o) && o.length > 0) {
      r[l] = startFunc$3(o[0], e, n);
      return;
    }
    o && typeof o == "object" && (r[l] = traverse(o, e, n));
  }), r;
}, startFunc$9 = (t, e, n) => {
  const r = [];
  return t.forEach((l) => {
    if (typeof l == "string") {
      const o = resolveValue(
        l,
        e,
        n.rootSource,
        n.configuration
      );
      isNonEmptyArray(o) ? r.push(...o) : r.push(o);
      return;
    }
    if (Array.isArray(l)) {
      r.push(
        ...startFunc$9(
          l[0],
          e,
          n
        )
      );
      return;
    }
    l && typeof l == "object" && r.push(
      startFunc$a(
        l,
        e,
        n
      )
    );
  }), r;
}, startFunc$8 = (t, e, n) => [
  startFunc$a(
    e,
    t,
    n
  )
], startFunc$7 = (t, e, n) => t.map((r) => startFunc$a(
  e,
  r,
  n
));
function isPlainObject(t) {
  return t !== null && typeof t == "object" && Object.getPrototypeOf(t) === Object.prototype;
}
const startFunc$6 = (t, e, n) => Array.isArray(t) ? startFunc$7(
  t,
  e,
  n
) : isPlainObject(t) ? startFunc$8(
  t,
  e,
  n
) : [], isArrayIndexMapping = (t) => {
  const e = t.list;
  return e.startsWith(IDENTIFIERS.ARRAY_INDEX) && e.includes(IDENTIFIERS.ARRAY_START) && e.includes(IDENTIFIERS.ARRAY_END);
}, getItemMapping$1 = (t) => Array.isArray(t.item) ? t.item[0] : t.item, resolveListSource = (t, e) => resolvePath(
  t.list,
  e
), startFunc$5 = (t, e, n) => {
  const r = getItemMapping$1(t);
  if (isArrayIndexMapping(t))
    return [
      startFunc$a(
        r,
        e,
        n
      )
    ];
  const l = resolveListSource(
    t,
    e
  );
  return startFunc$6(
    l,
    r,
    n
  );
}, getItemMapping = (t) => Array.isArray(t.item) ? t.item[0] : t.item, resolveObjectifySource = (t, e) => resolvePath(
  t.objectify,
  e
), startFunc$4 = (t, e, n) => {
  const r = resolveObjectifySource(
    t,
    e
  );
  return startFunc$8(
    r,
    getItemMapping(t),
    n
  );
}, startFunc$3 = (t, e, n) => typeof t.collect < "u" ? startFunc$9(
  t.item,
  e,
  n
) : typeof t.list < "u" ? startFunc$5(
  t,
  e,
  n
) : typeof t.objectify < "u" ? startFunc$4(
  t,
  e,
  n
) : [], startFunc$2 = (t, e) => {
  if (!t.includes(IDENTIFIERS.ARRAY_INDEX)) return {};
  const n = t.lastIndexOf(IDENTIFIERS.ARRAY_INDEX) + 4, r = t.lastIndexOf(IDENTIFIERS.ARRAY_END), l = t.substring(n, r), o = t.substring(0, t.lastIndexOf(IDENTIFIERS.ARRAY_INDEX)), s = o ? resolvePath(o, e) : e;
  return s == null ? void 0 : s[l];
}, traverse = (t, e, n) => {
  if (typeof t.list < "u" || typeof t.objectify < "u" || typeof t.collect < "u")
    return startFunc$3(t, e, n);
  if (typeof t.flat < "u") {
    const r = startFunc$2(t.flat, e);
    return startFunc$a(t.item, r, n);
  }
  return typeof t.item < "u" ? startFunc$a(t.item, e, n) : startFunc$a(t, e, n);
}, transform = (t, e) => {
  let n = t, r = e;
  t !== null && typeof t == "object" && "inData" in t && e === void 0 && (n = t.inData, r = t.inTransformation);
  const { mapping: l, config: o = {} } = r;
  return traverse(l, n, {
    rootSource: n,
    configuration: o
  });
}, transformHelper = { transform }, old = {
  tagName: "datalist",
  attributes: {
    id: "LedgerName"
  },
  jsonToSpec: {
    operation: "loopArray",
    source: "LedgerName",
    template: {
      tagName: "option",
      attributes: {
        value: "${}"
      },
      textContent: "${}"
    }
  },
  children: []
}, skeletonJson$1 = {
  old,
  default: {
    mapping: {
      tagName: "$datalist",
      attributes: {
        id: "$LedgerName"
      },
      children: {
        list: "LedgerName",
        item: {
          tagName: "$option",
          attributes: {
            value: ""
          },
          textContent: ""
        }
      }
    }
  }
}, startFunc$1 = ({ targetHtmlId: t, inData: e, inSkeletonType: n = "default" } = {}) => {
  const r = skeletonJson$1[n], l = transformHelper.transform(e, r), o = document.getElementById(t);
  o && (o.innerHTML = "");
  const s = buildSpecElement(l);
  Array.isArray(s) ? s.forEach((c) => o.append(c)) : o.append(s);
}, skeletonJson = {
  default: {
    mapping: {
      tagName: "$select",
      attributes: {
        id: "$LedgerName",
        class: "$keshav"
      },
      children: [
        {
          list: "LedgerName",
          item: {
            tagName: "$option",
            attributes: {
              value: ""
            },
            textContent: ""
          }
        }
      ]
    }
  }
}, startFunc = ({
  targetHtmlId: t,
  inData: e,
  inSkeletonType: n = "default",
  inClassToApply: r
} = {}) => {
  console.log("aaaaaaaaaa");
  const l = skeletonJson[n];
  l.mapping.attributes.class = `$${r}`;
  debugger;
  const o = transformHelper.transform(e, l), s = document.getElementById(t);
  s && (s.innerHTML = "");
  const c = buildSpecElement(o);
  Array.isArray(c) ? c.forEach((u) => s.append(u)) : s.append(c);
}, RENDERER_MAP = {
  table: startFunc$b,
  datalist: startFunc$1,
  select: startFunc
}, render = ({
  type: t = "table",
  targetHtmlId: e,
  data: n,
  classToApply: r,
  inTargetHtmlId: l,
  inData: o,
  columns: s,
  inColumns: c,
  fields: u,
  inFields: g,
  tabs: d,
  inTabs: C,
  options: M,
  inOptions: P,
  datalistId: _,
  inDatalistId: Y,
  listId: U,
  inListId: H,
  id: B,
  valueField: z,
  inValueField: V,
  labelField: q,
  inLabelField: G,
  colGroup: N,
  inColGroup: S,
  footerData: $,
  inFooterData: I,
  config: v,
  inConfig: F,
  variant: R,
  skeletonType: D,
  inSkeletonType: x,
  showLog: j = !1,
  inShowLog: L,
  ...f
} = {}) => {
  const w = t, h = typeof w == "string" ? w.toLowerCase() : "table", b = RENDERER_MAP[h];
  if (!b)
    return console.error(
      `[Renderer] Unknown renderer type "${w}". Available types: ${Object.keys(RENDERER_MAP).join(", ")}`
    ), null;
  const T = l ?? e, y = o ?? n, E = c ?? s, O = g ?? u, k = C ?? d, m = x ?? D ?? R ?? "default", A = L ?? j ?? !1;
  return b(h === "form" ? {
    targetHtmlId: T,
    inFields: O,
    inData: y,
    inColumns: E,
    inVariant: m,
    inSkeletonType: m,
    inShowLog: A,
    onSave: f == null ? void 0 : f.onSave,
    afterSave: f == null ? void 0 : f.afterSave,
    onNew: f == null ? void 0 : f.onNew
  } : h === "navtabs" || h === "nav" || h === "tabs" ? {
    targetHtmlId: T,
    inTabs: k,
    inData: y,
    inSkeletonType: m,
    inShowLog: A
  } : h === "datalist" || h === "data-list" ? {
    targetHtmlId: T,
    inData: y,
    inSkeletonType: m,
    inShowLog: A
  } : h === "select" ? {
    targetHtmlId: T,
    inData: y,
    inSkeletonType: m,
    inShowLog: A,
    inClassToApply: r
  } : {
    targetHtmlId: T,
    inColumns: E,
    inData: y,
    inColGroup: S ?? N,
    inFooterData: I ?? $ ?? [],
    inConfig: F ?? v ?? {},
    inSkeletonType: m,
    inShowLog: A
  });
};
registerGlobal$2(render);
export {
  render as default
};
