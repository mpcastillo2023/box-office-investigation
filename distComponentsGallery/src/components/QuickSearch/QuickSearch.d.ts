import React, { ReactNode } from "react";
import { SearchInput } from "..";
import { CustomStyles } from "./Types/Types";
type Props<T> = {
    dataTextProperty: keyof T;
    data: T[] | undefined;
    isLoading?: boolean;
    onChange: (value: string) => void;
    onSelect: (value: string) => void;
    noResultsText?: string;
    renderListItem?: (data: T) => ReactNode;
    customStyles?: CustomStyles;
} & Omit<React.ComponentProps<typeof SearchInput>, "onSelect">;
export default function QuickSearch<T extends object>(props: Props<T>): React.JSX.Element;
export {};
