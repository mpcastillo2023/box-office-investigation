import React from "react";
import DraggableMultipleLists from "../DraggableMultipleLists";
import { Item, columnInfo } from "../Types/Types";
export default function Columns({ customStyle, disabled, columns, activeItem, handleMoveAll }: React.ComponentProps<typeof DraggableMultipleLists> & {
    columns: columnInfo[];
    activeItem: Item | null;
    handleMoveAll: (column: columnInfo, columnIndex: number) => void;
}): React.JSX.Element;
