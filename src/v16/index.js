import registerGlobal from "./registerGlobal.js";
import guardFunc from "./guard.js";
import buildSpec from "./buildSpec/index.js";

// Pure function: builds and validates the JSON configuration without touching DOM
const getSpec = ({
    type = "table",
    targetHtmlId,
    data,
    columns,
    classToApply,
    appendPosition,
    showLog = false
} = {}) => {
    const localType = type;
    const localTargetHtmlId = targetHtmlId;
    const localData = data;
    const localColumns = columns;
    const localClassToApply = classToApply;
    const localAppendPosition = appendPosition;
    const localShowLog = showLog;

    const specJson = {
        type: localType,
        targetHtmlId: localTargetHtmlId,
        data: localData,
        columns: localColumns,
        classToApply: localClassToApply,
        appendPosition: localAppendPosition,
        showLog: localShowLog
    };

    // Internal call using the in-convention
    guardFunc({ inConfig: specJson });

    return specJson;
};

// Render function: Public API accepting clean single options object
const render = ({
    type = "table",
    targetHtmlId,
    data,
    columns,
    classToApply,
    appendPosition,
    showLog = false
} = {}) => {
    // 1. Get and validate the clean JSON specification
    const specJson = getSpec({
        type,
        targetHtmlId,
        data,
        columns,
        classToApply,
        appendPosition,
        showLog
    });

    if (specJson.showLog) console.log("showLog 1 (spec):", specJson);

    // 2. Build DOM content via buildSpec
    const content = buildSpec({
        inTargetHtmlId: specJson.targetHtmlId,
        inColumns: specJson.columns,
        inData: specJson.data,
        inType: specJson.type,
        inShowLog: specJson.showLog
    });

    if (specJson.showLog) console.log("showLog 2 (content):", content);

    const container = document.getElementById(specJson.targetHtmlId);
    if (specJson.showLog) console.log("showLog 3 (container):", container);

    if (!container) return null;

    const isCollection = Array.isArray(content) ||
        content instanceof NodeList ||
        content instanceof HTMLCollection;

    if (isCollection) {
        if (specJson.appendPosition === "prepend") {
            container.prepend(...content);
        } else {
            container.append(...content);
        }
    } else {
        if (specJson.appendPosition === "prepend") {
            container.prepend(content);
        } else {
            container.innerHTML = "";
            container.append(content);
        }
    }

    if (specJson.showLog) console.log("showLog 4 (mounted):", container);

    return container;
};

// Register on global window.ks.jsonRenderers
registerGlobal({ render, getSpec });

// Export two ways:
// 1. As an object (named exports)
export { render, getSpec, guardFunc, buildSpec };

// 2. As a single function (default export)
export default render;
