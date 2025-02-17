import React, { ReactNode } from "react";
import { CustomStyles } from "../Types/Types";
type Props<T> = {
    dataTextProperty: keyof T;
    data: T[] | undefined;
    isLoading?: boolean;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    onChange: (value: string) => void;
    activeItemRef: React.MutableRefObject<HTMLElement | undefined>;
    currentFocusIndex: number;
    setCurrentFocusIndex: React.Dispatch<React.SetStateAction<number>>;
    noResultsText: string;
    onSelect: (value: string) => void;
    renderListItem?: (data: T) => ReactNode;
    customStyles?: CustomStyles;
};
export default function QuickSearchResults<T extends object>(props: Props<T>): React.JSX.Element;
export {};
