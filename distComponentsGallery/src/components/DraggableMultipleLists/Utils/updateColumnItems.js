const updateColumnItems = ({ prevColumnIndex, newColumnIndex, prevItemIndex, newItemIndex, prevColumns, activeItem }) => {
    const isSameColumn = prevColumnIndex === newColumnIndex;
    const prevColumnItems = prevColumns[prevColumnIndex].items;
    const newColumnItems = isSameColumn
        ? prevColumnItems
        : prevColumns[newColumnIndex].items;
    prevColumnItems.splice(prevItemIndex, 1);
    const isLastIndex = newItemIndex === newColumnItems.length - 1;
    if (isLastIndex && !isSameColumn) {
        newColumnItems.push(activeItem);
    }
    else {
        newColumnItems.splice(newItemIndex, 0, activeItem);
    }
    const newColumns = [
        ...prevColumns.map((column) => {
            return { ...column };
        })
    ];
    if (isSameColumn) {
        newColumns[newColumnIndex].items = newColumnItems;
    }
    else {
        newColumns[prevColumnIndex].items = prevColumnItems;
        newColumns[newColumnIndex].items = newColumnItems;
    }
    return newColumns;
};
export default updateColumnItems;
