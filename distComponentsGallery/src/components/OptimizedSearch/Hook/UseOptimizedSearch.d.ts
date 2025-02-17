import { MenuItem } from "@cg-components/MultilevelMenu/Types";
type Props = {
    data: MenuItem[];
    focusOnRender?: boolean;
};
export declare const useOptimizedSearch: ({ data, focusOnRender }: Props) => {
    searchValue: string;
    showResults: boolean;
    selectedIndex: number;
    resultsRef: import("react").MutableRefObject<HTMLDivElement | null>;
    searchInputRef: import("react").MutableRefObject<HTMLInputElement | null>;
    filteredData: {
        children: MenuItem[];
        text?: string;
        href?: string;
        hrefTargetType?: "blank";
        icon?: import("react").ReactNode;
        activeIcon?: import("react").ReactNode;
        defaultCollapsed?: boolean;
        customMenuItem?: import("react").ReactNode;
    }[];
    onChange: (value: string) => void;
    onClick: () => void;
    hasResults: boolean;
    setSearchValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    flatData: MenuItem[];
    isNavigating: boolean;
    onItemLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    searchContainerRef: import("react").MutableRefObject<HTMLFormElement | null>;
    searchWidth: number;
    setSelectedUrl: import("react").Dispatch<import("react").SetStateAction<string>>;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export {};
