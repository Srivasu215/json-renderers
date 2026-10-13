import jsonRenderBuild from "json-renderers-build";
import jsonToTag from "@keshavsoft/json-to-tag";

// --- Story of Table Render ---
const startFunc = ({
    inTargetHtmlId,
    inColumns,
    inType = "table",
    inData,
    inShowLog = false
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;
    const localType = inType;
    const localShowLog = inShowLog;

    if (localShowLog) console.log("buildSpec 1 :", localTargetHtmlId, localData, localColumns);

    let specAsJsonToDom = jsonRenderBuild({
        type: localType,
        targetHtmlId: localTargetHtmlId,
        data: localData,
        columns: localColumns
    });

    let jsonToSend = specAsJsonToDom;

    const content = jsonToTag(jsonToSend);

    if (localShowLog) {
        console.log("buildSpec 2 :", jsonToSend, content);
        console.log("buildSpec 3 :", content);
    }

    return content;
};

export { startFunc };
export default startFunc;
