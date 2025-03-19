import React, { useState } from "react";
import MenuItemElement from "../MenuItems/MenuItem";
export default function RecursiveMenuItems({ menuItems, isParentLast, ...props }) {
    const [currentlyOpenedParentMenu, setCurrentlyOpenedParentMenu] = useState();
    return menuItems?.map((menuItem, index) => {
        return (React.createElement(MenuItemElement, { isParentLast: isParentLast, key: index, ...props, menuItem: menuItem, index: index, currentlyOpenedParentMenu: currentlyOpenedParentMenu, setCurrentlyOpenedParentMenu: setCurrentlyOpenedParentMenu, menuItems: menuItems }));
    });
}
