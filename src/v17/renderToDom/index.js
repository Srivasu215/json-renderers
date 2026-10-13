import jsonToTag from "@keshavsoft/json-to-tag";

// --- Story of DOM Rendering and Mounting ---
const renderToDom = ({
    inSpec,
    inTargetHtmlId,
    inAppendPosition,
    inShowLog = false
} = {}) => {
    const localSpec = inSpec;
    const localTargetHtmlId = inTargetHtmlId;
    const localAppendPosition = inAppendPosition;
    const localShowLog = inShowLog;

    const content = jsonToTag(localSpec);

    if (localShowLog) console.log("renderToDom 1 (content):", content);

    const container = document.getElementById(localTargetHtmlId);
    if (!container) return null;

    const isCollection = Array.isArray(content) ||
        content instanceof NodeList ||
        content instanceof HTMLCollection;

    if (isCollection) {
        if (localAppendPosition === "prepend") {
            container.prepend(...content);
        } else {
            container.append(...content);
        }
    } else {
        if (localAppendPosition === "prepend") {
            container.prepend(content);
        } else {
            container.innerHTML = "";
            container.append(content);
        }
    }

    if (localShowLog) console.log("renderToDom 2 (mounted):", container);

    return container;
};

export { renderToDom };
export default renderToDom;
