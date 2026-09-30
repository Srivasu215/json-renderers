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
        type = "table"
    } = {}) => {
        const localTargetHtmlId = targetHtmlId ?? localTable?.containerId;
        const localType = type;

        return renderFunc({
            inTargetHtmlId: localTargetHtmlId,
            inType: localType,
            inColumns: activeColumns,
            inData: data,
            inColGroup: colGroup,
            inFooterData: footerData,
            inConfig: config
        });
    };

    return { render };
};

export { createMethods };