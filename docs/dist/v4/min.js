const D = {
  version: "v24.0",
  description: "Pure spec engine no document at all"
}, _ = (n) => {
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks["json-to-spec"] = {
    meta: D,
    buildSpecElement: n
  }, globalThis.ks.jsonToSpec = {
    meta: D,
    buildSpecElement: n
  });
}, K = ({ inSpec: n }) => {
  const t = n;
  return t == null;
}, W = ({ inSpec: n }) => typeof Node < "u" && n instanceof Node, $ = ({ inSpecJson: n }) => {
  const t = n;
  return Array.isArray(t);
}, Q = ({ inArray: n = [], inShowLog: t = !1, inDataJson: e }) => {
  const o = n, a = t, l = e;
  return Array.isArray(o) ? o.map((s) => w({
    inSpecJson: s,
    inShowLog: a,
    inDataJson: l
  })).flat().filter(Boolean) : [];
}, T = ({ inTemplate: n, inData: t, inRowIndex: e }) => {
  if (Number.isFinite(e)) {
    debugger;
    console.log("vvvvvvvvvvvvvv : ", e);
    let o = X({ inTemplate: n, inRowIndex: e });
    return E({ inTemplate: o, inData: t });
  } else
    return E({ inTemplate: n, inData: t });
}, E = ({ inTemplate: n, inData: t }) => {
  const e = n, o = t;
  return typeof e != "string" ? e : e.replace(/\$\{([^}]+)\}/g, (a, l) => {
    const s = l.trim().split(".");
    let r = o;
    for (const c of s) {
      if (r == null) return "";
      r = r[c];
    }
    return r == null ? "" : typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? String(r ?? "") : r;
  });
}, X = ({ inTemplate: n, inRowIndex: t }) => {
  const e = n, o = t;
  return e.replace(/\#\{([^}]+)\}/g, (a, l) => {
    const s = l.trim().split(".");
    let r = o;
    console.log("aaaaaaa : ", t, n, s);
    for (const c of s) {
      if (r == null) return "";
      r = r[c];
    }
    return r === null || typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? String(r ?? "") : r;
  });
}, Y = ({ inSpec: n, inData: t, inShowLog: e }) => {
  const o = n, a = t, l = e;
  return "textContent" in o && (o.textContent = T({ inTemplate: o.textContent, inData: a })), "attributes" in o && typeof o.attributes == "object" && o.attributes && (o.attributes = Object.fromEntries(
    Object.entries(o.attributes).map(([s, r]) => [
      s,
      T({ inTemplate: r, inData: a })
    ])
  )), Array.isArray(o.children) && (o.children = o.children.map(
    (s) => w({
      inSpecJson: s,
      inShowLog: l,
      inDataJson: a
    })
  )), o;
}, Z = ({ inSpec: n, inData: t }) => {
  const e = n, o = t, a = o.value;
  return $({ inSpecJson: a }) ? (e.children = [{
    tagName: "button",
    attributes: {
      class: "btn btn-primary btn-sm"
    },
    textContent: a.length
  }], delete e.textContent, e) : typeof a == "object" && a !== null && a.tagName ? (e.children = [a], delete e.textContent, e) : ("textContent" in e && (e.textContent = T({ inTemplate: e.textContent, inData: o })), "attributes" in e && typeof e.attributes == "object" && e.attributes && (e.attributes = Object.fromEntries(
    Object.entries(e.attributes).map(([l, s]) => [
      l,
      T({ inTemplate: s, inData: o })
    ])
  )), e);
}, P = ({ inSpec: n, inData: t }) => {
  const e = n, o = t;
  return "textContent" in e && (e.textContent === "${}" ? e.textContent = o : typeof e.textContent == "string" && (e.textContent = e.textContent.replaceAll("${}", () => o))), "attributes" in e && typeof e.attributes == "object" && e.attributes && (e.attributes = Object.fromEntries(
    Object.entries(e.attributes).map(([a, l]) => [
      a,
      l === "${}" ? o : typeof l == "string" ? l.replaceAll("${}", () => o) : l
    ])
  )), e;
}, C = ({ inSpecJson: n, inData: t, inRowIndex: e, inShowLog: o = !1 } = {}) => {
  const a = n, l = t, s = o, r = structuredClone(a);
  return s && console.log("buildSingleElement start : ", a, l), typeof l == "string" ? P({ inSpec: r, inData: l }) : typeof l == "object" && l !== null && "key" in l && "value" in l && !("children" in r && Array.isArray(r.children) && r.children.length > 0) ? Z({ inSpec: r, inData: l }) : Y({
    inSpec: r,
    inData: l,
    inShowLog: s
  });
}, ee = ({ inTemplate: n, inDataAsArray: t }) => {
  const e = t, o = n;
  return Array.isArray(e) ? e.map((l, s) => {
    const r = structuredClone(o);
    return w({
      inSpecJson: r,
      inDataJson: l,
      inRowIndex: s
    });
  }) : [];
}, te = ({ inTemplate: n, inDataAsObject: t }) => {
  const e = t, o = n;
  if (e === null || typeof e != "object")
    return [];
  const a = [];
  for (const [l, s] of Object.entries(e)) {
    const r = structuredClone(o), c = w({
      inSpecJson: r,
      inDataJson: {
        key: l,
        value: s
      }
    });
    a.push(c);
  }
  return a;
}, ne = ({
  inSpecJson: n,
  inShowLog: t = !1,
  inDataJson: e,
  inRowIndex: o
} = {}) => {
  if (Number.isFinite(o) && ("attributes" in n ? n.attributes.rowIndex = o : n.attributes = {
    rowIndex: o
  }), !["loopArray", "loopObject"].includes(n.jsonToSpec.operation)) {
    console.log(`inSpecJson.jsonToSpec.operation : can be loopArray or loopObject : ${n.jsonToSpec.operation}`);
    return;
  }
  if (n.jsonToSpec.operation === "loopArray") {
    const a = ee({
      inTemplate: n.jsonToSpec.template,
      inDataAsArray: e[n.jsonToSpec.source]
    }), {
      jsonToSpec: l,
      ...s
    } = n, r = {
      ...s,
      children: a
    };
    return C({
      inSpecJson: r,
      inShowLog: t,
      inData: e
    });
  }
  if (n.jsonToSpec.operation === "loopObject") {
    const a = te({
      inTemplate: n.jsonToSpec.template,
      inDataAsObject: e
    }), {
      jsonToSpec: l,
      ...s
    } = n, r = {
      ...s,
      children: a
    };
    return C({
      inSpecJson: r,
      inShowLog: t,
      inData: e
    });
  }
}, w = ({
  inSpecJson: n,
  inShowLog: t = !0,
  inDataJson: e,
  inRowIndex: o
} = {}) => K({ inSpec: n }) ? null : W({ inSpec: n }) ? n : (t && console.log("dispatchSpec 3 : ", n, e), $({ inSpecJson: n }) ? Q({
  inArray: n,
  inShowLog: t,
  inDataJson: e
}) : "jsonToSpec" in n ? ne({
  inSpecJson: n,
  inShowLog: t,
  inDataJson: e,
  inRowIndex: o
}) : C({
  inSpecJson: n,
  inShowLog: t,
  inRowIndex: o,
  inData: e
})), A = ({
  specJson: n,
  showLog: t = !1,
  dataJson: e
}) => {
  try {
    return t && console.log("jsonToSpec 1 : ", n), w({
      inSpecJson: n,
      inShowLog: t,
      inDataJson: e
    });
  } catch (o) {
    console.log("error : ", o);
  }
};
_(A);
const L = {
  version: "v3.0",
  description: "Pure DOM engine with JSON review and tags.json catalog verification"
}, oe = (n) => {
  const t = n, e = typeof t == "function" ? t : t == null ? void 0 : t.inFuncDefinition, o = t == null ? void 0 : t.inReviewSpec;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks["json-to-tag"] = {
    meta: L,
    buildSpecElement: e,
    reviewSpec: o
  }, globalThis.ks.jsonToTag = {
    meta: L,
    buildSpecElement: e,
    reviewSpec: o
  });
}, le = ({ inSpec: n }) => {
  const t = n;
  return t == null;
}, ae = ({ inSpec: n }) => typeof Node < "u" && n instanceof Node, re = ({ inSpec: n }) => {
  const t = n;
  return Array.isArray(t);
}, se = ({ inSpec: n, inShowLog: t = !1 }) => {
  const e = n, o = t;
  return Array.isArray(e) ? e.map((a) => x({
    inSpec: a,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, ie = ({ inTagName: n }) => {
  const t = n == null ? void 0 : n.toLowerCase();
  if (!t) return null;
  if (t === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return document.createElement(t);
}, ce = ({ inElement: n, inTextContent: t, inAllowsTextContent: e = !0, inTagName: o, inShowLog: a = !1 }) => {
  const l = n, s = t, r = e, c = o, p = a;
  return !l || s === void 0 || s === null ? l : r ? (l.textContent = s, l) : (p && console.warn(`[json-to-tag v3] textContent is not allowed on <${c}>; discarded "${s}"`), l);
}, ue = ({ inElement: n, inProperties: t }) => {
  const e = n, o = t;
  return e && o && typeof o == "object" && Object.assign(e, o), e;
}, de = ({ inElement: n, inAttributes: t }) => {
  const e = n, o = t;
  return !e || !o || typeof o != "object" || Object.entries(o).forEach(([a, l]) => {
    a === "class" ? e.className = l : typeof l == "boolean" ? l ? e.setAttribute(a, "") : e.removeAttribute(a) : l != null && e.setAttribute(a, String(l));
  }), e;
}, pe = ({ inElement: n, inClassList: t }) => {
  const e = n, o = t;
  if (!e || !o) return e;
  let a = [];
  return typeof o == "string" ? a = o.split(/\s+/).filter(Boolean) : Array.isArray(o) && (a = o.filter((l) => typeof l == "string" && l.trim().length > 0)), a.length > 0 && e.classList.add(...a), e;
}, fe = ({ inElement: n, inChildren: t, inAllowsChildren: e = !0, inTagName: o, inShowLog: a = !1 }) => {
  const l = n, s = t, r = e, c = o, p = a;
  return !l || !Array.isArray(s) || s.length === 0 ? l : r ? (s.forEach((i) => {
    typeof Node < "u" && i instanceof Node ? l.appendChild(i) : (typeof i == "string" || typeof i == "number") && l.appendChild(document.createTextNode(String(i)));
  }), l) : (p && console.warn(`[json-to-tag v3] Children are not allowed on void tag <${c}>; discarded ${s.length} child nodes.`), l);
}, he = ({ inSpec: n, inClassList: t }) => {
  const e = n, o = t || (e == null ? void 0 : e.classList);
  if (!e || !e.tagName) return null;
  const a = ie({ inTagName: e.tagName });
  return a ? (ce({
    inElement: a,
    inTextContent: e.textContent,
    inTagName: e.tagName
  }), ue({
    inElement: a,
    inProperties: e.properties
  }), de({
    inElement: a,
    inAttributes: e.attributes
  }), pe({
    inElement: a,
    inClassList: o
  }), fe({
    inElement: a,
    inChildren: e.children,
    inTagName: e.tagName
  }), a) : null;
}, ge = ({ inChildren: n, inShowLog: t = !1 }) => {
  const e = n, o = t;
  return Array.isArray(e) ? e.map((l) => x({
    inSpec: l,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, be = ({ inSpec: n, inShowLog: t = !1 }) => {
  const e = n, o = t, a = he({ inSpec: e });
  let l = [];
  return "children" in e && (l = Array.isArray(e.children) && e.children.length > 0 ? ge({
    inChildren: e.children,
    inShowLog: o
  }) : [], a.append(...l)), a;
}, x = ({ inSpec: n, inShowLog: t = !1 } = {}) => {
  const e = n, o = t;
  return le({ inSpec: e }) ? null : ae({ inSpec: e }) ? e : re({ inSpec: e }) ? se({
    inSpec: e,
    inShowLog: o
  }) : be({
    inSpec: e,
    inShowLog: o
  });
}, me = "./tags.schema.json", we = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Te = {
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
}, ye = {
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
}, Ce = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Se = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Ae = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, xe = {
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
}, je = {
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
}, ve = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, De = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ee = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Le = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ne = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, $e = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, ke = {
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
}, Oe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Fe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Ie = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, He = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, Re = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Be = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, ze = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, qe = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Me = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Ve = {
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
}, Ge = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Je = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ue = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, _e = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Ke = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, We = {
  $schema: me,
  div: we,
  input: Te,
  checkbox: ye,
  colgroup: Ce,
  col: Se,
  label: Ae,
  form: xe,
  select: je,
  p: ve,
  h1: De,
  h2: Ee,
  span: Le,
  img: Ne,
  button: $e,
  table: ke,
  thead: Oe,
  tbody: Fe,
  tfoot: Ie,
  tr: He,
  th: Re,
  td: Be,
  datalist: ze,
  option: qe,
  header: Me,
  a: Ve,
  i: Ge,
  small: Je,
  ul: Ue,
  li: _e,
  hr: Ke
}, S = ({ inSpec: n }) => {
  const t = n;
  if (!t) return [];
  if (Array.isArray(t))
    return t.flatMap((o) => S({ inSpec: o }));
  if (typeof t != "object") return [];
  const e = [];
  return typeof t.tagName == "string" && t.tagName.trim().length > 0 && e.push(t.tagName.toLowerCase()), Array.isArray(t.children) && t.children.length > 0 && t.children.forEach((o) => {
    const a = S({ inSpec: o });
    e.push(...a);
  }), e;
}, Qe = ({ inTagsFound: n, inAllowedTags: t }) => {
  const e = n ?? [], o = t ?? {}, a = new Set(
    Object.keys(o).filter((i) => i !== "$schema").map((i) => i.toLowerCase())
  ), l = {}, s = [], r = [];
  e.forEach((i) => {
    l[i] = (l[i] || 0) + 1, a.has(i) ? s.includes(i) || s.push(i) : r.includes(i) || r.push(i);
  });
  const c = e.length, p = r.length === 0;
  return {
    totalTags: c,
    tagCounts: l,
    uniqueTags: Object.keys(l),
    recognizedTags: s,
    unrecognizedTags: r,
    areAllTagsPresent: p
  };
}, Xe = ({ inSpec: n, inTags: t = We } = {}) => {
  const e = n, o = t, a = S({ inSpec: e }), l = Qe({
    inTagsFound: a,
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
}, j = (n = {}) => {
  try {
    const t = n, e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
    return x({
      inSpec: e
    });
  } catch (t) {
    throw console.error("error : ", t), t;
  }
};
oe({
  inFuncDefinition: j,
  inReviewSpec: Xe
});
const Ye = {
  default: {
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
  }
}, Ze = ({ targetHtmlId: n, inData: t, inSkeletonType: e = "default" } = {}) => {
  const o = A({
    specJson: Ye[e],
    dataJson: t
  }), a = document.getElementById(n);
  a && (a.innerHTML = "");
  const l = j(o);
  Array.isArray(l) ? l.forEach((s) => a.append(s)) : a.append(l);
}, Pe = {
  default: {
    tagName: "select",
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
  }
}, et = ({ targetHtmlId: n, inData: t, inSkeletonType: e = "default" } = {}) => {
  const o = A({
    specJson: Pe[e],
    dataJson: t
  }), a = document.getElementById(n);
  a && (a.innerHTML = "");
  const l = j(o);
  Array.isArray(l) ? l.forEach((s) => a.append(s)) : a.append(l);
}, N = {
  datalist: Ze,
  select: et
}, pt = ({
  type: n = "table",
  inType: t,
  targetHtmlId: e,
  inTargetHtmlId: o,
  data: a,
  inData: l,
  columns: s,
  inColumns: r,
  fields: c,
  inFields: p,
  tabs: i,
  inTabs: k,
  options: tt,
  inOptions: nt,
  datalistId: ot,
  inDatalistId: lt,
  listId: at,
  inListId: rt,
  id: st,
  valueField: it,
  inValueField: ct,
  labelField: ut,
  inLabelField: dt,
  colGroup: O,
  inColGroup: F,
  footerData: I,
  inFooterData: H,
  config: R,
  inConfig: B,
  variant: z,
  skeletonType: q,
  inSkeletonType: M,
  showLog: V = !1,
  inShowLog: G,
  ...u
} = {}) => {
  const y = t ?? n, d = typeof y == "string" ? y.toLowerCase() : "table", f = N[d];
  if (!f)
    return console.error(
      `[Renderer] Unknown renderer type "${y}". Available types: ${Object.keys(N).join(", ")}`
    ), null;
  const g = o ?? e, b = l ?? a, v = r ?? s, J = p ?? c, U = k ?? i, h = M ?? q ?? z ?? "default", m = G ?? V ?? !1;
  return f(d === "form" ? {
    targetHtmlId: g,
    inFields: J,
    inData: b,
    inColumns: v,
    inVariant: h,
    inSkeletonType: h,
    inShowLog: m,
    onSave: u == null ? void 0 : u.onSave,
    afterSave: u == null ? void 0 : u.afterSave,
    onNew: u == null ? void 0 : u.onNew
  } : d === "navtabs" || d === "nav" || d === "tabs" ? {
    targetHtmlId: g,
    inTabs: U,
    inData: b,
    inSkeletonType: h,
    inShowLog: m
  } : d === "datalist" || d === "data-list" ? {
    targetHtmlId: g,
    inData: b,
    inSkeletonType: h,
    inShowLog: m
  } : d === "select" ? {
    targetHtmlId: g,
    inData: b,
    inSkeletonType: h,
    inShowLog: m
  } : {
    targetHtmlId: g,
    inColumns: v,
    inData: b,
    inColGroup: F ?? O,
    inFooterData: H ?? I ?? [],
    inConfig: B ?? R ?? {},
    inSkeletonType: h,
    inShowLog: m
  });
};
export {
  pt as default
};
