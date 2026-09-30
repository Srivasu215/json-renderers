// Step 3: Did user click the same row again? Close it (toggle)
const startFunc = ({ inChildTableContainer, inParentRowIndex } = {}) => {
    const localChildTableContainer = inChildTableContainer;
    const localParentRowIndex = inParentRowIndex;

    const isMatchingActiveRow = localChildTableContainer.dataset.activeRow === String(localParentRowIndex);
    const isCurrentlyVisible = localChildTableContainer.style.display !== "none";

    if (isMatchingActiveRow && isCurrentlyVisible) {
        localChildTableContainer.style.display = "none";
        return true;
    }

    return false;
};

export default startFunc;
