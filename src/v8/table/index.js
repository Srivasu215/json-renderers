import buildTableDataAsJson from "./buildTableDataAsJson.js";
import buildTableStructureSpec from "./buildTableStructureSpec.js";
import buildTableDomElement from "./buildTableDomElement.js";
import resolveTargetContainer from "./resolveTargetContainer.js";
import attachTableClickEventListener from "./attachTableClickEventListener.js";
import deriveColumnsFromData from "../common/deriveColumnsFromData.js";

import skeletonJson from './skeleton.json' with { type: 'json' };
import fragmentsJson from './fragments.json' with { type: 'json' };

// --- Story of Table Render ---
const startFunc = ({
    targetHtmlId,
    inTargetHtmlId,
    inColumns,
    inData,
    inColGroup,
    inFooterData = [],
    inConfig = {},
    inSkeletonType = "default",
    inShowLog = false
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId ?? targetHtmlId;
    const localData = inData ?? [];
    const localColumns = inColumns ?? deriveColumnsFromData({ inData: localData });
    const localColGroup = inColGroup;
    const localFooterData = inFooterData;
    const localConfig = inConfig;
    const localSkeletonType = inSkeletonType;
    const localShowLog = inShowLog;

    try {
        // Story 1: Prepare table data payload as JSON
        const tableDataAsJson = buildTableDataAsJson({
            inColumns: localColumns,
            inData: localData,
            inColGroup: localColGroup,
            inFooterData: localFooterData,
            inConfig: localConfig
        });

        // Story 2: Build table structure specification from skeleton and fragments
        const tableStructureSpec = buildTableStructureSpec({
            inSkeletonType: localSkeletonType,
            inSkeletonJson: skeletonJson,
            inFragmentsJson: fragmentsJson,
            inShowLog: localShowLog
        });

        // Story 3: Generate table DOM element from structure and data
        const renderedTableElement = buildTableDomElement({
            inStructureJson: tableStructureSpec,
            inDataAsJson: tableDataAsJson,
            inShowLog: localShowLog
        });

        // Story 4: Resolve target HTML container
        const targetContainer = resolveTargetContainer({
            inTargetHtmlId: localTargetHtmlId
        });
        if (!targetContainer) return;

        targetContainer.innerHTML = "";

        // Story 5: Attach click event listener for child table rendering
        attachTableClickEventListener({
            inTargetContainer: targetContainer,
            inData: localData,
            inColumns: localColumns,
            inRenderFunc: startFunc,
            inTargetHtmlId: localTargetHtmlId
        });

        // Story 6: Append rendered table into target container
        targetContainer.append(renderedTableElement);

    } catch (error) {
        console.log("error : ", error);
    }
};

export default startFunc;
