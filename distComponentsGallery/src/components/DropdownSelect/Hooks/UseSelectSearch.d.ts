import React from "react";
import { SelectOption } from "../Types/Types";
type Props = {
    optionList: SelectOption[];
    selectedOption?: SelectOption;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClickOptionHandler: (optionValue: string | number | boolean) => void;
};
export default function UseSelectSearch(props: Props): {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    activeItemRef: React.MutableRefObject<HTMLElement | undefined>;
    currentFocusIndex: number;
    setCurrentFocusIndex: React.Dispatch<React.SetStateAction<number>>;
    keydownHandler: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    searchRef: React.RefObject<HTMLInputElement>;
    filteredOptionList: SelectOption[];
    searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export {};
