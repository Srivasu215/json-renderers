// Story 1: Prepare table data payload as JSON
const startFunc = ({
    inColumns,
    inData,
    inColGroup,
    inFooterData = [],
    inConfig = {}
} = {}) => {
    const localColumns = inColumns;
    const localData = inData;
    const localColGroup = inColGroup;
    const localFooterData = inFooterData;
    const localConfig = inConfig;

    return {
        columns: localColumns,
        data: localData,
        colGroup: localColGroup,
        foot: localFooterData,
        title: localConfig?.title ?? localConfig?.caption?.text ?? "",
        footerText: localConfig?.footerText ?? ""
    };
};

export default startFunc;
