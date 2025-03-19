import React, { useEffect, useState } from "react";
import styles from "./Styles/styles.module.scss";
import Magnifier from "@cg-icons/Magnifier.svg";
import Close from "@cg-icons/Close.svg";
import { Button } from "..";
let timeoutId;
/**
 * SearchInput component provides an input field for search functionality.
 * It supports custom placeholder text, styling, debouncing, and search icon placement.
 * An optional debounce delay can be applied to trigger the onChange event after typing is finished.
 *
 * @param {SearchInputProps} props - Props for the SearchInput component.
 * @returns {JSX.Element}
 */
const SearchInput = (props) => {
    const { placeholder, className, onChange, disabled, debounce = true, defaultValue = "", iconPosition = "start", hasClearButton = false, value, searchRef, searchContainerRef, ariaLabel, customPlaceholder, ...searchProps } = props;
    const [searchQuery, setSearchQuery] = useState(defaultValue);
    useEffect(() => {
        if (debounce) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (onChange) {
                    onChange(searchQuery);
                }
            }, 500);
        }
    }, [searchQuery]);
    return (React.createElement("form", { className: ` 
        ${styles.iconColor}
       ${styles.searchInput} ${className || ""}`, role: "search", method: "get", onSubmit: (e) => e.preventDefault(), ref: searchContainerRef },
        iconPosition === "start" ? React.createElement(Magnifier, null) : null,
        (customPlaceholder && !value) || !searchQuery ? (React.createElement("div", { className: `${styles.customPlaceholder} ` }, customPlaceholder)) : null,
        React.createElement("input", { ref: searchRef, placeholder: customPlaceholder ? "" : placeholder, onChange: (e) => {
                if (onChange && !debounce)
                    onChange(e.target.value);
                setSearchQuery(e.target.value);
            }, className: `${styles.input}`, disabled: disabled, role: "textbox", value: typeof value !== "undefined" ? value : searchQuery, "aria-label": ariaLabel, ...searchProps }),
        hasClearButton ? (React.createElement(Button, { className: styles.clearButton, "data-testid": "clean-button", onClick: () => {
                if (onChange)
                    onChange("");
                if (!value)
                    setSearchQuery("");
            } },
            React.createElement(Close, null))) : null,
        iconPosition === "final" ? React.createElement(Magnifier, null) : null));
};
export default SearchInput;
