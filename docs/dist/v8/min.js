const meta$2 = {
  version: "v4.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, registerGlobal$2 = (t) => {
  var e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).jsonRenderers ?? (e.jsonRenderers = {
    meta: meta$2,
    renderToDom: t
  }));
}, startFunc$s = ({
  inColumns: t,
  inData: e,
  inColGroup: n,
  inFooterData: o = [],
  inConfig: r = {}
} = {}) => {
  var u;
  const l = t, s = e, c = n, d = o, b = r;
  return {
    columns: l,
    data: s,
    colGroup: c,
    foot: d,
    title: (b == null ? void 0 : b.title) ?? ((u = b == null ? void 0 : b.caption) == null ? void 0 : u.text) ?? "",
    footerText: (b == null ? void 0 : b.footerText) ?? ""
  };
}, isNullOrUndefined$2 = ({ inSpec: t }) => {
  const e = t;
  return e == null;
}, isDomNode$2 = ({ inSpec: t }) => typeof Node < "u" && t instanceof Node, isSpecArray$2 = ({ inSpecJson: t }) => {
  const e = t;
  return Array.isArray(e);
}, buildSpecArray$2 = ({
  inArray: t = [],
  inFragments: e,
  inShowLog: n = !1
} = {}) => {
  const o = t, r = e;
  return n && console.log("buildSpecArray 1 : ", o, r), Array.isArray(o) ? o.map((l) => dispatchSpec$2({
    inSpecJson: l,
    inFragments: r
  })).flat().filter(Boolean) : [];
}, dispatchSpec$2 = ({
  inSpecJson: t,
  inFragments: e,
  inShowLog: n = !1
} = {}) => {
  const o = t, r = e;
  if (n && console.log("dispatchSpec : ", o, r), isNullOrUndefined$2({ inSpec: o }))
    return null;
  if (isDomNode$2({ inSpec: o }))
    return o;
  if (isSpecArray$2({ inSpecJson: o }))
    return buildSpecArray$2({
      inArray: o,
      inFragments: r
    });
  if (typeof o != "object")
    return o;
  if ("slots" in o) {
    const {
      slots: l,
      children: s = [],
      ...c
    } = o, d = Array.isArray(l) ? l.map((b) => r && b in r ? dispatchSpec$2({
      inSpecJson: r[b],
      inFragments: r
    }) : null).flat().filter(Boolean) : [];
    return {
      ...structuredClone(c),
      children: [
        ...buildSpecArray$2({ inArray: s, inFragments: r }),
        ...d
      ]
    };
  }
  return "children" in o && Array.isArray(o.children) ? {
    ...structuredClone(o),
    children: buildSpecArray$2({
      inArray: o.children,
      inFragments: r
    })
  } : structuredClone(o);
}, buildSpecElement$2 = ({ inSkeleton: t, inFragments: e } = {}) => {
  const n = t, o = e;
  try {
    return dispatchSpec$2({
      inSpecJson: n,
      inFragments: o
    });
  } catch (r) {
    console.log("error : ", r);
  }
}, tableSimple = {
  tagName: "table",
  attributes: {
    class: "table table-hover table-striped mb-0"
  },
  slots: [
    "colGroup",
    "thead",
    "tbody",
    "tfoot"
  ]
}, bodyOnly = {
  tagName: "table",
  attributes: {
    class: "table table-hover table-striped mb-0"
  },
  slots: [
    "tbody"
  ]
}, tableOnly = {
  tagName: "table",
  attributes: {
    class: "table table-hover table-striped mb-0"
  },
  slots: [
    "colGroup",
    "thead",
    "tbody",
    "tfoot"
  ]
}, tableResponsive = {
  tagName: "div",
  attributes: {
    class: "table-responsive"
  },
  children: [
    {
      tagName: "table",
      attributes: {
        class: "table table-hover table-striped mb-0"
      },
      slots: [
        "colGroup",
        "thead",
        "tbody",
        "tfoot"
      ]
    }
  ]
}, cardWithHeader = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "card-header bg-white py-3"
      },
      slots: [
        "cardHeader"
      ]
    },
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-hover table-striped mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    }
  ]
}, cardWithFooter = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-hover table-striped mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    },
    {
      tagName: "div",
      attributes: {
        class: "card-footer bg-white py-2"
      },
      slots: [
        "cardFooter"
      ]
    }
  ]
}, cardWithHeaderAndFooter = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "card-header bg-white py-3"
      },
      slots: [
        "cardHeader"
      ]
    },
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-hover table-striped mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    },
    {
      tagName: "div",
      attributes: {
        class: "card-footer bg-white py-2"
      },
      slots: [
        "cardFooter"
      ]
    }
  ]
}, bordered = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-bordered table-hover mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    }
  ]
}, borderless = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-borderless table-hover mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    }
  ]
}, compact = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-sm table-hover table-striped mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    }
  ]
}, dark = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm bg-dark text-white border-secondary"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-dark table-hover mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    }
  ]
}, striped = {
  tagName: "div",
  attributes: {
    class: "card shadow-sm"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-striped mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    }
  ]
}, flush = {
  tagName: "div",
  attributes: {
    class: "card border-0 shadow-none"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "table-responsive"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-hover table-striped mb-0"
          },
          slots: [
            "colGroup",
            "thead",
            "tbody",
            "tfoot"
          ]
        }
      ]
    }
  ]
}, skeletonJson$2 = {
  tableSimple,
  bodyOnly,
  default: {
    tagName: "div",
    attributes: {
      class: "card shadow-sm"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "table-responsive"
        },
        children: [
          {
            tagName: "table",
            attributes: {
              class: "table table-hover table-striped mb-0"
            },
            slots: [
              "colGroup",
              "thead",
              "tbody",
              "tfoot"
            ]
          }
        ]
      }
    ]
  },
  tableOnly,
  tableResponsive,
  cardWithHeader,
  cardWithFooter,
  cardWithHeaderAndFooter,
  bordered,
  borderless,
  compact,
  dark,
  striped,
  flush
}, colGroup = {
  tagName: "colgroup",
  jsonToSpec: {
    operation: "loopArray",
    source: "colGroup",
    template: {
      tagName: "col",
      attributes: {
        style: "${style}"
      }
    }
  },
  children: []
}, thead$1 = {
  tagName: "thead",
  attributes: {
    class: "table-dark"
  },
  children: [
    {
      tagName: "tr",
      jsonToSpec: {
        operation: "loopArray",
        source: "columns",
        template: {
          tagName: "th",
          textContent: "${label}"
        }
      },
      children: []
    }
  ]
}, tbody$1 = {
  tagName: "tbody",
  attributes: {
    id: "table-body"
  },
  jsonToSpec: {
    operation: "loopArray",
    source: "data",
    template: {
      tagName: "tr",
      jsonToSpec: {
        operation: "loopObject",
        source: "data",
        template: {
          tagName: "td",
          attributes: {
            class: "tdddddd ${value}"
          },
          textContent: "${value}"
        }
      },
      children: []
    }
  },
  children: []
}, tfoot$1 = {
  tagName: "tfoot",
  attributes: {
    class: "table-light fw-bold"
  },
  jsonToSpec: {
    operation: "loopArray",
    source: "foot",
    template: {
      tagName: "tr",
      jsonToSpec: {
        operation: "loopObject",
        source: "foot",
        template: {
          tagName: "td",
          textContent: "${value}"
        }
      },
      children: []
    }
  },
  children: []
}, cardHeader = {
  tagName: "div",
  attributes: {
    class: "d-flex justify-content-between align-items-center"
  },
  children: [
    {
      tagName: "h5",
      attributes: {
        class: "card-title mb-0"
      },
      textContent: "${title}"
    }
  ]
}, cardFooter = {
  tagName: "div",
  attributes: {
    class: "d-flex justify-content-between align-items-center text-muted small"
  },
  children: [
    {
      tagName: "span",
      textContent: "${footerText}"
    }
  ]
}, fragmentsJson = {
  colGroup,
  thead: thead$1,
  tbody: tbody$1,
  tfoot: tfoot$1,
  cardHeader,
  cardFooter
}, startFunc$r = ({
  inSkeletonType: t = "default",
  inSkeletonJson: e = skeletonJson$2,
  inFragmentsJson: n = fragmentsJson,
  inShowLog: o = !1
} = {}) => {
  const r = t, l = e, s = n, c = o, d = l[r] ?? l.default ?? l, b = structuredClone(d);
  c && console.log("targetSkeleton : ", b);
  const u = buildSpecElement$2({
    inSkeleton: b,
    inFragments: s
  });
  return c && console.log("structureJson : ", u), u;
}, meta$1 = {
  version: "v24.0",
  description: "Pure spec engine no document at all"
}, registerGlobal$1 = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks["json-to-spec"] = {
    meta: meta$1,
    buildSpecElement: t
  }, globalThis.ks.jsonToSpec = {
    meta: meta$1,
    buildSpecElement: t
  });
}, isNullOrUndefined$1 = ({ inSpec: t }) => {
  const e = t;
  return e == null;
}, isDomNode$1 = ({ inSpec: t }) => typeof Node < "u" && t instanceof Node, isSpecArray$1 = ({ inSpecJson: t }) => {
  const e = t;
  return Array.isArray(e);
}, buildSpecArray$1 = ({ inArray: t = [], inShowLog: e = !1, inDataJson: n }) => {
  const o = t, r = e, l = n;
  return Array.isArray(o) ? o.map((s) => dispatchSpec$1({
    inSpecJson: s,
    inShowLog: r,
    inDataJson: l
  })).flat().filter(Boolean) : [];
}, startFunc$q = ({ inTemplate: t, inData: e, inRowIndex: n }) => {
  if (Number.isFinite(n)) {
    debugger;
    console.log("vvvvvvvvvvvvvv : ", n);
    let o = forHashResolve({ inTemplate: t, inRowIndex: n });
    return forDollarResolve({ inTemplate: o, inData: e });
  } else
    return forDollarResolve({ inTemplate: t, inData: e });
}, forDollarResolve = ({ inTemplate: t, inData: e }) => {
  const n = t, o = e;
  return typeof n != "string" ? n : n.replace(/\$\{([^}]+)\}/g, (r, l) => {
    const s = l.trim().split(".");
    let c = o;
    for (const d of s) {
      if (c == null) return "";
      c = c[d];
    }
    return c == null ? "" : typeof c == "string" || typeof c == "number" || typeof c == "boolean" ? String(c ?? "") : c;
  });
}, forHashResolve = ({ inTemplate: t, inRowIndex: e }) => {
  const n = t, o = e;
  return n.replace(/\#\{([^}]+)\}/g, (r, l) => {
    const s = l.trim().split(".");
    let c = o;
    console.log("aaaaaaa : ", e, t, s);
    for (const d of s) {
      if (c == null) return "";
      c = c[d];
    }
    return c === null || typeof c == "string" || typeof c == "number" || typeof c == "boolean" ? String(c ?? "") : c;
  });
}, handleObjectData = ({ inSpec: t, inData: e, inShowLog: n }) => {
  const o = t, r = e, l = n;
  return "textContent" in o && (o.textContent = startFunc$q({ inTemplate: o.textContent, inData: r })), "attributes" in o && typeof o.attributes == "object" && o.attributes && (o.attributes = Object.fromEntries(
    Object.entries(o.attributes).map(([s, c]) => [
      s,
      startFunc$q({ inTemplate: c, inData: r })
    ])
  )), Array.isArray(o.children) && (o.children = o.children.map(
    (s) => dispatchSpec$1({
      inSpecJson: s,
      inShowLog: l,
      inDataJson: r
    })
  )), o;
}, startFunc$p = ({ inSpec: t, inData: e }) => {
  const n = t, o = e, r = o.value;
  return isSpecArray$1({ inSpecJson: r }) ? (n.children = [{
    tagName: "button",
    attributes: {
      class: "btn btn-primary btn-sm"
    },
    textContent: r.length
  }], delete n.textContent, n) : typeof r == "object" && r !== null && r.tagName ? (n.children = [r], delete n.textContent, n) : ("textContent" in n && (n.textContent = startFunc$q({ inTemplate: n.textContent, inData: o })), "attributes" in n && typeof n.attributes == "object" && n.attributes && (n.attributes = Object.fromEntries(
    Object.entries(n.attributes).map(([l, s]) => [
      l,
      startFunc$q({ inTemplate: s, inData: o })
    ])
  )), n);
}, handleStringData = ({ inSpec: t, inData: e }) => {
  const n = t, o = e;
  return "textContent" in n && (n.textContent === "${}" ? n.textContent = o : typeof n.textContent == "string" && (n.textContent = n.textContent.replaceAll("${}", () => o))), "attributes" in n && typeof n.attributes == "object" && n.attributes && (n.attributes = Object.fromEntries(
    Object.entries(n.attributes).map(([r, l]) => [
      r,
      l === "${}" ? o : typeof l == "string" ? l.replaceAll("${}", () => o) : l
    ])
  )), n;
}, startFunc$o = ({ inSpecJson: t, inData: e, inRowIndex: n, inShowLog: o = !1 } = {}) => {
  const r = t, l = e, s = o, c = structuredClone(r);
  return s && console.log("buildSingleElement start : ", r, l), typeof l == "string" ? handleStringData({ inSpec: c, inData: l }) : typeof l == "object" && l !== null && "key" in l && "value" in l && !("children" in c && Array.isArray(c.children) && c.children.length > 0) ? startFunc$p({ inSpec: c, inData: l }) : handleObjectData({
    inSpec: c,
    inData: l,
    inShowLog: s
  });
}, startFunc$n = ({ inTemplate: t, inDataAsArray: e }) => {
  const n = e, o = t;
  return Array.isArray(n) ? n.map((l, s) => {
    const c = structuredClone(o);
    return dispatchSpec$1({
      inSpecJson: c,
      inDataJson: l,
      inRowIndex: s
    });
  }) : [];
}, startFunc$m = ({ inTemplate: t, inDataAsObject: e }) => {
  const n = e, o = t;
  if (n === null || typeof n != "object")
    return [];
  const r = [];
  for (const [l, s] of Object.entries(n)) {
    const c = structuredClone(o), d = dispatchSpec$1({
      inSpecJson: c,
      inDataJson: {
        key: l,
        value: s
      }
    });
    r.push(d);
  }
  return r;
}, startFunc$l = ({
  inSpecJson: t,
  inShowLog: e = !1,
  inDataJson: n,
  inRowIndex: o
} = {}) => {
  if (Number.isFinite(o) && ("attributes" in t ? t.attributes.rowIndex = o : t.attributes = {
    rowIndex: o
  }), !["loopArray", "loopObject"].includes(t.jsonToSpec.operation)) {
    console.log(`inSpecJson.jsonToSpec.operation : can be loopArray or loopObject : ${t.jsonToSpec.operation}`);
    return;
  }
  if (t.jsonToSpec.operation === "loopArray") {
    const r = startFunc$n({
      inTemplate: t.jsonToSpec.template,
      inDataAsArray: n[t.jsonToSpec.source]
    }), {
      jsonToSpec: l,
      ...s
    } = t, c = {
      ...s,
      children: r
    };
    return startFunc$o({
      inSpecJson: c,
      inShowLog: e,
      inData: n
    });
  }
  if (t.jsonToSpec.operation === "loopObject") {
    const r = startFunc$m({
      inTemplate: t.jsonToSpec.template,
      inDataAsObject: n
    }), {
      jsonToSpec: l,
      ...s
    } = t, c = {
      ...s,
      children: r
    };
    return startFunc$o({
      inSpecJson: c,
      inShowLog: e,
      inData: n
    });
  }
}, dispatchSpec$1 = ({
  inSpecJson: t,
  inShowLog: e = !0,
  inDataJson: n,
  inRowIndex: o
} = {}) => isNullOrUndefined$1({ inSpec: t }) ? null : isDomNode$1({ inSpec: t }) ? t : (e && console.log("dispatchSpec 3 : ", t, n), isSpecArray$1({ inSpecJson: t }) ? buildSpecArray$1({
  inArray: t,
  inShowLog: e,
  inDataJson: n
}) : "jsonToSpec" in t ? startFunc$l({
  inSpecJson: t,
  inShowLog: e,
  inDataJson: n,
  inRowIndex: o
}) : startFunc$o({
  inSpecJson: t,
  inShowLog: e,
  inRowIndex: o,
  inData: n
})), buildSpecElement$1 = ({
  specJson: t,
  showLog: e = !1,
  dataJson: n
}) => {
  try {
    return e && console.log("jsonToSpec 1 : ", t), dispatchSpec$1({
      inSpecJson: t,
      inShowLog: e,
      inDataJson: n
    });
  } catch (o) {
    console.log("error : ", o);
  }
};
registerGlobal$1(buildSpecElement$1);
const meta = {
  version: "v3.0",
  description: "Pure DOM engine with JSON review and tags.json catalog verification"
}, registerGlobal = (t) => {
  const e = t, n = typeof e == "function" ? e : e == null ? void 0 : e.inFuncDefinition, o = e == null ? void 0 : e.inReviewSpec;
  typeof globalThis > "u" || !n || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks["json-to-tag"] = {
    meta,
    buildSpecElement: n,
    reviewSpec: o
  }, globalThis.ks.jsonToTag = {
    meta,
    buildSpecElement: n,
    reviewSpec: o
  });
}, isNullOrUndefined = ({ inSpec: t }) => {
  const e = t;
  return e == null;
}, isDomNode = ({ inSpec: t }) => typeof Node < "u" && t instanceof Node, isSpecArray = ({ inSpec: t }) => {
  const e = t;
  return Array.isArray(e);
}, buildSpecArray = ({ inSpec: t, inShowLog: e = !1 }) => {
  const n = t, o = e;
  return Array.isArray(n) ? n.map((r) => dispatchSpec({
    inSpec: r,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, createElement = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const n = document.createElement("input");
    return n.type = "checkbox", n;
  }
  return document.createElement(e);
}, applyTextContent = ({ inElement: t, inTextContent: e, inAllowsTextContent: n = !0, inTagName: o, inShowLog: r = !1 }) => {
  const l = t, s = e, c = n, d = o, b = r;
  return !l || s === void 0 || s === null ? l : c ? (l.textContent = s, l) : (b && console.warn(`[json-to-tag v3] textContent is not allowed on <${d}>; discarded "${s}"`), l);
}, applyProperties = ({ inElement: t, inProperties: e }) => {
  const n = t, o = e;
  return n && o && typeof o == "object" && Object.assign(n, o), n;
}, applyAttributes = ({ inElement: t, inAttributes: e }) => {
  const n = t, o = e;
  return !n || !o || typeof o != "object" || Object.entries(o).forEach(([r, l]) => {
    r === "class" ? n.className = l : typeof l == "boolean" ? l ? n.setAttribute(r, "") : n.removeAttribute(r) : l != null && n.setAttribute(r, String(l));
  }), n;
}, applyClassList = ({ inElement: t, inClassList: e }) => {
  const n = t, o = e;
  if (!n || !o) return n;
  let r = [];
  return typeof o == "string" ? r = o.split(/\s+/).filter(Boolean) : Array.isArray(o) && (r = o.filter((l) => typeof l == "string" && l.trim().length > 0)), r.length > 0 && n.classList.add(...r), n;
}, appendChildren = ({ inElement: t, inChildren: e, inAllowsChildren: n = !0, inTagName: o, inShowLog: r = !1 }) => {
  const l = t, s = e, c = n, d = o, b = r;
  return !l || !Array.isArray(s) || s.length === 0 ? l : c ? (s.forEach((u) => {
    typeof Node < "u" && u instanceof Node ? l.appendChild(u) : (typeof u == "string" || typeof u == "number") && l.appendChild(document.createTextNode(String(u)));
  }), l) : (b && console.warn(`[json-to-tag v3] Children are not allowed on void tag <${d}>; discarded ${s.length} child nodes.`), l);
}, domElementBuilder = ({ inSpec: t, inClassList: e }) => {
  const n = t, o = e || (n == null ? void 0 : n.classList);
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
}, buildChildrenNodes = ({ inChildren: t, inShowLog: e = !1 }) => {
  const n = t, o = e;
  return Array.isArray(n) ? n.map((l) => dispatchSpec({
    inSpec: l,
    inShowLog: o
  })).flat().filter(Boolean) : [];
}, buildSingleElement = ({ inSpec: t, inShowLog: e = !1 }) => {
  const n = t, o = e, r = domElementBuilder({ inSpec: n });
  let l = [];
  return "children" in n && (l = Array.isArray(n.children) && n.children.length > 0 ? buildChildrenNodes({
    inChildren: n.children,
    inShowLog: o
  }) : [], r.append(...l)), r;
}, dispatchSpec = ({ inSpec: t, inShowLog: e = !1 } = {}) => {
  const n = t, o = e;
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
}, extractTags = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((o) => extractTags({ inSpec: o }));
  if (typeof e != "object") return [];
  const n = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && n.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((o) => {
    const r = extractTags({ inSpec: o });
    n.push(...r);
  }), n;
}, checkTags = ({ inTagsFound: t, inAllowedTags: e }) => {
  const n = t ?? [], o = e ?? {}, r = new Set(
    Object.keys(o).filter((u) => u !== "$schema").map((u) => u.toLowerCase())
  ), l = {}, s = [], c = [];
  n.forEach((u) => {
    l[u] = (l[u] || 0) + 1, r.has(u) ? s.includes(u) || s.push(u) : c.includes(u) || c.push(u);
  });
  const d = n.length, b = c.length === 0;
  return {
    totalTags: d,
    tagCounts: l,
    uniqueTags: Object.keys(l),
    recognizedTags: s,
    unrecognizedTags: c,
    areAllTagsPresent: b
  };
}, reviewSpec = ({ inSpec: t, inTags: e = defaultTags } = {}) => {
  const n = t, o = e, r = extractTags({ inSpec: n }), l = checkTags({
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
const startFunc$k = ({
  inStructureJson: t,
  inDataAsJson: e,
  inShowLog: n = !1
} = {}) => {
  const o = t, r = e, l = n, s = buildSpecElement$1({
    specJson: o,
    dataJson: r,
    showLog: l
  });
  return l && console.log("specAsJsonToDom : ", s), buildSpecElement(s);
}, startFunc$j = ({ inTargetHtmlId: t } = {}) => {
  const e = t;
  return typeof e == "string" ? document.getElementById(e) : e ?? null;
}, startFunc$i = ({ inEvent: t, inColumns: e, inData: n } = {}) => {
  var T, S, A;
  const o = t, r = e, l = n, s = (T = o == null ? void 0 : o.target) == null ? void 0 : T.closest("button");
  if (!s) return null;
  const c = s.closest("tr"), d = s.closest("td");
  if (!c || !d) return null;
  const b = c.sectionRowIndex, u = (S = r == null ? void 0 : r[d.cellIndex]) == null ? void 0 : S.key, h = (A = l == null ? void 0 : l[b]) == null ? void 0 : A[u];
  return !Array.isArray(h) || h.length === 0 ? null : {
    parentRowIndex: b,
    childColumnKey: u,
    childTableData: h
  };
}, startFunc$h = ({ inTargetHtmlId: t, inChildColumnKey: e } = {}) => {
  const n = t, o = e, r = typeof n == "string" ? document.getElementById(n) : n;
  if (!r) return null;
  const l = `${r.id || "table"}-${o}`;
  let s = document.getElementById(l);
  return s || (s = document.createElement("div"), s.id = l, s.className = "child-table-container mt-3", r.insertAdjacentElement("afterend", s)), s;
}, startFunc$g = ({ inChildTableContainer: t, inParentRowIndex: e } = {}) => {
  const n = t, o = e, r = n.dataset.activeRow === String(o), l = n.style.display !== "none";
  return r && l ? (n.style.display = "none", !0) : !1;
}, startFunc$f = ({ inChildTableContainer: t, inClickedRowDetails: e } = {}) => {
  const n = t, o = e;
  return n.style.display = "", n.dataset.activeRow = String(o.parentRowIndex), n.dataset.fieldName = o.childColumnKey, n.innerHTML = "", n.childData = o.childTableData, n;
}, startFunc$e = ({ inEvent: t, inTargetHtmlId: e, inColumns: n, inData: o } = {}) => {
  const r = t, l = e, d = startFunc$i({
    inEvent: r,
    inColumns: n,
    inData: o
  });
  if (!d) return null;
  const b = startFunc$h({
    inTargetHtmlId: l,
    inChildColumnKey: d.childColumnKey
  });
  return !b || startFunc$g({
    inChildTableContainer: b,
    inParentRowIndex: d.parentRowIndex
  }) ? null : startFunc$f({
    inChildTableContainer: b,
    inClickedRowDetails: d
  });
}, deriveColumnsFromData = ({ inData: t = [] } = {}) => {
  const e = t;
  if (!Array.isArray(e) || e.length === 0)
    return [];
  const n = e[0];
  return !n || typeof n != "object" ? [] : Object.keys(n).map((o) => ({
    key: o,
    label: o
  }));
}, startFunc$d = ({ inChildTableContainer: t, inContainer: e, inRenderFunc: n } = {}) => {
  const o = t, r = e, l = n, s = o || r, c = s == null ? void 0 : s.childData;
  l({
    inTargetHtmlId: s,
    inColumns: deriveColumnsFromData({ inData: c }),
    inData: c,
    inSkeletonType: "tableOnly"
  });
}, clickFunc = ({
  inEvent: t,
  inData: e,
  inColumns: n,
  inRenderFunc: o,
  inTargetHtmlId: r
} = {}) => {
  const l = t, s = e, c = n, d = o, u = startFunc$e({
    inEvent: l,
    inTargetHtmlId: r,
    inColumns: c,
    inData: s
  });
  u && startFunc$d({
    inChildTableContainer: u,
    inRenderFunc: d
  });
}, startFunc$c = ({
  inTargetContainer: t,
  inData: e,
  inColumns: n,
  inRenderFunc: o,
  inTargetHtmlId: r
} = {}) => {
  const l = t, s = e, c = n, d = o, b = r;
  l.addEventListener("click", (u) => {
    clickFunc({
      inEvent: u,
      inData: s,
      inColumns: c,
      inRenderFunc: d,
      inTargetHtmlId: b
    });
  });
}, startFunc$b = ({
  targetHtmlId: t,
  inTargetHtmlId: e,
  inColumns: n,
  inData: o,
  inColGroup: r,
  inFooterData: l = [],
  inConfig: s = {},
  inSkeletonType: c = "default",
  inShowLog: d = !1
} = {}) => {
  const b = e ?? t, u = o ?? [], h = n ?? deriveColumnsFromData({ inData: u }), T = r, S = l, A = s, D = c, v = d;
  try {
    const E = startFunc$s({
      inColumns: h,
      inData: u,
      inColGroup: T,
      inFooterData: S,
      inConfig: A
    }), I = startFunc$r({
      inSkeletonType: D,
      inSkeletonJson: skeletonJson$2,
      inFragmentsJson: fragmentsJson,
      inShowLog: v
    }), R = startFunc$k({
      inStructureJson: I,
      inDataAsJson: E,
      inShowLog: v
    }), w = startFunc$j({
      inTargetHtmlId: b
    });
    if (!w) return;
    w.innerHTML = "", startFunc$c({
      inTargetContainer: w,
      inData: u,
      inColumns: h,
      inRenderFunc: startFunc$b,
      inTargetHtmlId: b
    }), w.append(R);
  } catch (E) {
    console.log("error : ", E);
  }
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
  const o = t.replace(/\[(\w+)\]/g, ". $1".replace(" ", "")).replace(/^\./, "").split(".");
  for (let r = 0; r < o.length; ) {
    if (Array.isArray(e)) {
      const c = o.slice(r).join(".");
      return e.map((d) => resolvePath(c, d));
    }
    if (typeof e != "object" || e === null)
      return VALUES.DEFAULT;
    let l, s = 0;
    for (let c = o.length; c > r; c -= 1) {
      const d = o.slice(r, c).join(".");
      if (Object.prototype.hasOwnProperty.call(e, d)) {
        l = d, s = c - r;
        break;
      }
    }
    if (l === void 0)
      return VALUES.DEFAULT;
    e = e[l], r += s;
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
  APPEND: (e, n, o, r) => {
    const l = r == null ? void 0 : r.appendMap;
    if (!l || typeof l[n] > "u") return e;
    const { path: s, separator: c } = l[n];
    return e + (c || "") + t(s, o);
  },
  DELETE: deleteKey,
  DELETE_IF_NOT_PRESENT: deleteIfNotPresent,
  DEPENDS: (e, n, o, r) => {
    if (typeof n > "u") return r.dependentMap[e];
    const l = extractSpecial(n);
    return l && actionMap[l.type] ? actionMap[l.type](e, l.path, o, r) : n;
  },
  EVAL: evaluateExpression
});
let actionMap = {};
const convertType = (t, e) => typeToFn[t] ? typeToFn[t](e) : e, performAction = (t, e, n, o, r, l) => {
  actionMap = createActionMap({ convertValue: l });
  const s = extractSpecial(t);
  return s && actionMap[s.type] ? actionMap[s.type](e, s.path, o, r) : actionMap[t] ? actionMap[t](e, void 0, o, r) : e;
}, resolveValue = (t, e, n, o) => {
  if (t.startsWith(IDENTIFIERS.HARD_CODED))
    return t.substring(1);
  if (t.startsWith(IDENTIFIERS.PARENT))
    return resolvePath(t.substring(1), n);
  const r = extractSpecial(t);
  if (!r)
    return resolvePath(t, e);
  const l = resolvePath(r.path, e);
  return typeof l > "u" ? VALUES.DEFAULT : r.kind === IDENTIFIERS.TYPE_START ? convertType(r.type, l) : performAction(
    r.type,
    l,
    r.path,
    e,
    o,
    (s, c) => resolveValue(s, c, n, o)
  );
}, startFunc$a = (t, e, n) => {
  const o = {};
  return Object.keys(t).forEach((r) => {
    const l = t[r];
    if (typeof l == "string") {
      o[r] = resolveValue(
        l,
        e,
        n.rootSource,
        n.configuration
      );
      return;
    }
    if (Array.isArray(l) && l.length > 0) {
      o[r] = startFunc$3(l[0], e, n);
      return;
    }
    l && typeof l == "object" && (o[r] = traverse(l, e, n));
  }), o;
}, startFunc$9 = (t, e, n) => {
  const o = [];
  return t.forEach((r) => {
    if (typeof r == "string") {
      const l = resolveValue(
        r,
        e,
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
          e,
          n
        )
      );
      return;
    }
    r && typeof r == "object" && o.push(
      startFunc$a(
        r,
        e,
        n
      )
    );
  }), o;
}, startFunc$8 = (t, e, n) => [
  startFunc$a(
    e,
    t,
    n
  )
], startFunc$7 = (t, e, n) => t.map((o) => startFunc$a(
  e,
  o,
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
  const o = getItemMapping$1(t);
  if (isArrayIndexMapping(t))
    return [
      startFunc$a(
        o,
        e,
        n
      )
    ];
  const r = resolveListSource(
    t,
    e
  );
  return startFunc$6(
    r,
    o,
    n
  );
}, getItemMapping = (t) => Array.isArray(t.item) ? t.item[0] : t.item, resolveObjectifySource = (t, e) => resolvePath(
  t.objectify,
  e
), startFunc$4 = (t, e, n) => {
  const o = resolveObjectifySource(
    t,
    e
  );
  return startFunc$8(
    o,
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
  const n = t.lastIndexOf(IDENTIFIERS.ARRAY_INDEX) + 4, o = t.lastIndexOf(IDENTIFIERS.ARRAY_END), r = t.substring(n, o), l = t.substring(0, t.lastIndexOf(IDENTIFIERS.ARRAY_INDEX)), s = l ? resolvePath(l, e) : e;
  return s == null ? void 0 : s[r];
}, traverse = (t, e, n) => {
  if (typeof t.list < "u" || typeof t.objectify < "u" || typeof t.collect < "u")
    return startFunc$3(t, e, n);
  if (typeof t.flat < "u") {
    const o = startFunc$2(t.flat, e);
    return startFunc$a(t.item, o, n);
  }
  return typeof t.item < "u" ? startFunc$a(t.item, e, n) : startFunc$a(t, e, n);
}, transform = (t, e) => {
  let n = t, o = e;
  t !== null && typeof t == "object" && "inData" in t && e === void 0 && (n = t.inData, o = t.inTransformation);
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
}, startFunc$1 = ({ targetHtmlId: t, inData: e, inSkeletonType: n = "default" } = {}) => {
  const o = skeletonJson$1[n], r = transformHelper.transform(e, o), l = document.getElementById(t);
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
  targetHtmlId: t,
  inData: e,
  inSkeletonType: n = "default",
  inClassToApply: o
} = {}) => {
  console.log("aaaaaaaaaa");
  const r = skeletonJson[n];
  r.mapping.attributes.class = `$${o}`;
  debugger;
  const l = transformHelper.transform(e, r), s = document.getElementById(t);
  s && (s.innerHTML = "");
  const c = buildSpecElement(l);
  Array.isArray(c) ? c.forEach((d) => s.append(d)) : s.append(c);
}, RENDERER_MAP = {
  table: startFunc$b,
  datalist: startFunc$1,
  select: startFunc
}, render = ({
  type: t = "table",
  targetHtmlId: e,
  data: n,
  classToApply: o,
  inTargetHtmlId: r,
  inData: l,
  columns: s,
  inColumns: c,
  fields: d,
  inFields: b,
  tabs: u,
  inTabs: h,
  options: T,
  inOptions: S,
  datalistId: A,
  inDatalistId: D,
  listId: v,
  inListId: E,
  id: I,
  valueField: R,
  inValueField: w,
  labelField: W,
  inLabelField: q,
  colGroup: j,
  inColGroup: O,
  footerData: L,
  inFooterData: k,
  config: H,
  inConfig: P,
  variant: _,
  skeletonType: M,
  inSkeletonType: G,
  showLog: J = !1,
  inShowLog: U,
  ...f
} = {}) => {
  const F = t, m = typeof F == "string" ? F.toLowerCase() : "table", g = RENDERER_MAP[m];
  if (!g)
    return console.error(
      `[Renderer] Unknown renderer type "${F}". Available types: ${Object.keys(RENDERER_MAP).join(", ")}`
    ), null;
  const C = r ?? e, $ = l ?? n, x = c ?? s, Y = b ?? d, B = h ?? u, y = G ?? M ?? _ ?? "default", N = U ?? J ?? !1;
  return g(m === "form" ? {
    targetHtmlId: C,
    inFields: Y,
    inData: $,
    inColumns: x,
    inVariant: y,
    inSkeletonType: y,
    inShowLog: N,
    onSave: f == null ? void 0 : f.onSave,
    afterSave: f == null ? void 0 : f.afterSave,
    onNew: f == null ? void 0 : f.onNew
  } : m === "navtabs" || m === "nav" || m === "tabs" ? {
    targetHtmlId: C,
    inTabs: B,
    inData: $,
    inSkeletonType: y,
    inShowLog: N
  } : m === "datalist" || m === "data-list" ? {
    targetHtmlId: C,
    inData: $,
    inSkeletonType: y,
    inShowLog: N
  } : m === "select" ? {
    targetHtmlId: C,
    inData: $,
    inSkeletonType: y,
    inShowLog: N,
    inClassToApply: o
  } : {
    targetHtmlId: C,
    inColumns: x,
    inData: $,
    inColGroup: O ?? j,
    inFooterData: k ?? L ?? [],
    inConfig: P ?? H ?? {},
    inSkeletonType: y,
    inShowLog: N
  });
};
registerGlobal$2(render);
export {
  render as default
};
