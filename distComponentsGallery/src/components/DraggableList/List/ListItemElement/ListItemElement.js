import React from "react";
import styles from "../Styles/styles.module.scss";
import UseListItem from "../Hooks/UseListItem";
import MoreHorizIcon from "@cg-icons/MoreHorizon.svg";
import Dropdown from "../../../Dropdown/Dropdown";
import { createTranslate } from "../../Utils/createTranslate";
export default function ListItemElement({ listItemIndex, children, shouldDisplayKey }) {
    const { mouseDownHandler, isBeingDragged, itemPositionPreview, listRef, customStyle, dragIcon, moveToTopButton, moveToBottomButton, moveItemToTop, moveItemToBottom, highlightedIndex } = UseListItem({ listItemIndex });
    const highlightedStyles = listItemIndex === highlightedIndex ? styles.highlightedItem : "";
    return (React.createElement("li", { role: "listitem", key: listItemIndex, ref: listRef, className: `${styles.listItem} ${customStyle?.listItem || ""} ${highlightedStyles}`, style: {
            visibility: isBeingDragged ? "hidden" : "initial",
            transform: !isBeingDragged ? createTranslate(itemPositionPreview) : ""
        } },
        shouldDisplayKey ? `${listItemIndex + 1}.` : null,
        React.createElement("div", { className: `${styles.listItemContent} ${customStyle?.listItemContent || ""}` },
            dragIcon ? (React.createElement("div", { className: styles.iconContainer, onMouseDown: (e) => mouseDownHandler(e) }, dragIcon)) : null,
            React.createElement("div", { className: styles.listItemText, onMouseDown: (e) => mouseDownHandler(e) }, children),
            moveToTopButton || moveToBottomButton ? (React.createElement(Dropdown, { autowidth: true, dropdownElement: React.createElement(MoreHorizIcon, null), customStyle: styles, dropdownContent: React.createElement("div", null,
                    moveToTopButton && (React.createElement("div", { onClick: () => moveItemToTop(listItemIndex) }, moveToTopButton)),
                    moveToBottomButton && (React.createElement("div", { onClick: () => moveItemToBottom(listItemIndex) }, moveToBottomButton))) })) : null)));
}
