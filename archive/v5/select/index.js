// import jsonTraversal from "json-traversal";

import jsonToSpec from "../../../node_modules/json-to-spec/index.js";
import jsonToTag from "../../../node_modules/@keshavsoft/json-to-tag/index.js";

import skeletonJson from "./skeleton.json" with { type: "json" };

const startFunc = ({ targetHtmlId, inData,
    inSkeletonType = "default", inClassToApply } = {}) => {
    const skeletonNeeded = skeletonJson[inSkeletonType];
    skeletonNeeded.attributes.class = inClassToApply;

    const specAsJsonToDom = jsonToSpec({
        specJson: skeletonNeeded,
        dataJson: inData
    });

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
