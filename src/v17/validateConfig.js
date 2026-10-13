import guardFunc from "./guard.js";

// Validates the configuration object against schema constraints
const validateConfig = ({
    type = "table",
    targetHtmlId,
    data,
    columns,
    classToApply = "",
    appendPosition = "replace",
    showLog = false
} = {}) => {
    const localType = type;
    const localTargetHtmlId = targetHtmlId;
    const localData = data;
    const localColumns = columns;
    const localClassToApply = classToApply;
    const localAppendPosition = appendPosition;
    const localShowLog = showLog;

    const config = {
        type: localType,
        targetHtmlId: localTargetHtmlId,
        data: localData,
        columns: localColumns,
        classToApply: localClassToApply,
        appendPosition: localAppendPosition,
        showLog: localShowLog
    };

    guardFunc({ inConfig: config });

    return config;
};

export { validateConfig };
export default validateConfig;
