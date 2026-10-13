import jsonRenderBuild from "json-renderers-build";

// --- Story of Spec Build ---
const startFunc = ({
    inColumns,
    inType = "table",
    inData,
    inShowLog = false
} = {}) => {
    const localData = inData ?? [];
    const localColumns = inColumns;
    const localType = inType;
    const localShowLog = inShowLog;

    const specAsJsonToDom = jsonRenderBuild({
        type: localType,
        data: localData,
        columns: localColumns,
        showLog: localShowLog
    });

    return specAsJsonToDom;
};

export default startFunc;