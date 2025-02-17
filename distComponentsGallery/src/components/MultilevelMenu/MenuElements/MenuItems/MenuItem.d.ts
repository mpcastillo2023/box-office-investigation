import MultiLevelMenu from "@cg-components/MultilevelMenu/MultiLevelMenu";
import { MenuItem } from "@cg-components/MultilevelMenu/Types";
import React from "react";
type Props = {
    menuItems: MenuItem[];
    menuItem: MenuItem;
    level: number;
    index: number;
    parentId?: string;
    leftDotPadding?: number;
    isParentLast: boolean;
    currentlyOpenedParentMenu: string | undefined;
    setCurrentlyOpenedParentMenu: React.Dispatch<React.SetStateAction<string | undefined>>;
    leftBorderPositions: Record<string, number>;
    setLeftBorderPositions: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};
export default function MenuItemElement({ menuItems, menuItem, level, index, parentId, customStyle, onMenuItemClick, currentlyOpenedParentMenu, setCurrentlyOpenedParentMenu, leftBorderPositions, setLeftBorderPositions, isParentLast }: Props & React.ComponentProps<typeof MultiLevelMenu>): React.JSX.Element;
export {};
