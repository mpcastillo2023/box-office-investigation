import React, { useEffect, useRef, useState } from "react";
let timeoutId;
export default function UseQuickSearch(props) {
    const { defaultValue = "", onChange, onSelect, noResultsText = "No results found", debounce = true, value } = props;
    const [searchQuery, setSearchQuery] = useState(defaultValue);
    const [focused, setFocused] = React.useState(false);
    const onFocusHandler = () => setFocused(true);
    const onBlurHandler = () => setFocused(false);
    const activeItemRef = useRef();
    const [currentFocusIndex, setCurrentFocusIndex] = useState(-1);
    const searchRef = useRef(null);
    const keydownHandler = (e) => {
        const isLast = currentFocusIndex === props.data?.length;
        const isFirst = currentFocusIndex <= 0;
        const lastIndex = props.data?.length || 0;
        if (e.key === "ArrowDown") {
            if (isLast) {
                setCurrentFocusIndex(0);
            }
            else {
                setCurrentFocusIndex((prevState) => prevState + 1);
            }
        }
        else if (e.key === "ArrowUp") {
            if (isFirst) {
                setCurrentFocusIndex(lastIndex);
            }
            else {
                setCurrentFocusIndex((prevState) => prevState - 1);
            }
        }
        else if (e.key === "Enter") {
            const itemText = activeItemRef.current?.textContent;
            if (itemText) {
                setSearchQuery(itemText);
                onChange(itemText);
                setCurrentFocusIndex(-1);
                setFocused(false);
                onSelect(itemText);
                if (searchRef.current)
                    searchRef.current.blur();
            }
        }
    };
    const onSearchChangeHandler = (newVal) => {
        setSearchQuery(newVal);
        setCurrentFocusIndex(-1);
        clearTimeout(timeoutId);
        if (debounce) {
            timeoutId = setTimeout(() => {
                if (onChange) {
                    onChange(newVal);
                }
            }, 500);
        }
        else {
            onChange(newVal);
        }
    };
    useEffect(() => {
        const itemText = activeItemRef.current?.textContent;
        if (itemText)
            setSearchQuery(itemText);
    }, [currentFocusIndex]);
    useEffect(() => {
        if (typeof value === "string") {
            setSearchQuery(value);
        }
    }, [value]);
    return {
        searchQuery,
        setSearchQuery,
        focused,
        onFocusHandler,
        onBlurHandler,
        activeItemRef,
        currentFocusIndex,
        setCurrentFocusIndex,
        keydownHandler,
        onSearchChangeHandler,
        noResultsText,
        onChange,
        onSelect,
        searchRef
    };
}
