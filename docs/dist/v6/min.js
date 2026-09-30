const meta$1 = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, registerGlobal$1 = (e) => {
  var t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), (t = globalThis.ks).jsonRenderers ?? (t.jsonRenderers = {
    meta: meta$1,
    renderToDom: e
  }));
}, meta = {
  version: "v3.0",
  description: "Pure DOM engine with JSON review and tags.json catalog verification"
}, registerGlobal = (e) => {
  const t = e, n = typeof t == "function" ? t : t == null ? void 0 : t.inFuncDefinition, o = t == null ? void 0 : t.inReviewSpec;
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks["json-to-tag"] = {
    meta,
    buildSpecElement: n,
    reviewSpec: o
  }, globalThis.ks.jsonToTag = {
    meta,
    buildSpecElement: n,
    reviewSpec: o
  });
}, isNullOrUndefined = ({ inSpec: e }) => {
  const t = e;
  return t == null;
}, isDomNode = ({ inSpec: e }) => typeof Node < "u" && e instanceof Node, isSpecArray = ({ inSpec: e }) => {
  const t = e;
  return Array.isArray(t);
}, buildSpecArray = ({ inSpec: e, inShowLog: t = !1 }) => {
  const n = e, o = t;
  return Array.isArray(n) ? n.map((r) => dispatchSpec({
    inSpec: r,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, createElement = ({ inTagName: e }) => {
  const t = e == null ? void 0 : e.toLowerCase();
  if (!t) return null;
  if (t === "checkbox") {
    const n = document.createElement("input");
    return n.type = "checkbox", n;
  }
  return document.createElement(t);
}, applyTextContent = ({ inElement: e, inTextContent: t, inAllowsTextContent: n = !0, inTagName: o, inShowLog: r = !1 }) => {
  const l = e, s = t, c = n, u = o, T = r;
  return !l || s === void 0 || s === null ? l : c ? (l.textContent = s, l) : (T && console.warn(`[json-to-tag v3] textContent is not allowed on <${u}>; discarded "${s}"`), l);
}, applyProperties = ({ inElement: e, inProperties: t }) => {
  const n = e, o = t;
  return n && o && typeof o == "object" && Object.assign(n, o), n;
}, applyAttributes = ({ inElement: e, inAttributes: t }) => {
  const n = e, o = t;
  return !n || !o || typeof o != "object" || Object.entries(o).forEach(([r, l]) => {
    r === "class" ? n.className = l : typeof l == "boolean" ? l ? n.setAttribute(r, "") : n.removeAttribute(r) : l != null && n.setAttribute(r, String(l));
  }), n;
}, applyClassList = ({ inElement: e, inClassList: t }) => {
  const n = e, o = t;
  if (!n || !o) return n;
  let r = [];
  return typeof o == "string" ? r = o.split(/\s+/).filter(Boolean) : Array.isArray(o) && (r = o.filter((l) => typeof l == "string" && l.trim().length > 0)), r.length > 0 && n.classList.add(...r), n;
}, appendChildren = ({ inElement: e, inChildren: t, inAllowsChildren: n = !0, inTagName: o, inShowLog: r = !1 }) => {
  const l = e, s = t, c = n, u = o, T = r;
  return !l || !Array.isArray(s) || s.length === 0 ? l : c ? (s.forEach((d) => {
    typeof Node < "u" && d instanceof Node ? l.appendChild(d) : (typeof d == "string" || typeof d == "number") && l.appendChild(document.createTextNode(String(d)));
  }), l) : (T && console.warn(`[json-to-tag v3] Children are not allowed on void tag <${u}>; discarded ${s.length} child nodes.`), l);
}, domElementBuilder = ({ inSpec: e, inClassList: t }) => {
  const n = e, o = t || (n == null ? void 0 : n.classList);
  if (!n || !n.tagName) return null;
  const r = createElement({ inTagName: n.tagName });
  return r ? (applyTextContent({
    inElement: r,
    inTextContent: n.textContent,
    inTagName: n.tagName
  }), applyProperties({
    inElement: r,
    inProperties: n.properties
  }), applyAttributes({
    inElement: r,
    inAttributes: n.attributes
  }), applyClassList({
    inElement: r,
    inClassList: o
  }), appendChildren({
    inElement: r,
    inChildren: n.children,
    inTagName: n.tagName
  }), r) : null;
}, buildChildrenNodes = ({ inChildren: e, inShowLog: t = !1 }) => {
  const n = e, o = t;
  return Array.isArray(n) ? n.map((l) => dispatchSpec({
    inSpec: l,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, buildSingleElement = ({ inSpec: e, inShowLog: t = !1 }) => {
  const n = e, o = t, r = domElementBuilder({ inSpec: n });
  let l = [];
  return "children" in n && (l = Array.isArray(n.children) && n.children.length > 0 ? buildChildrenNodes({
    inChildren: n.children,
    inShowLog: o
  }) : [], r.append(...l)), r;
}, dispatchSpec = ({ inSpec: e, inShowLog: t = !1 } = {}) => {
  const n = e, o = t;
  return isNullOrUndefined({ inSpec: n }) ? null : isDomNode({ inSpec: n }) ? n : isSpecArray({ inSpec: n }) ? buildSpecArray({
    inSpec: n,
    inShowLog: o
  }) : buildSingleElement({
    inSpec: n,
    inShowLog: o
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
}, extractTags = ({ inSpec: e }) => {
  const t = e;
  if (!t) return [];
  if (Array.isArray(t))
    return t.flatMap((o) => extractTags({ inSpec: o }));
  if (typeof t != "object") return [];
  const n = [];
  return typeof t.tagName == "string" && t.tagName.trim().length > 0 && n.push(t.tagName.toLowerCase()), Array.isArray(t.children) && t.children.length > 0 && t.children.forEach((o) => {
    const r = extractTags({ inSpec: o });
    n.push(...r);
  }), n;
}, checkTags = ({ inTagsFound: e, inAllowedTags: t }) => {
  const n = e ?? [], o = t ?? {}, r = new Set(
    Object.keys(o).filter((d) => d !== "$schema").map((d) => d.toLowerCase())
  ), l = {}, s = [], c = [];
  n.forEach((d) => {
    l[d] = (l[d] || 0) + 1, r.has(d) ? s.includes(d) || s.push(d) : c.includes(d) || c.push(d);
  });
  const u = n.length, T = c.length === 0;
  return {
    totalTags: u,
    tagCounts: l,
    uniqueTags: Object.keys(l),
    recognizedTags: s,
    unrecognizedTags: c,
    areAllTagsPresent: T
  };
}, reviewSpec = ({ inSpec: e, inTags: t = defaultTags } = {}) => {
  const n = e, o = t, r = extractTags({ inSpec: n }), l = checkTags({
    inTagsFound: r,
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
}, buildSpecElement = (e = {}) => {
  try {
    const t = e, n = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
    return dispatchSpec({
      inSpec: n
    });
  } catch (t) {
    throw console.error("error : ", t), t;
  }
};
registerGlobal({
  inFuncDefinition: buildSpecElement,
  inReviewSpec: reviewSpec
});
const IDENTIFIERS = {
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
}, resolvePath = (e, t) => {
  if (e === "")
    return t;
  const o = e.replace(/\[(\w+)\]/g, ". $1".replace(" ", "")).replace(/^\./, "").split(".");
  for (let r = 0; r < o.length; ) {
    if (Array.isArray(t)) {
      const c = o.slice(r).join(".");
      return t.map((u) => resolvePath(c, u));
    }
    if (typeof t != "object" || t === null)
      return VALUES.DEFAULT;
    let l, s = 0;
    for (let c = o.length; c > r; c -= 1) {
      const u = o.slice(r, c).join(".");
      if (Object.prototype.hasOwnProperty.call(t, u)) {
        l = u, s = c - r;
        break;
      }
    }
    if (l === void 0)
      return VALUES.DEFAULT;
    t = t[l], r += s;
  }
  return t;
}, isNonEmptyArray = (e) => e && Array.isArray(e) && e.length > 0, isNumber = (e) => !isNaN(e), operators = ["+", "-", "*", "/", "%"], convertToString = (e) => e ? String(e) : "", convertToNumber = (e) => e ? Number(e) : 0, convertToUpperCase = (e) => e ? e.toUpperCase() : "", convertToDate = (e) => {
  if (!e) return e;
  try {
    return new Date(e).getTime();
  } catch {
    return e;
  }
}, deleteKey = () => {
}, deleteIfNotPresent = (e) => typeof e > "u" ? void 0 : e, typeToFn = {
  STRING: convertToString,
  NUMBER: convertToNumber,
  DATE: convertToDate,
  UPPER: convertToUpperCase
}, extractSpecial = (e) => {
  const t = e.indexOf(IDENTIFIERS.TYPE_START) > -1 ? IDENTIFIERS.TYPE_START : e.indexOf(IDENTIFIERS.ACTION_START) > -1 ? IDENTIFIERS.ACTION_START : null;
  if (!t) return null;
  const n = t === IDENTIFIERS.TYPE_START ? IDENTIFIERS.TYPE_END : IDENTIFIERS.ACTION_END;
  return {
    kind: t,
    type: e.substring(e.indexOf(t) + 1, e.lastIndexOf(n)),
    path: e.substring(0, e.indexOf(t))
  };
}, evaluateExpression = (value, key, source, config) => {
  const resolvedKey = resolvePath(key, source);
  if (!config[resolvedKey]) return resolvedKey;
  const { operator, value: expressionValue } = config[resolvedKey];
  return !operators.includes(operator) || !isNumber(expressionValue) ? resolvedKey : eval(`${value}${operator}${expressionValue}`);
}, createActionMap = ({ convertValue: e }) => ({
  APPEND: (t, n, o, r) => {
    const l = r == null ? void 0 : r.appendMap;
    if (!l || typeof l[n] > "u") return t;
    const { path: s, separator: c } = l[n];
    return t + (c || "") + e(s, o);
  },
  DELETE: deleteKey,
  DELETE_IF_NOT_PRESENT: deleteIfNotPresent,
  DEPENDS: (t, n, o, r) => {
    if (typeof n > "u") return r.dependentMap[t];
    const l = extractSpecial(n);
    return l && actionMap[l.type] ? actionMap[l.type](t, l.path, o, r) : n;
  },
  EVAL: evaluateExpression
});
let actionMap = {};
const convertType = (e, t) => typeToFn[e] ? typeToFn[e](t) : t, performAction = (e, t, n, o, r, l) => {
  actionMap = createActionMap({ convertValue: l });
  const s = extractSpecial(e);
  return s && actionMap[s.type] ? actionMap[s.type](t, s.path, o, r) : actionMap[e] ? actionMap[e](t, void 0, o, r) : t;
}, resolveValue = (e, t, n, o) => {
  if (e.startsWith(IDENTIFIERS.HARD_CODED))
    return e.substring(1);
  if (e.startsWith(IDENTIFIERS.PARENT))
    return resolvePath(e.substring(1), n);
  const r = extractSpecial(e);
  if (!r)
    return resolvePath(e, t);
  const l = resolvePath(r.path, t);
  return typeof l > "u" ? VALUES.DEFAULT : r.kind === IDENTIFIERS.TYPE_START ? convertType(r.type, l) : performAction(
    r.type,
    l,
    r.path,
    t,
    o,
    (s, c) => resolveValue(s, c, n, o)
  );
}, startFunc$a = (e, t, n) => {
  const o = {};
  return Object.keys(e).forEach((r) => {
    const l = e[r];
    if (typeof l == "string") {
      o[r] = resolveValue(
        l,
        t,
        n.rootSource,
        n.configuration
      );
      return;
    }
    if (Array.isArray(l) && l.length > 0) {
      o[r] = startFunc$3(l[0], t, n);
      return;
    }
    l && typeof l == "object" && (o[r] = traverse(l, t, n));
  }), o;
}, startFunc$9 = (e, t, n) => {
  const o = [];
  return e.forEach((r) => {
    if (typeof r == "string") {
      const l = resolveValue(
        r,
        t,
        n.rootSource,
        n.configuration
      );
      isNonEmptyArray(l) ? o.push(...l) : o.push(l);
      return;
    }
    if (Array.isArray(r)) {
      o.push(
        ...startFunc$9(
          r[0],
          t,
          n
        )
      );
      return;
    }
    r && typeof r == "object" && o.push(
      startFunc$a(
        r,
        t,
        n
      )
    );
  }), o;
}, startFunc$8 = (e, t, n) => [
  startFunc$a(
    t,
    e,
    n
  )
], startFunc$7 = (e, t, n) => e.map((o) => startFunc$a(
  t,
  o,
  n
));
function isPlainObject(e) {
  return e !== null && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
const startFunc$6 = (e, t, n) => Array.isArray(e) ? startFunc$7(
  e,
  t,
  n
) : isPlainObject(e) ? startFunc$8(
  e,
  t,
  n
) : [], isArrayIndexMapping = (e) => {
  const t = e.list;
  return t.startsWith(IDENTIFIERS.ARRAY_INDEX) && t.includes(IDENTIFIERS.ARRAY_START) && t.includes(IDENTIFIERS.ARRAY_END);
}, getItemMapping$1 = (e) => Array.isArray(e.item) ? e.item[0] : e.item, resolveListSource = (e, t) => resolvePath(
  e.list,
  t
), startFunc$5 = (e, t, n) => {
  const o = getItemMapping$1(e);
  if (isArrayIndexMapping(e))
    return [
      startFunc$a(
        o,
        t,
        n
      )
    ];
  const r = resolveListSource(
    e,
    t
  );
  return startFunc$6(
    r,
    o,
    n
  );
}, getItemMapping = (e) => Array.isArray(e.item) ? e.item[0] : e.item, resolveObjectifySource = (e, t) => resolvePath(
  e.objectify,
  t
), startFunc$4 = (e, t, n) => {
  const o = resolveObjectifySource(
    e,
    t
  );
  return startFunc$8(
    o,
    getItemMapping(e),
    n
  );
}, startFunc$3 = (e, t, n) => typeof e.collect < "u" ? startFunc$9(
  e.item,
  t,
  n
) : typeof e.list < "u" ? startFunc$5(
  e,
  t,
  n
) : typeof e.objectify < "u" ? startFunc$4(
  e,
  t,
  n
) : [], startFunc$2 = (e, t) => {
  if (!e.includes(IDENTIFIERS.ARRAY_INDEX)) return {};
  const n = e.lastIndexOf(IDENTIFIERS.ARRAY_INDEX) + 4, o = e.lastIndexOf(IDENTIFIERS.ARRAY_END), r = e.substring(n, o), l = e.substring(0, e.lastIndexOf(IDENTIFIERS.ARRAY_INDEX)), s = l ? resolvePath(l, t) : t;
  return s == null ? void 0 : s[r];
}, traverse = (e, t, n) => {
  if (typeof e.list < "u" || typeof e.objectify < "u" || typeof e.collect < "u")
    return startFunc$3(e, t, n);
  if (typeof e.flat < "u") {
    const o = startFunc$2(e.flat, t);
    return startFunc$a(e.item, o, n);
  }
  return typeof e.item < "u" ? startFunc$a(e.item, t, n) : startFunc$a(e, t, n);
}, transform = (e, t) => {
  let n = e, o = t;
  e !== null && typeof e == "object" && "inData" in e && t === void 0 && (n = e.inData, o = e.inTransformation);
  const { mapping: r, config: l = {} } = o;
  return traverse(r, n, {
    rootSource: n,
    configuration: l
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
}, startFunc$1 = ({ targetHtmlId: e, inData: t, inSkeletonType: n = "default" } = {}) => {
  const o = skeletonJson$1[n], r = transformHelper.transform(t, o), l = document.getElementById(e);
  l && (l.innerHTML = "");
  const s = buildSpecElement(r);
  Array.isArray(s) ? s.forEach((c) => l.append(c)) : l.append(s);
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
  targetHtmlId: e,
  inData: t,
  inSkeletonType: n = "default",
  inClassToApply: o
} = {}) => {
  console.log("aaaaaaaaaa");
  const r = skeletonJson[n];
  r.mapping.attributes.class = `$${o}`;
  debugger;
  const l = transformHelper.transform(t, r), s = document.getElementById(e);
  s && (s.innerHTML = "");
  const c = buildSpecElement(l);
  Array.isArray(c) ? c.forEach((u) => s.append(u)) : s.append(c);
}, RENDERER_MAP = {
  datalist: startFunc$1,
  select: startFunc
}, render = ({
  type: e = "table",
  targetHtmlId: t,
  data: n,
  classToApply: o,
  inTargetHtmlId: r,
  inData: l,
  columns: s,
  inColumns: c,
  fields: u,
  inFields: T,
  tabs: d,
  inTabs: S,
  options: _,
  inOptions: M,
  datalistId: k,
  inDatalistId: Y,
  listId: U,
  inListId: H,
  id: z,
  valueField: B,
  inValueField: V,
  labelField: q,
  inLabelField: J,
  colGroup: C,
  inColGroup: N,
  footerData: I,
  inFooterData: R,
  config: F,
  inConfig: D,
  variant: x,
  skeletonType: $,
  inSkeletonType: v,
  showLog: L = !1,
  inShowLog: j,
  ...f
} = {}) => {
  const E = e, h = typeof E == "string" ? E.toLowerCase() : "table", g = RENDERER_MAP[h];
  if (!g)
    return console.error(
      `[Renderer] Unknown renderer type "${E}". Available types: ${Object.keys(RENDERER_MAP).join(", ")}`
    ), null;
  const b = r ?? t, w = l ?? n, m = c ?? s, O = T ?? u, P = S ?? d, A = v ?? $ ?? x ?? "default", y = j ?? L ?? !1;
  return g(h === "form" ? {
    targetHtmlId: b,
    inFields: O,
    inData: w,
    inColumns: m,
    inVariant: A,
    inSkeletonType: A,
    inShowLog: y,
    onSave: f == null ? void 0 : f.onSave,
    afterSave: f == null ? void 0 : f.afterSave,
    onNew: f == null ? void 0 : f.onNew
  } : h === "navtabs" || h === "nav" || h === "tabs" ? {
    targetHtmlId: b,
    inTabs: P,
    inData: w,
    inSkeletonType: A,
    inShowLog: y
  } : h === "datalist" || h === "data-list" ? {
    targetHtmlId: b,
    inData: w,
    inSkeletonType: A,
    inShowLog: y
  } : h === "select" ? {
    targetHtmlId: b,
    inData: w,
    inSkeletonType: A,
    inShowLog: y,
    inClassToApply: o
  } : {
    targetHtmlId: b,
    inColumns: m,
    inData: w,
    inColGroup: N ?? C,
    inFooterData: R ?? I ?? [],
    inConfig: D ?? F ?? {},
    inSkeletonType: A,
    inShowLog: y
  });
};
registerGlobal$1(render);
export {
  render as default
};
