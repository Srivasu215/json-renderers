import renderFunc from "./render/index.js";

const createMethods = ({ inTable } = {}) => {
    const localTable = inTable;
    const activeColumns = localTable.store.library.activeColumns;

    const data = localTable.store.library.stateData;

    const colGroup = localTable.store.library.colGroup;

    const footerData = localTable.store.library.footerData;

    const config = localTable.store.config;

    const render = ({
        targetHtmlId,
        type = "table",
        inType,
        inSkeletonType,
        inTabs
    } = {}) => {
        const localTargetHtmlId = targetHtmlId;
        const localType = inType ?? type;
        const localSkeletonType = inSkeletonType;
        const localTabs = inTabs;

        return renderFunc({
            targetHtmlId: localTargetHtmlId,
            type: localType,
            inColumns: activeColumns,
            inData: data,
            inTabs: localTabs,
            inColGroup: colGroup,
            inFooterData: footerData,
            inConfig: config,
            inSkeletonType: localSkeletonType
        });
    };

    return { render };
};

export { createMethods };