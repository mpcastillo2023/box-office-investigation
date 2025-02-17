import React from "react";
import { customStyleClasses, MenuItem } from "./Types";
type Props = {
    /**
     * Array of menu items to be rendered in the menu.
     * @param {MenuItem[]}
     */
    menuItems: MenuItem[];
    /**
     * Optional custom styles for various elements of the menu.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
    /**
     * Callback function to be called when a menu item is clicked.
     * @param {() => void}
     */
    onMenuItemClick?: () => void;
};
/**
 * MultiLevelMenu component that allows for nested menu items.
 * The menu items can have children, and custom styles can be applied to various parts of the menu.
 *
 * @param {Props} props - Props for the MultiLevelMenu component.
 * @returns {JSX.Element}
 */
declare function MultiLevelMenu({ menuItems, customStyle, onMenuItemClick }: Props): React.JSX.Element;
export default MultiLevelMenu;
