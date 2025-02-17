import React from "react";
import { Position } from "../../Types/types";
type Props = {
    listItemIndex: number;
};
export default function UseListItem({ listItemIndex }: Props): {
    mouseDownHandler: (e: React.MouseEvent) => void;
    isBeingDragged: boolean;
    itemPositionPreview: Position | null;
    listRef: React.MutableRefObject<HTMLElement | undefined>;
    customStyle: import("../../Types/types").customStyleClasses | undefined;
    dragIcon: React.ReactNode;
    moveToTopButton: React.ReactNode;
    moveToBottomButton: React.ReactNode;
    moveItemToTop: (itemToMoveIndex: number) => void;
    moveItemToBottom: (itemToMoveIndex: number) => void;
    highlightedIndex: number | null;
};
export {};
