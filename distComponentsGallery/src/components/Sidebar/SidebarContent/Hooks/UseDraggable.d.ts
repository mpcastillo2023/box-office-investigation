import React from "react";
type Props = {
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    collapsed: boolean;
    minWidth: number;
};
export default function UseDraggable({ setCollapsed, collapsed, minWidth }: Props): {
    width: number | null;
    isDragging: boolean;
    onDragHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, paddingLeft: number) => void;
    onDragEndHandler: () => void;
    onDragStartHandler: () => void;
};
export {};
