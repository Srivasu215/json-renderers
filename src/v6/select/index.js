import jsonTraversal from "../../../node_modules/json-traversal/index.js";

// import jsonToSpec from "../../../node_modules/json-to-spec/index.js";
// import jsonToTag from "@keshavsoft/json-to-tag";
import jsonToTag from "../../../node_modules/@keshavsoft/json-to-tag/index.js";

import skeletonJson from "./skeleton.json" with { type: "json" };

const startFunc = ({ targetHtmlId, inData,
    inSkeletonType = "default", inClassToApply } = {}) => {

    console.log("aaaaaaaaaa");

    const skeletonNeeded = skeletonJson[inSkeletonType];
    skeletonNeeded.mapping.attributes.class = `$${inClassToApply}`;
    // skeletonNeeded.mapping.attributes.class = inClassToApply;
    debugger;

    const specAsJsonToDom = jsonTraversal.transform(inData, skeletonNeeded);

    const container = document.getElementById(targetHtmlId);
    if (container) container.innerHTML = "";

    const createdElement = jsonToTag(specAsJsonToDom);

    if (Array.isArray(createdElement)) {
        // container.appendChild(createdElement)
        createdElement.forEach(element => container.append(element));
    } else {
        container.append(createdElement);
    };
};

export default startFunc;
