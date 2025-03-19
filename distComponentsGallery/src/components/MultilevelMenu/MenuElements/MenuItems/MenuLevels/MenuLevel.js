import React from "react";
import styles from "../../../styles/styles.module.scss";
import RecursiveMenuItems from "../../RecursiveMenuItems/RecursiveMenuItems";
import ChevronDown from "@cg-icons/ChevronDown.svg";
import ChevronUp from "@cg-icons/ChevronUp.svg";
import UseMenuLevel from "./Hooks/UseMenuLevel";
export default function MenuLevel(props) {
    const { menuItem, level, menuItemChildren, setCurrentlyOpenedParentMenu, onMenuItemClick, parentId, setLeftBorderPositions, leftBorderPositions, isLast, customStyle } = props;
    const { iconToDisplay, open, setOpen, rect, elementRef, leftBorderDimension, leftPadding, isFirstLevel, leftBorderPosition } = UseMenuLevel(props);
    const childStatusClass = open ? "" : styles.closed;
    return (React.createElement("li", { className: `${styles.menuLevelContainer} ${customStyle?.customMenuLevelContainer || ""}` },
        React.createElement("button", { className: `${styles.collapseLevelButton} ${customStyle?.customIsActive || ""}`, onClick: () => {
                setOpen((prevState) => !prevState);
                setCurrentlyOpenedParentMenu(parentId);
            } },
            iconToDisplay ? (React.createElement("span", { role: "button", ref: elementRef }, iconToDisplay)) : null,
            React.createElement("span", { style: {
                    padding: isFirstLevel ? "" : "0px"
                }, className: styles.menuitemText }, menuItem.text),
            React.createElement("span", { className: styles.menuLevelChevron }, open ? React.createElement(ChevronUp, null) : React.createElement(ChevronDown, null))),
        React.createElement("ul", { className: `${styles.menu} ${styles.childLevel} ${customStyle?.customChildLevel || ""} ${childStatusClass}`, "aria-label": `menu-level-${level}`, style: {
                marginLeft: rect
                    ? `${rect.width + leftPadding}px`
                    : `${leftPadding}px`,
                padding: isFirstLevel ? "" : "0px",
                marginTop: open ? "10px" : ""
            } },
            isFirstLevel ? (React.createElement("div", { className: `${styles.leftLine} ${styles.openedLevelLeftBorder}`, style: {
                    left: leftBorderPosition ? `-${leftBorderPosition}px` : ""
                }, ref: leftBorderDimension.elementRef })) : null,
            React.createElement(RecursiveMenuItems, { isParentLast: isLast, menuItems: menuItemChildren, level: level + 1, parentId: parentId, customStyle: customStyle, onMenuItemClick: onMenuItemClick, leftBorderPositions: leftBorderPositions, setLeftBorderPositions: setLeftBorderPositions }))));
}
