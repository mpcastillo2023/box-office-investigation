import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import styles from "../../../Styles/styles.module.scss";
import DragIcon from "@cg-icons/DragIcon.svg";
export default function DraggableListItem({ id, itemText, customStyle, isActive = false }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });
    const style = {
        transform: typeof transform?.x !== "undefined" && typeof transform?.y !== "undefined"
            ? `translate(${transform?.x}px , ${transform?.y}px)`
            : "",
        transition
    };
    const activeClass = isActive ? styles.isActive : "";
    return (React.createElement("li", { className: `${styles.listItem} ${customStyle?.listItem} ${activeClass}`, ref: setNodeRef, style: style, ...attributes, ...listeners },
        React.createElement(DragIcon, null),
        React.createElement("span", null, itemText)));
}
