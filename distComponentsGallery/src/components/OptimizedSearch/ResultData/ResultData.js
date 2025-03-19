import React, { useEffect } from "react";
import styles from "../Styles/styles.module.scss";
import { Link } from "react-router-dom";
const ResultData = ({ filteredData, hasResults, flatData, notResultsText, selectedIndex, resultsRef, isNavigating, onItemLinkClick, searchWidth, setSelectedUrl }) => {
    useEffect(() => {
        if (flatData.length > 0) {
            const urtString = flatData[selectedIndex].href;
            setSelectedUrl(urtString || "");
        }
        else {
            setSelectedUrl("");
        }
    }, [flatData.length, selectedIndex]);
    return (React.createElement("div", { className: styles.containerResults, ref: resultsRef, style: { width: `${searchWidth - 2}px` } }, hasResults ? (filteredData.map((item, index) => item.children?.length > 0 && (React.createElement("div", { key: index },
        React.createElement("div", { style: { position: "relative" } },
            item.icon && (React.createElement("div", { className: styles.iconContent }, item.icon)),
            React.createElement("h1", { className: styles.resultTitle }, item.text)),
        item.children.map((child, key) => (React.createElement("div", { key: key, className: `${styles.childrenContainer} ${flatData[selectedIndex] === child && isNavigating
                ? styles.selected
                : ""}` },
            React.createElement(Link, { className: styles.linkContent, to: child.href, onClick: onItemLinkClick },
                React.createElement("p", null, child.text))))))))) : (React.createElement("p", { className: styles.noResults }, notResultsText))));
};
export default ResultData;
