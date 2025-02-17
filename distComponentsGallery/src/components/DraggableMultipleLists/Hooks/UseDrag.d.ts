import { DragStartEvent, DragOverEvent } from "@dnd-kit/core";
import React from "react";
import { columnInfo, Item } from "../Types/Types";
type Props = {
    columns: columnInfo[];
    setColumns: React.Dispatch<React.SetStateAction<columnInfo[]>>;
    onChange?: (columns: columnInfo[]) => void;
    disabled: boolean;
};
export default function UseDrag({ columns, setColumns, onChange, disabled }: Props): {
    handleDragEnd: () => void;
    handleDragOver: (event: DragOverEvent) => void;
    handleDragStart: (event: DragStartEvent) => void;
    activeItem: Item | null;
    handleMoveAll: (column: columnInfo, columnIndex: number) => void;
};
export {};
