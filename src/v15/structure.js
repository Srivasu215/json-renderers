import structureJson from "./structure.json" with { type: "json" };

const structureFunc = ({
    type, intype = type,
    data, indata = data,
    targetHtmlId, intargetHtmlId = targetHtmlId,
    columns, incoumns = columns,
    showLog, inshowLog = showLog
} = {}) => {
    const result = { ...structureJson };

    if (intype !== undefined) result.type = intype;
    if (indata !== undefined) result.data = indata;
    if (intargetHtmlId !== undefined) result.targetHtmlId = intargetHtmlId;
    if (incoumns !== undefined) result.columns = incoumns;
    if (inshowLog !== undefined) result.showLog = inshowLog;

    return result;
};

export default structureFunc;
