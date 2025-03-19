import React from "react";
import { Portal } from "../../../Portal/Portal";
import { createTranslate } from "../../Utils/createTranslate";
import UseDrag from "./Hooks/UseDrag";
import styles from "./Styles/styles.module.scss";
export default function DraggingItem({ children, shouldDisplayKey, listRef }) {
    const { mouseUpHandler, mouseMoveHandler, draggingItemPosition, initialDraggingItemPosition, draggedListItemRef, customStyle, dragIcon, movingToIndex } = UseDrag({ listRef });
    return (React.createElement(Portal, { className: styles.draggedItemContainer, append: false },
        React.createElement("div", { onMouseMove: (e) => mouseMoveHandler(e), onMouseUp: mouseUpHandler, style: {
                height: "100%",
                width: "100%"
            }, role: "dialog" },
            React.createElement("div", { style: {
                    transform: createTranslate(initialDraggingItemPosition),
                    width: draggedListItemRef?.current?.clientWidth || "",
                    height: draggedListItemRef?.current?.clientHeight || ""
                } }, draggingItemPosition && (React.createElement("div", { style: {
                    transform: createTranslate(draggingItemPosition)
                }, className: `${styles.listItem} ${customStyle?.listItem || ""} ` },
                movingToIndex !== null && shouldDisplayKey
                    ? `${movingToIndex + 1}.`
                    : null,
                React.createElement("div", { className: `${styles.draggedItemContent} ${customStyle?.listItemContent || ""}` },
                    dragIcon,
                    React.createElement("div", { className: styles.draggedItemText }, children))))))));
}
