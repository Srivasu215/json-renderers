import jsonRenderBuild from "json-renderers-build";
import jsonToTag from "@keshavsoft/json-to-tag";

import skeletonJson from './skeleton.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    inTargetHtmlId,
    inColumns,
    inData, inAppendPosition
} = {}) => {
    debugger
    const localTargetHtmlId = inTargetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;

    let specAsJsonToDom = jsonRenderBuild({
        type: "table",
        targetHtmlId: localTargetHtmlId,
        data: localData,
        columns: localColumns
    });
    console.log("specAsJsonToDom : ", inAppendPosition, specAsJsonToDom);

    const container = document.getElementById(localTargetHtmlId);

    const content = jsonToTag(specAsJsonToDom);

    if (inAppendPosition === "prepend") {
        container.prepend(content);
    } else {

        if (container) container.innerHTML = "";

        container.append(content);
    };
};

export default startFunc;
