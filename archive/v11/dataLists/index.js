// import jsonToSpec from "../../../node_modules/json-to-spec/index.js";
import jsonToTag from "@keshavsoft/json-to-tag";
import jsonTraversal from "../../../node_modules/json-traversal/index.js";

import skeletonJson from "./skeleton.json" with { type: "json" };

const startFunc = ({ targetHtmlId, inData, inSkeletonType = "default" } = {}) => {

    // const specAsJsonToDom = jsonToSpec({
    //     specJson: skeletonJson[inSkeletonType],
    //     dataJson: inData
    // });
    const skeletonNeeded = skeletonJson[inSkeletonType];

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
