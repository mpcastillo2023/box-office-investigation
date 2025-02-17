import { MenuItem, customStyleClasses } from "../../../Types";
import React from "react";
type Props = {
    menuItem: MenuItem;
    onMenuItemClick?: () => void;
    shouldRenderDot: boolean;
    isFirst: boolean;
    isLast: boolean;
    isParentLast: boolean;
    leftDotPadding?: number;
    level: number;
    customStyle?: customStyleClasses;
};
declare function MenuLink({ menuItem, onMenuItemClick, leftDotPadding, customStyle, shouldRenderDot, isFirst, isLast, level, isParentLast }: Props): React.JSX.Element;
export default MenuLink;
