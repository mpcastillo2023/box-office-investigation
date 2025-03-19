function createColumnsFromIds(columnWithSelectedIds, data) {
    const columns = {};
    const tempData = [...data];
    for (let i = columnWithSelectedIds.length - 1; i > -1; i--) {
        const { selectedIds, title } = columnWithSelectedIds[i];
        let columnItems = [];
        if (i > 0) {
            selectedIds.forEach((id) => {
                const indexOfItem = tempData.findIndex((dataItem) => dataItem.id === id);
                const item = tempData.splice(indexOfItem, 1);
                if (item.length > 0)
                    columnItems.push(item[0]);
            });
        }
        else {
            columnItems = [...tempData];
        }
        columns[i.toString()] = {
            title,
            items: columnItems
        };
    }
    return columns;
}
export default createColumnsFromIds;
