function moveSomeItems(itemsToMove, columns, from, to) {
    const itemsToMoveId = itemsToMove.map((item) => item.id);
    const newToColumn = columns[to].concat(itemsToMove);
    const newFromColumn = columns[from].filter((item) => !itemsToMoveId.includes(item.id));
    const newColumns = {
        ...columns,
        [from]: newFromColumn,
        [to]: newToColumn
    };
    return newColumns;
}
export default moveSomeItems;
