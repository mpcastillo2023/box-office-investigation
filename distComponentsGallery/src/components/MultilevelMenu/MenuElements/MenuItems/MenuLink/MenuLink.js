import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../../styles/styles.module.scss";
import UseIsNestedLinkActive from "../../../Hooks/UseIsNestedLinkActive";
import UseGetElementDimension from "@cg-hooks/UseGetElementDimension";
function MenuLink({ menuItem, onMenuItemClick, leftDotPadding = 0, customStyle, shouldRenderDot, isFirst, isLast, level, isParentLast }) {
    const isNestedLinkActive = UseIsNestedLinkActive();
    const menuItemClass = `${customStyle?.customMenuItem || ""} ${styles.menuItem}`;
    const { rect, elementRef } = UseGetElementDimension();
    if (menuItem.customMenuItem)
        return React.createElement("li", { className: menuItemClass }, menuItem.customMenuItem);
    if (menuItem.href) {
        const isMenuActive = isNestedLinkActive(menuItem.href);
        const currentIcon = isMenuActive && menuItem.activeIcon ? menuItem.activeIcon : menuItem.icon;
        const activeClass = isMenuActive ? styles.activeMenuItem : "";
        const customActiveClass = isMenuActive
            ? customStyle?.customIsActive || ""
            : "";
        const isFirstDotClass = isFirst && level === 2 ? styles.isFirstDot : "";
        const isLastDotClass = isLast && (level === 2 || isParentLast) ? styles.isLastDot : "";
        const dotPosition = rect?.left ? rect.left - leftDotPadding : undefined;
        const isOnlyLinkClass = level === 1 ? styles.isOnlyLink : "";
        return (React.createElement(React.Fragment, null,
            React.createElement("li", { className: `${menuItemClass} ${activeClass} ${customActiveClass} ${isOnlyLinkClass}`, onClick: onMenuItemClick },
                shouldRenderDot ? (React.createElement("div", { className: `${styles.leftDots}`, style: {
                        left: dotPosition ? `-${dotPosition + 2}px` : 0
                    } })) : null,
                isFirstDotClass !== "" || isLastDotClass !== "" ? (React.createElement("div", { className: ` ${isFirstDotClass} ${isLastDotClass}`, style: {
                        left: dotPosition ? `-${dotPosition + 2}px` : 0
                    } })) : null,
                React.createElement(NavLink, { className: styles.menuItemLink, to: `${menuItem.href}`, ref: elementRef },
                    React.createElement(React.Fragment, null,
                        currentIcon,
                        menuItem.text ? (React.createElement("span", { className: `${styles.menuitemText}`, style: {
                                padding: currentIcon ? "" : 0
                            } }, menuItem.text)) : null)))));
    }
    else {
        throw Error("Link without href cannot be rendered");
    }
}
export default MenuLink;
