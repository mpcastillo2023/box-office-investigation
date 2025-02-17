import React, { ReactNode } from "react";
type Props<T> = {
    index: number;
    item: T;
    dataTextProperty: keyof T;
    isLoading?: boolean;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    onChange: (value: string) => void;
    activeItemRef: React.MutableRefObject<HTMLElement | undefined>;
    currentFocusIndex: number;
    setCurrentFocusIndex: React.Dispatch<React.SetStateAction<number>>;
    noResultsText: string;
    onSelect: (value: string) => void;
    renderListItem?: (data: T) => ReactNode;
};
export default function QuickResultItem<T extends object>({ index, item, dataTextProperty, setSearchQuery, onChange, activeItemRef, currentFocusIndex, setCurrentFocusIndex, onSelect, renderListItem }: Props<T>): React.JSX.Element;
export {};
