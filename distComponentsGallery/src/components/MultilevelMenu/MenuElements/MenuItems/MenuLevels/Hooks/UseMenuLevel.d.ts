import React from "react";
import MenuLevel from "../MenuLevel";
type Props = React.ComponentProps<typeof MenuLevel>;
export default function UseMenuLevel({ menuItem, level, setCurrentlyOpenedParentMenu, currentlyOpenedParentMenu, parentId, setLeftBorderPositions }: Props): {
    iconToDisplay: React.ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    rect: DOMRect | undefined;
    elementRef: (node: Element | null) => void;
    leftBorderDimension: {
        elementRef: (node: Element | null) => void;
        rect: DOMRect | undefined;
        node: Element | null;
    };
    leftPadding: number;
    isFirstLevel: boolean;
    leftBorderPosition: number | undefined;
};
export {};
