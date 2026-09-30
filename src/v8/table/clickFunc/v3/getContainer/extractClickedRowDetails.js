// Step 1: Who clicked what? (Resolve parent row, column key, and child table data)
const startFunc = ({ inEvent, inColumns, inData } = {}) => {
    const localEvent = inEvent;
    const localColumns = inColumns;
    const localData = inData;

    const clickedButton = localEvent?.target?.closest("button");
    if (!clickedButton) return null;

    const parentRow = clickedButton.closest("tr");
    const parentCell = clickedButton.closest("td");
    if (!parentRow || !parentCell) return null;

    const parentRowIndex = parentRow.sectionRowIndex;
    const childColumnKey = localColumns?.[parentCell.cellIndex]?.key;
    const childTableData = localData?.[parentRowIndex]?.[childColumnKey];

    if (!Array.isArray(childTableData) || childTableData.length === 0) return null;

    return {
        parentRowIndex,
        childColumnKey,
        childTableData
    };
};

export default startFunc;
