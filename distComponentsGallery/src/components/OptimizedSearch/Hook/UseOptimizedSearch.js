import { useEffect, useRef, useState } from "react";
import { processMenuItems } from "../Helper/processMenuItems";
import { useNavigate } from "react-router";
import UseGetElementDimension from "@cg-hooks/UseGetElementDimension";
export const useOptimizedSearch = ({ data, focusOnRender }) => {
    const [searchValue, setSearchValue] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedUrl, setSelectedUrl] = useState("");
    const [isNavigating, setIsNavigating] = useState(false);
    const resultsRef = useRef(null);
    const searchInputRef = useRef(null);
    const [searchWidth, setSearchWidth] = useState(0);
    const searchContainerRef = useRef(null);
    const { elementRef, rect } = UseGetElementDimension();
    const navigate = useNavigate();
    useEffect(() => {
        if (focusOnRender && searchInputRef.current) {
            searchInputRef.current.setAttribute("tabindex", "0");
            setTimeout(() => searchInputRef.current?.focus(), 0);
        }
    }, [focusOnRender]);
    const filteredData = data.map((item) => ({
        ...item,
        children: processMenuItems(item, searchValue)
    }));
    const flatData = filteredData.flatMap((item) => item.children || []);
    const handleItemClick = (event) => {
        event.stopPropagation();
        setShowResults(false);
        setSearchValue("");
    };
    const handleChange = (value) => {
        setSearchValue(value);
        setSelectedIndex(0);
        setIsNavigating(false);
        setShowResults(value.length > 0);
    };
    const handleOutsideClick = (event) => {
        if (!searchInputRef.current?.contains(event.target) &&
            !resultsRef.current?.contains(event.target)) {
            setShowResults(false);
            if (resultsRef.current) {
                resultsRef.current.scrollTop = 0;
            }
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);
    useEffect(() => {
        if (searchContainerRef.current) {
            elementRef(searchContainerRef.current);
            setSearchWidth(rect?.width ?? 0);
        }
    }, [rect]);
    const handleScroll = (e) => {
        const target = e.currentTarget;
        if ((target.scrollTop === 0 && e.deltaY < 0) ||
            (target.scrollHeight - target.scrollTop === target.clientHeight &&
                e.deltaY > 0)) {
            e.preventDefault();
        }
    };
    useEffect(() => {
        resultsRef.current?.addEventListener("wheel", handleScroll, {
            passive: false
        });
        return () => resultsRef.current?.removeEventListener("wheel", handleScroll);
    }, []);
    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => Math.min(prev + 1, flatData.length - 1));
            setIsNavigating(true);
        }
        else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
            setIsNavigating(true);
        }
        else if (e.key === "Enter" && selectedUrl) {
            e.preventDefault();
            navigate(selectedUrl);
            setShowResults(false);
            setSearchValue("");
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [flatData.length, selectedUrl]);
    useEffect(() => {
        if (resultsRef.current && isNavigating) {
            resultsRef.current
                .querySelector(".selected")
                ?.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedIndex, isNavigating]);
    useEffect(() => {
        const mainElement = document.querySelector("main");
        if (showResults) {
            mainElement?.style.setProperty("overflow", "hidden");
        }
        else {
            mainElement?.style.removeProperty("overflow");
        }
        return () => {
            mainElement?.style.removeProperty("overflow");
        };
    }, [showResults]);
    return {
        searchValue,
        showResults,
        selectedIndex,
        resultsRef,
        searchInputRef,
        filteredData,
        onChange: handleChange,
        onClick: () => setShowResults(searchValue.length > 0),
        hasResults: filteredData.some((item) => item.children?.length > 0),
        setSearchValue,
        flatData,
        isNavigating,
        onItemLinkClick: handleItemClick,
        searchContainerRef,
        searchWidth,
        setSelectedUrl,
        setSelectedIndex
    };
};
