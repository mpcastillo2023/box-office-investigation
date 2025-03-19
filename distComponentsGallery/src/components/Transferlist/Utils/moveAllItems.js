function moveAllItems(columns, from, to) {
    const enabledItems = columns[from].filter((item) => !item.disabled);
    const disabledItems = columns[from].filter((item) => item.disabled);
    const newToColumn = columns[to].concat(enabledItems);
    const newColumns = {
        ...columns,
        [to]: newToColumn,
        [from]: disabledItems
    };
    return newColumns;
}
export default moveAllItems;
