import React from "react";
import { SearchInput } from "..";
import styles from "./Styles/styles.module.scss";
import QuickSearchResults from "./Results/QuickSearchResults";
import UseQuickSearch from "./Hooks/UseQuickSearch";
export default function QuickSearch(props) {
    const { searchQuery, setSearchQuery, focused, onFocusHandler, onBlurHandler, activeItemRef, currentFocusIndex, setCurrentFocusIndex, keydownHandler, onSearchChangeHandler, noResultsText, onChange, onSelect, searchRef } = UseQuickSearch(props);
    const searchInputStyles = !props.isLoading && searchQuery.trim().length > 0 && focused
        ? styles.searchInputWithValue
        : styles.searchInput;
    return (React.createElement("div", { className: `${styles.quickSearchWrapper} ${props.customStyles?.customQuickSearchWrapper || ""}` },
        React.createElement(SearchInput, { placeholder: props.placeholder, debounce: props.debounce, value: searchQuery, onChange: onSearchChangeHandler, className: `${searchInputStyles} ${props.customStyles?.customSearchInput || props.className}`, onFocus: onFocusHandler, onBlur: onBlurHandler, onKeyDown: keydownHandler, searchRef: searchRef, iconPosition: "start" }),
        searchQuery.trim().length > 0 && focused ? (React.createElement(QuickSearchResults, { setSearchQuery: setSearchQuery, ...props, currentFocusIndex: currentFocusIndex, activeItemRef: activeItemRef, setCurrentFocusIndex: setCurrentFocusIndex, noResultsText: noResultsText, onChange: onChange, onSelect: onSelect })) : null));
}
