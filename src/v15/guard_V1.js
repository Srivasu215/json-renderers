const gaurdFunc = ({ intype, indata, intargetHtmlId, incoumns, inshowLog }) => {

    if (typeof intype !== "string" || intype.trim() === "") {
        console.error("type must be a string");
        throw new Error("type must be a string");
    }

    if (!Array.isArray(indata)) {
        console.error("data must be an Array");
        throw new Error("data must be an Array");
    };
    if (typeof intargetHtmlId !== "string" || !intargetHtmlId.trim()) {
        console.error("targetHtmlId must be a non-empty string");
        throw new TypeError("targetHtmlId must be a non-empty string");
    }

    if (!Array.isArray(incoumns)) {
        console.error("columns must be an array");
        throw new TypeError("columns must be an array");
    }

    if (typeof inshowLog !== "boolean") {
        console.error("showLog must be a boolean");
        throw new TypeError("showLog must be a boolean");
    }

    if (inshowLog !== true) {
        console.error("showLog must be true");
        throw new TypeError("showLog must be true");
    }

    return true;
};

export default gaurdFunc;