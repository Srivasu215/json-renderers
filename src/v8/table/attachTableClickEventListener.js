import clickFunc from "./clickFunc/v3/index.js";

// Story 5: Attach click event listener for child table rendering
const startFunc = ({
    inTargetContainer,
    inData,
    inColumns,
    inRenderFunc,
    inTargetHtmlId
} = {}) => {
    const localTargetContainer = inTargetContainer;
    const localData = inData;
    const localColumns = inColumns;
    const localRenderFunc = inRenderFunc;
    const localTargetHtmlId = inTargetHtmlId;

    localTargetContainer.addEventListener('click', (event) => {
        clickFunc({
            inEvent: event,
            inData: localData,
            inColumns: localColumns,
            inRenderFunc: localRenderFunc,
            inTargetHtmlId: localTargetHtmlId
        });
    });
};

export default startFunc;
