import registerGlobal from "./registerGlobal.js";

import buildSpec from "./buildSpec/index.js";

const render = ({
    type = "table",
    targetHtmlId,
    data,
    classToApply,
    columns,
    appendPosition
} = {}) => {
    const rawType = type;

    const localTargetHtmlId = targetHtmlId;
    const localData = data;
    const localColumns = columns;

    // Default to table renderer
    const content = buildSpec({
        inTargetHtmlId: localTargetHtmlId,
        inColumns: localColumns,
        inData: localData, type: rawType
    });

    const container = document.getElementById(localTargetHtmlId);

    if (appendPosition === "prepend") {
        container.prepend(content);
    } else {
        if (container) container.innerHTML = "";

        container.append(content);
    };

    return container;
};

registerGlobal(render);

export default render;
