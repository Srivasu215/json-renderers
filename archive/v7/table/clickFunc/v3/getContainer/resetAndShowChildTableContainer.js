// Step 4: Ready the container for the new child table
const startFunc = ({ inChildTableContainer, inClickedRowDetails } = {}) => {
    const localChildTableContainer = inChildTableContainer;
    const localClickedRowDetails = inClickedRowDetails;

    localChildTableContainer.style.display = "";
    localChildTableContainer.dataset.activeRow = String(localClickedRowDetails.parentRowIndex);
    localChildTableContainer.dataset.fieldName = localClickedRowDetails.childColumnKey;
    localChildTableContainer.innerHTML = "";
    localChildTableContainer.childData = localClickedRowDetails.childTableData;

    return localChildTableContainer;
};

export default startFunc;
