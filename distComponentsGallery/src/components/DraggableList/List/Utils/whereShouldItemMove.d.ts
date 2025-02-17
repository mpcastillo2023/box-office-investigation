import { Position } from "../../Types/types";
export declare const whereShouldItemMove: (listRefCurrent: HTMLElement, mousePosition: Position, listItemIndex: number, movingToIndex: number, itemPositionPreview: Position | null) => {
    shouldMoveUp: boolean;
    shouldMoveDown: boolean;
    elementAlreadyMoved: boolean;
};
