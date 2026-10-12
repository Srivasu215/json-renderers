import registerGlobal from "./registerGlobal.js";
import buildSpec from "./buildSpec/index.js";
import gaurdFunc from "./common/gaurd.js";

const render = ({
    type = "table",
    targetHtmlId,
    data,
    classToApply,
    columns,
    appendPosition,
    showLog = false
} = {}) => {
    const rawType = type;

    const localTargetHtmlId = targetHtmlId;
    const localData = data;
    const localColumns = columns;

    gaurdFunc({ intype: rawType, indata: localData });

    if (showLog);
    // Default to table renderer
    const content = buildSpec({
        inTargetHtmlId: localTargetHtmlId,
        inColumns: localColumns, showLog,
        inData: localData, type: rawType
    });
    if (showLog);

    const container = document.getElementById(localTargetHtmlId);

    if (showLog);

    const isCollection = Array.isArray(content) ||
        content instanceof NodeList ||
        content instanceof HTMLCollection;


    if (isCollection) {
        if (appendPosition === "prepend") {
            container.prepend(...content);
        } else {
            container.append(...content);
        };
    } else {
        if (appendPosition === "prepend") {
            container.prepend(content);
        } else {
            if (container) container.innerHTML = "";
            container.append(content);
        };
    };

    return container;
};

registerGlobal(render);

export default render;
