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

    if (showLog) console.log("showLog 1 :", rawType, targetHtmlId, data, classToApply, columns, appendPosition);

    // Default to table renderer
    const content = buildSpec({
        inTargetHtmlId: localTargetHtmlId,
        inColumns: localColumns, showLog,
        inData: localData, type: rawType
    });
    if (showLog) console.log("showLog 2 :", content);

    const container = document.getElementById(localTargetHtmlId);

    if (showLog) console.log("showLog 3 :", container);

    const isCollection = Array.isArray(content) ||
        content instanceof NodeList ||
        content instanceof HTMLCollection;

    console.log("prepend ---------:", rawType, isCollection, container, content, localData);


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

    // if (appendPosition === "prepend") {

    //     container.prepend(content);
    // } else {
    //     if (container) container.innerHTML = "";

    //     console.log("showLog 5 ---------:", container, content);

    //     container.append(content);

    //     // if (content != null && typeof content[Symbol.iterator] === "function") {
    //     //     container.append(...content);
    //     // } else {

    //     //     container.append(content);
    //     // };
    // };

    if (showLog) console.log("showLog 5 :", container);

    return container;
};

registerGlobal(render);

export default render;
