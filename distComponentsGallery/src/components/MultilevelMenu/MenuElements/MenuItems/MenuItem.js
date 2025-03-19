import React from "react";
import MenuLevel from "./MenuLevels/MenuLevel";
import MenuItemLink from "./MenuLink/MenuLink";
export default function MenuItemElement({ menuItems, menuItem, level, index, parentId, customStyle, onMenuItemClick, currentlyOpenedParentMenu, setCurrentlyOpenedParentMenu, leftBorderPositions, setLeftBorderPositions, isParentLast }) {
    if (menuItem.children && menuItem.children.length > 0) {
        const isLast = index === menuItems.length - 1;
        return (React.createElement(MenuLevel, { isLast: isLast, key: `${menuItem.href}${index}${menuItem.text}`, menuItem: menuItem, menuItemChildren: menuItem.children, level: level, currentlyOpenedParentMenu: currentlyOpenedParentMenu, onMenuItemClick: onMenuItemClick, setCurrentlyOpenedParentMenu: setCurrentlyOpenedParentMenu, leftBorderPositions: leftBorderPositions, setLeftBorderPositions: setLeftBorderPositions, parentId: parentId || `${level}-${index}`, customStyle: customStyle }));
    }
    else {
        const isFirst = index === 0;
        const isLast = index === menuItems.length - 1;
        const shouldRenderDot = level > 1;
        return (React.createElement(MenuItemLink, { isParentLast: isParentLast, key: `${menuItem.href}${index}${menuItem.text}`, menuItem: menuItem, onMenuItemClick: onMenuItemClick, customStyle: customStyle, leftDotPadding: parentId ? leftBorderPositions[parentId] : undefined, shouldRenderDot: shouldRenderDot, isLast: isLast, isFirst: isFirst, level: level }));
    }
}
