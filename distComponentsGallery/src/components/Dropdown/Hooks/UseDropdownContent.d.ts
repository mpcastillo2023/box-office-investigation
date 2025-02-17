import React from "react";
type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleElementRect: DOMRect | undefined;
    contentShouldCenter?: boolean;
    customPosition?: {
        top: number;
        bottom: 0;
    };
};
type elementPositionStyle = {
    left?: number;
    right?: number;
    bottom?: number;
};
export default function UseDropdown({ isOpen, setIsOpen, customPosition, toggleElementRect, contentShouldCenter }: Props): {
    dropdownContentRef: (node: Element | null) => void;
    position: elementPositionStyle;
    maxHeight: number | null;
    tooltipHandlePosition: string;
    isOverflowToBottom: boolean;
};
export {};
