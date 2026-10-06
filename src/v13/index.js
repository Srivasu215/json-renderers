import registerGlobal from "./registerGlobal.js";

import buildSpec from "./buildSpec/index.js";

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
    console.log("showLog 1 :", rawType, targetHtmlId, data, classToApply, columns, appendPosition);

    // Default to table renderer
    const content = buildSpec({
        inTargetHtmlId: localTargetHtmlId,
        inColumns: localColumns, showLog,
        inData: localData, type: rawType
    });
    console.log("showLog 2 :", content);
    const container = document.getElementById(localTargetHtmlId);
    console.log("showLog 3 :", container);
    if (appendPosition === "prepend") {
        container.prepend(content);
    } else {
        if (container) container.innerHTML = "";

        console.log("showLog 4:1 :", content instanceof Node);
        console.log("showLog 4:2 :", content instanceof NodeList);
        console.log("showLog 4:3 :", content instanceof HTMLCollection);

        if (content != null && typeof content[Symbol.iterator] === "function") {
            container.append(...content);
        } else {
            container.append(content);
        };

        // if (content instanceof Node) {
        //     container.append(content);
        // } else if (content instanceof NodeList || content instanceof HTMLCollection) {
        //     container.append(...content);
        // };
        // container.append(...content);
    };
    console.log("showLog 5 :", container);
    return container;
};

registerGlobal(render);

export default render;
