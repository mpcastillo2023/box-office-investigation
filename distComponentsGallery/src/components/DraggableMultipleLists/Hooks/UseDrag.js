import { useState } from "react";
import updateColumnItems from "../Utils/updateColumnItems";
export default function UseDrag({ columns, setColumns, onChange, disabled }) {
    const [activeItem, setActiveItem] = useState(null);
    function handleDragStart(event) {
        if (!disabled) {
            const { current } = event.active.data;
            const activeItemContainerId = current?.sortable.containerId;
            const activeItemIndex = current?.sortable.index;
            if (activeItemContainerId && activeItemIndex > -1) {
                setActiveItem(columns[activeItemContainerId].items[activeItemIndex]);
            }
        }
    }
    function handleDragOver(event) {
        if (!disabled) {
            const { active, over } = event;
            const isNotOverAnything = typeof over?.id === "undefined" || active.id === over.id || !activeItem;
            if (isNotOverAnything)
                return;
            const activeSortable = active.data.current?.sortable;
            const overSortable = over.data.current?.sortable;
            const prevColumnIndex = parseInt(activeSortable?.containerId);
            const newColumnIndex = parseInt(overSortable?.containerId);
            const newColumnIsNotEmpty = !isNaN(prevColumnIndex) && !isNaN(newColumnIndex);
            const newColumnIsEmpty = !isNaN(prevColumnIndex);
            if (newColumnIsNotEmpty) {
                const newItemIndex = overSortable?.index;
                const prevItemIndex = activeSortable?.index;
                if (onChange) {
                    onChange(updateColumnItems({
                        prevColumnIndex,
                        newColumnIndex,
                        newItemIndex,
                        prevItemIndex,
                        prevColumns: columns,
                        activeItem
                    }));
                }
                else {
                    setColumns((prevColumns) => {
                        return updateColumnItems({
                            prevColumnIndex,
                            newColumnIndex,
                            newItemIndex,
                            prevItemIndex,
                            prevColumns,
                            activeItem
                        });
                    });
                }
            }
            else if (newColumnIsEmpty) {
                const newColumnIndex = over.id;
                const isSameColumn = prevColumnIndex === newColumnIndex;
                if (!isSameColumn) {
                    if (onChange) {
                        const prevItemIndex = activeSortable?.index;
                        const newItemIndex = columns[newColumnIndex].items.length;
                        onChange(updateColumnItems({
                            prevColumnIndex,
                            newColumnIndex,
                            newItemIndex,
                            prevItemIndex,
                            prevColumns: columns,
                            activeItem
                        }));
                    }
                    else {
                        setColumns((prevColumns) => {
                            const prevItemIndex = activeSortable?.index;
                            const newItemIndex = prevColumns[newColumnIndex].items.length;
                            return updateColumnItems({
                                prevColumnIndex,
                                newColumnIndex,
                                newItemIndex,
                                prevItemIndex,
                                prevColumns,
                                activeItem
                            });
                        });
                    }
                }
            }
        }
    }
    function handleDragEnd() {
        if (!disabled) {
            setActiveItem(null);
            if (onChange) {
                onChange(columns);
            }
        }
    }
    function handleMoveAll(column, columnIndex) {
        if (column.hasButton) {
            if (onChange) {
                const newColumns = [
                    ...columns.map((column) => {
                        return { ...column, items: [...column.items] };
                    })
                ];
                newColumns[column.buttonIndexToMoveTo].items = [
                    ...newColumns[column.buttonIndexToMoveTo].items,
                    ...newColumns[columnIndex].items
                ];
                newColumns[columnIndex].items = [];
                onChange(newColumns);
            }
            else {
                setColumns((prevColumns) => {
                    const newColumns = [
                        ...prevColumns.map((column) => {
                            return { ...column };
                        })
                    ];
                    newColumns[columnIndex].items = [];
                    newColumns[column.buttonIndexToMoveTo].items = [
                        ...prevColumns[column.buttonIndexToMoveTo].items,
                        ...prevColumns[columnIndex].items
                    ];
                    return newColumns;
                });
            }
        }
    }
    return {
        handleDragEnd,
        handleDragOver,
        handleDragStart,
        activeItem,
        handleMoveAll
    };
}
