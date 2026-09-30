import jsonToSpec from "../../../node_modules/json-to-spec/index.js";
import jsonToTag from "@keshavsoft/json-to-tag";

// Story 3: Generate table DOM element from structure specification and data
const startFunc = ({
    inStructureJson,
    inDataAsJson,
    inShowLog = false
} = {}) => {
    const localStructureJson = inStructureJson;
    const localDataAsJson = inDataAsJson;
    const localShowLog = inShowLog;

    const specAsJsonToDom = jsonToSpec({
        specJson: localStructureJson,
        dataJson: localDataAsJson,
        showLog: localShowLog
    });

    if (localShowLog) console.log("specAsJsonToDom : ", specAsJsonToDom);

    return jsonToTag(specAsJsonToDom);
};

export default startFunc;