import React from "react";
import { MenuItem, customStyleClasses } from "../../../Types";
type Props = {
    menuItem: MenuItem;
    level: number;
    currentlyOpenedParentMenu: string | undefined;
    setCurrentlyOpenedParentMenu: React.Dispatch<React.SetStateAction<string | undefined>>;
    onMenuItemClick: (() => void) | undefined;
    parentId: string;
    menuItemChildren: MenuItem[];
    leftBorderPositions: Record<string, number>;
    setLeftBorderPositions: React.Dispatch<React.SetStateAction<Record<string, number>>>;
    isLast: boolean;
    customStyle?: customStyleClasses;
};
export default function MenuLevel(props: Props): React.JSX.Element;
export {};
