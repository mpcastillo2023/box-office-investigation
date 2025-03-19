function createColumnsFromSelectedIds(leftColumn, rightColumnIds) {
    const leftColumnWithIds = [];
    const rightColumnWithIds = [];
    for (let i = 0; i < leftColumn.length; i++) {
        const item = leftColumn[i];
        if (rightColumnIds.includes(item.id)) {
            rightColumnWithIds.push(item);
        }
        else {
            leftColumnWithIds.push(item);
        }
    }
    const columns = {
        leftColumn: leftColumnWithIds,
        rightColumn: rightColumnWithIds
    };
    return columns;
}
export default createColumnsFromSelectedIds;
