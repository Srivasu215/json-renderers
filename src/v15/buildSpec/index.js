import jsonRenderBuild from "json-renderers-build";
import jsonToTag from "@keshavsoft/json-to-tag";

// --- Story of Table Render ---
const startFunc = ({
    inTargetHtmlId,
    inColumns, type,
    inData, showLog
} = {}) => {
    // debugger
    const localTargetHtmlId = inTargetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;

    if (showLog) console.log("buildSpec 1 :", localTargetHtmlId, localData.localColumns);

    let specAsJsonToDom = jsonRenderBuild({
        type,
        targetHtmlId: localTargetHtmlId,
        data: localData,
        columns: localColumns
    });

    let jsonToSend = specAsJsonToDom;


    // if (!("tagName" in specAsJsonToDom) && "children" in specAsJsonToDom) {
    //     jsonToSend = specAsJsonToDom.children;
    // };

    const content = jsonToTag(jsonToSend);
    console.log("buildSpec 2 :", jsonToSend, content);

    if (showLog) console.log("buildSpec 3 :", content);

    return content;
};

export default startFunc;
