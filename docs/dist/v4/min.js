const _ = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, K = (n) => {
  var t;
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), (t = globalThis.ks).jsonRenderers ?? (t.jsonRenderers = {
    meta: _,
    renderToDom: n
  }));
}, D = {
  version: "v24.0",
  description: "Pure spec engine no document at all"
}, W = (n) => {
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks["json-to-spec"] = {
    meta: D,
    buildSpecElement: n
  }, globalThis.ks.jsonToSpec = {
    meta: D,
    buildSpecElement: n
  });
}, Q = ({ inSpec: n }) => {
  const t = n;
  return t == null;
}, X = ({ inSpec: n }) => typeof Node < "u" && n instanceof Node, N = ({ inSpecJson: n }) => {
  const t = n;
  return Array.isArray(t);
}, Y = ({ inArray: n = [], inShowLog: t = !1, inDataJson: e }) => {
  const o = n, a = t, l = e;
  return Array.isArray(o) ? o.map((s) => T({
    inSpecJson: s,
    inShowLog: a,
    inDataJson: l
  })).flat().filter(Boolean) : [];
}, w = ({ inTemplate: n, inData: t, inRowIndex: e }) => {
  if (Number.isFinite(e)) {
    debugger;
    console.log("vvvvvvvvvvvvvv : ", e);
    let o = Z({ inTemplate: n, inRowIndex: e });
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
}, Z = ({ inTemplate: n, inRowIndex: t }) => {
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
}, P = ({ inSpec: n, inData: t, inShowLog: e }) => {
  const o = n, a = t, l = e;
  return "textContent" in o && (o.textContent = w({ inTemplate: o.textContent, inData: a })), "attributes" in o && typeof o.attributes == "object" && o.attributes && (o.attributes = Object.fromEntries(
    Object.entries(o.attributes).map(([s, r]) => [
      s,
      w({ inTemplate: r, inData: a })
    ])
  )), Array.isArray(o.children) && (o.children = o.children.map(
    (s) => T({
      inSpecJson: s,
      inShowLog: l,
      inDataJson: a
    })
  )), o;
}, ee = ({ inSpec: n, inData: t }) => {
  const e = n, o = t, a = o.value;
  return N({ inSpecJson: a }) ? (e.children = [{
    tagName: "button",
    attributes: {
      class: "btn btn-primary btn-sm"
    },
    textContent: a.length
  }], delete e.textContent, e) : typeof a == "object" && a !== null && a.tagName ? (e.children = [a], delete e.textContent, e) : ("textContent" in e && (e.textContent = w({ inTemplate: e.textContent, inData: o })), "attributes" in e && typeof e.attributes == "object" && e.attributes && (e.attributes = Object.fromEntries(
    Object.entries(e.attributes).map(([l, s]) => [
      l,
      w({ inTemplate: s, inData: o })
    ])
  )), e);
}, te = ({ inSpec: n, inData: t }) => {
  const e = n, o = t;
  return "textContent" in e && (e.textContent === "${}" ? e.textContent = o : typeof e.textContent == "string" && (e.textContent = e.textContent.replaceAll("${}", () => o))), "attributes" in e && typeof e.attributes == "object" && e.attributes && (e.attributes = Object.fromEntries(
    Object.entries(e.attributes).map(([a, l]) => [
      a,
      l === "${}" ? o : typeof l == "string" ? l.replaceAll("${}", () => o) : l
    ])
  )), e;
}, C = ({ inSpecJson: n, inData: t, inRowIndex: e, inShowLog: o = !1 } = {}) => {
  const a = n, l = t, s = o, r = structuredClone(a);
  return s && console.log("buildSingleElement start : ", a, l), typeof l == "string" ? te({ inSpec: r, inData: l }) : typeof l == "object" && l !== null && "key" in l && "value" in l && !("children" in r && Array.isArray(r.children) && r.children.length > 0) ? ee({ inSpec: r, inData: l }) : P({
    inSpec: r,
    inData: l,
    inShowLog: s
  });
}, ne = ({ inTemplate: n, inDataAsArray: t }) => {
  const e = t, o = n;
  return Array.isArray(e) ? e.map((l, s) => {
    const r = structuredClone(o);
    return T({
      inSpecJson: r,
      inDataJson: l,
      inRowIndex: s
    });
  }) : [];
}, oe = ({ inTemplate: n, inDataAsObject: t }) => {
  const e = t, o = n;
  if (e === null || typeof e != "object")
    return [];
  const a = [];
  for (const [l, s] of Object.entries(e)) {
    const r = structuredClone(o), c = T({
      inSpecJson: r,
      inDataJson: {
        key: l,
        value: s
      }
    });
    a.push(c);
  }
  return a;
}, le = ({
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
    const a = ne({
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
    const a = oe({
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
}, T = ({
  inSpecJson: n,
  inShowLog: t = !0,
  inDataJson: e,
  inRowIndex: o
} = {}) => Q({ inSpec: n }) ? null : X({ inSpec: n }) ? n : (t && console.log("dispatchSpec 3 : ", n, e), N({ inSpecJson: n }) ? Y({
  inArray: n,
  inShowLog: t,
  inDataJson: e
}) : "jsonToSpec" in n ? le({
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
    return t && console.log("jsonToSpec 1 : ", n), T({
      inSpecJson: n,
      inShowLog: t,
      inDataJson: e
    });
  } catch (o) {
    console.log("error : ", o);
  }
};
W(A);
const L = {
  version: "v3.0",
  description: "Pure DOM engine with JSON review and tags.json catalog verification"
}, ae = (n) => {
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
}, re = ({ inSpec: n }) => {
  const t = n;
  return t == null;
}, se = ({ inSpec: n }) => typeof Node < "u" && n instanceof Node, ie = ({ inSpec: n }) => {
  const t = n;
  return Array.isArray(t);
}, ce = ({ inSpec: n, inShowLog: t = !1 }) => {
  const e = n, o = t;
  return Array.isArray(e) ? e.map((a) => x({
    inSpec: a,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, ue = ({ inTagName: n }) => {
  const t = n == null ? void 0 : n.toLowerCase();
  if (!t) return null;
  if (t === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return document.createElement(t);
}, de = ({ inElement: n, inTextContent: t, inAllowsTextContent: e = !0, inTagName: o, inShowLog: a = !1 }) => {
  const l = n, s = t, r = e, c = o, p = a;
  return !l || s === void 0 || s === null ? l : r ? (l.textContent = s, l) : (p && console.warn(`[json-to-tag v3] textContent is not allowed on <${c}>; discarded "${s}"`), l);
}, pe = ({ inElement: n, inProperties: t }) => {
  const e = n, o = t;
  return e && o && typeof o == "object" && Object.assign(e, o), e;
}, fe = ({ inElement: n, inAttributes: t }) => {
  const e = n, o = t;
  return !e || !o || typeof o != "object" || Object.entries(o).forEach(([a, l]) => {
    a === "class" ? e.className = l : typeof l == "boolean" ? l ? e.setAttribute(a, "") : e.removeAttribute(a) : l != null && e.setAttribute(a, String(l));
  }), e;
}, he = ({ inElement: n, inClassList: t }) => {
  const e = n, o = t;
  if (!e || !o) return e;
  let a = [];
  return typeof o == "string" ? a = o.split(/\s+/).filter(Boolean) : Array.isArray(o) && (a = o.filter((l) => typeof l == "string" && l.trim().length > 0)), a.length > 0 && e.classList.add(...a), e;
}, ge = ({ inElement: n, inChildren: t, inAllowsChildren: e = !0, inTagName: o, inShowLog: a = !1 }) => {
  const l = n, s = t, r = e, c = o, p = a;
  return !l || !Array.isArray(s) || s.length === 0 ? l : r ? (s.forEach((i) => {
    typeof Node < "u" && i instanceof Node ? l.appendChild(i) : (typeof i == "string" || typeof i == "number") && l.appendChild(document.createTextNode(String(i)));
  }), l) : (p && console.warn(`[json-to-tag v3] Children are not allowed on void tag <${c}>; discarded ${s.length} child nodes.`), l);
}, be = ({ inSpec: n, inClassList: t }) => {
  const e = n, o = t || (e == null ? void 0 : e.classList);
  if (!e || !e.tagName) return null;
  const a = ue({ inTagName: e.tagName });
  return a ? (de({
    inElement: a,
    inTextContent: e.textContent,
    inTagName: e.tagName
  }), pe({
    inElement: a,
    inProperties: e.properties
  }), fe({
    inElement: a,
    inAttributes: e.attributes
  }), he({
    inElement: a,
    inClassList: o
  }), ge({
    inElement: a,
    inChildren: e.children,
    inTagName: e.tagName
  }), a) : null;
}, me = ({ inChildren: n, inShowLog: t = !1 }) => {
  const e = n, o = t;
  return Array.isArray(e) ? e.map((l) => x({
    inSpec: l,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, Te = ({ inSpec: n, inShowLog: t = !1 }) => {
  const e = n, o = t, a = be({ inSpec: e });
  let l = [];
  return "children" in e && (l = Array.isArray(e.children) && e.children.length > 0 ? me({
    inChildren: e.children,
    inShowLog: o
  }) : [], a.append(...l)), a;
}, x = ({ inSpec: n, inShowLog: t = !1 } = {}) => {
  const e = n, o = t;
  return re({ inSpec: e }) ? null : se({ inSpec: e }) ? e : ie({ inSpec: e }) ? ce({
    inSpec: e,
    inShowLog: o
  }) : Te({
    inSpec: e,
    inShowLog: o
  });
}, we = "./tags.schema.json", ye = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Ce = {
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
}, Se = {
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
}, Ae = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, xe = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, je = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, ve = {
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
}, De = {
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
}, $e = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ne = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ke = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Oe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Fe = {
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
    "tr"
  ]
}, Re = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Be = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, ze = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, qe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Me = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Ve = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Ge = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Je = {
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
}, Ue = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, _e = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ke = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, We = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Qe = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Xe = {
  $schema: we,
  div: ye,
  input: Ce,
  checkbox: Se,
  colgroup: Ae,
  col: xe,
  label: je,
  form: ve,
  select: De,
  p: Ee,
  h1: Le,
  h2: $e,
  span: Ne,
  img: ke,
  button: Oe,
  table: Fe,
  thead: Ie,
  tbody: He,
  tfoot: Re,
  tr: Be,
  th: ze,
  td: qe,
  datalist: Me,
  option: Ve,
  header: Ge,
  a: Je,
  i: Ue,
  small: _e,
  ul: Ke,
  li: We,
  hr: Qe
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
}, Ye = ({ inTagsFound: n, inAllowedTags: t }) => {
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
}, Ze = ({ inSpec: n, inTags: t = Xe } = {}) => {
  const e = n, o = t, a = S({ inSpec: e }), l = Ye({
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
ae({
  inFuncDefinition: j,
  inReviewSpec: Ze
});
const Pe = {
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
}, et = ({ targetHtmlId: n, inData: t, inSkeletonType: e = "default" } = {}) => {
  const o = A({
    specJson: Pe[e],
    dataJson: t
  }), a = document.getElementById(n);
  a && (a.innerHTML = "");
  const l = j(o);
  Array.isArray(l) ? l.forEach((s) => a.append(s)) : a.append(l);
}, tt = {
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
}, nt = ({ targetHtmlId: n, inData: t, inSkeletonType: e = "default" } = {}) => {
  const o = A({
    specJson: tt[e],
    dataJson: t
  }), a = document.getElementById(n);
  a && (a.innerHTML = "");
  const l = j(o);
  Array.isArray(l) ? l.forEach((s) => a.append(s)) : a.append(l);
}, $ = {
  datalist: et,
  select: nt
}, ot = ({
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
  options: lt,
  inOptions: at,
  datalistId: rt,
  inDatalistId: st,
  listId: it,
  inListId: ct,
  id: ut,
  valueField: dt,
  inValueField: pt,
  labelField: ft,
  inLabelField: ht,
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
  const y = t ?? n, d = typeof y == "string" ? y.toLowerCase() : "table", f = $[d];
  if (!f)
    return console.error(
      `[Renderer] Unknown renderer type "${y}". Available types: ${Object.keys($).join(", ")}`
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
K(ot);
export {
  ot as default
};
