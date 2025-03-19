import React, { useContext, useRef } from "react";
import DraggingItem from "./DraggedItem/DraggingItem";
import ListItemElement from "./ListItemElement/ListItemElement";
import { DraggedContext } from "../Provider/DraggedProvider";
import styles from "../Styles/styles.module.scss";
import ListItemElementDisabled from "./ListItemElementDisabled/ListItemElementDisabled";
export default function List({ shouldDisplayKey, listMaxHeight }) {
    const { listItems, draggingIndex } = useContext(DraggedContext);
    const listRef = useRef();
    const renderList = () => {
        return listItems.map((listItem, index) => {
            if (!listItem.disabled) {
                return (React.createElement(ListItemElement, { key: listItem.key, listItemIndex: index, shouldDisplayKey: shouldDisplayKey },
                    listItem.item,
                    draggingIndex === index && (React.createElement(DraggingItem, { shouldDisplayKey: shouldDisplayKey, listRef: listRef }, listItem.item))));
            }
        });
    };
    const renderListDisabled = () => {
        const disabledItems = listItems.filter((item) => item.disabled);
        return disabledItems.map((listItem, index) => {
            return (React.createElement(ListItemElementDisabled, { key: index, listItemIndex: index, shouldDisplayKey: shouldDisplayKey }, listItem.item));
        });
    };
    return (React.createElement("ul", { ref: listRef, className: styles.draggableList, style: {
            maxHeight: listMaxHeight
        } },
        renderList(),
        renderListDisabled()));
}
