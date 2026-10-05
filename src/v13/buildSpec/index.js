import jsonRenderBuild from "json-renderers-build";
import jsonToTag from "@keshavsoft/json-to-tag";

// --- Story of Table Render ---
const startFunc = ({
    inTargetHtmlId,
    inColumns, type,
    inData
} = {}) => {
    // debugger
    const localTargetHtmlId = inTargetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns;

    let specAsJsonToDom = jsonRenderBuild({
        type,
        targetHtmlId: localTargetHtmlId,
        data: localData,
        columns: localColumns
    });

    const content = jsonToTag(specAsJsonToDom);

    return content;
};

export default startFunc;
