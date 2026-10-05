import jsonRenderBuild from "json-renderers-build";
import jsonToTag from "@keshavsoft/json-to-tag";

import skeletonJson from './skeleton.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    inTargetHtmlId,
    inColumns,
    inData, inAppendPosition
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;

    let specAsJsonToDom = jsonRenderBuild({
        type = "table",
        targetHtmlId: inTargetHtmlId,
        data: localData,
        columns: localColumns,
        appendPosition: inAppendPosition
    });

    const container = document.getElementById(localTargetHtmlId);

    if (container) container.innerHTML = "";

    const content = jsonToTag(specAsJsonToDom);

    container.append(content);
};

export default startFunc;
