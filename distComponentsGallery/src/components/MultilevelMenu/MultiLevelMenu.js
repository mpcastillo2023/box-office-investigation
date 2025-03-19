import React, { useState } from "react";
import styles from "./styles/styles.module.scss";
import RecursiveMenuItems from "./MenuElements/RecursiveMenuItems/RecursiveMenuItems";
/**
 * MultiLevelMenu component that allows for nested menu items.
 * The menu items can have children, and custom styles can be applied to various parts of the menu.
 *
 * @param {Props} props - Props for the MultiLevelMenu component.
 * @returns {JSX.Element}
 */
function MultiLevelMenu({ menuItems, customStyle, onMenuItemClick }) {
    const [leftBorderPositions, setLeftBorderPositions] = useState({});
    return (React.createElement("ul", { className: `${styles.menu} ${customStyle?.customMenu}` },
        React.createElement(RecursiveMenuItems, { isParentLast: false, menuItems: menuItems, level: 1, customStyle: customStyle, onMenuItemClick: onMenuItemClick, leftBorderPositions: leftBorderPositions, setLeftBorderPositions: setLeftBorderPositions })));
}
export default MultiLevelMenu;
