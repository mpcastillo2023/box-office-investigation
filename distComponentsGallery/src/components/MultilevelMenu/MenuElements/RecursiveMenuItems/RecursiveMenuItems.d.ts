import React from "react";
import { MenuItem } from "../../Types";
import MultiLevelMenu from "../../MultiLevelMenu";
type Props = {
    menuItems: MenuItem[];
    leftBorderPositions: Record<string, number>;
    setLeftBorderPositions: React.Dispatch<React.SetStateAction<Record<string, number>>>;
    level: number;
    isParentLast: boolean;
    parentId?: string;
};
export default function RecursiveMenuItems({ menuItems, isParentLast, ...props }: Props & React.ComponentProps<typeof MultiLevelMenu>): React.JSX.Element[];
export {};
