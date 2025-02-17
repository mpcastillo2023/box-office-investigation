import React from "react";
type customStyleClasses = {
    dropdownWrapper?: string;
    dropdownElement?: string;
    dropdownContent?: string;
    dropdownContainer?: string;
    overflowBottom?: string;
    dropdownContentFixed?: string;
};
type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleElementRect?: DOMRect;
    dropdownContent: React.ReactNode;
    autowidth: boolean;
    customStyle?: customStyleClasses;
    toggleDropdownHandler: () => void;
    customPosition?: {
        top: number;
        bottom: 0;
    };
    setIsOverflow?: React.Dispatch<React.SetStateAction<boolean>>;
    contentShouldCenter?: boolean;
    blueMode?: boolean;
};
export default function DropdownContent({ dropdownContent, toggleElementRect, isOpen, setIsOpen, autowidth, customStyle, customPosition, setIsOverflow, contentShouldCenter, blueMode }: Props): React.JSX.Element;
export {};
