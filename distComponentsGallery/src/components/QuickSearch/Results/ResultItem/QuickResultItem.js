import React from "react";
import styles from "../../Styles/styles.module.scss";
export default function QuickResultItem({ index, item, dataTextProperty, setSearchQuery, onChange, activeItemRef, currentFocusIndex, setCurrentFocusIndex, onSelect, renderListItem }) {
    const text = item[dataTextProperty];
    const textParsed = typeof text === "string" ? text : JSON.stringify(text);
    const isActive = index === currentFocusIndex;
    const activeClass = isActive ? `${styles.active}` : "";
    return (React.createElement("li", { ref: isActive ? activeItemRef : undefined, className: `${styles.result} ${activeClass}`, onMouseDown: () => {
            setSearchQuery(textParsed);
            onChange(textParsed);
            setCurrentFocusIndex(-1);
            onSelect(textParsed);
        } }, renderListItem ? renderListItem(item) : textParsed));
}
