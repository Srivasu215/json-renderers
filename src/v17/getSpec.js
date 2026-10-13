import guardFunc from "./guard.js";

// Pure function: builds and validates the JSON configuration without touching DOM
const getSpec = ({
    type = "table",
    targetHtmlId,
    data,
    columns,
    classToApply,
    appendPosition,
    showLog = false
} = {}) => {
    const localType = type;
    const localTargetHtmlId = targetHtmlId;
    const localData = data;
    const localColumns = columns;
    const localClassToApply = classToApply;
    const localAppendPosition = appendPosition;
    const localShowLog = showLog;

    const specJson = {
        type: localType,
        targetHtmlId: localTargetHtmlId,
        data: localData,
        columns: localColumns,
        classToApply: localClassToApply,
        appendPosition: localAppendPosition,
        showLog: localShowLog
    };

    // Internal call using the in-convention
    guardFunc({ inConfig: specJson });

    return specJson;
};

export { getSpec };
export default getSpec;
