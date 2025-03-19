import React, { useState } from "react";
import UseDrag from "./Hooks/UseDrag";
import { DndContext, DragOverlay, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import DraggableListItem from "./Columns/ListContainer/DragglableListItem/DraggableListItem";
import Columns from "./Columns/Columns";
/**
 * DraggableMultipleLists component allows the user to reorder multiple lists in a draggable fashion.
 * It accepts column configuration and provides state management for the draggable behavior.
 * This component works in two modes: With and Without State, determined by the presence of the `setColumns` prop.
 *
 * @param {Props} props - Props for the DraggableMultipleLists component.
 * @returns {JSX.Element}
 */
export default function DraggableMultipleLists({ customStyle, disabled = false, defaultValue = [], ...props }) {
    const [stateColumns, setColumns] = useState(defaultValue);
    const columns = props.value ? props.value : stateColumns;
    const { handleDragEnd, handleDragOver, handleDragStart, activeItem, handleMoveAll } = UseDrag({
        columns,
        onChange: props.onChange,
        disabled,
        setColumns
    });
    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }));
    if (disabled) {
        return (React.createElement(Columns, { customStyle: customStyle, disabled: disabled, defaultValue: defaultValue, activeItem: activeItem, handleMoveAll: handleMoveAll, columns: columns, ...props }));
    }
    return (React.createElement(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragStart: handleDragStart, onDragEnd: handleDragEnd, onDragOver: handleDragOver },
        React.createElement(Columns, { customStyle: customStyle, disabled: disabled, defaultValue: defaultValue, activeItem: activeItem, handleMoveAll: handleMoveAll, columns: columns, ...props }),
        React.createElement(DragOverlay, { style: { border: "none" } }, activeItem ? (React.createElement(DraggableListItem, { itemText: activeItem.itemText, id: activeItem.id, customStyle: customStyle })) : null)));
}
