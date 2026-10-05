// Story 4: Resolve target HTML container element
const startFunc = ({ inTargetHtmlId } = {}) => {
    const localTargetHtmlId = inTargetHtmlId;

    if (typeof localTargetHtmlId === "string") {
        return document.getElementById(localTargetHtmlId);
    }
    return localTargetHtmlId ?? null;
};

export default startFunc;
