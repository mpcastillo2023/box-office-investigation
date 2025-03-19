import { useEffect, useRef, useState } from "react";
export default function UseSelectSearch(props) {
    const { optionList, selectedOption, isOpen, onClickOptionHandler } = props;
    const [searchQuery, setSearchQuery] = useState("");
    const activeItemRef = useRef();
    const [currentFocusIndex, setCurrentFocusIndex] = useState(-1);
    const searchRef = useRef(null);
    const [searchEnabled, setSearchEnabled] = useState(false);
    const [shouldDeleteSearchQuery, setShouldDeleteSearchQuery] = useState(typeof selectedOption !== "undefined");
    const filteredOptionList = searchQuery && searchQuery.trim().length > 0 && searchEnabled
        ? optionList.filter((option) => {
            const text = JSON.stringify(option.optionText).toLowerCase();
            const value = JSON.stringify(option.optionValue).toLowerCase();
            const searchQueryLower = searchQuery.toLowerCase();
            return (text.includes(searchQueryLower) || value.includes(searchQueryLower));
        })
        : optionList;
    useEffect(() => {
        setSearchQuery(selectedOption?.optionText || "");
        setSearchEnabled(false);
        setShouldDeleteSearchQuery(typeof selectedOption !== "undefined");
    }, [isOpen, selectedOption?.optionValue]);
    const keydownHandler = (e) => {
        const isLast = currentFocusIndex === props.optionList?.length;
        const isFirst = currentFocusIndex <= 0;
        const lastIndex = props.optionList?.length || 0;
        e.stopPropagation();
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
            if (activeItemRef.current) {
                setCurrentFocusIndex(-1);
                const newOptionValue = activeItemRef.current.dataset.value || "";
                onClickOptionHandler(newOptionValue);
                if (searchRef.current)
                    searchRef.current.blur();
            }
        }
        else {
            if (selectedOption && shouldDeleteSearchQuery) {
                setSearchQuery("");
                setShouldDeleteSearchQuery(false);
            }
        }
    };
    const searchHandler = (e) => {
        setSearchQuery(e.target.value);
        setSearchEnabled(true);
    };
    return {
        searchQuery,
        setSearchQuery,
        activeItemRef,
        currentFocusIndex,
        setCurrentFocusIndex,
        keydownHandler,
        searchRef,
        filteredOptionList,
        searchHandler
    };
}
