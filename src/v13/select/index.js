import jsonToSpec from "json-to-spec";
import jsonToTag from "@keshavsoft/json-to-tag";

import skeletonJson from './skeleton.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    inTargetHtmlId,
    inData
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId ?? targetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;

    let specAsJsonToDom = jsonToSpec(skeletonJson, {
        arrayOfStrings: localData
    });

    if (!("tagName" in specAsJsonToDom)) {
        specAsJsonToDom = specAsJsonToDom.children;
    };

    const container = document.getElementById(localTargetHtmlId);

    if (container) container.innerHTML = "";

    const content = jsonToTag(specAsJsonToDom);

    container.append(content);
};

export default startFunc;
