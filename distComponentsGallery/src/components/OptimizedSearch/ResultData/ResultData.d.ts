import React from "react";
import { MenuItem } from "@cg-components/MultilevelMenu/Types";
type Props = {
    showResults: boolean;
    filteredData: {
        children: MenuItem[];
        text?: string | undefined;
        href?: string | undefined;
        hrefTargetType?: "blank" | undefined;
        icon?: React.ReactNode;
        activeIcon?: React.ReactNode;
        defaultCollapsed?: boolean | undefined;
        customMenuItem?: React.ReactNode;
    }[];
    hasResults: boolean;
    notResultsText: string;
    flatData: MenuItem[];
    selectedIndex: number;
    resultsRef: React.MutableRefObject<HTMLDivElement | null>;
    isNavigating: boolean;
    onItemLinkClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    searchWidth: number;
    setSelectedUrl: (url: string) => void;
};
declare const ResultData: ({ filteredData, hasResults, flatData, notResultsText, selectedIndex, resultsRef, isNavigating, onItemLinkClick, searchWidth, setSelectedUrl }: Props) => React.JSX.Element;
export default ResultData;
