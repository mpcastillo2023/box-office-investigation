import { SearchInput } from "@cg-components/SearchInput";
import React from "react";
type Props<T> = {
    dataTextProperty: keyof T;
    data: T[] | undefined;
    isLoading?: boolean;
    onChange: (value: string) => void;
    onSelect: (value: string) => void;
    noResultsText?: string;
} & Omit<React.ComponentProps<typeof SearchInput>, "onSelect">;
export default function UseQuickSearch<T extends object>(props: Props<T>): {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    focused: boolean;
    onFocusHandler: () => void;
    onBlurHandler: () => void;
    activeItemRef: React.MutableRefObject<HTMLElement | undefined>;
    currentFocusIndex: number;
    setCurrentFocusIndex: React.Dispatch<React.SetStateAction<number>>;
    keydownHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    onSearchChangeHandler: (newVal: string) => void;
    noResultsText: string;
    onChange: ((value: string) => void) & ((value: string) => void);
    onSelect: (value: string) => void;
    searchRef: React.RefObject<HTMLInputElement>;
};
export {};
