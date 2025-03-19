import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import React from "react";
import DraggableListItem from "./DragglableListItem/DraggableListItem";
import styles from "../../Styles/styles.module.scss";
import { Button } from "@cg-components/Button";
export default function ListContainer({ id, column, idsOfItems, customStyle, activeItem, handleMoveAll, disabled }) {
    const { setNodeRef } = useDroppable({
        id: id.toString()
    });
    const renderSingleItem = (column) => {
        return column.map((item) => {
            const isActive = item.id === activeItem?.id;
            return (React.createElement(DraggableListItem, { itemText: item.itemText, key: item.id, id: item.id, customStyle: customStyle, isActive: isActive }));
        });
    };
    return (React.createElement("div", { key: id, className: `${styles.singleListContainer} ${customStyle?.singleListContainer}` },
        React.createElement("h6", { className: `${styles.singleListHeader} ${customStyle?.singleListHeader}` }, column.title),
        React.createElement(SortableContext, { items: idsOfItems, id: id.toString(), strategy: verticalListSortingStrategy },
            React.createElement("ul", { className: `${styles.list} ${customStyle?.list}`, ref: setNodeRef }, renderSingleItem(column.items))),
        column.hasButton && column.items.length > 0 ? (React.createElement("div", { className: styles.buttonContainer },
            React.createElement(Button, { className: styles.buttonMoveTo, onClick: () => handleMoveAll(column, id), disabled: disabled }, column.buttonText))) : null));
}
