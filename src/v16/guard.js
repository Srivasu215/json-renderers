const guardFunc = ({ inConfig } = {}) => {
    const localConfig = inConfig;

    if (!localConfig || typeof localConfig !== "object") {
        console.error("Config must be an object");
        throw new TypeError("Config must be an object");
    }

    if (localConfig.type !== "table") {
        console.error("type must be 'table'");
        throw new Error("type must be 'table'");
    }

    if (!Array.isArray(localConfig.data)) {
        console.error("data must be an Array");
        throw new TypeError("data must be an Array");
    }

    if (typeof localConfig.targetHtmlId !== "string" || !localConfig.targetHtmlId.trim()) {
        console.error("targetHtmlId must be a non-empty string");
        throw new TypeError("targetHtmlId must be a non-empty string");
    }

    if (!Array.isArray(localConfig.columns)) {
        console.error("columns must be an array");
        throw new TypeError("columns must be an array");
    }

    if (localConfig.showLog !== undefined && typeof localConfig.showLog !== "boolean") {
        console.error("showLog must be a boolean");
        throw new TypeError("showLog must be a boolean");
    }

    return true;
};

export { guardFunc };
export default guardFunc;
