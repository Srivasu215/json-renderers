import getContainer from "./getContainer/index.js";
import createTable from "./createTable.js";

// Main click handler: only 2 clear steps from the outside
const clickFunc = ({
    inEvent,
    inData,
    inColumns,
    inRenderFunc,
    inTargetHtmlId
} = {}) => {
    const localEvent = inEvent;
    const localData = inData;
    const localColumns = inColumns;
    const localRenderFunc = inRenderFunc;
    const localTargetHtmlId = inTargetHtmlId;

    // 1. Get or prepare child table container
    const childTableContainer = getContainer({
        inEvent: localEvent,
        inTargetHtmlId: localTargetHtmlId,
        inColumns: localColumns,
        inData: localData
    });
    if (!childTableContainer) return;

    // 2. Create and render child table inside the container
    createTable({
        inChildTableContainer: childTableContainer,
        inRenderFunc: localRenderFunc
    });
};

export { clickFunc };
export default clickFunc;
