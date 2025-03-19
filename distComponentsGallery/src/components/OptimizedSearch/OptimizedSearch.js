import React from "react";
import { SearchInput } from "..";
import styles from "./Styles/styles.module.scss";
import ResultData from "./ResultData/ResultData";
import UseGetElementDimension from "@cg-hooks/UseGetElementDimension";
import { useOptimizedSearch } from "./Hook/UseOptimizedSearch";
/**
 * Optimized search input component provides an input field for search functionality.
 * Used to search Menu items
 * @param {Props} props - Props for the OptimizedSearch component.
 * @returns {JSX.Element}
 */
export default function OptimizedSearch({ placeholder, notResultsText, data, className, focusOnRender, customPlaceholder, searchInputClass }) {
    const { searchValue, onChange, onClick, searchInputRef, resultsRef, showResults, hasResults, filteredData, flatData, selectedIndex, isNavigating, onItemLinkClick, setSelectedUrl } = useOptimizedSearch({ data: data, focusOnRender: focusOnRender });
    const showResultsClass = showResults ? styles.showResults : "";
    const { elementRef, rect } = UseGetElementDimension();
    return (React.createElement("div", { className: `${styles.container} ${className || ""}` },
        React.createElement("div", { className: styles.searchInputContainer },
            React.createElement(SearchInput, { placeholder: placeholder, value: searchValue, onChange: onChange, onClick: onClick, searchRef: searchInputRef, className: `${showResultsClass} ${styles.inputElement} ${searchInputClass || ""}`, debounce: false, hasClearButton: true, searchContainerRef: elementRef, customPlaceholder: customPlaceholder })),
        showResults ? (React.createElement(ResultData, { filteredData: filteredData, flatData: flatData, hasResults: hasResults, isNavigating: isNavigating, notResultsText: notResultsText, onItemLinkClick: onItemLinkClick, resultsRef: resultsRef, selectedIndex: selectedIndex, showResults: showResults, searchWidth: rect?.width || 0, setSelectedUrl: setSelectedUrl })) : null));
}
