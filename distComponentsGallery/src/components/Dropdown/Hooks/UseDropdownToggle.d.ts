import React from "react";
type Props = {
    icon?: React.ReactNode;
    activeIcon?: React.ReactNode;
    disabled: boolean;
    onDropdownToggle?: (isOpen: boolean) => void;
};
export default function UseDropdownToggle({ icon, activeIcon, disabled, onDropdownToggle }: Props): {
    toggleElementRect: DOMRect | undefined;
    toggleElementRef: (node: Element | null) => void;
    currentIcon: React.ReactNode;
    toggleDropdownHandler: () => void;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOverflow: boolean;
    setIsOverflow: React.Dispatch<React.SetStateAction<boolean>>;
};
export {};
