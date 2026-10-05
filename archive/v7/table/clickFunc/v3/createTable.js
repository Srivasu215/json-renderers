import deriveColumnsFromData from "../../../common/deriveColumnsFromData.js";

// Step 2: Create the child table inside the container
const startFunc = ({ inChildTableContainer, inContainer, inRenderFunc } = {}) => {
    const localChildTableContainer = inChildTableContainer;
    const localContainer = inContainer;
    const localRenderFunc = inRenderFunc;

    const targetContainer = localChildTableContainer || localContainer;
    const childTableData = targetContainer?.childData;

    localRenderFunc({
        inTargetHtmlId: targetContainer,
        inColumns: deriveColumnsFromData({ inData: childTableData }),
        inData: childTableData,
        inSkeletonType: "tableOnly"
    });
};

export default startFunc;
