import React from "react";
import { Position } from "../../../Types/types";
type Props = {
    listRef: React.MutableRefObject<HTMLUListElement | undefined>;
};
export default function UseDrag({ listRef }: Props): {
    mouseUpHandler: () => void;
    mouseMoveHandler: (e: React.MouseEvent) => void;
    draggingItemPosition: Position | null;
    initialDraggingItemPosition: Position | null;
    draggedListItemRef: React.MutableRefObject<HTMLElement | undefined> | undefined;
    customStyle: import("../../../Types/types").customStyleClasses | undefined;
    dragIcon: React.ReactNode;
    movingToIndex: number | null;
};
export {};
